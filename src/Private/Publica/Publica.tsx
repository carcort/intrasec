




import { Navigate } from 'react-router';


const Publica = ({usuario}) => {

  const {id,  icono, apellido_paterno,estaAutenticado, apellido_materno, gerencia, primer_nombre, tipo_empresa, division} = usuario

  //console.log('user:', usuario.estaAutenticado);
  

  if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(tipo_empresa !== 'Privada'){
    return <Navigate to={'/'} replace />;
  }
  

  if(division ==='Industria'){
    return (
        <>
          


          
         <section className="w-full h-[96%]  flex items-center ">
            {/* <article className="w-[70%] h-[95%]  ml-16">
              <header className="w-full h-[4%]  flex items-center">
                Cliente  - {estaAutenticado && 'AUTENTICADO'}
              </header>
              <div className="w-full h-[4%]  flex gap-x-2 items-center bg-gray-100">
                <section>
                  <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png" alt="a" />
                </section>
                <section>
                  Intrasec
                </section>
              </div>
              <div className="w-full h-[4%] ">
                  sfsd
              </div>
              <div className="w-full h-[88%] ">
                sdsssssdxxxxx
              </div>
            </article> */}

            clienteee --- privadaaa --- industriaaa
          </section>
        </>
  )
  }


  
}

export default Publica