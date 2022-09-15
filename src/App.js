import { Button, Box, Grid, ThemeProvider } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import List from "./SociosComponents/List";
import "./App.css"
import { theme } from "./utils/theme"




function App() {


    return (

        <div className="div">

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
