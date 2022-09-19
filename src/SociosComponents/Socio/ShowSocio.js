import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../../utils/data.json"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {theme} from "../../utils/theme"
import EditSocio from "./EditSocio";


export default function ShowSocio({socio, handleClose}){
    

    
    return(

        <div style={{ justifyContent: "center", background: "white" }}>
            <DialogTitle sx={{top: "2px", left: "2px", bgcolor: theme.palette.blanco.crema}}>{socio.nombre} {socio.apellido}</DialogTitle>

            <DialogContent sx={{pointerEvents: "none", marginTop: "20px"}}>

                <Grid container direction="row" spacing={4} >
                    <Grid item xs={12} sm={6} md={4} lg={4} style={{}}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Nombre:  </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.nombre}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Apellido: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.apellido}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>



                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>DNI: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.dni}</Typography>
                            </Grid>

                        </Grid>


                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Fecha Nac: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.fecha}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Direccion: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.direccion}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Telefono: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.telefono}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Email: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.mail}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Fecha Venc Certificado: </Typography>
                            </Grid>

                            <Grid item >
                                <Typography >{socio.fechaVencCert}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </DialogContent>


            <DialogActions>
                <EditSocio socio={socio} handleClose={handleClose}/>
                <Button><DeleteForeverIcon style={{ fill: "red" }} /></Button>
            </DialogActions>


        </div>


    )


}