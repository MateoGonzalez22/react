import { Button, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {theme} from "../../utils/theme"
import { styles } from "../../utils/styles";

import MuiPhoneNumber from 'material-ui-phone-number';
  



export default function ShowSocio({socio, handleClose}){
    
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {

        setEdit(true)

    }

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


    const cancelEdit = () => {
        setEdit(false)
    }

    const saveEdit = () => {
        console.log(values)
        alert("Cambios guardados")
        //---------- Guardar cambios en sql ---------//
        handleClose()
    }

    const deleteSocio = () => {
        //eliminar socio
    }

    const editButtons = 
        <div>
            <Button onClick={deleteSocio} ><DeleteForeverIcon style={{ fill: "red"}} sx={styles.socios.edicion.buttons} titleAccess="Eliminar socio"/></Button>
            <Button onClick={() => cancelEdit()} ><ClearIcon style={{ fill: "red" }} sx={styles.socios.edicion.buttons} titleAccess="Cancelar"/></Button> 
            <Button onClick={() => saveEdit(values)} ><CheckIcon sx={styles.socios.edicion.buttons} titleAccess="Guardar cambios"/></Button>
        </div> 

    
    return(

        <div style={{ justifyContent: "center", background: "white" }}>
            {!edit && <DialogTitle sx={{top: "2px", left: "2px", bgcolor: theme.palette.blanco.crema}}>Datos Personales del Socio</DialogTitle>}
            {edit && <DialogTitle sx={{top: "2px", left: "2px", bgcolor: theme.palette.blanco.crema}}>Edicion Socio</DialogTitle>}

            <DialogContent sx={{marginTop: "20px"}}>

                <Grid container direction="row" spacing={4} >
                    <Grid item xs={12} sm={6} md={4} lg={4} style={{}}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Nombre:  </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.nombre}</Typography>}
                                {edit && <TextField size="small" variant="outlined" defaultValue={socio.nombre} name="nombre" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Apellido: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.apellido}</Typography>}
                                {edit && <TextField size="small" variant="outlined" defaultValue={socio.apellido} name="apellido" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>



                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>DNI: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.dni}</Typography>}
                                {edit && <TextField size="small" variant="outlined" type="number" defaultValue={socio.dni} name="dni" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>


                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Fecha Nac: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.fecha}</Typography>}
                                {edit && <TextField size="small" variant="outlined" type="date" defaultValue={socio.fecha} name="fecha" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Direccion: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.direccion}</Typography>}
                                {edit && <TextField size="small" variant="outlined" defaultValue={socio.direccion} name="direccion" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Telefono: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.telefono}</Typography>}
                                {/* {edit && <TextField size="small" variant="outlined" type="tel" defaultValue={socio.telefono} name="telefono" onChange={handleInputChange}></TextField>} */}
                                {edit && <MuiPhoneNumber defaultCountry={'ar'} name="telefono" regions={['south-america']} onChange={(e) => {handleInputChange({target:{value: e,name: "telefono"}})}}/>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Email: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.mail}</Typography>}
                                {edit && <TextField size="small" variant="outlined" type="email" defaultValue={socio.mail} name="mail" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container direction="column" style={{}} spacing={1}>

                            <Grid item>
                                <Typography>Fecha Venc Certificado: </Typography>
                            </Grid>

                            <Grid item >
                                {!edit && <Typography >{socio.fechaVencCert}</Typography>}
                                {edit && <TextField size="small" variant="outlined" type="date" defaultValue={socio.fechaVencCert} name="fechaVencCert" onChange={handleInputChange}></TextField>}
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </DialogContent>


            <DialogActions sx={{justifyContent: "flex-end"}}>
                {!edit && <Button style={{ position: "absolute", top: "10px", right: "80px", width: "10px"}} onClick={handleEdit}><EditIcon /></Button>}
                {edit && editButtons}
                
            </DialogActions>


        </div>


    )


}