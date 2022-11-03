import { Link, Stack } from "@mui/material";

export default function HeaderLogin() {
  return (
    <Stack
      direction="row" justifyContent="space-between" sx={{ margin: "1rem 0" }}
    >
      <p>Owl</p>
      <Stack
        direction="row" alignItems={"center"} spacing={2}
      >
        <p>Ainda não possui uma conta?</p>
        <Link href="/cadastro" underline="none">Cadastre-se</Link>
      </Stack>
    </Stack>
  )
}