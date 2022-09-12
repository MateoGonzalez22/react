import { Button, Box, Grid } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import data from "./data.json"

function App() {
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

                <Grid item xs={3}>

                    <div style={style.div}>
                        Nombre
                    </div>


                </Grid>

                <Grid item xs={3}>

                    <div style={style.div}>
                        Apellido
                    </div>


                </Grid>

                <Grid item xs={3}>

                    <div style={style.div}>
                        DNI
                    </div>

                </Grid>

            </Grid>

        </Box>

        
        
        

       


    )
}

export default App;
