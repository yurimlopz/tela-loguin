import { useState, useEffect } from 'react'
import DadosDeLoguin from'./DadosDeLoguin.jsx'

export default function FormularioDeLoguin() {

   const [dadosColetados, setDados] = useState({})
   
   console.log(dadosColetados, "*" )
 
   return( <DadosDeLoguin aoEnviar={coletarDados} />)
        
        function coletarDados (dados){
            setDados({...dadosColetados, ...dados})
            console.log(dados)
        
        }
}