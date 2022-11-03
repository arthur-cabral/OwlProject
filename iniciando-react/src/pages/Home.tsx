import { Box, Container, Stack } from "@mui/material";
import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ImgCardReact from "../assets/images/cardReact.jpg";

export function Home() {
  return (
    <>
      <Container maxWidth='lg'>
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
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ margin: "3rem 0" }}>
          <Box sx={{ width: "40%" }}>
            <p style={{ fontSize: "2rem", fontWeight: "normal" }}>A primeira plataforma de aulas particulares que aborda qualquer matéria, desde o primário até a pós graduação. </p>
            <p style={{ fontSize: "2rem", fontWeight: "normal" }}> Conheça mais clicando aqui! </p>
          </Box>
          <Box sx={{ width: "40%" }}>
            <p style={{
              fontSize: "4rem", wordWrap: "break-word", textAlign: "right"
            }}>
              Encontre aulas de qualquer tema. Qualquer um mesmo!
            </p>
          </Box>
        </Stack>
        <Stack direction="column">
          <p style={{ fontSize: "2rem", marginBottom: "2rem" }}>Cursos em destaque</p>
          <Stack direction="row" spacing={5}>
            <Card img={ImgCardReact} title="Desenvolvimento React com Next JS e Angular" bgc="#003249" />
            <Card img={ImgCardReact} title="Desenvolvimento React com Next JS e Angular" bgc="#9AD1D4" />
            <Card img={ImgCardReact} title="Desenvolvimento React com Next JS e Angular" bgc="#80CED7" />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  )
}