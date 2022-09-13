import { Button, Card, Typography, Box, Grid, Link, TextField, Paper, Divider, IconButton, InputBase } from "@mui/material";
import { Fragment, useState } from "react";
import UserCard from "./UserCard";
import data from "./data.json"
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import DialogPage from "./DialogComponents/DialogPage";



export default function List() {
    const user = data
    const [search, setSearch] = useState("")
    const [componente, setComponente] = useState()

    

    function showDialog(dni){
        componente = <DialogPage dni = {dni}/>
    }


    function showUsers(search){


        const comp =

            <div>

                {user.map(user => {

                    if (search.length > 0) {
                        if (user.nombre != search) return null
                    }
                    return (

                        <Box sx={{ flexGrow: 1 }} className="box" onClick={() => showDialog(user.dni)}>

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


                    )
                })}

            </div>

        setComponente(comp)


    }


    return (

        <div style={{ height: "100vh", width: "70vw" }}>

            <Grid container className="grid" spacing={4}>

                <Grid item>
                    <h1>Socios</h1>
                </Grid>

                <Grid item>

                    <Paper
                        
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
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

            {componente}
            

        </div>
    )

}