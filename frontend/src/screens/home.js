import React from "react";
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InstituteComp from "../components/instituteComp";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <h1 id="mission-header">Our Mission</h1>
            <p id="mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img id="home-img" src="" alt="clinical study stock photo"/>
            <h1 id="institution-header">Recommended Institutions...</h1>
            <Box ml={6} mr={6}> 
                <Grid container columns={24} columnSpacing={2} rowSpacing={6}>
                    {Array.from(Array(8)).map((_, index) => {
                        return (
                            <Grid item sm={6} key={index} style={{ maxWidth: '100%'}}>
                                <InstituteComp/>
                            </Grid> 
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default HomeScreen;