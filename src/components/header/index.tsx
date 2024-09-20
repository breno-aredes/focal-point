import "@/styles/components/header.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Header() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <div className="header-container">
      <header>
        <Image src={Logo} alt="Logo" />
        <h1>Bem-vindo de volta, Marcus</h1>
        <h2>{formattedDate}</h2>
      </header>
    </div>
  );
}
