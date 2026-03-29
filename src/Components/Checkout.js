import { useSelector } from "react-redux";
import CartPage from "./CartPage";

export default function Checkout(){


    const Items=useSelector(state=>state.cartslice.items);
    if (!Items || Items.length === 0) {
  return <CartPage data={{}} />;
}

    return(
        <CartPage data={Items}></CartPage>
    )
}