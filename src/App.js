import React from 'react';
import { Box } from "@mui/material";
import styled from "styled-components";
import ValidacaoCadastro from './components/contexts/ValidacaoCadastro';
import { validarUsuario, validarSenha } from './components/models/loguin';
import FormularioDeLoguin from './components/FormularioDeLoguin/index.jsx'
import backgoundimg from './images/background.jpg'
import WebhookIcon from '@mui/icons-material/Webhook';

export const Icone = styled.img`
    width: 100%;
    height:100vh;
    
  `
function App() {
  return (
    <Box height='100vh'  display='flex' border='solid 1px red'>
      <Box  maxWidth='400px' display='flex'
           border='solid 2px red'
           flexDirection= 'column'
           alignItems='center'
           paddingLeft= '3%'
           paddingRight= '3%'

      >
        <WebhookIcon sx={{color:'grey', fontSize: '200px', paddingTop: '1.5rem'}}/>
        <ValidacaoCadastro.Provider value={{ usuario: validarUsuario, senha: validarSenha }}>
          <FormularioDeLoguin aoEnviar={aoEnviarLoguin} />
        </ValidacaoCadastro.Provider>

      </Box>
      <Box item  xs={9}>
        <Icone src={backgoundimg} />
      </Box>
    </Box>
  );

  function aoEnviarLoguin(dados) {
    console.log(dados)
  }
}

export default App;

