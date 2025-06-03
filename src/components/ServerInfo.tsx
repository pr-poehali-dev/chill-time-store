import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  return (
    <section
      id="info"
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white font-rubik mb-4">
            О СЕРВЕРЕ
          </h2>
          <p className="text-xl text-gray-300">Твой дом в мире Minecraft</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Защита от гриферов
            </h3>
            <p className="text-gray-300">
              Приватные территории и активная модерация
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Мощное железо</h3>
            <p className="text-gray-300">
              Высокая производительность без лагов
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Дружное сообщество
            </h3>
            <p className="text-gray-300">Более 5000 активных игроков</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-emerald-400 mb-6 font-rubik">
              🌟 Режимы игры
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-white font-semibold">Выживание</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚔️</div>
                <div className="text-white font-semibold">PvP Арена</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏗️</div>
                <div className="text-white font-semibold">Креатив</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-white font-semibold">Мини-игры</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
