import { Link, Stack } from "@mui/material";
import LogoOwl from "../assets/images/owlLogo.png";
import Title from "./Title";

export default function HeaderLogin() {
  return (
    <Stack
      direction="row" justifyContent="space-between" sx={{ margin: "1rem 0" }}
    >
      <Link href="/">
        <img src={LogoOwl} alt="Logo Owl" style={{ width: "5rem", height: "5rem" }}
        />
      </Link>
      <Stack
        direction="row" alignItems={"center"} spacing={2}
      >
        <Title fontSize="1.5rem" text="Ainda não possui uma conta?" />
        <Link href="/cadastro" underline="none"><Title fontSize="1.5rem" text="Cadastre-se" /></Link>
      </Stack>
    </Stack>
  )
}