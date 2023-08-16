"use client";

import Image from "next/image";
import { product } from "@/lib/data/product";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";

export function ProductComponent() {
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
    toast.success("Successfully added you cart!");
  };

  return (
    <article className="py-28 px-16 grid lg:grid-cols-2">
      <div>
        <Image
          src="/images/image-product-1.jpg"
          className="md:ml-12 rounded-2xl"
          width={500}
          height={500}
        />
        <div className="grid grid-cols-4"></div>
      </div>
      <div className="pt-16 max-w-xl">
        <p className="uppercase text-darkOrange text-base font-semibold tracking-widest">
          Sneaker Company
        </p>
        <h5 className="text-5xl font-bold py-3 pb-10">
          Fall Limited Edition <br />
          Sneakers
        </h5>
        <p className="text-xl text-darkGrayishBlue">
          Sneakers These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole, they’ll withstand
          everything the weather can offer.
        </p>

        <div className="py-10">
          <h5 className="text-black font-bold text-3xl items-center flex space-x-5">
            <span> $125.00</span>
            <span className="px-2 bg-paleOrange text-base text-darkOrange rounded-md">
              50%
            </span>
          </h5>
          <span className="text-GrayishBlue line-through">$250.00</span>
          <div className="py-10 flex flex-row space-x-10">
            <div className="flex flex-row justify-between items-center bg-GrayishBlue bg-opacity-20 rounded-md w-2/5 px-5 py-2">
              <button
                onClick={decreaseQuantity}
                className="text-3xl text-darkOrange hover:text-opacity-60 transition-all font-bold"
              >
                -
              </button>
              <h5 className="text-base font-bold">{quantity}</h5>
              <button
                onClick={increaseQuantity}
                className="text-3xl text-darkOrange font-bold hover:text-opacity-60 transition-all"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart()}
              className="text-base bg-darkOrange hover:bg-opacity-60 w-full rounded-lg hover:transition-all text-white font-semibold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
