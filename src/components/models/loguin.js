function validarUsuario(usuario){
    if(usuario.length <= 4 || usuario.length >= 7){
        return {valido:true, texto:"O seu nome de usuario deve ser maior que 4 caracteres"}
    }else{
        return {valido:false, texto:''}
    }
}

function validarSenha(senha){
    if(senha.length <= 4 || senha.length >= 7){
        return {valido:true, texto:"O seu senha não deve ser maior que 4 caracteres"}
    }else{
        return {valido:false, texto:''}
    }
    
}

export{validarSenha, validarUsuario}