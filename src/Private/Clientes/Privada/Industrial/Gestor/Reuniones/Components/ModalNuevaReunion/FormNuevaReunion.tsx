import { useState } from "react";
import { useNavigate } from "react-router";
import { dataInternaFormReuniones } from "../../Utils/dataInternaFormReuniones";
import { dataExternaFormReuniones } from "../../Utils/dataExternoFormReunion";
import { dataTipoReunion } from "./Utils/dataTipoReunion";
//import {  dataInternaFormReuniones } from "../../Utils/dataInternaFormReuniones";

const FormNuevaReunion = () => {

 const [activarTipoReunion, setactivarTipoReunion] = useState(false)

 //usseta
 
 const [tipoReunion, setTipoReunion] = useState(dataTipoReunion)
 const [selectTipoReunion, setSelectTipoReunion] = useState('Interna')

 const [inputTipoReunion, setInputTipoReunion] = useState(dataInternaFormReuniones)
 //const [tipoReunion, setTipoReunion] = useState(dataInternaFormReuniones)
 //const [dataReunion, setDataReunion] = useState(dataInternaFormReuniones)

 const navegar = useNavigate()

 const handleClickTipoReunion =(e)=>{
   //if(e.target.name === '')
   setactivarTipoReunion(!activarTipoReunion)
   

    //setTipoReunion(dataExternaFormReuniones)
 }

  


 const handleClickInputTipoReunion =(e, id)=>{
    if(id === '1'){
        setSelectTipoReunion('Interna')
        setInputTipoReunion(dataInternaFormReuniones)
        setactivarTipoReunion(!activarTipoReunion)
    }
    else if(id === '2'){
        setSelectTipoReunion('Externa')
        setInputTipoReunion(dataExternaFormReuniones)
        setactivarTipoReunion(!activarTipoReunion)
    }
    else {
      console.log('as');
      
    }
 }


 const handleSubmitReunion =(e)=>{
     e.preventDefault()
 }


 // cerrar modal
 const handleClickCerrarModalReunion =()=>{
    navegar('/private/clientes/privada/industrial/gestor/reuniones')
 }

  return (
    <form onSubmit={handleSubmitReunion} className="w-[94%] h-full">
       <div className="w-full h-[94.5%]   gap-3">
          <section className="w-full h-full ">
            
            <div className="w-full h-[100px]">
               <label className="w-full h-[50%]" htmlFor="">Tipo de Reunion</label>
               <input value={selectTipoReunion} onClick={handleClickTipoReunion} className="mt-2 cursor-pointer w-full h-[40%] border border-gray-200 pl-2" placeholder={selectTipoReunion} type="text" />
               {activarTipoReunion && 
                <div className="absolute bg-gray-100 w-[500px] h-[70px] grid grid-rows-2">
                  {tipoReunion.map((el)=>{
                    return <button onClick={(e)=>handleClickInputTipoReunion(e, el.id)} className="hover:bg-gray-300 cursor-pointer border border-violet-200" >
                       {el.nombre}
                   </button>
                  })}                  
                </div>
               }
            </div>
            
            
            <div className="w-full h-[90%] grid grid-cols-2 grid-rows-6  gap-x-8">
              {inputTipoReunion.map((el)=>{
              return <div className="w-full h-[100px]">             
                    <section className="w-full h-full">
                        <label htmlFor="">{el.nombre}</label>
                        <input value={el.nombre} onClick={handleClickTipoReunion} className="mt-2 cursor-pointer w-full h-[40%] border border-gray-200 pl-2" placeholder={el.nombre} type="text" />
                    </section>
                 </div>
            })}
            </div>
            
          </section>
          {/* <section>
           asff
          </section> */}
       </div>
       <div className="w-full h-[5.5%] flex font-semibold justify-end ">
           <div className="w-[15%] h-full  flex gap-x-2">
              <button  className="bg-violet-500 text-white rounded cursor-pointer hover:bg-violet-600 w-[70%]">
                Enviar Invitacion
              </button>
              <button onClick={handleClickCerrarModalReunion}  className="w-[30%] bg-gray-900 text-white rounded cursor-pointer hover:bg-black">
                 Cerrar
              </button>
          </div>
      </div>
    </form>
  )
}

export default FormNuevaReunion