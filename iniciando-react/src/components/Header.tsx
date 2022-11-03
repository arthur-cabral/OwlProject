import ButtonVariant from "./Button";
import DropBox from "./DropBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LogoOwl from "../assets/images/owlLogo.png";
import { Link } from "@mui/material";

export function Header() {
  return (
    <Box
      sx={
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDir: "row",
          paddingTop: "1rem",
        }
      } >
      <DropBox />
      <Link href="/">
        <img src={LogoOwl} alt="Logo Owl" style={{ width: "5rem", height: "5rem" }}
        />
      </Link>
      <Stack direction="row" spacing={2}>
        <ButtonVariant text="Sobre nós" variant="text" color="primary" size="medium" />
        <ButtonVariant text="Contato" variant="text" color="primary" size="medium" />
        <ButtonVariant text="Login" variant="contained" color="primary" size="medium" />
        <ButtonVariant text="Cadastro" variant="contained" color="secondary" size="medium" />
      </Stack>
    </Box>
  )
}