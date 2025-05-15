import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  CoffeeProps,
  coffeesShopReducer,
} from "../reducers/coffeesShop/reducer";
import {
  addCoffeeToCart,
  removeCoffeeFromCart,
  setCoffeeQuantity,
} from "../reducers/coffeesShop/actions";

interface CoffeeShopProviderProps {
  children: ReactNode;
}

interface CoffeeShopContextProps {
  selectedCoffees: CoffeeProps[];
  addToCart: (id: string, coffee: CoffeeProps) => void;
  removeFromCart: (id: string) => void;
  changeCoffeeQuantity: (id: string, quantity: number) => void;
}

const CoffeeShopContext = createContext<CoffeeShopContextProps>(
  {} as CoffeeShopContextProps
);

export const CoffeeShoProvider: React.FC<CoffeeShopProviderProps> = ({
  children,
}: CoffeeShopProviderProps) => {
  const [coffeesShopState, dispatch] = useReducer(
    coffeesShopReducer,
    {
      selectedCoffees: [],
    },
    (initialState) => {
      const storedStateJSON = localStorage.getItem("@coffee-shop");

      if (storedStateJSON) return JSON.parse(storedStateJSON);

      return initialState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesShopState);

    localStorage.setItem("@coffee-shop", stateJSON);
  }, [coffeesShopState]);

  function addToCart(id: string, coffee: CoffeeProps) {
    return dispatch(addCoffeeToCart(id, coffee));
  }

  function removeFromCart(id: string) {
    return dispatch(removeCoffeeFromCart(id));
  }

  function changeCoffeeQuantity(id: string, quantity: number) {
    dispatch(setCoffeeQuantity(id, quantity));
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        selectedCoffees: coffeesShopState.selectedCoffees,
        addToCart,
        removeFromCart,
        changeCoffeeQuantity,
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
