import Coordinaciones from "./Coordinaciones";

const CoordinacionesServer = () => {
  const originalSlides = [
    {
      link: "/especialidades/tableros-de-control",
      src: "/images/Especialidades/TablerosDeControl/imagen_encabezado/tableros_imagen_carrusel.webp",
      alt: "Tableros de control",
      label: "Tableros de control",
    },
    {
      link: "/especialidades/valvulas",
      src: "/images/Coordinaciones/valvulas_carrusel.webp",
      alt: "Valvulas",
      label: "Válvulas",
    },
    {
      link: "/especialidades/deteccion-y-supresion-de-incendios",
      src: "/images/Coordinaciones/deteccion_supresion_incendios_carrusel.webp",
      alt: "Deteccion y supresion de incendios",
      label: "Detección y supresión de incendios",
    },

    {
      link: "/especialidades/bombas",
      src: "/images/Coordinaciones/bombas.webp",
      alt: "Bombas",
      label: "Bombas",
    },
    {
      link: "/especialidades/vapor-y-alimentos",
      src: "/images/Coordinaciones/alimentos.webp",
      alt: "Vapor y alimentos",
      label: "Vapor y alimentos",
    },
    {
      link: "/especialidades/almacenamiento-de-agua",
      src: "/images/Coordinaciones/almacenamiento_agua_carrusel.webp",
      alt: "Almacenamiento de agua",
      label: "Almacenamiento de agua",
    },
    {
      link: "/especialidades/contraincendios-y-hvac",
      src: "/images/Especialidades/ContraIncendiosYHvac/contraincendios_hvac_carrusel.webp",
      alt: "Hvac",
      label: "Contraincendios y HVAC",
    },
    {
      link: "/especialidades/pexgol",
      src: "/images/Coordinaciones/pexgol.webp",
      alt: "Pexgol",
      label: "Pexgol",
    },
    {
      link: "/especialidades/pozos-profundos",
      src: "/images/Coordinaciones/pozos_imagen_carrusel.webp",
      alt: "Pozos",
      label: "Pozos profundos",
    },
    {
      link: "/especialidades/sellado-industrial-y-juntas-de-expansion",
      src: "/images/Coordinaciones/sellado.webp",
      alt: "Sellado industrial y juntas de expansión",
      label: "Sellado industrial y juntas de expansión",
    },
  ];

  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        className="Coordinaciones"
        id="Coordinaciones"
        style={{
          marginTop: "48px",
          color: "#07417B",
          fontSize: "2.25em",
          fontWeight: 700,
        }}
      >
        Especialidades
      </h1>

      <h2
        style={{
          width: "90%",
          maxWidth: "800px",
          textAlign: "center",
          fontSize: "1.375em",
          fontWeight: "300",
          marginTop: "24px",

          paddingBottom: "24px",
        }}
      >
        Contamos con ingenieros capacitados en dar soluciones integrales a tus
        necesidades a través de nuestras especialidades.
      </h2>
      <Coordinaciones slides={originalSlides} />
    </div>
  );
};

export default CoordinacionesServer;
