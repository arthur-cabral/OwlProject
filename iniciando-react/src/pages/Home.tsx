import { Container } from "@mui/material";
import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";


export function Home() {
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        {/* <SearchBar /> */}
      </Container>
    </div>
  )
}