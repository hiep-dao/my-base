import { useState, useContext, createContext, ReactNode } from "react";
import { IAuth, IUser } from "@/types/auth";

interface IAuthProvider {
  children: ReactNode;
}
interface IProvideAuthContext {
  user: IUser | null;
  signin: (props: Pick<IAuth, "email" | "password">) => void;
  signup: (props: IAuth) => void;
  signout: () => void;
  sendPasswordResetEmail: (email: string) => void;
  confirmPasswordReset: (code: string, password: string) => void;
}

const authContext = createContext<IProvideAuthContext | null>({
  user: null,
  signin: () => {
    throw new Error("context is missing");
  },
  signup: () => {
    throw new Error("context is missing");
  },
  signout: () => {
    throw new Error("context is missing");
  },
  sendPasswordResetEmail: () => {
    throw new Error("context is missing");
  },
  confirmPasswordReset: () => {
    throw new Error("context is missing");
  },
});

export const ProvideAuth: React.FC<IAuthProvider> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const signin: React.FC<Pick<IAuth, "email" | "password">> = (props) => {
    const { email, password } = props;

    // handle signin
    return null;
  };

  const signup: React.FC<IAuth> = (props) => {
    const { email, password } = props;

    // handle signup
    return null;
  };

  const signout = () => {
    // handle signout
  };

  const sendPasswordResetEmail = (email: string) => {
    // handle send code reset email
  };

  const confirmPasswordReset = (code: string, password: string) => {
    // handle reset email
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
