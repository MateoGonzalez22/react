import { Button, Card, Typography, Box, Grid, Link, TextField, Paper, Divider, IconButton, InputBase, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import data from "../utils/data.json"
import "../App.css"
import SearchIcon from '@mui/icons-material/Search';
import ShowSocio from "./Socio/ShowSocio";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { theme } from "../utils/theme"
import {styles} from "../utils/styles"
import AgregarSocio from "./AgregarSocio";
import axios from "axios";



export default function List() {


    const users = data
    const [search, setSearch] = useState("")
    const [lista, setLista] = useState()
    const [socio, setSocio] = useState()

    // const [data, setData] = useState(null)

    const [openDialog, setOpenDialog] = useState(false)


    // useEffect(() => {
    //     axios.get("http://localhost:3000/socios")
    //     .then()
    // }, [])

    const handleOpen = (user) => {
        setSocio(user)
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            showUsers(search)
        }
    }


    function whatToSearch(search) {

        if (search.length == 0) return "all"

        if (search.search(" ") >= 1) {
            var array = search.split(" ")
            return array
        }

        else if (!isNaN(search)) return "dni"

        return "nombre"

    }

    



    function showUsers(search) {


        const listaSocios =


            <Paper style={styles.socios.lista.paper}>

                {users.map((user, index )=> {

                    var queBuscar = whatToSearch(search)

                    if (queBuscar.length === 2) {
                        
                        if (user.nombre !== queBuscar[0] && user.apellido != queBuscar[1]) return null

                    } else if (queBuscar === "dni") {
                        
                        if (user.dni != search) return null
                    } else if (queBuscar === "nombre") {
                        if (user.nombre !== search) return null
                    }
                    //

                    return (
                        <div key={index}>

                            <Box sx={styles.socios.lista.box}
                                
                                onClick={() => handleOpen(user)}>

                                <Grid container spacing={2}>

                                    <Grid item xs={3} >

                                        <Typography sx={styles.socios.text}>
                                            {user.nombre}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography sx={styles.socios.text}>
                                            {user.apellido}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography sx={styles.socios.text}>
                                            {user.dni}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography sx={styles.socios.text}>
                                            {user.fecha}
                                        </Typography>

                                    </Grid>

                                </Grid>

                            </Box>

                        </div>
                    )
                })}

            </Paper>

        setLista(listaSocios)
    }

    return (

        <div style={{ height: "95vh", width: "70vw", marginTop: "20px"}}>

            <Grid container spacing={4}>

                <Grid item style={{}}>

                    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar Socios"
                            inputProps={{ 'aria-label': 'Buscar Socios' }}
                            value={search}
                            onKeyDown={(e) => handleKeyPress(e)}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={() => showUsers(search)} type="submit" sx={{ p: '10px' }} aria-label="search" >
                            <SearchIcon />
                        </Button>

                    </Paper>

                </Grid>

                <Grid item style={{ }}>

                    <AgregarSocio/>

                </Grid>

            </Grid>

            <Paper sx={{bgcolor: theme.palette.azul.primary}}>
                
                <Box sx={styles.socios.titulo} spacing={3}>
                    <Grid container spacing={2}>

                        <Grid item xs={3}>
                            <Typography sx={styles.socios.text}>
                                Nombre
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={styles.socios.text} >
                            <Typography>
                                Apellido
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={styles.socios.text}>
                            <Typography>DNI</Typography>
                        </Grid>
                        <Grid item xs={3} sx={styles.socios.text}>
                            <Typography >
                                Fecha Nac.
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>

                {lista}

            </Paper>

            

            <Dialog fullWidth={true} maxWidth="md" open={openDialog} onClose={handleClose}>

                <DialogActions style={{ position: "absolute", top: "2px", right: "2px" }}>
                    <Button onClick={handleClose}><CloseIcon style={{ fill: "black" }} /></Button>
                </DialogActions>
                <ShowSocio socio={socio} handleClose={handleClose}/>

            </Dialog>

        </div>
    )

}