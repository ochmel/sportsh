import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import graph from 'fb-react-sdk';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from "@material-ui/core/CircularProgress";
import {getText} from "../../translations";

graph.setVersion("7.0")
graph.setAccessToken(process.env.REACT_APP_FB_TOKEN);

export default function News({isCzech})
{
    const classes = useStyles();
    const [postsWrapper, setPostsWrapper] = useState(null);
    const [displayedPostsCount, setDisplayedPostsCount] = useState(5)
    const [fbError, setFbError] = useState(false);
    useEffect(() =>
    {
        graph.get("386058205223204/posts?fields=full_picture,message,permalink_url", (error, response) =>
        {
            if (error != null)
            {
                setFbError(true);
            } else
            {
                setPostsWrapper(response)
            }
        });
    }, [])

    function routeToFb(link)
    {
        window.open(link, '_blank')
    }

    function showMore()
    {
        let newCount = displayedPostsCount + 5;
        if (newCount > postsWrapper.data.length)
        {
            graph.get(postsWrapper.paging.next, (error, response) =>
            {
                setPostsWrapper({...postsWrapper, data: [...postsWrapper.data, ...response.data]});
            })
        }
        setDisplayedPostsCount(newCount);
    }

    function getPostElement(post, index)
    {
        if (!post.full_picture && !post.message)
        {
            return <React.Fragment/>
        }

        return (
            <Card key={index} className={classes.post} elevation={10} onClick={() => routeToFb(post.permalink_url)}>
                {post.full_picture &&
                <img src={post.full_picture} alt={getText('fbPic', isCzech)} className={classes.postImage}/>}

                {getPostMessage(post)}
            </Card>
        )
    }

    function getPostMessage(post)
    {
        if (!post.message)
        {
            return <React.Fragment/>
        }

        const messageParts = post.message.split("[English]")
        const message = isCzech ? messageParts[0] : messageParts[1];

        return (
            <CardContent className={post.full_picture ? classes.postMessage : classes.messageOnly}>
                <Typography variant='h6'>{message}</Typography>
            </CardContent>
        )
    }


    return (
        <div className={classes.root}>
            <Typography variant='h3' color='primary' className={classes.heading} gutterBottom>
                {getText('news', isCzech)}
            </Typography>
            <div className={classes.postsContainer}>
                {postsWrapper
                    ?
                    <React.Fragment>
                        {postsWrapper.data.slice(0, displayedPostsCount).map((post, index) => getPostElement(post, index))}

                        <Link onClick={showMore} color='primary' className={classes.expand}>
                            {getText('showMore', isCzech)} <ExpandMoreIcon/>
                        </Link>
                    </React.Fragment>
                    : fbError
                        ? <Typography variant='h6' color='primary'>{getText('newsError', isCzech)}</Typography>
                        : <CircularProgress/>
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        borderTop: '10px solid',
        borderTopColor: theme.palette.primary.main,
    },
    heading: {
        display: 'flex',
        margin: '8vh 8vh 2vh 8vh',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            margin: '8vh 8vh 2vh 6vh',
        }
    },
    article: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: 20,
        textAlign: 'left',
        margin: '10vh',
    },
    page: {
        width: '80%'
    },
    postsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(5),
    },
    post: {
        margin: theme.spacing(4),
        padding: theme.spacing(1),
        cursor: 'pointer',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%',
        },
        width: '85%'
    },
    postImage: {
        width: '100%',
    },
    postMessage: {
        maxWidth: '100%',
        overflowWrap: "break-word",
    },
    messageOnly: {},
    expand: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: theme.spacing(5),
        cursor: 'pointer',
    }
}));