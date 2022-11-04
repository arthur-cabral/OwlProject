type TitleProps = {
  text: string;
  color?: string;
  fontSize?: string;
}

export default function Title(props: TitleProps) {
  return (
    <h1 style={{ color: props.color, fontSize: props.fontSize }}>{props.text}</h1>
  );
}