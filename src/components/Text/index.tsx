type TextProps = {
  title: string;
};

export default function Text({ title }: TextProps) {
  return <p>{title}</p>;
}
