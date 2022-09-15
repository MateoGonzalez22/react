import { Button, Card, Typography, Box, Grid, Link, TextField, Paper, Divider, IconButton, InputBase, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment, useState } from "react";
import data from "../utils/data.json"
import "../App.css"
import SearchIcon from '@mui/icons-material/Search';
import DialogPage from "./DialogPage";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { theme } from "../utils/theme"



export default function List() {


    const users = data
    const [search, setSearch] = useState("")
    const [lista, setLista] = useState()
    const [socio, setSocio] = useState()

    const [openDialog, setOpenDialog] = useState(false)

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


            <Paper style={{ maxHeight: "73vh", overflow: "auto", width: "70vw" }}>

                {users.map(user => {

                    var queBuscar = whatToSearch(search)

                    if (queBuscar.length == 2) {
                        console.log("entro a == 2")
                        if (user.nombre != queBuscar[0] && user.apellido != queBuscar[1]) return null

                    } else if (queBuscar == "dni") {
                        console.log("entro a == dni")
                        if (user.dni != search) return null
                    } else if (queBuscar == "nombre") {
                        if (user.nombre != search) return null
                    }
                    //

                    return (
                        <div>

                            <Box sx={{
                                flexGrow: 1,
                                bgcolor: theme.palette.blanco.main,
                                "&:hover": { bgcolor: theme.palette.blanco.crema, borderRadius: "10px" },
                                "&:active": { bgcolor: theme.palette.blanco.gris,  },
                                justifyContent: "center"
                            }}
                                className="box"
                                onClick={() => handleOpen(user)}>

                                <Grid container spacing={2}>

                                    <Grid item xs={3} >

                                        <Typography className="text" sx={{fontFamily: "Roboto"}}>
                                            {user.nombre}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text" sx={{fontFamily: "Roboto"}}>
                                            {user.apellido}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text" sx={{fontFamily: "Roboto"}}>
                                            {user.dni}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text" sx={{fontFamily: "Roboto"}}>
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

        <div style={{ height: "100vh", width: "70vw" }}>

            <h1>Socios</h1>

            <Grid container className="grid" spacing={4} style={{ alignContent: "center" }}>


                <Grid item style={{ marginBottom: "20px" }}>

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

                <Grid item style={{ marginBottom: "20px", }}>


                    <Button variant="contained" style={{ height: "50px", borderRadius: "30px" }}><AddCircleIcon /></Button>

                </Grid>

            </Grid>

            <Paper sx={{bgcolor: theme.palette.azul.primary}}>
                
                <Box sx={{ flexGrow: 1 }} className="titulo" spacing={3}>
                    <Grid container spacing={2}>

                        <Grid item xs={3}>
                            <Typography className="text">
                                Nombre
                            </Typography>
                        </Grid>
                        <Grid item xs={3} className="text" >
                            <Typography>
                                Apellido
                            </Typography>
                        </Grid>
                        <Grid item xs={3} className="text">
                            <Typography>DNI</Typography>
                        </Grid>
                        <Grid item xs={3} className="text">
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
                <DialogPage socio={socio} />

            </Dialog>

        </div>
    )

}