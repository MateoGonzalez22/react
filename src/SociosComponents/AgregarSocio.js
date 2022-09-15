import { Dialog, DialogActions, Button, DialogTitle, Grid, Typography, TextField, DialogContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {theme} from "../utils/theme"
import data from "../utils/data.json"

const initialValues = {
    nombre: "",
    apellido: "",
    dni: 0,
    fecha: "",
    direccion: "",
    telefono: "",
    mail: "",
    fechaVencCert: "",
}

export default function AgregarSocio() {
    
    const [openDialog, setOpenDialog] = useState(false)
    const [values, setValues] = useState(initialValues)
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleOpen = () => {
        setOpenDialog(true)
    }


    const handleClose = () => {
        setOpenDialog(false)
    }

    const agregarSocio = () => {

        //axios.post a la api

        data[data.length + 1] = values

        console.log(data[data.length + 1])
    }

    return (
        <>
            <Button variant="contained" style={{ height: "50px", borderRadius: "30px" }} onClick={() => handleOpen()}><AddCircleIcon /></Button>

            <Dialog fullWidth={true} maxWidth="md" open={openDialog} onClose={handleClose}>
                <div style={{ justifyContent: "center", background: "white" }}>
                    <DialogTitle sx={{ top: "2px", left: "2px", bgcolor: theme.palette.blanco.crema }}>Edicion</DialogTitle>

                    <DialogContent sx={{ marginTop: "20px", justifyContent: "center" }}>

                        <Grid container spacing={4} direction="row" >

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item style={{ justifyContent: "center" }}>
                                        <Typography>Nombre:  </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="nombre" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Apellido: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="apellido" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>DNI: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="dni" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>


                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Fecha Nac: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="fecha" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Direccion: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="direccion" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Telefono: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="telefono" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Email: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="mail" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Fecha Venc Certificado: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" name="fechaVencCert" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>

                    </DialogContent>


                    <DialogActions>
                        <Button ><ClearIcon sx={{fill: "red"}} onClick={() => handleClose()}/></Button>

                        <Button><CheckIcon onClick={() => agregarSocio(values)}/></Button>
                    </DialogActions>


                </div>

            </Dialog>
        </>
    )


}