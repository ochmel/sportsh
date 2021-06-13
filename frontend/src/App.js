import React, {useState} from 'react';
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import First from "./resources/cover.jpg";
import Second from "./resources/main2.jpg";
import Header from "./components/Header";
import Gyms from "./components/pages/gyms/Gyms";
import News from "./components/pages/News";
import Contacts from "./components/pages/contacts/Contacts";
import Logo from "../src/resources/logo.png"
import {getText} from "./translations";
import Footer from "./components/Footer";

export default function App()
{
    const classes = useStyles();
    //true is czech language, false is english language
    const [isCzech, setIsCzech] = useState(true)

    return (
        <React.Fragment>
            <Header toggleLanguage={() => setIsCzech(!isCzech)} isCzech={isCzech}/>
            <div className={classes.first}>
                <div className={classes.logo}>
                    <img className={classes.img} src={Logo} alt={getText('shlogo', isCzech)}/>
                </div>
            </div>
            <div id="news"/>
            <News isCzech={isCzech}/>
            <div id="gyms"/>
            <Gyms isCzech={isCzech}/>
            <div id="contacts"/>
            <Contacts isCzech={isCzech}/>
            <Footer/>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    first: {
        height: '100vh',
        backgroundImage: `url(${First})`,
        zoom: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${Second})`,
        }
    },
    logo: {
        // padding: 5,
        // height: 'auto',
        // width: '20vh',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: '15%',
        [theme.breakpoints.up('md')]: {
            marginRight: 70,
        },
    },
    img: {
        height: 'auto',
        width: '15vw',
        [theme.breakpoints.down('md')]: {
            width: '20vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            // width: '24vw',
        },
    }
}));

