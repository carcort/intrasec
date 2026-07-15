import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const ReunionesExternas = () => {

 const localizer = momentLocalizer(moment)

 const myEventsList = [{}]

  return (
    <div className='w-full h-[90%] '>
                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                  />
                </div>
  )
}

export default ReunionesExternas