import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import data from "../data.json"

export default function DialogPage(dni) {
    const [openDialog, setOpenDialog] = useState(false)



    const handleOpen = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }



    return (
        
            
        <Dialog fullWidth={true} open={openDialog} onClose={handleClose}>
            {data.map(user => {
                if (user.dni != dni) return null
                return (
                    <>
                        <div>{user.nombre}</div>
                        <div>{user.apellido}</div>
                        <div>{user.dni}</div>
                        <div>{user.fecha}</div>
                    </>
                )
            })}
        </Dialog>
        

    )


}