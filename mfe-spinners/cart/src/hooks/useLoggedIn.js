import React from "react";

import { jwt } from "../services/cart";

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = React.useState(Boolean(jwt.value));

  React.useEffect(() => {
    setLoggedIn(Boolean(jwt.value));
    return () => {
      jwt.subscribe(() => {
        setLoggedIn(Boolean(jwt.value));
      });
    };
  }, []);

  return loggedIn;
}
