// import { dataNavbarClientes } from "./Utils/dataNavbarGerencia/dataNavbarClientes";
// import { dataNavbarDirectiva } from "./Utils/dataNavbarGerencia/dataNavbarDirectiva";
// import { dataNavbarFinanzas } from "./Utils/dataNavbarGerencia/dataNavbarFinanzas";
// import { dataNavbarRrhh } from "./Utils/dataNavbarGerencia/dataNavbarRrhh";
// import { dataNavbarTecnico } from "./Utils/dataNavbarGerencia/dataNavbarTecnico";
import { useNavigate } from "react-router";


const Navbar = ({data}) => {

  const navegar = useNavigate()
   

    // const funcionDataNavbarGerencia = ()=>{
    //     if(gerencia === 'Clientes'){
    //         {return dataNavbarClientes.map((el)=>{
    //           return <button className="cursor-pointer hover:underline">
    //             {el.nombre}
    //           </button>
    //         })}
    //     }
    //     else if(gerencia === 'Directiva'){
    //         {return dataNavbarDirectiva.map((el)=>{
    //           return <button className="cursor-pointer hover:underline">
    //             {el.nombre}
    //           </button>
    //         })}
    //     }
    //     else if(gerencia === 'Finanzas'){
    //         {return dataNavbarFinanzas.map((el)=>{
    //           return <button className="cursor-pointer hover:underline">
    //             {el.nombre}
    //           </button>
    //         })}
    //     }
    //     else if(gerencia === 'Rrhh'){
    //         {return dataNavbarRrhh.map((el)=>{
    //           return <button className="cursor-pointer hover:underline">
    //             {el.nombre}
    //           </button>
    //         })}
    //     }
    //     else if(gerencia === 'Tecnico'){
    //         {return dataNavbarTecnico.map((el)=>{
    //           return <button className="cursor-pointer hover:underline">
    //             {el.nombre}
    //           </button>
    //         })}
    //     }

    //     // else if(gerencia === 'Tecnico'){
    //     //     {return dataNavbarTecnico.map((el)=>{
    //     //       return <button className="cursor-pointer hover:underline">
    //     //         {el.nombre}
    //     //       </button>
    //     //     })}
    //     // }
    //     else {
    //       console.log('as');
    //     }
    // }

    const handleClickNavbarGeneral =(e, id, ruta)=>{
        if(id === '1'){
            navegar('/')
        }
        else if(id === '2'){
            navegar('/')
        }
        else if(id === '3'){
            navegar('/')
        }
        else if(id === '4'){
            navegar('/')
        }
        else {
          console.log('askas');
          
        }

    }
    
  

  return (
    <ul className={` h-full w-full  flex  text-white font-semibold justify-end px-3`}>
        
      {/* <div className="w-[15%] flex justify-between pl-4">
        {funcionDataNavbarGerencia()}
      </div> */}
      
      
      <div className="w-[10%] flex ">
          {data.map((el)=>{    
            return <button onClick={(e)=>handleClickNavbarGeneral(e, el.id, el.ruta)}  className=" w-[33%] flex justify-center items-center cursor-pointer hover:border-b hover:border-blue-500">
              <img className="w-5 h-5" src={el.icono} alt="d" />
            </button>
          })}
      </div>
     
    </ul>
  )
}

export default Navbar