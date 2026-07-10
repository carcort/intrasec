

const Sidebar = ({data}) => {
  return (
    <div className="w-full h-[90%] bg-gray-50 grid  place-items-center rounded">
      <div className="w-full h-full ">
        <div className="w-full h-full grid grid-rows-12">
          {data.map((el)=>{
            return <button className={`w-full h-full grid place-items-center hover:bg-gray-200 cursor-pointer py-3`}>
              <img className="w-5 h-5" src={el.icono} alt="aaaaaaaaaa" />
            </button>
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Sidebar