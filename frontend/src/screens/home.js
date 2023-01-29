import React from "react";
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InstituteComponent from "../components/instituteComp.js";

const HomeScreen = () => {

    return (
        <div className="home-screen">
            <div className="mission-div">
                <br></br>
                    <h1 id="header-text">Our Mission</h1>
                </div>

            <div className="mission-img-div">
                {/* <div className="mission-div">
                    <h1 id="header-text">Our Mission</h1>
                </div> */}

                <div className="mission-div oneline">
                    {/* <h1 id="header-text">Our Mission</h1> */}
                    <p id="mission-statement">Welcome to QXR. Our site aims to serve as a safe platform that bridges the gap between the queer community and groups
                    conducting clinical studies, therefore helping improve queer representation within clinical research and providing the queer community
                    with more opportunities to participate in relevant clinical studies.</p>
                    <img id="home-img" src="https://media.istockphoto.com/id/1293772875/photo/medical-development-laboratory-portrait-of-black-male-scientist-looking-under-microscope.jpg?b=1&s=170667a&w=0&k=20&c=oBN_PbQh-BJrbSb3wloxUMIlV0dtPNH1ZCSvObFtSRM=" alt="clinical study stock photo"/>
                </div>
                {/* <img id="home-img" src="https://media.istockphoto.com/id/1293772875/photo/medical-development-laboratory-portrait-of-black-male-scientist-looking-under-microscope.jpg?b=1&s=170667a&w=0&k=20&c=oBN_PbQh-BJrbSb3wloxUMIlV0dtPNH1ZCSvObFtSRM=" alt="clinical study stock photo"/> */}
            </div>
            <h2 id="header-text">Recommended Institutions</h2>
            <Box ml={6} mr={6}> 
                <Grid container columns={24} columnSpacing={2} rowSpacing={6}>
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCLA"} location={"Los Angeles, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCI"} location={"Irvine, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCSD"} location={"San Diego, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCB"} location={"Berkeley, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"USC"} location={"Los Angeles, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCSB"} location={"Santa Barbara, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCSC"} location={"Santa Cruz, CA"}/>
                    </Grid> 
                    <Grid item sm={6} style={{ maxWidth: '100%'}}>
                        <InstituteComponent name={"UCSF"} location={"San Francisco, CA"}/>
                    </Grid> 
                </Grid>
            </Box>

            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 color">stuff</div>
                    <div className="col-sm-3">stuff</div>
                    <div className="col-sm-3 color">stuff</div>
                    <div className="col-sm-3">stuff</div>
                </div> */}
            </div>
        // </div>
    )
}

export default HomeScreen;