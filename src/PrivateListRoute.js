import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./services/auth";

export const PrivateListRoute = ({
  component: Component,
  tableHeaders,
  enc,
  ...rest
}) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        !!currentUser ? (
          <Component {...props} tableHeaders={tableHeaders} enc={enc} />
        ) : (
          <Redirect
            to={{ pathname: "/autentication", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
