import dynamic from "next/dynamic";
import { useState } from "react";
import "./MapaTuvanosa.css";
import "leaflet/dist/leaflet.css";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItemText,
  List,
  ListItem,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Image from "next/image";
import { Icon } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const sucursalesIcon = new Icon({
  iconUrl: "/images/MapaTuvanosa/sucursales_location.svg",
  iconSize: [30, 30],
});

const matrizIcon = new Icon({
  iconUrl: "/images/MapaTuvanosa/matriz_location.svg",
  iconSize: [30, 30],
});

const puntoIcon = new Icon({
  iconUrl: "/images/MapaTuvanosa/puntosventa_location.svg",
  iconSize: [30, 30],
});

//JSON MAPA DE TUVANOSA
const markers = [
  {
    id: 0,
    ciudad: "MEXICALI",
    type: "sucursal",
    direccion:
      "Calzada Lázaro Cárdenas #2795 Col. Diez Div. 2. Deleg. González OrtegaC.P. 21218. Mexicali, Baja California.",
    imagen: "/images/MapaTuvanosa/TVN Mexicali.webp",
    maps: "https://www.google.com.mx/maps/place/Tuber%C3%ADas+Y+V%C3%A1lvulas+Del+Noroeste,+S.A.+De+C.V./@29.2597629,-116.8449867,6.5z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0x560719f3622769d!8m2!3d32.6139299!4d-115.3894043",
    telefonosOne: [
      {
        telDesc: "(686) 478 98 00",
        tel: "tel:6864789800",
      },
      {
        telDesc: "(686) 561 00 57",
        tel: "tel:6865610057",
      },
      {
        telDesc: "(686) 561 03 76",
        tel: "tel:6865610376",
      },
      {
        telDesc: "(686) 561 0908",
        tel: "tel:68656109083",
      },
    ],
    geocode: [32.6139299, -115.3894043],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 1,
    ciudad: "TIJUANA",
    direccion:
      "Carretera Libre Tijuana Tecate #27427. Col. Maclovio RojasTijuana, Baja California Norte.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Tijuana.webp",
    maps: "https://www.google.com.mx/maps/place/Tuvanosa+Tijuana/@32.4610162,-116.814851,15.75z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x80d93fd961116735:0xabf72893fb636aa5!8m2!3d32.4638519!4d-116.8099899",

    telefonosOne: [
      {
        telDesc: "(664) 512 34 00",
        tel: "tel:6645123400",
      },
      {
        telDesc: "(664) 689 81 50",
        tel: "tel:6646898150",
      },
      {
        telDesc: "(664) 689 83 32",
        tel: "tel:6646898332",
      },
      {
        telDesc: "(664) 903 27 31",
        tel: "tel:6649032731",
      },
    ],
    geocode: [32.4638519, -116.8099899],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 2,
    ciudad: "ENSENADA",
    direccion: "Av. Reforma 298, El Cipres. Ensenada, Baja California",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Ensenada.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA+ENSENADA/@29.2597629,-116.8449867,6.5z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0x7214517c6f0cb09!8m2!3d31.809895!4d-116.5965271",

    telefonosOne: [
      {
        tel: "tel:6461740256",
        telDesc: "(646) 174 02 56",
      },
      {
        tel: "tel:6461208583",
        telDesc: "(646) 120 85 83",
      },
    ],
    geocode: [31.809895, -116.5965271],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 3,
    ciudad: "CIUDAD JUÁREZ",
    direccion:
      "Av. de las Torres y Calle A #1675, Col. Torres del PRICiudad Juárez, Chihuahua.",
    type: "punto",
    imagen: "/images/MapaTuvanosa/TVN Juarez.webp",
    maps: "https://www.google.com.mx/maps/place/TUBERIAS+Y+VALVULAS+DEL+NOROESTE/@29.8919478,-109.4484696,7z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0xdf49d78f28b5a64!8m2!3d31.6428598!4d-106.388855",

    telefonosOne: [
      {
        telDesc: "(656) 681 56 55",
        tel: "tel:6566815655",
      },
      {
        telDesc: "(656) 681 17 10",
        tel: "tel:6566811710",
      },
      {
        telDesc: "(656) 681 09 05",
        tel: "tel:6566810905",
      },
    ],
    geocode: [31.6428598, -106.388855],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 4,
    ciudad: "HERMOSILLO",
    direccion:
      "Calle de la plata #92. Col. Parque Industrial C. P. 83299.Hermosillo, Sonora.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Hermosillo.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA+HERMOSILLO/@29.0228214,-110.912528,17z/data=!3m1!4b1!4m5!3m4!1s0x86ce85ddba19e6a3:0xf7b05b4e1243849c!8m2!3d29.0228214!4d-110.9103393",

    telefonosOne: [
      {
        telDesc: "(662) 251 00 61",
        tel: "tel:6622510061",
      },
      {
        telDesc: "(662) 251 00 62",
        tel: "tel:6622510062",
      },
      {
        telDesc: "(662) 251 00 63",
        tel: "tel:6622510063",
      },
      {
        telDesc: "(662) 251 09 12",
        tel: "tel:6622510912",
      },
    ],
    geocode: [29.0228214, -110.9103393],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 5,
    ciudad: "CHIHUAHUA",
    direccion:
      "Av. Industrias # 6703-1. Col. Nombre de Dios.Chihuahua, Chihuahua.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Chihuahua.webp",
    maps: "https://www.google.com.mx/maps/place/Tuber%C3%ADas+y+V%C3%A1lvulas+del+Noroeste/@25.7018877,-111.2850667,6z/data=!4m8!1m2!2m1!1stuvanosa+!3m4!1s0x0:0xeb9e049d0ae3bd8a!8m2!3d28.6809497!4d-106.0908508",

    telefonosOne: [
      {
        telDesc: "(614) 421 80 40",
        tel: "tel:6144218040",
      },
    ],
    geocode: [28.6809497, -106.0908508],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 6,
    ciudad: "OBREGÓN",
    direccion:
      "Calle Norman E. Borlaug #9048 Sur. Ejido General Ricardo Topete.Cajeme, Sonora.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Obregon.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA+OBREGON/@27.4310896,-109.9355078,17z/data=!3m1!4b1!4m5!3m4!1s0x86c815e230dc2ef9:0x68dc582e4acc25f3!8m2!3d27.4310896!4d-109.9333191",

    telefonosOne: [
      {
        telDesc: "(644) 500 00 50",
        tel: "tel:6445000050",
      },
      {
        telDesc: "(644) 417 60 80",
        tel: "tel:6444176080",
      },
      {
        telDesc: "(644) 417 60 88",
        tel: "tel:6444176088",
      },
    ],
    geocode: [27.4310896, -109.9333191],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 7,
    ciudad: "PESQUERÍA",
    direccion:
      "Calle Mariano Matamoros #905, Col. Centro. C.P. 66650Pesquería, Nuevo León.",
    type: "punto",
    imagen: "/images/MapaTuvanosa/TVN Pesquería.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA/@22.6286874,-102.161312,7z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0xd4bd2d253310b867!8m2!3d25.7838169!4d-100.0449371",

    telefonosOne: [
      {
        telDesc: "(825) 244 01 96",
        tel: "tel:8252440196",
      },
      {
        telDesc: "(825) 244 03 82",
        tel: "tel:8252440382",
      },
    ],
    geocode: [25.7838169, -100.0449371],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 8,
    ciudad: "MONTERREY",
    direccion:
      "Av. Calgary #100 Parque Industrial Nexxus XXI, General Escobedo Nuevo León C.P 66055",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Monterrey.webp",
    maps: "https://www.google.com/maps/place/Tuvanosa+Monterrey/@25.7667847,-100.3084354,14.86z/data=!4m20!1m14!4m13!1m4!2m2!1d-107.4797234!2d24.7722993!4e1!1m6!1m2!1s0x86629555d76ee9eb:0x61ece196379fe184!2sTuvanosa+Monterrey,+Av.+Calgary+%23100+Parque+Industrial+Nexxus+XXI,+Cd+Gral+Escobedo,+N.L.!2m2!1d-100.3084541!2d25.7690202!3e1!3m4!1s0x86629555d76ee9eb:0x61ece196379fe184!8m2!3d25.7690202!4d-100.3084541?hl=es-419",

    telefonosOne: [
      {
        telDesc: "(818) 851 99 50",
        tel: "tel:8188519950",
      },
      {
        telDesc: "(818) 351 32 37",
        tel: "tel:8183513237",
      },
      {
        telDesc: "(818) 351 32 85",
        tel: "tel:8183513285",
      },
    ],
    geocode: [25.7690202, -100.3084541],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 9,
    ciudad: "TORREÓN",
    direccion:
      "Antonio Dueñez Orozco #199, Esq. con Joaquín Serrano. Col. ciudad industrial Torreón.Torreón, Coahuila.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Torreon.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA+TORREON/@25.5879946,-103.3964376,17z/data=!3m1!4b1!4m5!3m4!1s0x868fdb6a81f66407:0x34ad4a0db20eb49!8m2!3d25.5879898!4d-103.3942489",

    telefonosOne: [
      {
        telDesc: "(871) 253 06 00",
        tel: "tel:8712530600",
      },
      {
        telDesc: "(871) 169 28 07",
        tel: "tel:8711692807",
      },
    ],
    geocode: [25.5879898, -103.3942489],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 10,
    type: "punto",
    ciudad: "LOS MOCHIS",
    direccion:
      "Blvd. Juan de Dios Batiz #210 OTE. Col. El Parque C.P. 81259.Los Mochis, Sinaloa.",
    imagen: "/images/MapaTuvanosa/TVN Mochis.webp",
    maps: "https://maps.app.goo.gl/FKBcie1UYAwKkgmMA",
    telefonosOne: [
      {
        telDesc: "(668) 880 72 30",
        tel: "tel:6688807230",
      },
    ],
    geocode: [25.798056868106215, -108.97985461505085],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 11,
    ciudad: "CULIACÁN",
    type: "matriz",
    direccion:
      "Calzada Aeropuerto #9016 Pte. Col. Nuevo Bachigualato C.P. 80135. Culiacan,Sinaloa.",
    imagen: "/images/MapaTuvanosa/TVN Matriz.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA+CULIACAN/@24.7748882,-107.4794076,17z/data=!4m12!1m6!3m5!1s0x86bcd0270cb0ea83:0x2352baa1c84fb291!2sTUVANOSA+CULIACAN!8m2!3d24.7748882!4d-107.4779914!3m4!1s0x86bcd0270cb0ea83:0x2352baa1c84fb291!8m2!3d24.7748882!4d-107.4779914",

    telefonosOne: [
      {
        tel: "tel:6677590459",
        telDesc: "Ventas: (667) 759 04 59",
      },
      {
        tel: "tel:6677590470",
        telDesc: "Matriz: (667) 759 04 70",
      },
    ],
    geocode: [24.7748882, -107.4779914],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 12,
    ciudad: "MAZATLÁN",
    type: "sucursal",
    direccion:
      "Carretera Internacional al Sur 7406 3 Col. Diaz Ordaz,  C.P. 82090Mazatlán,  Sinaloa.",
    imagen: "/images/MapaTuvanosa/TVN Mazatlan.webp",
    maps: "https://maps.app.goo.gl/FuRuVvi8JB4HrAXV8",
    telefonosOne: [
      {
        tel: "tel:6691331447",
        telDesc: "(669) 133 14 47",
      },
    ],
    geocode: [23.225365288605325, -106.3803546611331],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 13,
    ciudad: "S.L. POTOSÍ",
    type: "punto",
    direccion:
      "Calle Cuatro #105, Parque Industrial Millenium C.P:78395. San Luis Potosí, San Luis Potosí.",
    imagen: "/images/MapaTuvanosa/TVN San Luis.webp",
    maps: "https://www.google.com.mx/maps/place/TUVANOSA/@20.1635687,-103.7043343,6.25z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0xb867f52e6ed36be1!8m2!3d22.1059988!4d-100.9643555",
    telefonosOne: [
      {
        telDesc: "(444) 830 79 09",
        tel: "tel:4448307909",
      },
      {
        telDesc: "(444) 830 77 33",
        tel: "tel:4448307733",
      },
      {
        telDesc: "(444) 659 00 55",
        tel: "tel:4446590055",
      },
    ],
    geocode: [22.1059988, -100.9643555],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 14,
    ciudad: "GUADALAJARA",
    type: "sucursal",
    direccion:
      "Dr. R, Michel Num. 2102 Col. Atlas C.P. 44870 Guadalajara, Jalisco.",
    imagen: "/images/MapaTuvanosa/ETISA Guadalajara.webp",
    maps: "https://www.google.com.mx/maps/place/ETISA+de+Guadalajara+SA+de+CV/@20.5021544,-105.727065,7z/data=!4m8!1m2!2m1!1stuvanosa+guadalajara!3m4!1s0x0:0xc473b0c93a30e53d!8m2!3d20.6398527!4d-103.3339691",
    telefonosOne: [
      {
        telDesc: "(331) 493 5100",
        tel: "tel:3314935100",
      },
      {
        telDesc: "(333) 657 74 30",
        tel: "tel:3336577430",
      },
      {
        telDesc: "(333) 657 74 48",
        tel: "tel:3336577448",
      },
    ],
    geocode: [20.6398527, -103.3339691],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 15,
    ciudad: "QUERÉTARO",
    direccion:
      "Guadalupe San Vidaño #5, Ejido Los Angeles, Corregidora(Pueblito)Querétaro, Querétaro.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Queretaro.webp",
    maps: "https://www.google.com.mx/maps/place/Tuvanosa+Quer%C3%A9taro/@20.5535061,-100.485259,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ac76e7162e9:0x51ee20e252302387!8m2!3d20.5535011!4d-100.4830703",

    telefonosOne: [
      {
        telDesc: "(442) 500 39 00",
        tel: "tel:4425003900",
      },
    ],
    geocode: [20.5535011, -100.4830703],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 16,
    ciudad: "VERACRUZ",
    direccion:
      "C. 5 Nte. 402 ESQ, Av. 6, Ricardo Ballinas, 94470 Fortín de las Flores, Veracruz.",
    imagen: "/images/MapaTuvanosa/TVN Fortin.webp",
    type: "sucursal",
    maps: "https://goo.gl/maps/ZVXfUjHPogSvJh4SA",
    telefonosOne: [
      {
        telDesc: "(271) 119 01 14",
        tel: "tel:2711190114",
      },
      {
        telDesc: "(722) 413 36 13",
        tel: "tel:7224133613",
      },
    ],
    geocode: [18.9186107, -96.999054],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 17,
    ciudad: "TOLUCA",
    direccion:
      "Av. de las Partidas s/n Mz 14 Lt 27 y 28  Col. Parque Industrial Lerma C.P. 52000Toluca, Estado de México.",
    type: "sucursal",
    imagen: "/images/MapaTuvanosa/TVN Toluca.webp",
    maps: "https://www.google.com.mx/maps/place/Tuvanosa/@19.9727984,-101.0329022,7.5z/data=!4m8!1m2!2m1!1stuvanosa!3m4!1s0x0:0x87c32050534c213b!8m2!3d19.3001268!4d-99.5333862",

    telefonosOne: [
      {
        telDesc: "(722) 262 90 00",
        tel: "tel:7222629000",
      },
      {
        telDesc: "(728) 282 21 35",
        tel: "tel:7282822135",
      },
      {
        telDesc: "(728) 282 01 06",
        tel: "tel:7282820106",
      },
    ],
    geocode: [19.3001268, -99.5333862],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 18,
    ciudad: "SILAO",
    type: "sucursal",
    direccion:
      "Paseo de los industriales #306 Pte. Colonia el refugio Silao Victoria, CP.36284 Parque Industrial Fipasi",
    imagen: "/images/MapaTuvanosa/TVN Silao.webp",
    maps: "google.com/maps/place/Tuvanosa+Silao/@20.9050041,-101.3908109,15z/data=!4m12!1m6!3m5!1s0x0:0xc8a65d568716084e!2sTuvanosa+Silao!8m2!3d20.9050041!4d-101.3908109!3m4!1s0x0:0xc8a65d568716084e!8m2!3d20.9050041!4d-101.3908109",
    telefonosOne: [
      {
        telDesc: "(472) 688 27 67",
        tel: "tel:4726882767",
      },
    ],

    geocode: [20.9050041, -101.3908109],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 19,
    ciudad: "GUAYMAS",
    type: "punto",
    direccion:
      "Blvd. Benito Juárez 3, Costa Azul, Gil Samaniego, CP. 85470 Guaymas, Sonora.",
    imagen: "/images/MapaTuvanosa/TVN Guaymas.webp",
    maps: "https://maps.app.goo.gl/zrvhbupugEnFqHmg9",
    telefonosOne: [
      {
        telDesc: "(622) 132 55 70",
        tel: "tel:6221325570",
      },
    ],
    geocode: [27.925988442390025, -110.9104670940171],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
  {
    id: 20,
    ciudad: "COATZACOALCOS",
    type: "punto",
    direccion:
      "José María Velasco #103 Frida Kalho Alf. Siqueiros Paraíso Fracc., CP. 96523, Coatzacoalcos, Veracruz",
    imagen: "/images/MapaTuvanosa/TVN Fortin.webp",
    maps: "https://maps.app.goo.gl/D4UJc68Qva4HdqHr9",
    telefonosOne: [
      {
        telDesc: "(921) 210 91 54",
        tel: "tel:9212109154",
      },
    ],
    geocode: [18.132106836221272, -94.43697444936797],
    horarios: [
      { dia: "Lun a Vie", horario: "8:00am - 4:00pm" },
      { dia: "Sábado", horario: "8:00am - 1:30pm" },
      { dia: "Domingo", horario: "Cerrado" },
    ],
  },
];

function MapaTuvanosa() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mapa">
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: { xs: -1, sm: 1003 },
          margin: "2%",
          display: "flex",
        }}
        className="somosDesc"
      >
        <div>
          <Image
            src="/images/MapaTuvanosa/sucursales_location.svg"
            alt="SucursalesIcon"
            width={30}
            height={30}
            style={{
              width: "30px",
              height: "30px",
              float: "left",
              marginRight: "10px",
              border: "red",
            }}
          />
          <span style={{ color: "black", fontWeight: "400" }}>
            14 Sucursales.
          </span>
        </div>
        <div>
          <Image
            src="/images/MapaTuvanosa/puntosventa_location.svg"
            alt="PuntosDeVentaIcon"
            width={30}
            height={30}
            style={{
              width: "30px",
              height: "30px",
              float: "left",
              marginRight: "10px",
            }}
          />
          <span style={{ color: "black", fontWeight: "400" }}>
            6 Puntos de venta.
          </span>
        </div>
        <div>
          <Image
            src="/images/MapaTuvanosa/matriz_location.svg"
            alt="CorporativoIcon"
            width={30}
            height={30}
            style={{
              width: "30px",
              height: "30px",
              float: "left",
              marginRight: "10px",
            }}
          />
          <span style={{ color: "black", fontWeight: "400" }}>
            1 Corporativo.
          </span>
        </div>
      </Box>
      <MapContainer
        center={[23.22623618480235, -106.3805360936194]}
        zoom={5}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.geocode}
            icon={
              marker.type === "sucursal"
                ? sucursalesIcon
                : marker.type === "matriz"
                ? matrizIcon
                : puntoIcon
            }
          >
            <Popup className="popup">
              <Image
                src={marker.imagen}
                width={1000}
                height={760}
                style={{
                  width: "100%",
                  height: "150px",
                  display: "block",
                  margin: "auto",
                }}
                alt={marker.ciudad}
              />
              <h3
                style={{
                  textAlign: "center",
                  color: "#07417B",
                  fontSize: "20px",
                }}
              >
                SUCURSAL {marker.ciudad}
              </h3>
              <Accordion
                style={{ margin: "0px" }}
                className="accordion-root-fixed"
                expanded={expanded === `panel1-${marker.id}`}
                onChange={handleAccordionChange(`panel1-${marker.id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-summary-fixed"
                >
                  <Typography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Raleway",
                    }}
                  >
                    <PhoneIcon style={{ marginRight: "8px" }} /> Teléfonos
                    Corporativos
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {marker.telefonosOne.map((telefono, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={
                            <a
                              href={telefono.tel}
                              style={{
                                color: "#333333",
                                textDecoration: "none",
                                fontFamily: "Raleway",
                              }}
                            >
                              {telefono.telDesc}
                            </a>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{ margin: "0px" }}
                className="accordion-root-fixed"
                expanded={expanded === `panel2-${marker.id}`}
                onChange={handleAccordionChange(`panel2-${marker.id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="accordion-summary-fixed"
                >
                  <Typography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Raleway",
                    }}
                  >
                    <QueryBuilderIcon style={{ marginRight: "8px" }} /> Horarios
                    de Atención
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {marker.horarios.map((horario, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={`${horario.dia}: ${horario.horario}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "25px",
                  fontSize: "18px",
                }}
              >
                Dirección
              </h4>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {marker.direccion}
              </p>
              <a
                href={marker.maps}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "20px",
                  paddingBottom: "20px",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Cómo llegar
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapaTuvanosa;
