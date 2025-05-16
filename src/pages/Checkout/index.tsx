import {
  CheckoutContainer,
  OrderContainer,
  SelectedCoffeesContainer,
  CoffeeList,
  CoffeeItem,
  CounterActions,
  CounterButton,
  ConfirmButton,
  PriceContent,
  TitleContent,
  RemoveButton,
  TitleContainer,
} from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCoffeeShop } from "../../contexts/CoffeeShopContext";
import { formatPrice } from "../../utils/formatPrice";
import { AddressForm } from "./components/AddressForm";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const validationSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-?\d{3}$/, {
    message: "CEP inválido. Use o formato 00000-000 ou 00000000.",
  }),
  street: zod.string().min(4, "Informe a rua em que reside."),
  number: zod.string().min(1, "Informe o número da sua residência."),
  complement: zod.string().optional(),
  district: zod.string().min(4, "Informe seu bairro."),
  city: zod.string().min(4, "Informe sua cidade."),
  uf: zod.string().min(2, "Informe o UF."),
  paymentMethod: zod.string().min(4, "Selecione a forma de pagamento."),
});

export type CheckoutProps = zod.infer<typeof validationSchema>;

export function Checkout() {
  const {
    selectedCoffees,
    changeCoffeeQuantity,
    removeFromCart,
    handleSavePurchaseData,
  } = useCoffeeShop();
  const navigate = useNavigate();

  const coffeeShopForm = useForm<CheckoutProps>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      paymentMethod: "money",
    },
  });

  const { reset, handleSubmit } = coffeeShopForm;

  const totalPrice = selectedCoffees.reduce(
    (currentPrice, { quantity, price }) => {
      return currentPrice + quantity * price;
    },
    0
  );

  const deliveryPrice = 3.5;

  function addCoffee(id: string, quantity: number) {
    changeCoffeeQuantity(id, quantity + 1);
  }

  function removeCoffee(id: string, quantity: number) {
    if (quantity > 1) changeCoffeeQuantity(id, quantity - 1);
    else removeFromCart(id);
  }

  const onSubmit = (data: CheckoutProps) => {
    handleSavePurchaseData({ ...data, selectedCoffees, date: new Date() });
    reset();
    navigate("/success");
  };

  const handleConfirm = handleSubmit(onSubmit);

  return (
    <CheckoutContainer>
      <OrderContainer>
        <h1>Complete seu pedido</h1>

        <FormProvider {...coffeeShopForm}>
          <AddressForm />
        </FormProvider>
      </OrderContainer>

      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>

        <main>
          <CoffeeList>
            {selectedCoffees.map(({ id, name, imagePath, quantity, price }) => (
              <CoffeeItem key={id}>
                <img src={imagePath} alt="" />

                <TitleContainer>
                  <TitleContent>{name}</TitleContent>
                  <div>
                    <CounterActions>
                      <CounterButton
                        type="button"
                        onClick={() => removeCoffee(id, quantity)}
                      >
                        <Minus size={17} weight="bold" />
                      </CounterButton>
                      <p>{quantity}</p>
                      <CounterButton
                        type="button"
                        onClick={() => addCoffee(id, quantity)}
                      >
                        <Plus size={17} weight="bold" />
                      </CounterButton>
                    </CounterActions>

                    <RemoveButton onClick={() => removeFromCart(id)}>
                      <Trash size={17} />
                      Remover
                    </RemoveButton>
                  </div>
                </TitleContainer>

                <PriceContent>{formatPrice(price * quantity)}</PriceContent>
              </CoffeeItem>
            ))}
          </CoffeeList>

          <div style={{ paddingTop: "20px" }}>
            <span>
              <p>Total de items</p>
              <p>{formatPrice(totalPrice)}</p>
            </span>
            <span>
              <p>Entrega</p>
              <p>{formatPrice(deliveryPrice)}</p>
            </span>
            <span>
              <p>Total</p>
              <p>{formatPrice(totalPrice + deliveryPrice)}</p>
            </span>
          </div>

          <ConfirmButton
            type="button"
            onClick={handleConfirm}
            disabled={selectedCoffees.length < 1}
          >
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </main>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  );
}
