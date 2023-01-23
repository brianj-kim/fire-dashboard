import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SyntheticEvent, useRef } from 'react';

export default () => {
  const { logIn, user } = useAuthContext();
  const emailRef = useRef<HTMLInputElement | any>(null);
  const passwdRef = useRef<HTMLInputElement | any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await logIn(emailRef.current.value, passwdRef.current.value);
      navigate(from, { replace: true });
    } catch (err: any) {
      console.log(err.message);
    }

  }

  return (
    <div className="max-w-[780px] h-screen mx-auto my-16 p-4">     
      <div>
        <h1 className="text-2xl font-bold py-2 text-center" >Sign in to your account</h1>
        <p className="py-2 text-center" >
          Don't have an account yet? <Link to='/signup' className="underline">Sign Up</Link>.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
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
          Log In
        </button>
      </form>
    </div>
  );
};
