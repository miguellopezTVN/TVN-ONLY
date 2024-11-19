import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";
import HeaderMenu from "../ui/Header/HeaderMenu";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "TUVANOSA",
  description:
    "Grupo Tuvanosa es líder en México en soluciones integrales para la conducción de fluidos, ofreciendo una amplia variedad de bombas, válvulas y tuberías. Visita nuestras sucursales para servicios especializados.",

  openGraph: {
    title: "TUVANOSA",
    description:
      "Grupo Tuvanosa es líder en México en soluciones integrales para la conducción de fluidos, ofreciendo una amplia variedad de bombas, válvulas y tuberías. Visita nuestras sucursales para servicios especializados.",
    url: "https://tvnportal--portal-v2-f9832.us-central1.hosted.app/",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/tuvanosa-portal.appspot.com/o/Imagenes%20Landings%2FfondoInicio.webp?alt=media&token=bbd109eb-f7ed-49b9-8fdd-db94dd465e48",
        width: 1000,
        height: 630,
        alt: "TUVANOSA",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${raleway.className} antialiased fade-in`}>
        {" "}
        <HeaderMenu />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
