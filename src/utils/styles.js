import { theme } from "./theme"


export const styles =
{
    socios: {

        edicion:{

            buttons:{

                padding: "5px",

                "&:hover": { 
                    bgcolor: theme.palette.blanco.crema,
                    borderRadius: "5px"
                }
            }

        },

        titulo: {
            flexGrow: 1,
            marginRight: "12px",
            display: "flex",
            padding: "16px",
            marginTop: "20px",
            pointerEvents: "none",
        },

        text: {
            fontFamily: "Roboto",
            backgroundColor: "transparent",
            justifyContent: "center",
            display: "flex",
            pointerEvents: "none",

        },

        lista: {

            box: {
                backgroundColor: theme.palette.blanco.main,
                "&:hover": { bgcolor: theme.palette.blanco.crema, borderRadius: "2px" },
                "&:active": { bgcolor: theme.palette.blanco.gris },
                justifyContent: "center",
                padding: "16px",
                marginTop: "",
                display: "flex"
            },

            paper: {
                maxHeight: "73vh",
                overflow: "auto",
                width: "70vw"
            },

        },

        div: {
            backgroundColor: theme.palette.azul.oscurito,
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",

        },

    }

}