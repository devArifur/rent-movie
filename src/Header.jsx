import { useContext, useState } from "react";
import logo from "../src/assets/Images/logo.svg";
import ring from "../src/assets/Images/ring.svg";
import cart from "../src/assets/Images/shopping-cart.svg";
import moon from "../src/assets/icons/moon.svg";
import CardDetails from "./cine/CardDetails";
import { MovieContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  console.log(cartData);

  function handleShowCart() {
    setShowCart(true);
  }

  function handleCartClose() {
    setShowCart(false);
  }

  return (
    <header>
      {showCart && <CardDetails onClose={handleCartClose} />}

      <nav className="container  flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShowCart}
            >
              <img src={cart} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
