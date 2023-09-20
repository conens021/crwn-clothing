import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(null)

export const stripeAppereanceOtions = {
    appearance: {
        theme: "stripe",
        labels: 'floating',
     /*    variables: {
            colorPrimary: primaryColor,
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            borderRadius: '4px',
        } */
    }
};