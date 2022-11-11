import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Stack } from "@mui/material";
import Button from "./Button";
import { useState } from "react";
import { requests } from "../services/api";
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik'
import * as yup from 'yup'


type FormProps = {
  tipo: string;
};


export default function Form(props: FormProps) {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChangeLogin = (event: any) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
    console.log(userLogin);
  };

  const handleOnChangeRegister = (event: any) => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
    console.log(userRegister);
  };

  const handleSubmitLogin = async () => {
    await requests.usuario.login(userLogin)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  const handleSubmitRegister = async () => {
    await requests.usuario.register(userRegister)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {
        props.tipo === "login" ?
          <form>
            <Stack spacing={4}>
              <FormControl>
                <Input onChange={(e) => { handleOnChangeLogin(e) }} name="email" id="email" placeholder="E-mail" />
              </FormControl>
              <FormControl>
                <Input onChange={(e) => { handleOnChangeLogin(e) }} name="password" id="password" placeholder="Senha" type="password" />
              </FormControl>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Continuar conectado?" />
              </FormGroup>
              <Button onClick={() => { handleSubmitLogin() }} text="Entrar" variant="contained" />
            </Stack>
          </form>
          : props.tipo === "cadastro" ?
            <form>
              <Stack spacing={4}>
                <FormControl>
                  <Input onChange={(e) => { handleOnChangeRegister(e) }} name="name" id="name" placeholder="Nome" />
                </FormControl>
                <FormControl>
                  <Input onChange={(e) => { handleOnChangeRegister(e) }} name="email" id="email" placeholder="E-mail" />
                </FormControl>
                <FormControl>
                  <Input onChange={(e) => { handleOnChangeRegister(e) }} name="password" id="password" type="password" placeholder="Senha" />
                </FormControl>
                <FormControl>
                  <Input onChange={(e) => { handleOnChangeRegister(e) }} name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirmar senha" />
                </FormControl>
                <Button onClick={() => { handleSubmitRegister() }} variant="contained" text="Cadastrar" />
              </Stack>
            </form>
            : ""
      }
    </>
  )
}

