import { Box, Stack } from "@mui/material";

type CardCursoProps = {
  img: string;
  title: string;
  bgc: string;
}

export default function CardCurso(props: CardCursoProps) {
  return (
    <Stack direction="column" spacing={2} sx={{ width: "25em" }}>
      <Box sx={{ marginBottom: "2rem", height: "15em", backgroundColor: props.bgc }} />
      <span style={{ fontSize: "1.5rem" }}>{props.title}</span>
    </Stack>
  )
}