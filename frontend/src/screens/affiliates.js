import React from "react";
import AffiliateComp from "../components/affiliateComp";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const AffiliatesScreen = () => {
    var numOfUsers = 12;
    return (
        <div>
            <h2 id="affiliate-header">Affiliates</h2>
            <Box ml={20} mr={20}> 
                <Grid container columns={6} rowSpacing={6}>
                    {Array.from(Array(numOfUsers)).map((_, index) => {
                        return (
                            <Grid item sm={6} key={index} style={{ maxWidth: '100%'}}>
                                <AffiliateComp/>
                            </Grid> 
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default AffiliatesScreen;