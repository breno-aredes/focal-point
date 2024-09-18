import Header from "@/components/header";
import Main from "@/components/main";
import "@/styles/pages/home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Main />
    </div>
  );
}
