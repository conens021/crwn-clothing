import Home from "./routes/home/Home.component";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/Layout.component";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ChatPage from "./routes/chat/Chat.page";
import ShopPage from "./routes/shop/Shop.page";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserRedirectPath,
} from "./store/user/userSelector";
import React from "react";
import {
  getCheckoutRoute,
  getPaymentPageRoute,
  getSignInRoute,
  getSocialCallbackRoute,
  getVerifyEmailRoute,
} from "./routes/routes";
import AppLoading from "./components/AppLoading/AppLoading.component";
import Testing from "./routes/testing/testing.page";
import OrderCompletedPage from "./routes/order/OrderCompleted.page";
import { useTokenValidtion } from "./hooks/useTokenValidation";
import { logoutUser } from "./store/user/userSlice";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const signInRedirectPath = useSelector(selectUserRedirectPath);
  const signOutCallback = () => {
    dispatch(logoutUser());
  };
  useTokenValidtion({ currentUser, signOutCallback });
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="sign-in"
            element={getSignInRoute({
              currentUser,
              redirectPath: signInRedirectPath,
            })}
          />
          <Route
            path="sign-in/callback/external"
            element={getSocialCallbackRoute({
              currentUser,
              redirectPath: signInRedirectPath,
            })}
          />
          <Route path="shop/*" element={<ShopPage />} />
          <Route
            path="checkout"
            element={getCheckoutRoute({ currentUser })}
          ></Route>
          <Route
            path="verify-email"
            element={getVerifyEmailRoute({
              currentUser,
              redirectPath: signInRedirectPath,
            })}
          />
          <Route
            path="/payment"
            element={getPaymentPageRoute({
              currentUser,
              redirectPath: "/payment",
            })}
          />
          <Route path="/order/:id/completed" element={<OrderCompletedPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="/loading" element={<AppLoading />} />
          <Route path="test" element={<Testing />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
