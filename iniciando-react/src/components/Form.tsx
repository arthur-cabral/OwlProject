import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { requests } from "../services/api";
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik'
import * as yup from 'yup'


type FormProps = {
  tipo: string;
};

const validationsLogin = yup.object().shape({
  emailU: yup.string()
    .email('Email inválido')
    .required('Campo obrigatório')
    .typeError('Email inválido')
    .nullable(),
  passwordU: yup.string()
    .min(8, 'Mínimo de 8 caracteres')
    .required('Campo obrigatório')
    .nullable(),
})

const validationsRegister = yup.object().shape({
  nameU: yup.string()
    .min(3, 'Mínimo de 3 caracteres')
    .required('Campo obrigatório')
    .nullable(),
  emailU: yup.string()
    .email('Email inválido')
    .required('Campo obrigatório')
    .nullable(),
  passwordU: yup.string()
    .min(6, 'Mínimo de 8 caracteres')
    .required('Campo obrigatório')
    .nullable(),
  passwordConfirmationU: yup.string()
    .oneOf([yup.ref('passwordU'), null], 'Senhas não conferem')
    .required('Campo obrigatório')
    .nullable()
})

export default function Form(props: FormProps) {
  const [tipo, setTipo] = useState(props.tipo);
  const [userLogin, setUserLogin] = useState({
    emailU: "",
    passwordU: "",
  });

  const [userRegister, setUserRegister] = useState({
    nameU: "",
    emailU: "",
    passwordU: "",
  });

  const initialValuesLogin = {
    emailU: '',
    passwordU: ''
  }

  const initialValuesRegister = {
    nameU: '',
    emailU: '',
    passwordU: '',
    passwordConfirmationU: ''
  }

  const handleOnChangeLogin = (event: any) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChangeRegister = (event: any) => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any, resetForm: any) => {
    try {
      if (tipo === "login") {
        await requests.usuario.login(userLogin).then((response) => {
          if (response.status === 200) {
            // voltar para a pagina inicial
            localStorage.setItem('autenticado', 'true');
            window.location.reload();
          } else {
            resetForm();
          }
        })
      } else if (tipo === "cadastro") {
        var findUser = await requests.usuario.getUserByEmail(userRegister.emailU);
        if (findUser.data.length === 0) {
          await requests.usuario.register(userRegister).then((response) => {
            if (response.status === 201) {
              setTipo("login");
              resetForm();
            } else {
              resetForm();
            }
          })
        } else {
          resetForm();
          alert("Email já cadastrado");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForm = () => {
    if (tipo === "login") {
      setTipo("cadastro");
    } else {
      setTipo("login");
    }
  }

  return (
    <>
      {
        tipo === "login" ?
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationsLogin}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSubmit(values, actions.resetForm)
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <FormikForm onChange={props.handleChange} onSubmit={props.handleSubmit}>
                <Stack spacing={4}>
                  <FormControl>
                    <Input
                      type="text"
                      onChange={(e) => { handleOnChangeLogin(e) }}
                      onBlur={props.handleBlur}
                      value={props.values.emailU}
                      placeholder="E-mail"
                      name="emailU"
                    />
                    {props.errors.emailU && <div id="feedback">{props.errors.emailU}</div>}
                  </FormControl>
                  <FormControl>
                    <Input
                      type="password"
                      onChange={(e) => { handleOnChangeLogin(e) }}
                      onBlur={props.handleBlur}
                      value={props.values.passwordU}
                      placeholder="Senha"
                      name="passwordU"
                    />
                    {props.errors.passwordU && <div id="feedback">{props.errors.passwordU}</div>}
                  </FormControl>
                  <FormControl>
                    <FormControlLabel control={<Checkbox />} label="Continuar conectado?" />
                  </FormControl>
                  <Button variant="contained" type="submit" >Login</Button>
                  <Button variant="text" onClick={handleChangeForm}>Cadastre-se</Button>
                </Stack>
              </FormikForm>
            )}
          </Formik>
          : tipo === "cadastro" ?
            <Formik
              initialValues={initialValuesRegister}
              validationSchema={validationsRegister}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  handleSubmit(values, actions.resetForm)
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {props => (
                <FormikForm onChange={props.handleChange} onSubmit={props.handleSubmit}>
                  <Stack spacing={4}>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => { handleOnChangeRegister(e) }}
                        onBlur={props.handleBlur}
                        value={props.values.nameU}
                        placeholder="Nome"
                        name="nameU"
                      />
                      {props.errors.nameU && <div id="feedback">{props.errors.nameU}</div>}
                    </FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => { handleOnChangeRegister(e) }}
                        onBlur={props.handleBlur}
                        value={props.values.emailU}
                        placeholder="E-mail"
                        name="emailU"
                      />
                      {props.errors.emailU && <div id="feedback">{props.errors.emailU}</div>}
                    </FormControl>
                    <FormControl>
                      <Input
                        type="password"
                        onChange={(e) => { handleOnChangeRegister(e) }}
                        onBlur={props.handleBlur}
                        value={props.values.passwordU}
                        placeholder="Senha"
                        name="passwordU"
                      />
                      {props.errors.passwordU && <div id="feedback">{props.errors.passwordU}</div>}
                    </FormControl>
                    <FormControl>
                      <Input
                        type="password"
                        onChange={(e) => { handleOnChangeRegister(e) }}
                        onBlur={props.handleBlur}
                        value={props.values.passwordConfirmationU}
                        placeholder="Confirme a senha"
                        name="passwordConfirmationU"
                      />
                      {props.errors.passwordConfirmationU && <div id="feedback">{props.errors.passwordConfirmationU}</div>}
                    </FormControl>
                    <Button variant="contained" type="submit" >Cadastrar</Button>
                    <Button variant="text" onClick={handleChangeForm}>Já tenho uma conta</Button>
                  </Stack>
                </FormikForm>
              )}
            </Formik>
            // <Formik validationSchema={validationsRegister}
            //   initialValues={initialValuesRegister}
            //   onSubmit={handleSubmit}
            // >
            //   {(props) => (
            //     <FormikForm onChange={handleOnChangeLogin} autoComplete="off">
            //       <Stack spacing={4}>
            //         <FormControl>
            //           <Input onChange={(e) => { handleOnChangeRegister(e) }} name="nameU" id="nameU" placeholder="Nome" />
            //           <ErrorMessage name="nameU" component="span" />
            //         </FormControl>
            //         <FormControl>
            //           <Input onChange={(e) => { handleOnChangeRegister(e) }} name="emailU" id="emailU" placeholder="E-mail" />
            //           <ErrorMessage name="emailU" component="span" />
            //         </FormControl>
            //         <FormControl>
            //           <Input onChange={(e) => { handleOnChangeRegister(e) }} name="passwordU" id="passwordU" type="password" placeholder="Senha" />
            //           <ErrorMessage name="passwordU" component="span" />
            //         </FormControl>
            //         <FormControl>
            //           <Input name="passwordConfirmationU" id="passwordConfirmationU" type="password" placeholder="Confirmar senha" />
            //           <ErrorMessage name="passwordConfirmationU" component="span" />
            //         </FormControl>
            //         <Button onClick={(e) => { handleSubmit(e, props.resetForm(initialValuesRegister)) }} variant="contained" type="submit" >Cadastrar</Button>
            //         <Button onClick={() => { handleChangeForm() }} variant="text">Já tenho uma conta</Button>
            //       </Stack>
            //     </FormikForm>
            //   )}
            // </Formik>
            : ""
      }
    </>
  )
}

