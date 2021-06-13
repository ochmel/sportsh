package cz.cvut.sh.sport.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Collections;

@Service
public class JwtUserDetailService implements UserDetailsService {

    @NotNull
    @Value("${application.user.username}")
    private String username;
    @NotNull
    @Value("${application.user.password}")
    private String hash;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (this.username.equals(username)) {
            return new User(username, hash,
                    Collections.singleton((GrantedAuthority) () -> "ROLE_ADMIN"));
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}
