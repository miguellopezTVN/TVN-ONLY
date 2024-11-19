import Alianzas from "../ui/Alianzas/Alianzas";
import ContactForm from "../ui/Contacto/Contacto";
import CoordinacionesServer from "../ui/Especialidades/CoordinacionesServer";
import Eventos from "../ui/Eventos/Eventos";
import FundacionTuvanosa from "../ui/FundacionTuvanosa/FundacionTuvanosa";
import Header from "../ui/Header/Header";
import Sucursales from "../ui/Sucursales/Sucursales";

export default function Home() {
  return (
    <>
      <Header />
      <CoordinacionesServer />
      <Sucursales />
      <FundacionTuvanosa />
      <Eventos />
      <Alianzas />
      <ContactForm />
    </>
  );
}
