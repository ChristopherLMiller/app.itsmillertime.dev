import React, { createContext, useState, useContext, useEffect } from "react";
import md5 from "md5";
import Cookies from "js-cookie";
import Router from "next/router";
import fetch, {
  addBearerToken,
  removeBearerToken,
} from "src/utils/functions/fetch";
import { ME_QUERY_STRING } from "src/utils/graphql/queries";
import {
  LOGIN_MUTATION_STRING,
  FORGOT_PASSWORD_MUTATION_STRING,
  RESET_PASSWORD_MUTATION_STRING,
} from "src/utils/graphql/mutations";
import { iUser } from "src/utils/graphql/types/user";
import { GUEST, STATUS } from "config";

interface Auth {
  user: iUser;
  isAuthenticated: boolean;
  methods: {
    login: (
      identifier: string,
      password: string
    ) => Promise<{ status: string; message: string }>;
    logout: () => void;
    getUsername: () => string;
    getEmail: () => string;
    isAccountConfirmed: () => boolean;
    isAccountBlocked: () => boolean;
    hasPermission: ([string]) => boolean;
    getRole: () => string;
    getAvatar: () => string;
    getBirthdate: () => string;
    forgotPassword: (
      email: string
    ) => Promise<{ status: string; message: string }>;
    resetPassword: (
      password: string,
      code: string
    ) => Promise<{ status: string; message: string }>;
  };
}

const AuthContext = createContext({} as Auth);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
      // if the jwt token was set then we can update the state to that, and then add that to future requests
      // before we finally fetch the users data.
      setToken(jwt);
      addBearerToken(jwt);
      updateUser();
    }
  }, []);

  const updateUser = () => {
    fetch
      .post("/graphql", {
        query: ME_QUERY_STRING,
      })
      .then((data) => {
        const myData = data?.data?.data?.me;

        if (myData) {
          setUser(myData);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.error(error);
        logout();
      });
  };

  const login = async (identifier: string, password: string) => {
    const result = await fetch
      .post("/graphql", {
        variables: {
          identifier: identifier,
          password: password,
        },
        query: LOGIN_MUTATION_STRING,
      })
      .then(({ data }) => {
        // an error occured, request was successful, however login wasn't
        if (data.errors) {
          return {
            status: STATUS.ERROR,
            message:
              data.errors[0].extensions.exception.data.message[0].messages[0]
                .message,
          };
        }

        if (data.data) {
          const jwt = data?.data?.login?.jwt;

          // first verify we got a jwt back, this signifies login was successful
          if (jwt) {
            // set the jwt cookie and context state for the jwt
            Cookies.set("jwt", jwt);
            setToken(jwt);

            const user = data?.data?.login?.user as iUser;

            // now we check if the user was blocked (strapi backend)
            if (!user.blocked) {
              // user wasn't blocked, go ahead and finish authenticating them
              Cookies.set("user", user);
              setUser(user);
              setIsAuthenticated(true);
              addBearerToken(token);
              redirectAfterLogin();
              return {
                status: STATUS.SUCCESS,
                message: "Welcome back!  You have successfully logged in",
              };
            } else {
              // user was blocked for whatever reason, let them know this
              return {
                status: STATUS.ERROR,
                message: "You have been blocked from logging in",
              };
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
        return { status: STATUS.ERROR, message: "Unable to login" };
      });

    return result;
  };

  const forgotPassword = async (email: string) => {
    const result = await fetch
      .post("/graphql", {
        variables: {
          email: email,
        },
        query: FORGOT_PASSWORD_MUTATION_STRING,
      })
      .then(({ data }) => {
        return {
          status: data.data.forgotPassword.ok ? STATUS.SUCCESS : STATUS.ERROR,
          message:
            "An email has been sent to your email on file, check there for futher instructions.",
        };
      })
      .catch((error) => {
        console.error(error);
        return { status: STATUS.ERROR, message: error };
      });

    return result;
  };

  const resetPassword = async (password: string, code: string) => {
    const result = await fetch
      .post("/graphql", {
        variables: {
          password: password,
          code: code,
        },
        query: RESET_PASSWORD_MUTATION_STRING,
      })
      .then(({ data }) => {
        const jwt = data?.data?.resetPassword?.jwt;

        if (jwt) {
          setToken(jwt);
          addBearerToken(jwt);
          updateUser();
          redirectAfterLogin();
          return {
            status: STATUS.SUCCESS,
            message:
              "Password reset successful.  You have been auto-logged in.",
          };
        } else {
          return {
            status: STATUS.ERROR,
            message: "Unable to reset your password.  Try again.",
          };
        }
      })
      .catch((error) => {
        console.error(error);
        return { status: STATUS.ERROR, message: error };
      });

    return result;
  };

  const logout = () => {
    Cookies.remove("jwt");
    Cookies.remove("user");
    setIsAuthenticated(false);
    setUser(null);
    removeBearerToken();
    redirectAfterLogout();
  };

  const redirectAfterLogin = () => {
    Router.push("/");
  };

  const redirectAfterLogout = () => {
    Router.push("/");
  };

  const getUsername = () => {
    return isAuthenticated ? user.username : "Guest";
  };

  const getEmail = () => {
    return isAuthenticated ? user.email : "N/A";
  };

  const isAccountConfirmed = () => {
    return user?.confirmed;
  };

  const isAccountBlocked = () => {
    return user?.blocked;
  };

  const getRole = () => {
    return user?.role?.name || GUEST;
  };

  const hasPermission = (roles: [string]) => {
    if (roles) {
      return roles.includes(getRole()?.toUpperCase());
    }

    return true;
  };

  const getAvatar = () => {
    return `https://www.gravatar.com/avatar/${md5(getEmail().toLowerCase())}`;
  };

  const getBirthdate = () => {
    return user?.birthdate;
  };

  const methods = {
    login,
    logout,
    getUsername,
    getEmail,
    getRole,
    isAccountConfirmed,
    isAccountBlocked,
    hasPermission,
    getAvatar,
    getBirthdate,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, methods }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
