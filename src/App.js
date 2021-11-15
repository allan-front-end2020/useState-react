import React, {useState}from 'react';
import './App.css';

 export default function App() {
   const[log, setLog]=useState(false)

   const{ cor, setCor}=useState(1)

   const vermelho={color:'red'}
   const verde={color:'green'}
   const azul={color:'blue'}

   const msglogin=()=>{
     return'Usuario Logado'
   }
   const msglogoff=()=>{
    return'Favor Logar'
  }

  
const retCord=(c)=>{
 if(c==1){
   return vermelho
 }else if (c ==2){ 
   return verde
 }else{ 
   return azul
 }
}
  const cumprimento=()=>{
      const hora = new Date ().getHours()
      if (hora >=0 && hora < 13){
        return <strong>Bom dia </strong> 
          }  
        else if (hora >=13 && hora < 18)
          {
        return  <strong>Bom tarde </strong> 
          }
      else{
        return <strong>Bom Noite </strong> 
         }
    }
   return(
     <>
        <h1>Renderização condicional</h1> 
        {cumprimento()}
        <p>{log?msglogin():msglogoff()}</p>
        <button onClick={()=>setLog(!log)}>{log?'Logooff':'Login'}</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div>
           <h1 style={retCord(cor)}>Jesus de ama!!</h1>
           <button onClick={()=>mudarCor()}>Mudar a cor</button>
        </div>

     </>
   )
 };
