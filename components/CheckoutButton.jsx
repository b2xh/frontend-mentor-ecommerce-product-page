// export function CheckoutButton() {
//   return (
//     <div>
//       {/* <button className="text-base bg-darkOrange hover:bg-opacity-60 w-full mt-6 py-5 rounded-lg hover:transition-all text-white font-semibold">
//         Checkout
//       </button> */}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export function CheckoutButton() {
  const [status, setStatus] = useState("idle");
  const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <article className="mt-3 flex flex-col">
      <div className="text-red-700 text-xs mb-3 h-5 text-center">
        {totalPrice && totalPrice < 30
          ? "You must have at least £0.30 in your basket"
          : cartCount && cartCount > 20
          ? "You cannot have more than 20 items"
          : status === "redirect-error"
          ? "Unable to redirect to Stripe checkout page"
          : status === "no-items"
          ? "Please add some items to your cart"
          : null}
      </div>
      <button
        onClick={handleClick}
        className="text-base bg-darkOrange hover:bg-opacity-60 w-full mt-6 py-5 rounded-lg hover:transition-all text-white font-semibold"
        disabled={
          (totalPrice && totalPrice < 30) ||
          (cartCount && cartCount > 20) ||
          status == "no-items"
            ? true
            : false
        }
      >
        {status !== "loading" ? "Proceed to checkout" : "Loading..."}
      </button>
    </article>
  );
}
