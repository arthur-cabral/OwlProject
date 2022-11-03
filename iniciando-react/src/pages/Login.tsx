import { Container } from "@mui/material";
import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";

export function Login() {
  return (
    <div>
      <Container>
        <HeaderLogin />
      </Container>
      <Footer />
    </div>
  )
}