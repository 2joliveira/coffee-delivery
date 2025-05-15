import { ActionsTypes } from "./actions";

export interface CoffeeProps {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  ingredients: string[];
  quantity: number;
}

export interface SelectedCoffeeProps extends CoffeeProps {
  quantity: number;
}

interface CoffeesState {
  selectedCoffees: SelectedCoffeeProps[];
}

export function coffeesShopReducer(
  state: CoffeesState,
  action: any
): CoffeesState {
  const currentCoffeeIndex = state.selectedCoffees.findIndex(
    (coffee) => coffee.id === action.payload.id
  );

  switch (action.type) {
    case ActionsTypes.ADD_TO_CART:
      return {
        ...state,
        selectedCoffees:
          currentCoffeeIndex < 0
            ? [...state.selectedCoffees, action.payload.coffee]
            : state.selectedCoffees.map((coffee) =>
                coffee.id === action.payload.id
                  ? {
                      ...coffee,
                      quantity:
                        coffee.quantity + action.payload.coffee.quantity,
                    }
                  : coffee
              ),
      };

    case ActionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        selectedCoffees: state.selectedCoffees.filter(
          (currentCoffee) => currentCoffee.id !== action.payload.id
        ),
      };

    case ActionsTypes.SET_QUANTITY:
      return {
        ...state,
        selectedCoffees: state.selectedCoffees.map((coffee) =>
          coffee.id === action.payload.id
            ? { ...coffee, quantity: action.payload.quantity }
            : coffee
        ),
      };

    default:
      return state;
  }
}
