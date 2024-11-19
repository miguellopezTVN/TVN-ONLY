"use client";
import { Button, Dialog, IconButton } from "@mui/material";
import { useState, useCallback } from "react";

const BotonComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          fontSize: "1.125em",
          color: "#FFFFFF",
          marginTop: { xs: "10%", md: "3%" },
          height: "45px",
          transition: "background-color 0.3s ease",
          borderColor: "#FFFFFF",
          borderRadius: "30px",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderColor: "#FFFFFF",
            "& .text": {
              transform: "scale(0.90)",
              transition: "transform 0.2s ease, filter 0.2s ease",
            },
          },
        }}
      >
        <span className="text">Conoce más de nosotros</span>
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
        fullWidth={true}
        PaperProps={{
          sx: {
            borderRadius: "35px",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          Cerrar
        </IconButton>
        <iframe
          style={{ border: "none" }}
          width="100%"
          loading="lazy"
          height="500px"
          src="https://www.youtube.com/embed/b0XiVHOsg1U?si=TS8GeBSgCKV1pDY3&controls=0&start=29&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Dialog>
    </>
  );
};

export default BotonComponent;
