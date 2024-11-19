// import { useState, useEffect, useCallback } from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Typography,
//   Button,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import Instagram from "@mui/icons-material/Instagram";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import { useNavigate, useLocation } from "react-router-dom";
// import Image from "next/image";

// const ANIMATION_DURATION = 500;

// const MenuMovil = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [animation, setAnimation] = useState("");
//   const [targetSection, setTargetSection] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleMenu = useCallback(() => {
//     setAnimation(isOpen ? "slideOut 0.5s forwards" : "slideIn 0.5s forwards");
//     setIsOpen(!isOpen);
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) {
//       const animationTimer = setTimeout(() => {
//         setAnimation("");
//       }, ANIMATION_DURATION);
//       return () => clearTimeout(animationTimer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (location.pathname === "/" && targetSection) {
//       const scrollToSection = () => {
//         const offsetTop = document.querySelector(targetSection).offsetTop;
//         const offset = 82;
//         window.scrollTo({
//           top: offsetTop - offset,
//           behavior: "smooth",
//         });
//       };
//       scrollToSection();
//       setTargetSection(null); // Reset targetSection after scrolling
//     }
//   }, [location.pathname, targetSection]);

//   const handleMenuItemClick = useCallback(
//     (event, href) => {
//       event.preventDefault();

//       const scrollToSection = () => {
//         const offsetTop = document.querySelector(href).offsetTop;
//         const offset = 82;
//         window.scrollTo({
//           top: offsetTop - offset,
//           behavior: "smooth",
//         });
//       };

//       if (href.startsWith("http")) {
//         window.location.href = href;
//       } else if (href.startsWith("/")) {
//         navigate(href);
//       } else {
//         if (location.pathname !== "/") {
//           setTargetSection(href); // Set target section to scroll after navigation
//           navigate("/");
//         } else {
//           scrollToSection();
//         }
//       }
//       handleCloseMenu();
//     },
//     [navigate, location.pathname, handleCloseMenu]
//   );

//   const handleCloseMenu = useCallback(() => {
//     setAnimation("slideOut 0.5s forwards");
//     setTimeout(() => {
//       setIsOpen(false);
//     }, ANIMATION_DURATION);
//   }, []);

//   const menuItems = [
//     { name: "Nosotros", href: "#headerTVN" },
//     { name: "Especialidades", href: "#Coordinaciones" },
//     { name: "Sucursales", href: "#sucursal" },
//     { name: "Tienda", href: "/tienda" },
//     {
//       name: "Bolsa de Trabajo",
//       href: "https://tuvanosa.pandape.computrabajo.com/",
//     },
//     {
//       name: "Proveedores",
//       href: "https://portal.tuvanosa.net/proveedores/inicio",
//     },
//     { name: "Clientes", href: "https://portal.tuvanosa.net/clientes/inicio" },
//   ];

//   const menuItems2 = [
//     {
//       button: (
//         <Button
//           variant="outlined"
//           component="a"
//           href="https://www.facebook.com/tuvanosaMX"
//           target="_blank"
//           sx={{
//             color: "#FFFFFF",
//             borderColor: "none",
//             border: "none",
//             borderRadius: "30px",
//             "&:hover": {
//               backgroundColor: "transparent",
//               borderColor: "transparent",
//             },
//           }}
//         >
//           <Image
//             src="images/Footer/facebook.svg"
//             alt="Facebook"
//             style={{ width: "25px", height: "25px" }}
//           />
//         </Button>
//       ),
//       href: "https://www.facebook.com/tuvanosaMX",
//     },
//     {
//       icon: <Instagram sx={{ fontSize: 40 }} />,
//       href: "https://www.instagram.com/tuvanosa.mx?igsh=bTVjYTBpdmNmbm9h",
//     },
//     {
//       button: (
//         <Button
//           variant="outlined"
//           component="a"
//           href="https://www.linkedin.com/company/tuberias-y-valvulas-del-noroeste-sa-de-cv/mycompany/"
//           target="_blank"
//           sx={{
//             color: "#FFFFFF",
//             borderColor: "none",
//             border: "none",
//             borderRadius: "30px",
//             "&:hover": {
//               backgroundColor: "transparent",
//               borderColor: "transparent",
//             },
//           }}
//         >
//           <Image
//             src="/images/Footer/linkedin.svg"
//             alt="LinkedIn"
//             style={{ width: "25px", height: "25px" }}
//           />
//         </Button>
//       ),
//       href: "https://www.linkedin.com/company/tuberias-y-valvulas-del-noroeste-sa-de-cv/mycompany/",
//     },
//     { icon: <EmailOutlinedIcon sx={{ fontSize: 40 }} />, href: "#contacto" },
//   ];

//   return (
//     <>
//       <IconButton
//         onClick={toggleMenu}
//         size="large"
//         sx={{ color: "white", position: "absolute", right: 12 }}
//         aria-label="Toggle menu"
//       >
//         <MenuIcon sx={{ fontSize: 52 }} />
//       </IconButton>
//       {(isOpen || animation) && (
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             right: 0,
//             width: "100vw",
//             height: "100%",
//             zIndex: 2,
//             backgroundColor: "rgba(0,0,0,0.95)",
//             animation: animation,
//             "@keyframes slideIn": {
//               from: { opacity: 0, transform: "translateX(100%)" },
//               to: { opacity: 1, transform: "translateX(0)" },
//             },
//             "@keyframes slideOut": {
//               from: { opacity: 1, transform: "translateX(0)" },
//               to: { opacity: 0, transform: "translateX(100%)" },
//             },
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//           }}
//         >
//           <IconButton
//             onClick={toggleMenu}
//             sx={{
//               position: "absolute",
//               top: 16,
//               right: 16,
//               color: "#002C72",
//               fontSize: "40px",
//             }}
//             aria-label="Close menu"
//           >
//             <HighlightOffIcon
//               sx={{ color: "white", width: "80px", height: "40px" }}
//             />
//           </IconButton>

//           <List>
//             {menuItems.map((item, index) => (
//               <ListItem
//                 key={index}
//                 onClick={(e) => handleMenuItemClick(e, item.href)}
//                 style={{
//                   textDecoration: "none",
//                   fontSize: "40px",
//                   color: "white",
//                   width: "100%",
//                   textAlign: "center",
//                 }}
//               >
//                 <ListItemText
//                   primary={item.name}
//                   primaryTypographyProps={{ style: { fontSize: "20px" } }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mt: 4,
//             }}
//           >
//             <Typography sx={{ color: "white", mb: 2, fontSize: "24px" }}>
//               Redes
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 width: "100%",
//                 mt: 0,
//                 flexWrap: "wrap",
//               }}
//             >
//               {menuItems2.map((item, index) => (
//                 <IconButton
//                   key={index}
//                   onClick={(e) => handleMenuItemClick(e, item.href)}
//                   sx={{ color: "white", margin: "0 10px" }}
//                   aria-label={
//                     item.button ? item.button.props.alt : "Icon button"
//                   }
//                 >
//                   {item.button || item.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       )}
//     </>
//   );
// };

// export default MenuMovil;
