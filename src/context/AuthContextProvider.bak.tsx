import { FC, PropsWithChildren } from 'react'; // to resolve children type error above react version 18
import { auth } from '../firebase';
import { User } from '@firebase/auth-types';
import { useEffect, useState, ReactNode, createContext, useContext } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, Auth } from 'firebase/auth';

interface AuthContextProps {
  user: User;
  logIn: (email: string, passwd: string) => void;
  signUp: (email: string, passwd: string) => void;
  logOut: () => void;
};

type AuthProps = {
  child?: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | {}>({});

export const AuthContextProvider: FC<PropsWithChildren<AuthProps>> = ({child}: AuthProps) => {
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
    <AuthContext.Provider value={{ user, logIn, signUp, logOut }} >
      { child }
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext<AuthContextProps | {}>(AuthContext);
}