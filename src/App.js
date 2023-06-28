import React from 'react';
import { Grid, Box } from "@mui/material";
import styled from "styled-components";
import ValidacaoCadastro from './components/contexts/ValidacaoCadastro';
import { validarUsuario, validarSenha } from './components/models/loguin';
import FormularioDeLoguin from './components/FormularioDeLoguin/index.jsx'
import backgoundimg from './images/background.jpg'
import logo from './images/logo-lg.png'

export const Icone = styled.img`
    width: 100%;
    height: 100vh;
  `
export const Logo = styled(Icone)`
 height : 20%;
  width: 35%;
`



function App() {
  return (
    <Grid container spacing={2}>
      <Grid container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        item xs={4}
      >
        <Logo src={logo} />
        <ValidacaoCadastro.Provider value={{ usuario: validarUsuario, senha: validarSenha }}>
          <FormularioDeLoguin aoEnviar={aoEnviarLoguin} />
        </ValidacaoCadastro.Provider>
      </Grid>
      <Grid item xs={8}>
        <Icone src={backgoundimg} />
      </Grid>
    </Grid>
  );

  function aoEnviarLoguin(dados) {
    console.log(dados)
  }
}

export default App;

