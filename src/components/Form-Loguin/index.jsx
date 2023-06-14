import { TextField, Button,FormControlLabel, Checkbox } from '@mui/material';

import React, {useState} from 'react';

export function DadosDeLoguin(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    console.log(usuario)

    return(
        <form>
           
            <TextField
            onChange={(event)=>{
                setUsuario(event.target.value)
            }}
            value={usuario}
                fullWidth
                margin='normal'
                label="Usuario"
                variant='filled'
                required
                name='usuario' 
                id='Loguin'
                type='text'
                error={true}
                helperText={"Campo Obrigatorio"}
            />

            <TextField
                onChange={(event)=>{
                    setSenha(event.target.value)
                }}
                value={senha}
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

            <Button margin="normal" fullWidth color='error' variant="contained">ACESSAR</Button>
        </form>
    )
}