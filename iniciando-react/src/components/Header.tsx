import Button from "@mui/material/Button";
import DropBox from "./DropBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";
import ModalComponents from "./ModalComponents";
import IconButton from "./IconButton";
import IconPerson from "@mui/icons-material/Person";
import LogoOwl from "../assets/images/owlLogo.png";

export function Header() {

  const handleLogout = () => {
    localStorage.setItem('autenticado', 'false');
    window.location.reload();
  }

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
        <Button variant="text">Sobre nós</Button>
        <Button variant="text">Contato</Button>
        {
          localStorage.getItem("autenticado") == 'false' ?
            <>
              <ModalComponents tipo="login" text="Login" />
              <ModalComponents tipo="cadastro" text="Cadastro" />
            </>
            :
            <>
              <IconButton icon={<IconPerson />} color="primary" />
              <Button variant="contained" color="error" onClick={() => handleLogout()}>Sair</Button>
            </>
        }
      </Stack>
    </Box >
  )
}