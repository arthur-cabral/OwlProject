import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Stack } from "@mui/material";
import Button from "./Button";

type FormProps = {
  tipo: string;
};

export default function Form(props: FormProps) {
  return (
    <>
      {
        props.tipo === "login" ? (
          <form>
            <Stack spacing={4}>
              <FormControl>
                <Input id="input-login" placeholder="Login" />
              </FormControl>
              <FormControl>
                <Input id="input-password" placeholder="Senha" />
              </FormControl>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Continuar conectado?" />
              </FormGroup>
              <Button variant="contained" text="Entrar" />
            </Stack>
          </form>
        )
          : props.tipo === "cadastro" ? (
            <form>
              <Stack spacing={4}>
                <FormControl>
                  <Input id="input-login" placeholder="Login" />
                </FormControl>
                <FormControl>
                  <Input id="input-password" placeholder="Senha" />
                </FormControl>
                <FormControl>
                  <Input id="input-confirm-password" placeholder="Confirmar senha" />
                </FormControl>
                <Button variant="contained" text="Cadastrar" />
              </Stack>
            </form>
          ) : null
      }
    </>
  )
}