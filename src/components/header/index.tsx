import "@/styles/components/header.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <Image src={Logo} alt="Logo" />
        <h1>Bem-vindo de volta, Marcus </h1>
        <h2>Segunda, 01 de dezembro de 2025</h2>
      </header>
    </div>
  );
}
