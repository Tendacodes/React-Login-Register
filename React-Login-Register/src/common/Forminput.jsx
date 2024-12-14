import React from 'react'
import Register from '../Register/Register'
import Form from './Form'

const Forminput = ({name , type , placeholder, label}) => {
  return (
    <div>
        <label htmlFor="{name}">{label}</label>
        
        <input onChange={(e) => {
             handleInputChange(e.target.name, e.target.value)

        }} className="border rounded-md p-2" name={name} type={type} placeholder={placeholder}  />
    </div>
  )
}

export default Forminput