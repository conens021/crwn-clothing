import { Navigate } from "react-router-dom";
import { ICurrentUser } from "../interfaces/ICurrentUser";
import CheckoutPage from "./checkout/Checkout.page.component";
import PaymentPage from "./payment/Payment.page";
import AuthPage from "./signIn/Auth.page";
import SocialCallback from "./signIn/SocialCallback";
import VerifyEmailPage from "./verify-email/VerifyEmail.page";

type AppRoute = {
  currentUser: ICurrentUser | null;
  redirectPath?: string;
};

export const getCheckoutRoute = ({ currentUser }: AppRoute) => {
  return !currentUser ? (
    <Navigate to="/sign-in" state={{ redirectPath: "/checkout" }} />
  ) : !currentUser.verifiedEmail ? (
    <Navigate to="/verify-email" />
  ) : (
    <CheckoutPage />
  );
};

export const getVerifyEmailRoute = ({
  currentUser,
  redirectPath = "/",
}: AppRoute) => {
  return currentUser && currentUser.verifiedEmail ? (
    <Navigate to={redirectPath} />
  ) : (
    <VerifyEmailPage />
  );
};

export const getSignInRoute = ({
  currentUser,
  redirectPath = "/",
}: AppRoute) => {
  return currentUser ? <Navigate to={redirectPath} /> : <AuthPage />;
};

export const getSocialCallbackRoute = ({
  currentUser,
  redirectPath = "/",
}: AppRoute) => {
  return currentUser ? <Navigate to={redirectPath} /> : <SocialCallback />;
};

export const getPaymentPageRoute = ({
  currentUser,
  redirectPath,
}: AppRoute) => {
  return !currentUser ? (
    <Navigate to="/sign-in" state={{ redirectPath }} />
  ) : !currentUser.verifiedEmail ? (
    <Navigate to="/verify-email" />
  ) : (
    <PaymentPage />
  );
};
