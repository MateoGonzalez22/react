import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {
        negro: {
            main: "#000000",
            claro: "#111111"
        },
        azul: {
            main: "#11468F",
            marino: "#041562", 
            oscuro: "#1A132F",
            cielo: "#1A1A40",
            oscurito: "#495C83",
            test: "#354259"
        },
        rojo: {
            blood: "#931919",
            dark: "#781313",
            light: "#FF3C3C",
            main: "#DA1212"
        },
        verde: {
            main: "#83BD75",
            oscuro: "#072227",
            claro: "#91C483",
            manzana: "#BAFFB4",
            agua: "#35858B",
            aguaClaro: "#4FBDBA"
        },
        blanco: {
            main: "#FFFFFF",
        }
        
    }

})

export {theme}
