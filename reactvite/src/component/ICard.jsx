import React from 'react'
import pic from '../images/student.webp'

function ICard() {

    let roll = 9018;
  let name = "SHIVAM"
  let branch = "CSE"
  let college = "ABESEC"
  return (
  <div border style={{ border: '5px solid white', padding: '20px', margin: '2px', scrollMarginLeft: '20px', scrollMarginTop: '20px', scrollMarginBottom: '20px', scrollMarginRight: '20px' , height: '57vh', width: '45vw', backgroundColor: 'black' }}>
      <h2 style={{ color: 'red'  ,border: '3px solid white', margin: '0px' }}>welcome</h2>
      <h1 style={{ color: 'blue', border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>NAME: {name}</h1>
      <h1 style={{ color: 'green',  border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>ROLL NUMBER: {roll}</h1>
      <h1 style={{ color: 'orange', border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>BRANCH: {branch}</h1>
      <h1 style={{ color: 'purple',border: '3px solid white', height: '60px', padding: '10px' , margin: '0px' }}>COLLEGE: {college}</h1>
      <div>
        <img src ={pic} height= {"200"} width={"200"} style={{ border: '3px solid white', margin: '10px' , leftmargin: '100%' }} ></img>
        </div>
    </div>
  )
}

export default ICard