import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'; 
import { setPocket } from '../Redux/Actions';
import {useHistory} from 'react-router-dom'; 
import Mercury from "@postlight/mercury-parser";
import {Link as HBLink} from 'react-router-dom';
//stars

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';


// album
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
//navbar
import orange from '@material-ui/core/colors/orange';
import { TextField } from '@material-ui/core';
import Topbar from './Topbar.js'
import './css/profile.css'

const bblue = orange[800];
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function Profile(props) { 
    const [input, setInput] = useState("")      //https://www.daveramsey.com/blog/real-estate-trends'})
    const [output, setOutput] = useState({}); 
    const [snapshot, setSnapshot] = useState([]);
    // console.log(props.isFetchingPocketDeveloper);
    const history = useHistory();
    
    
    console.log(snapshot);
    const changeHandler = e => { 
      setInput(e.target.value)
    }
    function addItem(itemName){
      let item = {
        url: itemName, 
        title: "",
        image: "",
        description: "",
        id: Date.now() 
      }
      setOutput(item);
      console.log('id', item.id)
    }
    const submitUrl = e => { 
      e.preventDefault();
      // setInput(input);
      addItem(input)
      setInput("")
    }
    //stars
    useEffect(() => { 
      console.log('useEffect token', props.pocket_token)
      Mercury.parse( `https://cors-anywhere.herokuapp.com/${output.url}`, {contentType: 'text'}).then(result => setSnapshot((snapshot) => [...snapshot, result]))
      console.log("snapshots", snapshot);
    },[output.url])
    function deleteItem(id){
      console.log('ID:', id)
      let id_filter = snapshot.filter( (item) => { 
        if(item.lead_image_url !== id){
          return item
        }else if(item.lead_image_url ===`https://cdn.ramseysolutions.net/media/b2b/elp/blog/real-estate-trends-header.jpg`){
          return item
        }
      })
      console.log('output', id_filter)
      setSnapshot(id_filter);
    }
    
    const labels = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };
    
    
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
   
    
    
    // const muiTheme = createMuiTheme({
    //   palette: {
    //     textColor: Colors.orange,
    //     primary1Color: Colors.blueGrey,
    //     primary2Color: Colors.indigo,
    //     accent1Color: Colors.red,
    //     pickerHeaderColor: Colors.orange,
    //   },
    //   appBar: {
    //     height: 60,
    //   },
    // });


      
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(1),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    menuText: {
      marginRight: 200,
      fontWeight: 'bold',
      
    },
    
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      display: 'flex', 
      flexDirection: 'column'
    }
  }));
  // const cards = [{
  //       title: snapshot.title,
  //       image: snapshot.lead_image_url,
  //       description: snapshot.content,
  //     }];
 
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles2 = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      backgroundColor: 'white'
    },
  }));
  const body = (
    <div style={{backgroundColor: 'white', marginLeft: '10%', marginTop: '10%', width: '800px', height: '400px', marginBottom: '200px'}} className={classes.paper}>
      <h2 id="simple-modal-title">Sign in</h2>
      <p  id="simple-modal-description">
        sign up
      </p>
      <SimpleModal />
    </div>
  );
    return (
        <div>
             
            {/* Welcome Home.
            <button onClick={() => props.setPocket({consumer_key: '89776-ae09204f9d4913e465d8642b', redirect_uri: 'https://xenodochial-bardeen-1bef0f.netlify.com/profile'})}>submit for token</button>
            {props.pocket_token && !props.isFetchingPocketDeveloper ? window.location.replace(`https://getpocket.com/auth/authorize?request_token=${props.pocket_token}&redirect_uri=https://xenodochial-bardeen-1bef0f.netlify.com/profile`) : '...waiting for token'} */}
                {/* <div>
                    <h1>{snapshot.title}</h1>
                    <h2>{snapshot.author}</h2>
                    <h3>{snapshot.excerpt}</h3>
                    <img style={{objectFit:'fill'}}src={snapshot.lead_image_url}></img>
                    <p>{snapshot.content}</p>
                </div> */}
                <React.Fragment>
                    <CssBaseline />
                    
                    <AppBar position="relative" >
                        <Toolbar style={{backgroundColor: bblue}} maxWidth="lg" display="flex" justifycontent="spaceBetween" flexdirection="row" align="center" >
                        <CameraIcon className={classes.icon} />
                        <Typography variant="h6" className={classes.menuText} color="inherit" noWrap>
                            Housing Busters
                        </Typography>
                        
                        <Typography variant="h6"  className={classes.menuText} color="inherit" noWrap>
                        <HBLink  className="link-color" style={{textDecoration: 'none', color: 'white'}} to='/'> Home </HBLink>
                        </Typography>
                        <Typography  variant="h6" className={classes.menuText} color="inherit" noWrap>
                          <HBLink className="link-color" className={classes.menuText} style={{textDecoration: 'none', color: 'white'}} to='/profile'>Profile</HBLink>
                        </Typography>
                            
                        <button className="signupBtn" type="button" onClick={handleOpen}>
                          Sign up
                        </button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                        >
                          {body}
                        </Modal>
                        </Toolbar>
                    </AppBar>
                    <Topbar/>
                    <div>
                      <h3>Click on the topbar to open panel on side of your chosing</h3>
                    </div>
                    <main>
                        {/* Hero unit */}
                        <div className={classes.heroContent} className="heroContainer">
                        <Container maxWidth="md">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Housing Busters!
                            </Typography>
                            
                            <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                
                                <form className={classes.container} onSubmit={submitUrl} style={{width: '50%'}}>
                                <TextField id="filled-basic" variant="filled"
                                    type="text"
                                    label="...url of website you want snapshot of goes here"
                                    name="url"
                                    value={input}
                                    onChange={changeHandler}
                                  />
                                  {/* <button>Submit</button> */}
                                  
                                    <Button type="submit" variant="contained" color="secondary">
                                      save snapshots
                                    </Button>
                                
                                  
                                </form>
                            </Grid>
                            </div>
                        </Container>
                        </div>
                        { output.url  ? 
                        <Container className={classes.cardGrid} maxWidth="lg">
                        {/* End hero unit */}
                         
                        <Grid container spacing={4}>
                            {snapshot.length > 0 ? snapshot.map(card => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image= {card.lead_image_url}
                                    title={card.title}
                                />

                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                    </Typography>
                                    <Typography>
                                      {/* {console.log(cards[0].description)} */}
                                        {`${card.content}`.slice(0,500)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    View
                                    </Button>
                                    <Button onClick={() => deleteItem(card.lead_image_url)}size="small" color="primary">
                                    Delete
                                    </Button>
                                    <div className={classes.root}>
                                      <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={1}
                                        onChange={(event, newValue) => {
                                          setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                          setHover(newHover);
                                        }}
                                      />
                                      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                                    </div>
                                      
                                </CardActions>
                                </Card>
                            </Grid>
                            )) : ' ... input snapshot above'}
                        </Grid>
                        </Container>
                        :
                        null
                                      
                                      
                                      }
                        <footer className={classes.footer} style={{backgroundColor: bblue}}>
                        <Typography variant="h6" align="center" gutterBottom>
                        Footer
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                        </Typography>
                        <Copyright />
                        </footer>
                        </main>
                    {/* Footer */}
                    {/* <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                        Footer
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                        </Typography>
                        <Copyright />
                    </footer> */}
                    {/* End footer */}
                </React.Fragment>
            
            
        </div>
    )
}
const mapStateToProps = ({dsReducer}) => { 
    return {
        pocket_token: dsReducer.pocket_token, 
        isFetchingPocketDeveloper: dsReducer.isFetchingPocketDeveloper,  
        isFetchingPocketDeveloperError: dsReducer.isFetchingPocketDeveloperError
    }
}

export default connect(mapStateToProps, 
    {setPocket}
)(Profile); 