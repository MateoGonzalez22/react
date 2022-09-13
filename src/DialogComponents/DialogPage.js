import { Button, Dialog, DialogActions, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../data.json"
import CloseIcon from '@mui/icons-material/Close';
//hogsdgsaf
export default function DialogPage(socio) {
    socio = socio.socio
    return (
        <div style={{justifyContent: "center"}}>
            <DialogTitle style={{ top: "2px", left:"2px"}}>{socio.nombre} {socio.apellido}</DialogTitle>
            <div style={{height: "500px", width: "600px", backgroundColor: "#2e2c2c"}}>

            </div>
            {/* <Grid container rowSpacing={2} direction="column" >

            

                <Grid item >
                    <Typography>{socio.dni}</Typography>
                </Grid>

                <Grid item >
                    <Typography>{socio.fecha}</Typography>
                </Grid>

            </Grid>

            <DialogActions>
                <Button style={{ background: "black", color: "white", marginRight: 20 }}>Send</Button>
            </DialogActions> */}
        </div>

    )

}