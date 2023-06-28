import { useState } from 'react';

function useErros(validacoes) {
    const estadoIncial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoIncial);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)

    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        
        return true
    }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoIncial = {}
    for (let campo in validacoes) {
        estadoIncial[campo] = { valido: false, texto: "" }
    }

    return estadoIncial
}

export default useErros