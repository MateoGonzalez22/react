/*import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../utils/data.json"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {theme} from "../utils/theme"


export default function DialogPage(socio) {
    socio = socio.socio

    const initialValues = {
        nombre: "",
        apellido: "",
        dni: "",
        fecha: "",
        direccion: "",
        telefono: "",
        mail: "",
        fechaVencCert: "",
    }
    

    const [values, setValues] = useState(initialValues)

    
    
    const handleInputChange = (e) => {
        console.log(e.target.name + "     " + e.target.value)

        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })

        console.log(values)
    }

    


    const handleEdit = () => {
        // EDICION COMPONENTE
        
        let editComponent =
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

        setComponente(editComponent)

    }

    let normalComponent =

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
                <Button style={{ position: "absolute", top: "10px", right: "80px", width: "10px"}} onClick={() => handleEdit()}><EditIcon /></Button>
                //<Button><DeleteForeverIcon style={{ fill: "red" }} /></Button> 
            </DialogActions>


        </div>

    const [componente, setComponente] = useState(normalComponent)


    const cancelEdit = () => {

        setComponente(normalComponent)

    }

    const saveEdit = () => {
        console.log(values)
        alert("Cambios guardados")
        

        //---------- Guardar cambios en sql ---------//

        setComponente(normalComponent)

    }


    return <div>

        {componente}

    </div>

}
*/