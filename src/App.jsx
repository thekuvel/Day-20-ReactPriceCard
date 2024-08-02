/* eslint-disable react/prop-types */
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

let data = [
  {
    "title": "Free",
    "price": 0,
    "noOfUsers": 4,
    "storage": 2,
    "privateProjects": false,
    "phoneSupport": false,
    "freeSubDomain": false,
    "monthlyReport": false,
    "id": "1"
  },
  {
    "title": "PLUS",
    "price": 9,
    "noOfUsers": 77,
    "storage": 57,
    "privateProjects": true,
    "phoneSupport": true,
    "freeSubDomain": true,
    "monthlyReport": false,
    "id": "2"
  },
  {
    "title": "PRO",
    "price": 49,
    "noOfUsers": 86,
    "storage": 42,
    "privateProjects": true,
    "phoneSupport": true,
    "freeSubDomain": true,
    "monthlyReport": true,
    "id": "3"
  }
]

function App() {
  return (
    <>
      <Container/>
    </>
  )
}

function Container(){
  return (
    <>
    <h1>Price List</h1>
    <div className='container'>
      {data.map((val, index)=>(
        <Card details={val} key={index}/>
      ))}
    </div>
    </>
  )
}

function Card({details}){
  console.log(details)
  return (
    <div className="card">
      <p className="title">{details.title}</p>
      <p className="price">${details.price}/month</p>
      <hr />
      <p>✅{details.noOfUsers} Users</p>
      <p>✅{details.storage}GB Storage</p>
      <p>✅Community Access</p>
      <p className={handleBoolean(details.privateProjects)}>{(details.privateProjects ? <span>✅</span> : <span>❌</span> )}Unlimited Private Projects</p>
      <p className={handleBoolean(details.phoneSupport)}>{(details.phoneSupport ? <span>✅</span> : <span>❌</span> )} Phone Support</p>
      <p className={handleBoolean(details.freeSubDomain)}>{(details.freeSubDomain ? <span>✅</span> : <span>❌</span> )} Free Sub-Domain</p>
      <p className={handleBoolean(details.monthlyReport)}>{(details.monthlyReport ? <span>✅</span> : <span>❌</span> )} Monthly Report</p>
      <div className='btn-container'>
        <button className='btn'>Buy</button>
      </div>
    </div>
  )
}

function handleBoolean(value){
  if (value == true){
    return "enable"
  } else {
    return "disable"
  }
}

export default App
