
import { Routes, Route } from "react-router";
import Home from "./Home/Home";
import Navbar from "../Components/Navbar";
import Faq from "./Faq/Faq";
import Documentacion from "./Documentacion/Documentacion";
import { dataNavbarPublic } from "../Components/Utils/dataNavbarPublic";
//import { useNavigate } from "react-router-dom";

const Public = () => {

  //const router = useNavigate()

  // funcion de logica del navegador
  // const handleClickNavbarPublic = (e, id, entorno, nombre, ruta)=>{
  //   // console.log(nombre);
  //   // if(id === '1'){
  //   //   router('/')
  //   // }
  //   // else if(id === '2'){
  //   //   router('/doc')
  //   // }
  //   // else if(id === '3'){
  //   //   router('/faq')
  //   // }
  //   // else if(id === '4'){
  //   //   router('/private')
  //   // }
  //   // else {
  //   //   console.log('d');
      
  //   // }
    
  // }

  
  

  return (
    <div className="w-screen h-screen bg-violet-400">
     <div className="w-full h-[4%] flex justify-center">
      <nav className={`w-[70%] h-full flex justify-end`}>
       <Navbar 
          data={dataNavbarPublic}  
          //handleClickNavbar={handleClickNavbarPublic}
       
       />
      </nav>
     </div>
     <main className="w-full h-[96%] bg-gray-50 flex justify-center">
      <div className={`w-[70%] h-full bg-white`}>
       <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/doc" element={<Documentacion />}/>
       </Routes>
      </div>
     </main>
    </div>
  )
}

export default Public