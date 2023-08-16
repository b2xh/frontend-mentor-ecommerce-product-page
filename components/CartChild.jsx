import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";
import Image from "next/image";
import toast from "react-hot-toast";

export function CartChild({ item }) {
  const { name, quantity, price } = item;
  const { removeItem, totalPrice } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
    toast.success("Successfully removed!");
  };

  return (
    <div className="flex flex-row justify-between items-center py-4">
      <div>
        <div className="flex flex-row space-x-3">
          <Image
            src="/images/image-product-1.jpg"
            className="rounded-md"
            width={45}
            height={45}
            alt="cart-item-image"
          />
          <div>
            <p>{name}</p>
            {formatCurrencyString({ value: price, currency: "USD" })} x(
            {quantity}){" "}
            <span className="font-bold text-black">
              {formatCurrencyString({ value: totalPrice, currency: "USD" })}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeItemFromCart()}
        className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
      >
        <Image
          alt="delete icon"
          src="/images/icon-delete.svg"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
}
