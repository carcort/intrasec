import { useState } from "react";
import { useAfp, useEmailCorporativo, useGerentes, useIsapre, useTelefono1Corporativo, useTelefono2Corporativo, useTrabajo } from "../../../Store/formEmpleadoLaboralStore";
//import { useGerentes } from "../../../Store/gerentesStore";



const BadgeFormularioEmpleadoPersonal = ({el}) => {


  //  TRAER STORE DESDE ZUSTAND

  const valorGerente = useGerentes((state) => state.gerente)
  const ValorAfp = useAfp((state) => state.afp)
  const ValorIsapre = useIsapre((state) => state.isapre)
  const ValorTrabajo = useTrabajo((state) => state.trabajo)
  const ValorEmailCorporativo = useEmailCorporativo((state) => state.emailCorporativo)
  const ValorTelefono1Corporativo = useTelefono1Corporativo((state) => state.telefono1Corporativo)
  const ValorTelefono2Corporativo = useTelefono2Corporativo((state) => state.telefono2Corporativo)


  const actualizarGerente = useGerentes((state)=> state.actualizarGerente)
  const actualizarAfp = useAfp((state)=> state.actualizarAfp)
  const actualizarIsapre = useIsapre((state)=> state.actualizarIsapre)
  const actualizarTrabajo = useTrabajo((state)=> state.actualizarTrabajo)
  const actualizarEmailCorporativo = useEmailCorporativo((state)=> state.actualizarEmailCorporativo)
  const actualizarTelefono1Corporativo = useTelefono1Corporativo((state)=> state.actualizarTelefono1Corporativo)
  const actualizarTelefono2Corporativo = useTelefono2Corporativo((state)=> state.actualizarTelefono2Corporativo)


// --------------------------------------------------------------------------

  // Valor del input obtenido desde el input

  const [emailCorporativo, setEmailCorporativo] = useState('')
  const [telefono1Corporativo, setTelefono1Corporativo] = useState('')
  const [telefono2Corporativo, setTelefono2Corporativo] = useState('')


  const [abrirListaIsapres, setAbrirListaIsapres] = useState(false)
  const [abrirListaAfp, setAbrirListaAfp] = useState(false)
  const [abrirListaGerencia, setAbrirListaGerencia] = useState(false)
  const [abrirListaCargo, setAbrirListaCargo] = useState(false)
  const [abrirListaEquipo, setAbrirListaEquipo] = useState(false)
  const [abrirListaTrabajo, setAbrirListaTrabajo] = useState(false)


  // estados de select 
  const [selectGerencia, setSelectGerencia] = useState('')
  const [selectCargo, setSelectCargo] = useState('')
  const [selectAfp, setSelectAfp] = useState('')
  const [selectIsapres, setSelectIsapres] = useState('')
  const [selectEquipo, setSelectEquipo] = useState('')
  const [selectTrabajo, setSelectTrabajo] = useState('')

  const {id, titulo, placeHolder, data} = el


  const handleChangeInputFormEmpleadoLaboral =(e)=>{
      if(e.target.id === '1'){
          actualizarEmailCorporativo(e.target.value)
      }
      else if(e.target.id === '3'){
          actualizarTelefono1Corporativo(e.target.value)
      }
      else if(e.target.id === '5'){
          actualizarTelefono2Corporativo(e.target.value)
      }
  }

  console.log(emailCorporativo);
  

  

  const handleClickInputBadgeFormularioEmpleado =(e)=>{
        
    if(e.target.id === '2'){
        setAbrirListaGerencia(!abrirListaGerencia)
    }
    else if(e.target.id === '6'){
        setAbrirListaCargo(!abrirListaCargo)
    }
    else if(e.target.id === '7') {
        setAbrirListaAfp(!abrirListaAfp)
    }
    else if(e.target.id === '9'){
        setAbrirListaIsapres(!abrirListaIsapres)
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


  //Obterner el select de la lista desplegable
  const handleClickSelectFormEmpleado =(e, id, nombre, categoria)=>{
      if(categoria === 'Gerencia'){
          // setSelectGerencia(nombre)
          actualizarGerente(nombre)
          setAbrirListaGerencia(false)
      }
      else if(categoria === 'Cargo'){
          setSelectCargo(nombre)
          setAbrirListaCargo(false)
      }
      else if(categoria === 'Afp'){
          actualizarAfp(nombre)
          setAbrirListaAfp(false)
      }
      else if(categoria === 'Isapres'){
          actualizarIsapre(nombre)
          setAbrirListaIsapres(false)
      }
      else if(categoria === 'Equipo'){
          setSelectEquipo(nombre)
          setAbrirListaEquipo(false)
      }
      else if(categoria === 'Trabajo'){
          actualizarTrabajo(nombre)
          setAbrirListaTrabajo(false)
      }
      else {
        console.log('asas');
        
      }
  }

  const renderBadge = (abrir, categoria)=>{
      return abrir && 
           <section className="fixed -mt-8 w-[36%] h-[10%] bg-gray-50 max-h-[100px] overflow-auto z-40">
            {data.map((el)=>{
              return <button onClick={(e)=>handleClickSelectFormEmpleado(e, el.id, el.nombre, categoria)} className="flex  items-center  w-full h-[32%] bg-gray-50 border border-gray-100 hover:bg-gray-100 cursor-pointer">
                <div className="w-[4%] grid place-items-center">
                  <img className="w-4 h-4" src={el.icono} alt="sd" />
                </div>
                <div className="w-[96%] flex justify-start">
                  {el.nombre}
                </div>
              </button>
            })}
          </section>
  }

  return (
    <section className="w-full h-full relative">
        <div className="w-full h-full ">
          <label  htmlFor="">{titulo}</label>
          <input name="" onChange={handleChangeInputFormEmpleadoLaboral} value={titulo === 'Gerencia *' ? valorGerente: titulo === 'AFP *' ? ValorAfp: titulo === 'Isapre / Fonasa *'? ValorIsapre: titulo === 'Forma de Trabajo establecida *' ? ValorTrabajo: titulo === 'Email Corporativo *' ? ValorEmailCorporativo: titulo === 'Telefono 1 Corporativo *' ? ValorTelefono1Corporativo: titulo === 'Telefono 2 Corporativo (Opcional)' ? ValorTelefono2Corporativo: ''} id={id} onClick={(e)=>handleClickInputBadgeFormularioEmpleado(e)} readOnly={titulo === 'Gerente Encargado' ? true: false} className={`${titulo === 'Gerente Encargado' && 'bg-gray-50 cursor-text'} mt-1 pl-2 w-full h-[45%] border border-gray-200 cursor-pointer focus:outline-none focus:border-violet-500`} placeholder={placeHolder} type="text" />
        </div>

            {renderBadge(abrirListaGerencia, 'Gerencia')}
            {renderBadge(abrirListaCargo, 'Cargo')}        
            {renderBadge(abrirListaAfp, 'Afp')}
            {renderBadge(abrirListaIsapres, 'Isapres')}
            {renderBadge(abrirListaEquipo, 'Equipo')}
            {renderBadge(abrirListaTrabajo, 'Trabajo')}

    </section>
  )
}

export default BadgeFormularioEmpleadoPersonal