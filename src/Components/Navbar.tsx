import { dataNavbarClientes } from "./Utils/dataNavbarGerencia/dataNavbarClientes";
import { dataNavbarDirectiva } from "./Utils/dataNavbarGerencia/dataNavbarDirectiva";
import { dataNavbarFinanzas } from "./Utils/dataNavbarGerencia/dataNavbarFinanzas";
import { dataNavbarRrhh } from "./Utils/dataNavbarGerencia/dataNavbarRrhh";
import { dataNavbarTecnico } from "./Utils/dataNavbarGerencia/dataNavbarTecnico";



const Navbar = ({data, entorno, handleClickNavbar,  gerencia}) => {

   

    const funcionDataNavbarGerencia = ()=>{
        if(gerencia === 'Clientes'){
            {return dataNavbarClientes.map((el)=>{
              return <button className="cursor-pointer hover:underline">
                {el.nombre}
              </button>
            })}
        }
        else if(gerencia === 'Directiva'){
            {return dataNavbarDirectiva.map((el)=>{
              return <button className="cursor-pointer hover:underline">
                {el.nombre}
              </button>
            })}
        }
        else if(gerencia === 'Finanzas'){
            {return dataNavbarFinanzas.map((el)=>{
              return <button className="cursor-pointer hover:underline">
                {el.nombre}
              </button>
            })}
        }
        else if(gerencia === 'Rrhh'){
            {return dataNavbarRrhh.map((el)=>{
              return <button className="cursor-pointer hover:underline">
                {el.nombre}
              </button>
            })}
        }
        else if(gerencia === 'Tecnico'){
            {return dataNavbarTecnico.map((el)=>{
              return <button className="cursor-pointer hover:underline">
                {el.nombre}
              </button>
            })}
        }

        // else if(gerencia === 'Tecnico'){
        //     {return dataNavbarTecnico.map((el)=>{
        //       return <button className="cursor-pointer hover:underline">
        //         {el.nombre}
        //       </button>
        //     })}
        // }
        else {
          console.log('as');
        }
    }
    
  

  return (
    <ul className={` h-full w-full  flex  text-white font-semibold justify-between px-3`}>
        
      <div className="w-[15%] flex justify-between pl-4">
        {funcionDataNavbarGerencia()}
      </div>
      
      
      <div className="w-[10%] flex ">
          {data.map((el)=>{    
            return <button  className=" w-[33%] flex justify-center items-center cursor-pointer hover:border-b hover:border-blue-500">
              <img className="w-5 h-5" src={el.icono} alt="d" />
            </button>
          })}
      </div>
     
    </ul>
  )
}

export default Navbar