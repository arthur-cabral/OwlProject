import { Box, Container, Stack } from "@mui/material";
import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";


export function Home() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Box sx={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDir: "column",
          marginTop: "3rem"
        }
      }>
        <SearchBar placeholder="Pesquise algum curso" width="60%" />
      </Box>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ marginTop: "3rem" }}>
        <Box sx={{ width: "40%" }}>
          <span style={{ fontSize: "3rem" }}>A primeira plataforma de aulas particulares que aborda qualquer matéria, desde o primário até a pós graduação.</span>
          <span style={{ fontSize: "3rem" }}> Conheça mais clicando aqui! </span>
        </Box>
        <Box sx={{ width: "40%" }}>
          <span style={{ fontSize: "5rem", wordWrap: "break-word", textAlign: "revert" }}>Encontre aulas de qualquer tema. Qualquer um mesmo!</span>
        </Box>
      </Stack>
      <Stack direction="row">

      </Stack>
    </Container>
  )
}