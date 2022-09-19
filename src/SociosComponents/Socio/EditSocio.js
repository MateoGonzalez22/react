import { Button, Dialog, DialogTitle, TextField, Grid, Typography, DialogActions, DialogContent } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {theme} from "../../utils/theme"
import CloseIcon from '@mui/icons-material/Close';

export default function EditSocio({socio, handleClose}){


    const initialValues = {
        nombre: socio.nombre,
        apellido: socio.apellido,
        dni: socio.dni,
        fecha: socio.fecha,
        direccion: socio.direccion,
        telefono: socio.telefono,
        mail: socio.mail,
        fechaVencCert: socio.fechaVencCert,
    }
    
    const [values, setValues] = useState(initialValues)
    
    const handleInputChange = (e) => {

        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })

    }


    const [editDialog, setEditDialog] = useState(false)

    const handleOpenEdit = () => {

        setEditDialog(true) 

    }

    const handleCloseEdit = () => {
        
        setEditDialog(false)

    }

    const cancelEdit = () => {

        handleCloseEdit()

    }

    const saveEdit = () => {
        console.log(values)
        alert("Cambios guardados")
        

        //---------- Guardar cambios en sql ---------//

        handleClose()

    }
    
    
    
    return(
        <>
            <Button onClick={handleOpenEdit} sx={{top: "10px", position: "absolute", right: "70px"}}><EditIcon/></Button>

            <Dialog fullWidth={true} maxWidth="md" open={editDialog} onClose={handleCloseEdit}>

                <DialogActions style={{ position: "absolute", top: "2px", right: "2px" }}>
                    <Button onClick={handleClose}><CloseIcon style={{ fill: "black" }} /></Button>
                </DialogActions>

                <div style={{ justifyContent: "center", background: "white" }}>
                    <DialogTitle sx={{top: "2px", left:"2px", bgcolor: theme.palette.blanco.crema}}>Edicion</DialogTitle>

                    <DialogContent sx={{marginTop: "20px", justifyContent: "center"}}>

                        <Grid container spacing={4} direction="row" >

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item style={{justifyContent: "center"}}>
                                        <Typography>Nombre:  </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.nombre} name="nombre" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Apellido: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.apellido} name="apellido" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>DNI: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.dni} name="dni" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>


                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Fecha Nac: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.fecha} name="fecha" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Direccion: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.direccion} name="direccion" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Telefono: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.telefono} name="telefono" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Email: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.mail} name="mail" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid container direction="column" style={{}} spacing={1}>

                                    <Grid item>
                                        <Typography>Fecha Venc Certificado: </Typography>
                                    </Grid>

                                    <Grid item >
                                        <TextField size="small" variant="outlined" defaultValue={socio.fechaVencCert} name="fechaVencCert" onChange={handleInputChange}></TextField>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>

                    </DialogContent>


                    <DialogActions>
                        <Button></Button>

                        <Button onClick={() => cancelEdit()}><ClearIcon style={{ fill: "red" }} /></Button>

                        <Button><CheckIcon onClick={() => saveEdit(values)} /></Button>
                    </DialogActions>


                </div>

            </Dialog>

            
            </>

    )


}