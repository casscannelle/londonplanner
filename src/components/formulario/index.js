import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { DownloadButton } from "../DownloadButton/DownloadButton";


export function Formulario() {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    cidade: ''
  });

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const data = {
        nome: formValues.nome,
        email: formValues.email,
        cidade: formValues.cidade
    }
    axios.post('https://sheet.best/api/sheets/b0883310-af68-4aad-9dac-31001a5239d1', data).then((response)=>{
        setFormValues({
            nome: '',
            email: '',
            cidade: ''
          });
        handleOpen()   
    })
        .catch((error) => {
            console.error("Um erro ocorreu ao enviar o formulario", error);
        });
  };

  return (
    <div>
      <div className="form-box" id="formulario">
        <div>
          <h2>Preencha com seus dados</h2>
          <p className="linha-fina">e receba o acesso para o planner:</p>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit} autoComplete="off" className="form-group">
            <div>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={formValues.nome}
                min-length="3"
                required
              />
            </div>
            <div>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={formValues.email}
                type="email"
                required
              />
            </div>
            <div>
              <TextField
                id="cidade"
                label="Cidade"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={formValues.cidade}
              />
            </div>
            <div className="form-button">
            <DownloadButton 
                type="submit" 
                variant="contained" 
                size="medium"
                text="Receber meu planner"
              />
            </div>
            <div className="disclaimer-p">
                <p>Não se preocupe, não vou usar esses dados para nada, apenas para simular o envio do formulário 😊</p>
            </div>
          </form>
        </div>
      </div>

      <Modal
      open={open}
      onClose={handleClose} 
      >
        <Box className="modal-confirmacao">
          <h2>Cadastro realizado!</h2>
          <p>Clique no botão abaixo para acessar o planner.</p>
          <DownloadButton
            variant="contained"
            size="medium"
            text="Acessar o planner"
            sx={{ mt: 2 }}
            onClick={() => window.open("https://www.notion.com", "_blank")}
          />  
          
        </Box>

      </Modal>

    </div>
  );
}
