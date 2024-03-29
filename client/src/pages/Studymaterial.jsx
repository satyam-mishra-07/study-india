import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Studymaterial = () => {
  
  useEffect(() => {
    getData();
  },[]);

    const [data, setData] = useState([])
    const getData = async () => {
      const response = await fetch("http://localhost:3000/api/data/study", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const res_data = await response.json();
      console.log(res_data.message);
      setData(res_data.message)
    }
  return (
    <div className='w-full p-20'>
      <div className="app">
      {data.map((classData, index) => (
        <Card key={index} classData={classData} />
      ))}
    </div>
    </div>
  )
}

export default Studymaterial