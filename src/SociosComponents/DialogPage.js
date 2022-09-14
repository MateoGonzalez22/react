import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../utils/data.json"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';


export default function DialogPage(socio) {

    socio = socio.socio

    const handleEdit = () => {
        // EDICION COMPONENTE

        comp =
            <div style={{ justifyContent: "center", background: "white" }}>
                <DialogTitle style={{ top: "2px", left: "2px" }}>Edicion</DialogTitle>

                <DialogContent>

                    <Grid container rowSpacing={2} direction="column" >
                        <Grid item >
                            <Grid container direction="row" style={{alignItems: "center"}} spacing={1}>

                                <Grid item>
                                <Typography>DNI:</Typography>
                                </Grid>

                                <Grid item >
                                    <TextField size="small" variant="outlined" defaultValue={socio.dni}></TextField>
                                </Grid>

                            </Grid>
                            
                            
                        </Grid>

                        <Grid item >
                            <Typography>Fecha Nac: {socio.fecha}</Typography>
                        </Grid>

                    </Grid>

                </DialogContent>


                <DialogActions>

                    <Button><CheckIcon /></Button>
                </DialogActions>


            </div>

        setComponente(comp)

    }

    let comp =

        <div style={{ justifyContent: "center", background: "white" }}>
            <DialogTitle style={{ top: "2px", left: "2px" }}>{socio.nombre} {socio.apellido}</DialogTitle>

            <DialogContent>

                <Grid container rowSpacing={2} direction="column" >
                    <Grid item >
                        <Typography>DNI: {socio.dni}</Typography>
                    </Grid>

                    <Grid item >
                        <Typography>Fecha Nac: {socio.fecha}</Typography>
                    </Grid>

                </Grid>

            </DialogContent>


            <DialogActions>
                <Button style={{ position: "absolute", top: "10px", right: "50px" }} onClick={() => handleEdit()}><EditIcon /></Button>
                {/* <Button><DeleteForeverIcon style={{ fill: "red" }} /></Button> */}
            </DialogActions>


        </div>

    const [componente, setComponente] = useState(comp)



    return <div>{componente}</div>

}