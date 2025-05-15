import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AddressContent,
  HeaderContent,
  PaymentContent,
  PaymentOption,
  PaymentOptions,
} from "./styles";
import { useFormContext } from "react-hook-form";

export const AddressForm: React.FC = () => {
  const {
    formState: { errors },
    register,
    setValue,
    watch,
  } = useFormContext();

  const paymentMethod = watch("paymentMethod");

  return (
    <>
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
            {...register("cep")}
            className="shortInput"
          />
          {errors?.cep?.message && <p>{errors.cep.message.toString()}</p>}

          <input
            id="street"
            type="text"
            placeholder="Rua"
            style={{ width: "100%" }}
            {...register("street")}
          />
          {errors?.street?.message && <p>{errors.street.message.toString()}</p>}

          <div className="inputsRow">
            <div className="shortInput">
              <input
                id="number"
                type="text"
                placeholder="Número"
                style={{ width: "100%" }}
                {...register("number")}
              />
              {errors?.number?.message && (
                <p>{errors.number.message.toString()}</p>
              )}
            </div>

            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register("complement")}
              className="complement"
            />
            {errors?.complement?.message && (
              <p>{errors.complement.message.toString()}</p>
            )}
          </div>

          <div className="inputsRow">
            <div className="shortInput">
              <input
                id="district"
                type="text"
                placeholder="Bairro"
                style={{ width: "100%" }}
                {...register("district")}
              />
              {errors?.district?.message && (
                <p>{errors.district.message.toString()}</p>
              )}
            </div>

            <div className="city">
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                style={{ width: "100%" }}
                {...register("city")}
              />
              {errors?.city?.message && <p>{errors.city.message.toString()}</p>}
            </div>

            <div className="uf">
              <input
                id="uf"
                type="text"
                placeholder="UF"
                style={{ width: "100%" }}
                {...register("uf")}
              />
              {errors?.uf?.message && <p>{errors.uf.message.toString()}</p>}
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
    </>
  );
};
