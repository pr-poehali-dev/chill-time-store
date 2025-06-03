import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonationShop from "@/components/DonationShop";
import ServerInfo from "@/components/ServerInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <DonationShop />
      <ServerInfo />

      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Chill Time Server. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Не является официальным продуктом Minecraft. Не одобрено и не
            связано с Mojang или Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
