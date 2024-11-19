import { Box } from "@mui/material";
import BotonComponent from "./BotonComponent";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/tuvanosa-portal.appspot.com/o/Imagenes%20Landings%2FfondoInicio.webp?alt=media&token=bbd109eb-f7ed-49b9-8fdd-db94dd465e48")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="headerTVN"
    >
      <h1 className="font-bold text-5xl mb-12 mt-8 sm:mt-0 md:mt-0">
        TUVANOSA
      </h1>
      <h2 className="font-light text-[1.75em] text-center w-[80%] md:w-[50%]">
        Especialistas en control y conducción de fluidos. Calidad, servicio y
        precios justos para soluciones confiables en la industria.
      </h2>
      <BotonComponent />
    </Box>
  );
};

export default Header;
