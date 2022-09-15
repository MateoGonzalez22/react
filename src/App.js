import { Button, Box, Grid, ThemeProvider } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import List from "./SociosComponents/List";
import "./App.css"
import {styles} from "./utils/styles"
import {theme} from "./utils/theme"
import WebFont from 'webfontloader';
import {useEffect} from "react";



function App() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka', "Nabla", "Roboto"]
          }
        });
       }, []);


    return (

        <div style={styles.socios.div}>

            <List/>

        </div>




    )







    /*
    console.log(data.usuarios)

    const style = 

    {
        div:{
            background: "lightBlue",
            padding: "10px",
            textAlign: "center",
            
        },
        box:{
            justifyContent: "center",
            display: "flex",
            marginTop: "20px"
        }
    }


    return (

        <Box sx={{flexGrow: 1}} style={style.box}>
            
            <Grid container spacing={2}>

                <Grid item xs={3} md={2}>

                    <div style={style.div}>
                        Nombre
                    </div>


                </Grid>

                <Grid item xs={3} md={2}>

                    <div style={style.div}>
                        Apellido
                    </div>


                </Grid>

                <Grid item xs={3} md={2}>

                    <div style={style.div}>
                        DNI
                    </div>

                </Grid>

                <Grid item xs={3} md={2}>

                    <div style={style.div}>
                        Fecha Nacimiento
                    </div>

                </Grid>

            </Grid>

        </Box>
    )*/
}

export default App;
