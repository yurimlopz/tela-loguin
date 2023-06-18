import React, { useState} from 'react';

function useErros(validacoes){
    const estadoIncial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoIncial);
    
    function validarCampos(event){
        const {name, value } = event.target;
        const novoEstado ={...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
       
    }

   return [erros, validarCampos];
}


function criarEstadoInicial(validacoes){
    const estadoIncial = {}
        for(let campo in validacoes){
            estadoIncial[campo] = {valido:false, texto:""}
           
        }

        return estadoIncial
}

export default useErros