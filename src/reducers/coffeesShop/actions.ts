import { CoffeeProps, PurchaseDataProps } from "./reducer";

export enum ActionsTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SET_QUANTITY = "SET_QUANTITY",
  SAVE_PURCHASE_DATA = "SAVE_PURCHASE_DATA",
  SAVE_PURCHASE_ON_HISTORY = "SAVE_PURCHASE_ON_HISTORY",
}

export function addCoffeeToCart(id: string, coffee: CoffeeProps) {
  return {
    type: ActionsTypes.ADD_TO_CART,
    payload: { id, coffee },
  };
}

export function removeCoffeeFromCart(id: string) {
  return {
    type: ActionsTypes.REMOVE_FROM_CART,
    payload: { id },
  };
}

export function setCoffeeQuantity(id: string, quantity: number) {
  return {
    type: ActionsTypes.SET_QUANTITY,
    payload: { id, quantity },
  };
}

export function savePurchaseData(purchaseData: PurchaseDataProps) {
  return {
    type: ActionsTypes.SAVE_PURCHASE_DATA,
    payload: purchaseData,
  };
}

export function savePurchaseOnHistory(purchaseData: PurchaseDataProps) {
  return {
    type: ActionsTypes.SAVE_PURCHASE_ON_HISTORY,
    payload: purchaseData,
  }
}