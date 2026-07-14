import { dataCotizacionesContactos } from "../Private/Clientes/Privada/Industrial/Gestor/Contactos/DetalleContacto/CotizacionesContactos/Utils/dataCotizacionesContactos"
//import { dataContactosInternos } from "../Private/Clientes/Privada/Industrial/Gestor/Contactos/DetalleContacto/Utils/dataContactosInternos"


const Tabla = () => {
  return (
    <div className="w-full h-[95%] ">
     <table className="w-full  text-left ">
        <thead className="  bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Numero</th>
            <th scope="col" className="px-6 py-3">Empresa</th>
            <th scope="col" className="px-6 py-3">Consultor</th>
            <th scope="col" className="px-6 py-3">Rubro Empresa</th>
            <th scope="col" className="px-6 py-3">Area Contacto</th>
            <th scope="col" className="px-6 py-3">Monto (CLP)</th>
            <th scope="col" className="px-6 py-3">Contacto</th>
            <th scope="col" className="px-6 py-3">Email Contacto</th>
            <th scope="col" className="px-6 py-3">Fecha Creacion</th>
            <th scope="col" className="px-6 py-3">Fecha Envio</th>
            <th scope="col" className="px-6 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {dataCotizacionesContactos.map((el) => (
            <tr key={el.id} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4   ">
                {el.numero_cotizacion}
              </th>
              <td className="px-6 py-4">{el.empresa_cotizacion}</td>
              <td className="px-6 py-4 ">{el.primer_nombre_consultor_empresa}  {el.apellido_paterno_consultor_empresa}  {el.apellido_materno_consultor_empresa}</td>
              <td className="px-6 py-4">{el.area_empresa}</td>
              <td className="px-6 py-4">{el.area_contacto}</td>
              <td className="px-6 py-4">{el.monto_cotizacion}</td>
              {/* <td className="px-6 py-4">{el.area_contacto}</td> */}
              <td className="px-6 py-4">{el.primer_nombre_contacto}  {el.apellido_paterno_contacto} </td>
              <td className="px-6 py-4">{el.email_contacto}</td>
              <td className="px-6 py-4">{el.fecha_creacion_cotizacion}</td>
              <td className="px-6 py-4">{el.estado_cotizacion === 'Enviada' ? el.fecha_envio_cotizacion: '-'}</td>
              <td className="px-6 py-4">
                <span className={`w-[60%] px-2 py-1 grid place-items-center font-semibold rounded ${
                  el.estado_cotizacion === 'Enviada' ? 'bg-violet-500 text-white' : 'bg-yellow-500 text-white'}`}>
                  {el.estado_cotizacion}
                </span>
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Descargar</a>
              </td>
              <td  className="px-6 py-4  text-white grid place-items-center ">
                {el.estado_cotizacion !== 'Enviada' ? <a href="#" className="bg-green-500 text-white cursor-pointer h-full w-[90%]  font-semibold">Enviar</a>: ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla