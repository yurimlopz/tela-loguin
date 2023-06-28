import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';

import React, { useContext, useState } from 'react';
import ValidacaoCadastro from '../contexts/ValidacaoCadastro';
import useErros from '../../Hooks/useErros';



export default function DadosDeloguin(aoEnviar) {
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');
const validacoes = useContext(ValidacaoCadastro);
const [erros, validarCampos,possoEnviar] = useErros(validacoes);

    return (
        
        <form onSubmit={(event)=>{
            event.preventDefault()
                if(possoEnviar()){
                    aoEnviar({usuario,senha})
                }
                console.log({usuario,senha})
        }}>
            <TextField
                onChange={(event) => {
                    setUsuario(event.target.value)
                }}
                value={usuario}
                onBlur={validarCampos}
                fullWidth
                margin='normal'
                label="Usuario"
                variant='filled'
                required
                name='usuario'
                id='Loguin'
                type='text'
                error={erros.usuario.valido}
                helperText={erros.usuario.texto}
            />

            <TextField
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                value={senha}
                onBlur={validarCampos}
                error={erros.senha.valido}
                helperText={erros.senha.texto}
                fullWidth
                margin='normal'
                label="Senha"
                variant='filled'
                required name='senha'
                id='password'
                type='password'
            />

            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Manter Conectado"
            />

            <Button type='submit' margin="normal" fullWidth color='error' variant="contained">ACESSAR</Button>
        </form>
    )
}
