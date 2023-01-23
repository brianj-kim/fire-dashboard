import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FC, PropsWithChildren, ReactNode, createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../firebase';

interface IAuthContextState {
  user: User;
  logIn: (email: string, passwd: string) => void;
  signUp: (email: string, passwd: string) => void;
  logOut: () => void;
};

type AuthProps = {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContextState | any>({});

const AuthContextProvider: FC<PropsWithChildren<AuthProps>> = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | any>({});

  const logIn = (email: string, passwd: string) => {
    return signInWithEmailAndPassword(auth, email, passwd);
  }

  const signUp = (email: string, passwd: string) => {
    return createUserWithEmailAndPassword(auth, email, passwd);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, signUp, logOut}}>
      { children }
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;
export const useAuthContext = () => {
  return useContext<IAuthContextState | any>(AuthContext);
}