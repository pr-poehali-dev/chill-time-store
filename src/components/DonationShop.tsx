import DonationCard from "./DonationCard";

const DonationShop = () => {
  const donations = [
    {
      title: "VIP",
      price: 199,
      description: "Базовый VIP статус",
      color: "emerald" as const,
      features: [
        "Префикс [VIP] в чате",
        "Возможность летать в лобби",
        "Доступ к VIP зонам",
        "Больше слотов в рюкзаке",
        "Цветной ник в табе",
      ],
    },
    {
      title: "PREMIUM",
      price: 399,
      description: "Продвинутые возможности",
      color: "purple" as const,
      popular: true,
      features: [
        "Все привилегии VIP",
        "Префикс [PREMIUM] в чате",
        "Команда /heal каждые 5 минут",
        "Команда /feed каждые 10 минут",
        "Доступ к Premium кейсам",
        "Персональные варпы (5 штук)",
      ],
    },
    {
      title: "LEGEND",
      price: 799,
      description: "Легендарный статус игрока",
      color: "yellow" as const,
      features: [
        "Все привилегии PREMIUM",
        "Префикс [LEGEND] в чате",
        "Возможность использовать /god",
        "Команда /repair для починки",
        "Доступ к Legend кейсам",
        "Персональные варпы (10 штук)",
        "Создание собственных команд",
      ],
    },
    {
      title: "ADMIN",
      price: 1499,
      description: "Администраторские права",
      color: "blue" as const,
      features: [
        "Все привилегии LEGEND",
        "Префикс [ADMIN] в чате",
        "Модераторские команды",
        "Доступ к Admin панели",
        "Безлимитные варпы",
        "Создание событий",
        "Управление экономикой сервера",
      ],
    },
  ];

  return (
    <section id="shop" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text font-rubik mb-4 stretch-text">
            ДОНАТ МАГАЗИН
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Поддержи сервер и получи крутые привилегии! Все покупки помогают
            развивать проект.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donations.map((donation, index) => (
            <DonationCard key={index} {...donation} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            💳 Принимаем: Банковские карты, QIWI, ЮMoney, СБП
          </p>
          <p className="text-emerald-400 font-bold">
            🎁 При покупке от 500₽ — бонусные кейсы в подарок!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationShop;
