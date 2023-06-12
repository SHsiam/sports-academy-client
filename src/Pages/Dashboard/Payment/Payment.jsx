import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../../hooks/useClass";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";



const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
    const [items] = useClass();
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full h-full">
            <h2 className="text-3xl"> Payment Method</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm items={items} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;