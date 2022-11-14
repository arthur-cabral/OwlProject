import { useEffect, useState } from 'react'
// import { AuthContext } from "../providers/auth";
import { requests } from "../services/api";

export default function UseUserData() {
  const [usuario, setUsuario] = useState({})
  useEffect(() => {
    if (localStorage.getItem('autenticado') === 'true') {
      requests.usuario.getUser()
        .then((response) => {
          setUsuario(response.data);
        }).catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return usuario;
}
