import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CoffeeProps } from "../pages/Home/interface";
import coffeesMock from "@/mocks/coffees.json";

interface CoffeeShopProviderProps {
  children: ReactNode;
}

interface CoffeeShopContextProps {
  coffees: CoffeeProps[];
  selectedCoffees: CoffeeProps[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

const CoffeeShopContext = createContext<CoffeeShopContextProps>(
  {} as CoffeeShopContextProps
);

export const CoffeeShoProvider: React.FC<CoffeeShopProviderProps> = ({
  children,
}: CoffeeShopProviderProps) => {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(coffeesMock);
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeProps[]>([]);

  useEffect(() => {
    console.log('effect')
    setSelectedCoffees(coffees.filter((coffee) => coffee.quantity > 0));
  }, [coffees]);

  function addToCart(id: string) {
    return setCoffees((prevState) =>
      prevState.map((currentCoffee) =>
        currentCoffee.id === id
          ? { ...currentCoffee, quantity: currentCoffee.quantity + 1 }
          : currentCoffee
      )
    );
  }

  function removeFromCart(id: string) {
    return setCoffees((prevState) =>
      prevState.map((currentCoffee) =>
        (currentCoffee.id === id &&  currentCoffee.quantity > 0)
          ? { ...currentCoffee, quantity: currentCoffee.quantity - 1 }
          : currentCoffee
      )
    );
  }

  console.log('selecteds', selectedCoffees)

  return (
    <CoffeeShopContext.Provider
      value={{
        coffees,
        selectedCoffees,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  );
};

export function useCoffeeShop(): CoffeeShopContextProps {
  const context = useContext(CoffeeShopContext);

  return context;
}
