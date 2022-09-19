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

}

export default App;





// import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
// import { useState } from "react"
// import { Child } from "./Child"

// export default function App(){
// 	const [open, setOpen] = useState(false)
// 	function handleClick(){
// 		console.log("AAAAAAAAAAAAAAAA")
// 	}


// 	function handleOpen(){
// 		setOpen(true)
// 	}

// 	function handleClose(){
// 		setOpen(false)
// 	}

// 	return(
// 		<>
// 			<Button onClick={handleOpen}>Abrir</Button>

// 			<Dialog fullWidth={true} open={open} onClose={handleClose}>

// 				<DialogTitle>
// 					Edicion
// 				</DialogTitle>
// 				<DialogActions>
// 					<Child handleClick={handleClose}/>
// 				</DialogActions>
// 			</Dialog>

// 		</>

// 	)

// }