import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React from 'react';

// const [age, setAge] = React.useState('');

// const handleChange = (event: SelectChangeEvent) => {
//   setAge(event.target.value as string);
// };

export default function DropBox() {
  return (
    <FormControl sx={{ m: 1, minWidth: 400 }}>
      <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

