import { Button, Box } from "@mui/material";

const HeaderMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#000",
        height: "8vh",
        display: "flex",
        gap: 18,
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 900px)": {
          display: "none",
        },
      }}
      className="HeaderMenu"
    >
      <a
        href="https://tuvanosa.pandape.computrabajo.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <Box
            id="HeaderText"
            className="text"
            sx={{
              display: "flex",
              width: "148px",
              justifyContent: "center",
              gap: 2,
              "@media (max-width: 900px)": {
                fontSize: "6px",
              },
            }}
          >
            Bolsa de trabajo
          </Box>
        </Button>
      </a>

      <a
        href="https://portal.tuvanosa.net/proveedores/inicio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <Box
            id="HeaderText"
            className="text"
            sx={{
              display: "flex",
              width: "148px",
              justifyContent: "center",
              gap: 2,
              "@media (max-width: 900px)": {
                fontSize: "6px",
              },
            }}
          >
            Proveedores
          </Box>
        </Button>
      </a>

      <a
        href="https://portal.tuvanosa.net/clientes/inicio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <Box
            id="HeaderText"
            className="text"
            sx={{
              display: "flex",
              width: "148px",
              justifyContent: "center",
              gap: 2,
              "@media (max-width: 900px)": {
                fontSize: "6px",
              },
            }}
          >
            Clientes
          </Box>
        </Button>
      </a>
    </Box>
  );
};

export default HeaderMenu;
