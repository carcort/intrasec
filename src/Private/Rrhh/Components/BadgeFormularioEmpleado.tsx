import { useState } from "react";

const BadgeFormularioEmpleado = ({el}) => {

  const [abrirListaIsapres, setAbrirListaIsapres] = useState(false)
  const [abrirListaAfp, setAbrirListaAfp] = useState(false)
  const [abrirListaGerencia, setAbrirListaGerencia] = useState(false)
  const [abrirListaCargo, setAbrirListaCargo] = useState(false)
  const [abrirListaEquipo, setAbrirListaEquipo] = useState(false)
  const [abrirListaTrabajo, setAbrirListaTrabajo] = useState(false)

  const {id, titulo, placeHolder, data} = el

  console.log(id);
  

  const handleClickInputBadgeFormularioEmpleado =(e)=>{
        
    if(e.target.id === '5') {
        setAbrirListaAfp(!abrirListaAfp)
    }
    else if(e.target.id === '6'){
        setAbrirListaIsapres(!abrirListaIsapres)
    }
    else if(e.target.id === '7'){
        setAbrirListaGerencia(!abrirListaGerencia)
    }


    else if(e.target.id === '9'){
        setAbrirListaCargo(!abrirListaCargo)
    }
    else if(e.target.id === '10'){
        setAbrirListaEquipo(!abrirListaEquipo)
    }
    else if(e.target.id === '12'){
        setAbrirListaTrabajo(!abrirListaTrabajo)
    }
    else {
      console.log('asas');
      
    }

        
  }

  return (
    <section className="w-full h-full ">
        <div className="w-full h-full ">
          <label  htmlFor="">{titulo}</label>
          <input id={id} onClick={(e)=>handleClickInputBadgeFormularioEmpleado(e)} readOnly={titulo === 'Gerente Encargado' ? true: false} className={`${titulo === 'Gerente Encargado' && 'bg-gray-50 cursor-text'} mt-1 pl-2 w-full h-[45%] border border-gray-200 cursor-pointer focus:outline-none focus:border-violet-500`} placeholder={placeHolder} type="text" />
        </div>

        {abrirListaAfp && 
          <section className="grid grid-rows-7 -mt-8 w-[36%]  bg-gray-50 fixed max-h-[100px] overflow-auto ">
            {data.map((el)=>{
              return <button className="w-full h-[50px]  bg-gray-50 hover:bg-gray-100 cursor-pointer">
                {el.nombre}
              </button>
            })}
          </section>
        }

        {abrirListaIsapres && 
          <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50">
            {data.map((el)=>{
              return <button className="w-full h-[90%] bg-gray-50">
                {el.nombre}
              </button>
            })}
          </section>
        }

        {abrirListaGerencia && 
          <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50">
            {data.map((el)=>{
              return <button className="w-full h-[90%] bg-gray-50">
                {el.nombre}
              </button>
            })}
          </section>
        }

        {abrirListaCargo && 
          <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50">
            {data.map((el)=>{
              return <button className="w-full h-[90%] bg-gray-50">
                {el.nombre}
              </button>
            })} 
          </section>
        }

        {abrirListaEquipo && 
          <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50">
            {data.map((el)=>{
              return <button className="w-full h-[90%] bg-gray-50">
                {el.nombre}
              </button>
            })}
          </section>
        }

        {abrirListaTrabajo && 
          <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50">
            {data.map((el)=>{
              return <button className="w-full h-[90%] bg-gray-50">
                {el.nombre}
              </button>
            })}
          </section>
        }


    </section>
  )
}

export default BadgeFormularioEmpleado