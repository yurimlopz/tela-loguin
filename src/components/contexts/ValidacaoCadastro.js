import React from 'react';


const ValidacaoCadastro = React.createContext({
    usuario: semValidacao,
    senha: semValidacao
})

function semValidacao(dados){
    return {valido:true, texto: ""}
}

export default ValidacaoCadastro 