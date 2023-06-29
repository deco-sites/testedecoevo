export interface Props {
  title: string;
}

export default function GetStarted({ title }: Props) {
  return <div>{title}</div>;
}
