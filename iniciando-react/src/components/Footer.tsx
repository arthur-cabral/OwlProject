import { Box, Container, List, ListItemButton, ListItemText, Stack } from "@mui/material"

export default function Footer() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#003249", color: "#CCDBDC", padding: "1rem", marginTop: "5rem" }}>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column">
              <p style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "1rem 0"
              }}>Navegue pelo nosso site!</p>
              <List>
                <ListItemButton href="/sobre-nos">
                  <ListItemText primary="Sobre nós" />
                </ListItemButton>
                <ListItemButton href="/contato">
                  <ListItemText primary="Contato" />
                </ListItemButton>
                <ListItemButton href="/login">
                  <ListItemText primary="Login" />
                </ListItemButton>
                <ListItemButton href="/cadastro">
                  <ListItemText primary="Cadastro" />
                </ListItemButton>
              </List>
            </Stack>
            <Stack direction="column">
              <p style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "1rem 0"
              }}>Entre em contato conosco</p>
              <List>
                <ListItemButton href="https://www.instagram.com">
                  <ListItemText primary="Instagram" />
                </ListItemButton>
                <ListItemButton href="https://www.facebook.com">
                  <ListItemText primary="Facebook" />
                </ListItemButton>
                <ListItemButton href="https://twitter.com/home">
                  <ListItemText primary="Twitter" />
                </ListItemButton>
                <ListItemButton href="https://www.linkedin.com">
                  <ListItemText primary="Linkedin" />
                </ListItemButton>
              </List>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}