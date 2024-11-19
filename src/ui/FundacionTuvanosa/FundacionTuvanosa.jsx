"use client";
import styles from "./FundacionTuvanosa.module.css";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/image";

function FundacionTuvanosa() {
  const [aviso, setAviso] = useState(false);
  const handleClosePrivacidad = () => {
    setAviso(false);
  };

  const handleOpenPrivacidad = () => {
    setAviso(true);
  };
  return (
    <div className={styles.fundacion}>
      <div className={styles.filtroFundacion}></div>
      <Image
        src="/images/fundacion_tuvanosa_logo.svg"
        width={30}
        height={30}
        alt="Fundacion tuvanosa"
        className={styles.logoFundacion}
      />
      <Image
        src="images/FundacionTuvanosa/logo_fundacion_vertical.svg"
        width={30}
        height={30}
        alt="Fundacion tuvanosa"
        className={styles.logoFundacionVertical}
      />
      <p className={styles.descFundacion}>
        Juntos podemos hacer la diferencia. Fundación Tuvanosa trabaja para
        promover la educación y la acción ambiental. ¡Únete a nosotros y hagamos
        del mundo un lugar más sostenible!
      </p>
      <button
        style={{ fontWeight: "600" }}
        className={styles.saberMas}
        onClick={() => handleOpenPrivacidad()}
      >
        Saber más
      </button>
      <Dialog
        open={aviso}
        onClose={() => handleClosePrivacidad()}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          className={styles.dialogTitleContent}
          style={{ backgroundColor: "#1B1C3C" }}
        >
          <Image
            src="/images/fundacion_tuvanosa_logo.svg"
            width={30}
            height={30}
            alt="Logo fundacion tuvanosa"
            className={styles.logoFundacion}
          />
          <Image
            src="images/FundacionTuvanosa/logo_fundacion_vertical.svg"
            width={30}
            height={30}
            alt="Fundacion tuvanosa"
            className={styles.logoFundacionVertical}
          />
        </DialogTitle>
        <DialogContent className={styles.dialogContent} id="dialog">
          <p style={{ fontSize: "20px" }}>
            Fundación Tuvanosa es una asociación civil sin fines de lucro que
            nace en 2012, con el objetivo social de apoyar el aprovechamiento de
            los recursos naturales, la preservación, conservación y restauración
            del equilibrio ecológico y la protección del medio ambiente, así
            como la promoción de la investigación científica y el desarrollo
            sustentable a nivel, nacional, regional y comunitario. <br /> <br />
          </p>
          <h2 className={styles.centrar} style={{ fontSize: "24px" }}>
            Sucursales Biológicas <br /> <br />
          </h2>
          <div className={styles.chirimole}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/FundacionTuvanosa/chirimole_reserva.svg"
                width={60}
                height={60}
                alt="Descripción de la imagen"
                className={styles.imagenIzquierda}
              />
            </div>
            <h3
              className={styles.centrar}
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              Reserva El Chirimole
            </h3>
            <p className={styles.centrar} style={{ fontSize: "20px" }}>
              Elota, Sinaloa, México. <br /> Decretada en 2017 como Área
              destinada voluntariamente para la conservación.
            </p>
          </div>
          <div className={styles.tinajas}>
            <div className={styles.imageContainer}>
              <Image
                width={30}
                height={30}
                src="/images/FundacionTuvanosa/tinajas_reserva.svg"
                alt="Descripción de la imagen"
                className={styles.imagenIzquierda}
              />
            </div>
            <h3
              className={styles.centrar}
              style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}
            >
              Reserva Tinajas de Encillas
            </h3>
            <p className={styles.centrar} style={{ fontSize: "20px" }}>
              En 2019 se adquiere predio y actualmente se encuentra en proceso
              ante CONAMP para su certificación como ADVC y con otras entidades
              logramos en conjunto 7 áreas destinadas para conservación y
              preservación.
            </p>
          </div>
          <div className={styles.alamo}>
            <div className={styles.imageContainer}>
              <Image
                width={30}
                height={30}
                src="/images/FundacionTuvanosa/Reserva El Alamo.svg"
                alt="Descripción de la imagen"
                className={styles.imagenIzquierda}
              />
            </div>
            <h3
              className={styles.centrar}
              style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}
            >
              Reserva el Álamo
            </h3>
            <p className={styles.centrar} style={{ fontSize: "20px" }}>
              Conjunto de áreas destinadas a la conservación y preservación Palo
              Blanco, Sotolosa, Copellina, Maravillas, Tierra del Sol.
            </p>
          </div>
          <div className={styles.certificadoContainer}>
            <Image
              width={100}
              height={100}
              src="/images/FundacionTuvanosa/certificado_reserva.webp"
              alt="Certificado Reserva el Chirimole"
              className={styles.chirimoleCert}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FundacionTuvanosa;
