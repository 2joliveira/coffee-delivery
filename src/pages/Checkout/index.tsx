import {
  AddressContent,
  CheckoutContainer,
  OrderContainer,
  PaymentContent,
  SelectedCoffeesContainer,
  HeaderContent,
  PaymentOptions,
  PaymentOption,
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
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useCoffeeShop } from "../../contexts/CoffeeShopContext";
import { formatPrice } from "../../utils/formatPrice";

const validationSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-?\d{3}$/, {
    message: "CEP inválido. Use o formato 00000-000 ou 00000000.",
  }),
  street: zod.string().min(4, "Informe a rua em que reside."),
  number: zod.string().min(1, "Informe o número da sua residência."),
  complement: zod.string().optional(),
  district: zod.string().min(4, "Informe seu bairro"),
  city: zod.string().min(4, "Informe sua cidade"),
  uf: zod.string().min(2, "Informe o UF"),
  paymentMethod: zod.string(),
});

type CheckoutProps = zod.infer<typeof validationSchema>;

export function Checkout() {
  const { selectedCoffees, changeCoffeeQuantity, removeFromCart } =
    useCoffeeShop();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutProps>({
    resolver: zodResolver(validationSchema),
  });

  const paymentMethod = watch("paymentMethod");

  const totalPrice = selectedCoffees.reduce(
    (currentPrice, { quantity, price }) => {
      return currentPrice + quantity * price;
    },
    0
  );

  const deliveryPrice = 3.5;

  const onSubmit = (data: CheckoutProps) => {
    console.log("data", data);
    reset();
  };

  const handleConfirm = handleSubmit(onSubmit);

  function addCoffee(id: string, quantity: number) {
    changeCoffeeQuantity(id, quantity + 1);
  }

  function removeCoffee(id: string, quantity: number) {
    if (quantity > 1) changeCoffeeQuantity(id, quantity - 1);
    else removeFromCart(id);
  }

  return (
    <CheckoutContainer>
      <OrderContainer>
        <h1>Complete seu pedido</h1>
        <AddressContent>
          <HeaderContent>
            <MapPinLine size={32} />
            <span>
              <h2>Endereço de Entrega</h2>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </span>
          </HeaderContent>
          <form>
            <input
              id="cep"
              type="text"
              placeholder="CEP"
              style={{ width: "35%" }}
              {...register("cep")}
            />
            {errors.cep && <p>{errors.cep.message}</p>}

            <input
              id="street"
              type="text"
              placeholder="Rua"
              style={{ width: "100%" }}
              {...register("street")}
            />
            {errors.street && <p>{errors.street.message}</p>}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "35%" }}>
                <input
                  id="number"
                  type="text"
                  placeholder="Número"
                  style={{ width: "100%" }}
                  {...register("number")}
                />
                {errors.number && <p>{errors.number.message}</p>}
              </div>

              <input
                id="complement"
                type="text"
                placeholder="Complemento"
                style={{ width: "64%" }}
                {...register("complement")}
              />
              {errors.complement && <p>{errors.complement.message}</p>}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "35%" }}>
                <input
                  id="district"
                  type="text"
                  placeholder="Bairro"
                  style={{ width: "100%" }}
                  {...register("district")}
                />
                {errors.district && <p>{errors.district.message}</p>}
              </div>

              <div style={{ width: "53%" }}>
                <input
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  style={{ width: "100%" }}
                  {...register("city")}
                />
                {errors.city && <p>{errors.city.message}</p>}
              </div>

              <div style={{ width: "10%" }}>
                <input
                  id="uf"
                  type="text"
                  placeholder="UF"
                  style={{ width: "100%" }}
                  {...register("uf")}
                />
                {errors.uf && <p>{errors.uf.message}</p>}
              </div>
            </div>

            <input type="hidden" {...register("paymentMethod")} />
          </form>
        </AddressContent>
        <PaymentContent>
          <HeaderContent>
            <CurrencyDollar size={32} />
            <span>
              <h2>Pagamento</h2>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </span>
          </HeaderContent>

          <PaymentOptions>
            <PaymentOption
              onClick={() => setValue("paymentMethod", "credit")}
              isSelected={paymentMethod === "credit"}
            >
              <CreditCard size={32} />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentOption>

            <PaymentOption
              onClick={() => setValue("paymentMethod", "debit")}
              isSelected={paymentMethod === "debit"}
            >
              <Bank size={32} />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentOption>
            <PaymentOption
              onClick={() => setValue("paymentMethod", "money")}
              isSelected={paymentMethod == "money"}
            >
              <Money size={32} />
              <p>DINHEIRO</p>
            </PaymentOption>
          </PaymentOptions>
        </PaymentContent>
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

          <div>
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
