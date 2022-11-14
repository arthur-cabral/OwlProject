import IconButton from '@mui/material/IconButton';

type IconButtonProps = {
  onClick?: () => void;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  icon: JSX.Element;
}

export default function IconButtonVariant(props: IconButtonProps) {
  return (
    <IconButton color={props.color}>
      {props.icon}
    </IconButton>
  );
}