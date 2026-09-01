import React from 'react'
import pic from '../images/student.webp'


function ICard({data}) {

  return (
  <div border style={{ border: '5px solid white', padding: '20px', margin: '2px', scrollMarginLeft: '20px', scrollMarginTop: '20px', scrollMarginBottom: '20px', scrollMarginRight: '20px' , height: '57vh', width: '45vw', backgroundColor: 'black' }}>
      <h2 style={{ color: 'red'  ,border: '3px solid white', margin: '0px' }}>welcome</h2>
      <h3 style={{ color: 'blue', border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>NAME: {data.name}</h3>
      <h3 style={{ color: 'green',  border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>ROLL NUMBER: {data.roll}</h3>
      <h3 style={{ color: 'orange', border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>BRANCH: {data.branch}</h3>
      <h3 style={{ color: 'purple',border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>COLLEGE: {data.college}</h3>
      <div>
        <img src ={data.pic} height= {"200"} width={"200"} style={{ border: '3px solid white' }} ></img>
        </div>
    </div>
  )
}

export default ICard