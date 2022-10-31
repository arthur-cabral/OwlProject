import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonProps = {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size: 'small' | 'medium' | 'large';
  text: string;
}

export default function ButtonVariant(props: ButtonProps) {
  return (
    <Button variant={props.variant}>{props.text}</Button>
  );
}