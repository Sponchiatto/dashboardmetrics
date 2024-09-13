interface TitleH1Props {
  title: string;
  className?: string; // Permite que classNames sejam opcionais
}

export default function TitleH1({ title, className = "" }: TitleH1Props) {
  return <h1 className={`text-center ${className}`}>{title}</h1>;
}
