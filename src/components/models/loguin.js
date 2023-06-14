function validarUsuario(usuario){
    if(usuario.length <= 4 || usuario.length >= 7){
        return {valido:false, texto:"O seu nome de usuario deve ser maior que 4 caracteres"}
    }else{
        return {valido:true, texto:''}
    }
}

function validarSenha(senha){
    console.log(senha)
}

export{validarSenha, validarUsuario}