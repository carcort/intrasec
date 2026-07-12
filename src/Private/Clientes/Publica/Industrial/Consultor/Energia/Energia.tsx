

const Energia = ({usuario}) => {


  const {primer_nombre, apellido_paterno} = usuario

  return (
    <div>
     Hola {primer_nombre } {apellido_paterno} !
    </div>
  )
}

export default Energia