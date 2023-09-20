import { useEffect, useState } from "react";
import { ICurrentUser } from "../interfaces/ICurrentUser";

type TokenValidation = {
  currentUser: ICurrentUser | null;
  signOutCallback: () => void;
};

export const useTokenValidtion = ({
  currentUser,
  signOutCallback,
}: TokenValidation) => {

  useEffect(() => {
    if (currentUser) {
      validate(currentUser);
    }
  }, [currentUser]);

  const validate = (currentUser: ICurrentUser) => {
    if (
      isExpired(currentUser.expireAt) ||
      notActiveYet(currentUser.notActiveBefore)
    )
      signOutCallback();
  };

  const isExpired = (expireAt: number) => {
    return expireAt <= Date.now();
  };

  const notActiveYet = (notBefore: number) => {
    return notBefore > Date.now();
  };
};
