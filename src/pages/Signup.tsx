import { Link, useNavigate } from "react-router-dom";
import { SyntheticEvent, useRef, useState } from 'react';
import { useAuthContext } from "../context/AuthContext";

export default () => {
  const [error, setError] = useState<Error | ''>('');
  const { signUp } = useAuthContext();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | any>(null);
  const passwdRef = useRef<HTMLInputElement | any>(null);

  

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError('');
    try {
      // console.log(emailRef.current.value, passwdRef.current.value);
      await signUp (emailRef.current.value, passwdRef.current.value);
      navigate('/account');

    } catch (err: any) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div className="max-w-[780px] h-screen mx-auto my-16 p-4">     
      <div>
        <h1 className="text-2xl font-bold py-2 text-center" >Sign up for a free account</h1>
        <p className="py-2 text-center" >
          Alreay have an account? <Link to='/' className="underline">Sign In</Link>.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="">Email Address</label>
          <input type="email" ref={emailRef} className="border p-3 rounded-md" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="">Password</label>
          <input type="password" ref={passwdRef} className="border p-3 rounded-md" />
        </div>
        <button 
          type="submit" 
          className="border border-indigo-600 bg-indigo-700 hover:bg-indigo-500 w-full p-4 mt-10 text-white font-bold rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
