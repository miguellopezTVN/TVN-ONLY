import { Grid } from "@mui/material";
import "./Sucursales.css";
// import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import Image from "next/image";
// import MapaTuvanosa from "@/app/ui/Sucursales/MapaTuvanosa/MapaTuvanosa.jsx";

function Sucursales() {
  // const [open, setOpen] = useState(false);
  const imgSucursal = {
    width: "100%",
    height: "80%",
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <Grid className="sucursales" id="sucursal" container spacing={0}>
      <Grid item xs={12} md={6} style={{ padding: "0" }}>
        <h1 className="tituloSucursal">Contamos con:</h1>
        <h2
          style={{ fontSize: "1.375em", fontWeight: "300" }}
          className="descSucursal"
        >
          21 sucursales alrededor de la república, lo que nos permite estar
          cerca de ti y brindarte un servicio de excelencia.
        </h2>
        <button
          style={{ fontFamily: "Raleway" }}
          // onClick={handleOpen}
          className="saberMasSuc"
        >
          Conocer sucursales
        </button>
        {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogContent style={{ padding: "0", width: "100%" }}>
            <MapaTuvanosa />
          </DialogContent>
        </Dialog>{" "} */}
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: "0" }}>
        {" "}
        <Image
          width={1000}
          height={760}
          src="/images/sucursal_contacto.webp"
          alt="SucursalContacto"
          style={imgSucursal}
        />
      </Grid>
    </Grid>
  );
}

export default Sucursales;
