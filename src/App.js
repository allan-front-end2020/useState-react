import React, {useState}from 'react';
import './App.css';



export default function App(){

  const [nome , setNome]= useState('')
  const hanleChangeNome=(e)=>{
    setNome(e.target.value)

  }
  
  

   return(
    <>
    <label>Digite seu Nome</label>
    <input 
      type="text" 
      name= "fnome"
      value={nome}
      onChance={(e)=>hanleChangeNome(e.target.value)}
      />
    <p>Nome digitado:</p>

 

    </>
   )
  }