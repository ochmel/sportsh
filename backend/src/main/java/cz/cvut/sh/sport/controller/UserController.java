package cz.cvut.sh.sport.controller;

import cz.cvut.sh.sport.data.JwtRequest;
import cz.cvut.sh.sport.data.JwtResponse;
import cz.cvut.sh.sport.service.JwtUserDetailService;
import cz.cvut.sh.sport.util.JwtTokenUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Objects;

@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final JwtUserDetailService jwtInMemoryUserDetailsService;

    public UserController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, JwtUserDetailService jwtInMemoryUserDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.jwtInMemoryUserDetailsService = jwtInMemoryUserDetailsService;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<JwtResponse> generateAuthenticationToken(@RequestBody @Valid JwtRequest authenticationRequest,
                                                                   HttpServletResponse response)
            throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = jwtInMemoryUserDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        setCookieToResponse(response, token);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

    private void setCookieToResponse(HttpServletResponse response, String token) {
        Cookie securityCookie = new Cookie("Bearer", token);
        securityCookie.setHttpOnly(true);
        securityCookie.setHttpOnly(true);
        securityCookie.setMaxAge(5 * 60 * 60);
        response.addCookie(securityCookie);
    }

}
