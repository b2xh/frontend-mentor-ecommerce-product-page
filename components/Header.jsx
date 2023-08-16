"use client";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

export function HeaderComponent() {
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <header className="container mx-auto py-9 border-b-2 px-2 border-opacity-70 select-none flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-16">
        <div>
          <Image src="/images/logo.svg" width="160" height="100" />
        </div>
        <ul className="lg:flex hidden flex-row space-x-5 text-darkGrayishBlue">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-row space-x-12 items-center">
        <button className="relative" onClick={() => handleCartClick()}>
          <Image
            src="/images/icon-cart.svg"
            width={20}
            height={20}
            alt="cart-image"
          />
          <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-4 h-4 bottom-2 -right-1">
            {cartCount}
          </div>
        </button>
        <Image
          src="/images/image-avatar.png"
          width={50}
          height={50}
          alt="avatar-image"
          className="rounded-full border-2 border-opacity-0 hover:border-opacity-100 transition-all border-darkOrange lg:flex hidden"
        />
      </div>
      <ShoppingCart />
    </header>
  );
}

{
  /* <header className="container mx-auto py-10 border-b-2 border-opacity-70 select-none">
        <nav className="flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-16">
            <div>
              <Image src="/images/logo.svg" width="160" height="100" />
            </div>
            <ul className="flex flex-row space-x-5 text-darkGrayishBlue">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-row space-x-12 items-center">
            {/* <Image
              src="/images/icon-cart.svg"
              width={20}
              height={20}
              alt="cart-image"
            /> 
            <button onClick={() => handleCartClick()}>testwqqdqd</button>
            <img
              src="/images/image-avatar.png"
              width={50}
              height={50}
              alt="avatar-image"
              className="rounded-full border-2 border-opacity-0 hover:border-opacity-100 transition-all border-darkOrange"
            />
          </div>
        </nav>
        <ShoppingCart />
      </header> */
}
