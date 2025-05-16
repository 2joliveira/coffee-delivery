import { CheckoutProps } from "../../pages/Checkout";
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

export interface PurchaseDataProps extends CheckoutProps {
  selectedCoffees: SelectedCoffeeProps[];
  date: Date;
}

interface CoffeesState {
  selectedCoffees: SelectedCoffeeProps[];
  purchaseData: PurchaseDataProps | null;
  purchaseHistory: PurchaseDataProps[];
}

export function coffeesShopReducer(
  state: CoffeesState,
  action: any
) {
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

    case ActionsTypes.SAVE_PURCHASE_DATA:
      return {
        ...state,
        selectedCoffees: [],
        purchaseData: action.payload,
      };

    case ActionsTypes.SAVE_PURCHASE_ON_HISTORY:
      console.log('action.payload', state);
      return {
        ...state,
        purchaseData: null,
        purchaseHistory: [...state.purchaseHistory, { ...action.payload }],
      };

    default:
      return state;
  }
}
