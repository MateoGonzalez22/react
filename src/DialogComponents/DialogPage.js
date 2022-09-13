import { Button, Dialog, DialogActions, DialogTitle, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../data.json"
import CloseIcon from '@mui/icons-material/Close';

export default function DialogPage(socio) {
    socio = socio.socio
    return (
        <div>
            <DialogTitle style={{ top: "2px", left:"2px"}}>{socio.nombre} {socio.apellido}</DialogTitle>
            <Grid container>

                <Grid item >
                    
                </Grid>

            </Grid>

            <DialogActions>
                <Button style={{ background: "black", color: "white", marginRight: 20 }}>Send</Button>
            </DialogActions>
        </div>

    )

}