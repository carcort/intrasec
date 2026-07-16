import { useState } from "react";
import { Link, useLocation } from "react-router"


const Sidebar = ({data}) => {

  const [mostrarCartel1, setMostarCartel1] = useState(false)
  const [mostrarCartel2, setMostarCartel2] = useState(false)
  const [mostrarCartel3, setMostarCartel3] = useState(false)
  const [mostrarCartel4, setMostarCartel4] = useState(false)
  const [mostrarCartel5, setMostarCartel5] = useState(false)
  const [mostrarCartel6, setMostarCartel6] = useState(false)

  const location = useLocation();

 const isActive = (path) => location.pathname === path;

 // mostrar a
 const handleClickOnMouse =(e, id)=>{
    if(id === '1') {
      setMostarCartel1(true)
    } 
    else if(id === '2'){
      setMostarCartel2(true)
    } 
    else if(id === '3'){
      setMostarCartel3(true)
    }
    else if(id === '4'){
      setMostarCartel4(true)
    } 
    else if(id === '5'){
      setMostarCartel5(true)
    }
    else if(id === '6'){
      setMostarCartel6(true)
    }


    else {
      console.log('as');
      
    }
 }

 const handleClickLeaveMouse =(e, id)=>{
      if(id === '1'){
        setMostarCartel1(false)
      }
      else if(id==='2'){
        setMostarCartel2(false)
      }
      else if(id === '3'){
        setMostarCartel3(false)
      }
      else if(id === '4'){
        setMostarCartel4(false)
      } 
      else if(id === '5'){
        setMostarCartel5(false)
      }
      else if(id === '6'){
        setMostarCartel6(false)
      }

      else {
      console.log('as');
      
    }
 }

 //console.log('datitos:', data);
 


  return (
    <div className="w-full h-[90%] bg-gray-100 grid  place-items-center rounded">
      <div className="w-full h-full ">
        <div className="w-full h-full grid grid-rows-12">
          {data.map((el)=>{
            return <>
                    <Link
                      onMouseEnter={(e)=>handleClickOnMouse(e, el.id)}
                      onMouseLeave={(e)=>handleClickLeaveMouse(e, el.id)}
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md hover:bg-violet-200 ${
                        isActive(el.ruta) 
                          ? 'bg-violet-200' 
                          : ''
                      }`}
                    >
                      <img className="w-5 h-5" src={el.icono} alt="as" />
                    </Link>

                    {mostrarCartel1 &&
                      <div className="ml-24 mt-3 fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce">
                        {data[0].nombre}
                      </div>
                    }
                    {mostrarCartel2 &&
                      <div className="ml-24 mt-24 fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce ">
                        {data[1].nombre}
                      </div>
                    }
                    {mostrarCartel3 &&
                      <div className="ml-24 mt-44 fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce">
                        {data[2].nombre}
                      </div>
                    }
                    {mostrarCartel4 &&
                      <div className="ml-24 mt-64 fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce">
                        {data[3].nombre}
                      </div>
                    }
                    {mostrarCartel5 &&
                      <div className="ml-24  mt-[21rem] fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce">
                        {data[4].nombre}
                      </div>
                    }
                    {mostrarCartel6 &&
                      <div className="ml-24 mt-[26rem] fixed pl-1 py-2 w-[3%] h-[3%]  bg-violet-500 items-center text-white font-semibold text-[10px] animate-bounce">
                        {data[5].nombre}
                      </div>
                    }
                    

            </>

                    
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Sidebar