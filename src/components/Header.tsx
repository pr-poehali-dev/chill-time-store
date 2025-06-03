import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-rubik">
                Chill Time
              </h1>
              <p className="text-emerald-400 text-sm">Minecraft Server</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#shop"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Магазин
            </a>
            <a
              href="#info"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              О сервере
            </a>
            <a
              href="#rules"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Правила
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Icon name="Users" size={16} className="mr-2" />
              Играть
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
