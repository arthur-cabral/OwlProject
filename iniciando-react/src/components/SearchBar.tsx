import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <TextField
      id="outlined-search"
      label="Pesquise algum curso"
      type="search"
      variant="outlined"
    />
  );
}