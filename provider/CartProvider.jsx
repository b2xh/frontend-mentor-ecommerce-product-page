"use client";

import { CartProvider } from "use-shopping-cart";

export function CartProviderComponent({ children }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  );
}
