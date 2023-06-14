import React from 'react';
import { Container } from "@mui/material";
import { DadosDeLoguin } from './components/Form-Loguin';
import ValidacaoCadastro from './components/contexts/ValidacaoCadastro';
import { validarUsuario, validarSenha } from './components/models/loguin';



function App() {
  return (
    <Container  component='article' maxWidth="large">
      <div>
      <h1>Consistem</h1>
      <ValidacaoCadastro.Provider value={{usuario:validarUsuario, senha:validarSenha}}>
          <DadosDeLoguin/>
      </ValidacaoCadastro.Provider>
      </div>
      <img src=''></img>
    </Container>
  );
}

export default App;

