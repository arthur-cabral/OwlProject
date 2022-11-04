import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonProps = {
  variant: 'text' | 'outlined' | 'contained';
  text: string;
  onClick?: () => void;
  action?: () => void;
}

export default function ButtonVariant(props: ButtonProps) {
  return (
    <Button onClick={props.onClick} action={props.action} variant={props.variant}>{props.text}</Button>
  );
}