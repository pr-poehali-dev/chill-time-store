import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DonationCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  color: "emerald" | "purple" | "yellow" | "blue";
}

const DonationCard = ({
  title,
  price,
  description,
  features,
  popular,
  color,
}: DonationCardProps) => {
  const colorClasses = {
    emerald:
      "border-emerald-500/50 bg-gradient-to-br from-emerald-900/20 to-slate-900 hover:border-emerald-400",
    purple:
      "border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-slate-900 hover:border-purple-400",
    yellow:
      "border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-slate-900 hover:border-yellow-400",
    blue: "border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-slate-900 hover:border-blue-400",
  };

  const buttonClasses = {
    emerald: "bg-emerald-600 hover:bg-emerald-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    yellow: "bg-yellow-600 hover:bg-yellow-700",
    blue: "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <Card
      className={`relative transition-all duration-300 hover:scale-105 border-2 ${colorClasses[color]} backdrop-blur-sm`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
            ⭐ ПОПУЛЯРНО
          </div>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white font-rubik">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
        <div className="text-4xl font-black text-yellow-400 mt-2">{price}₽</div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Icon
                name="Check"
                size={16}
                className="text-emerald-400 mr-3 flex-shrink-0"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${buttonClasses[color]} text-white font-bold py-3 text-lg hover:scale-105 transition-transform`}
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
