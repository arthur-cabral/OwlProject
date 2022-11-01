import TextField from '@mui/material/TextField';

type SearchBarProps = {
  placeholder: string;
  width: string;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <TextField
      id="outlined-search"
      label={props.placeholder}
      type="search"
      variant="outlined"
      sx={{ width: props.width }}
    />
  );
}