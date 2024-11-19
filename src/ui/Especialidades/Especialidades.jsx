"use client";
import { useEffect, useState } from "react";
import data from "@/Data/data.json";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ImageCarrouselEsp from "../Alianzas/ImageCarrousel/ImageCarrouselEsp";

const Especialidades = ({ variable }) => {
  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    products: [],
  });

  const goToExternalPage = (url) => {
    window.open(`${url}`, "_blank");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {},
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  useEffect(() => {
    if (data[variable]) {
      setContent(data[variable]);
    } else {
      console.error(`No data found for variable: ${variable}`);
    }
  }, [variable]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [variable]);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${content.imgFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-[92vh] text-white flex justify-center items-center flex-col gap-12">
          <h1 className="font-bold text-[50px] text-center">{content.title}</h1>
          <h2 className="text-2xl font-normal text-center w-[90%] md:w-[60%]">
            {content.subtitle}
          </h2>
        </div>
      </Box>
      <Box
        sx={{
          maxWidth: "1920px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <p className="text-[20px] font-light mt-20 text-center w-[90%] md:w-[60%]">
          {content.descripcion}
        </p>
        {content.title === "PEXGOL" ? null : (
          <Typography
            sx={{
              fontSize: "31.5px",
              marginTop: "36px",
              color: "#07417B",
              fontWeight: "700",
              marginBottom: "48px",
              lineHeight: { xs: "1.2", md: "1.5" },
            }}
            component={"h1"}
          >
            Productos
          </Typography>
        )}
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            height: "auto",
            gap: 4,
            flexWrap: "wrap",
            padding: 2,
          }}
        >
          {/* PRIMERA VARIANTE DE PRODUCTOS */}
          {content.tipoComponente === "1" ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {content.products && content.products.length > 0 ? (
                content.products.map((product, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "340px",
                      width: "320px",
                      display: "flex",
                      flexDirection: "column",
                      margin: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#07417B",

                      borderRadius: "24px",
                      boxShadow: "2px 6px 21.8px 12px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80%",
                        height: "auto",
                      }}
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        width={320}
                        height={320}
                        style={{
                          width: "100%",
                          maxHeight: "272px",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        width: "86%",
                        textAlign: "center",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  No products available
                </Typography>
              )}
            </Box>
          ) : null}

          {/* SEGUNDA VARIANTE DE PRODUCTOS */}
          {content.tipoComponente === "2" ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {content.products && content.products.length > 0 ? (
                content.products.map((product, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "340px",
                      width: "320px",
                      display: "flex",
                      flexDirection: "column",
                      margin: 3,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#07417B",

                      borderRadius: "24px",
                      boxShadow: "2px 6px 21.8px 12px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        width={320}
                        height={320}
                        style={{
                          borderTopLeftRadius: "25px",
                          borderTopRightRadius: "25px",
                          width: "100%",
                          maxHeight: "272px",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        textAlign: "center",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "22px",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  No products available
                </Typography>
              )}
            </Box>
          ) : null}

          {/* FIN DE LA SEGUNDA VARIANTE */}

          {content.solucionesComp === "1" ? (
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "34px" },

                marginTop: "36px",
                color: "#07417B",
                fontWeight: "700",
                marginBottom: "48px",
              }}
              component={"h1"}
            >
              {content.solucionesTitle}
            </Typography>
          ) : null}

          {/* TERCERA VARIANTE DE PRODUCTOS */}
          {content.solucionesComp === "1" ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {content.soluciones && content.soluciones.length > 0 ? (
                content.soluciones.map((product, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "340px",
                      width: "320px",
                      display: "flex",
                      flexDirection: "column",
                      margin: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#07417B",

                      borderRadius: "24px",
                      boxShadow: "2px 6px 21.8px 12px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        width={320}
                        height={320}
                        style={{
                          borderRadius: "25px",
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  No products available
                </Typography>
              )}
            </Box>
          ) : null}

          {/* FIN DE LA TERCERA VARIANTE */}
        </Box>
        <Typography
          sx={{
            width: "80%",
            fontSize: "31.5px",

            marginTop: "36px",
            color: "#07417B",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            lineHeight: { xs: "1.2", md: "1.5" },
          }}
          component="h2"
        >
          Nuestras alianzas
        </Typography>
        <Box
          sx={{
            width: "100%",
            paddingTop: "48px",
            marginBottom: "48px",
            overflow: "hidden",
          }}
        >
          <ImageCarrouselEsp data2={content.imagenesCarruselEsp} />
        </Box>
        <Box
          sx={{
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F5FBFF",
          }}
        >
          <Typography
            sx={{
              width: { xs: "90%", md: "68%" },
              fontSize: "31.5px",

              borderBottom: "2px solid",
              borderBottomColor: "#009FE3",
              display: "flex",
              justifyContent: "center",
              color: "#07417B",
              fontWeight: "700",
              paddingBottom: "24px",
              marginTop: "32px",
              lineHeight: { xs: "1.2", md: "1.5" },
            }}
            component="h2"
          >
            Conoce más de nuestros productos
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "70%",
              overflow: "hidden",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                marginTop: { xs: "none", md: "16px" },
                height: "170px",
                width: "50%",
                borderRight: { xs: "none", md: "2px solid" },
                borderRightColor: { xs: "none", md: "#009FE3" },
                marginBottom: { xs: "0px", md: "16px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: { xs: "auto", md: "10px, 0" },
              }}
            >
              <Typography
                sx={{
                  paddingTop: "18px",
                  width: "auto",
                  fontSize: "24px",

                  display: "flex",
                  justifyContent: "center",
                  color: "#07417B",
                  fontWeight: "700",
                  flexWrap: "nowrap",
                }}
                component="h2"
              >
                DESCARGA
              </Typography>
              <Button
                onClick={() => goToExternalPage(content.linkDescargaBroch)}
                sx={{
                  marginTop: "24px",
                  display: "flex",
                }}
              >
                <Image
                  src="/images/Especialidades/Bombas/Productos/descargaIcon.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    marginLeft: "14px",
                    textTransform: "none",
                    fontWeight: "300",
                    color: "#1C1C1C",
                    width: { xs: "70%", md: "auto" },
                  }}
                  className="SubTitleHeader"
                >
                  Brochure
                </Typography>
              </Button>
              {/* MOVIL */}
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontWeight: "300",
                  color: "#1C1C1C",
                  marginTop: "14px",
                }}
              >
                Brochure
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                marginTop: { xs: "none", md: "18px" },
                display: "flex",
                flexDirection: "column",
                margin: { xs: "auto", md: "10px, 0" },
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  paddingTop: "18px",
                  width: "100%",
                  fontSize: "24px",

                  display: "flex",
                  justifyContent: "center",
                  color: "#07417B",
                  fontWeight: "700",
                  flexWrap: "nowrap",
                }}
                component="h2"
              >
                MÁS INFORMACIÓN
              </Typography>
              <Button
                onClick={() =>
                  copyToClipboard("atencionaclientes@tuvanosa.com")
                }
                sx={{
                  marginTop: "24px",
                  textTransform: "none",
                }}
              >
                <Image
                  src="/images/Especialidades/Bombas/Productos/email.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    marginLeft: "14px",
                    fontWeight: "300",
                    color: "#1C1C1C",
                    width: { xs: "70%", md: "auto" },
                  }}
                >
                  atencionaclientes@tuvanosa.com
                </Typography>
              </Button>
              {/* MOVIL */}
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  marginBottom: "30px",
                  fontWeight: "300",
                  color: "#1C1C1C",
                  marginTop: "14px",
                }}
              >
                atencionaclientes@tuvanosa.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Especialidades;
