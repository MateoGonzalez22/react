import { Button, Card, Typography, Box, Grid, Link, TextField, Paper, Divider, IconButton, InputBase, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment, useState } from "react";
import UserCard from "./UserCard";
import data from "./data.json"
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import DialogPage from "./DialogComponents/DialogPage";
import CloseIcon from '@mui/icons-material/Close';



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

    function showUsers(search) {


        const listaSocios =


            <Paper style={{ height: "60vh", overflow: "auto", marginTop: "30px" }}>

                {users.map(user => {

                    if (search.length > 0) {
                        if (user.nombre != search) return null
                    }
                    return (
                        <div>

                            <Box sx={{ flexGrow: 1 }} className="box" onClick={() => handleOpen(user)}>

                                <Grid container spacing={2}>

                                    <Grid item xs={3} >

                                        <Typography className="text">
                                            {user.nombre.toUpperCase()}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text">
                                            {user.apellido.toUpperCase()}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text">
                                            {user.dni}
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={3}>

                                        <Typography className="text">
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

            <Grid container className="grid" spacing={4} >

                <Grid item>
                    <h1>Socios</h1>
                </Grid>

                <Grid item>

                    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar Socios"
                            inputProps={{ 'aria-label': 'Buscar Socios' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={() => showUsers(search)} type="submit" sx={{ p: '10px' }} aria-label="search" >
                            <SearchIcon />
                        </Button>

                    </Paper>

                </Grid>

            </Grid>

            <Box sx={{ flexGrow: 1 }} className="titulo" spacing={3}>
                <Grid container spacing={2}>

                    <Grid item xs={3}>
                        <div className="text">
                            Nombre
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="text">
                            Apellido
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="text">
                            DNI
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="text">
                            Fecha Nac.
                        </div>
                    </Grid>
                </Grid>

            </Box>

            {lista}

            <Dialog fullWidth={true} open={openDialog} onClose={handleClose}>
                
                <DialogActions style={{position: "absolute", top: "2px", right: "2px"}}>
                    <Button onClick={handleClose}><CloseIcon style={{ fill: "black" }} /></Button>
                </DialogActions>
                 <DialogPage socio={socio}/> 
                

            </Dialog>

        </div>
    )

}