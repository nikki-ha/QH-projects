import React from "react";
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InstituteComponent from "../components/instituteComp.js";

const HomeScreen = () => {


  const handleClick = () => {
    alert("yo auntie");
  };

    return (
        <div className="home-screen">
            <div className="mission-img-div">
                <div className="mission-div">
                    <h1 id="mission-header">Our Mission</h1>
                    <p id="mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img id="home-img" src="https://media.istockphoto.com/id/1293772875/photo/medical-development-laboratory-portrait-of-black-male-scientist-looking-under-microscope.jpg?b=1&s=170667a&w=0&k=20&c=oBN_PbQh-BJrbSb3wloxUMIlV0dtPNH1ZCSvObFtSRM=" alt="clinical study stock photo"/>
            </div>
            <h1 id="institution-header">Recommended Institutions...</h1>
            <Box ml={6} mr={6}> 
                <Grid container columns={24} columnSpacing={2} rowSpacing={6}>
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent org-name={"UCLA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent/>
                    </Grid> 
                </Grid>
            </Box>
        </div>
    )
}

export default HomeScreen;