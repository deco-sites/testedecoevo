export interface Props {
  title: string;
}

export default function Swipper({ title }: Props) {
  return <div>{title}</div>;
}
