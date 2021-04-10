import React, { useCallback, useState } from 'react'
import Calendar from 'react-calendar'

const Calender = () => {
  const [date,setDate] = useState(new Date())
  const onChange = useCallback((date)=>{
    setDate(date)
  },[])

  return (
    <div>
      <Calendar onChange={onChange} value={date}/>
      {console.log(date)}
      {date.toString()}
    </div>
  )
}

export default Calender
