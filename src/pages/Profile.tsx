import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default () => {
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch(err: any) {
      console.log(err.message);
    }    
  }

  return (
    <div className="max-w-[350px] h-screen mx-auto my-16 p-4">      
      <h1 className="text-2xl font-bold py-4 text-center mb-10">Profile</h1>
      <p><span className="font-bold">User Email</span>: { user && user.email }</p>
      <p><span className="font-bold">Display Name</span>: { (user & user.displayName ) ? user.displayName : "Not Assigned" }</p>
      <p><span className="font-bold">User Created</span>: { user.metadata && new Date(parseInt(user.metadata.createdAt)).toLocaleString() } </p>
      <p><span className="font-bold">Last Login</span>: { user.metadata && new Date(parseInt(user.metadata.lastLoginAt)).toLocaleString() } </p>
      
      

      <button 
        type="button" 
        className="border border-gray-300 hover:bg-gray-200 w-full p-4 mt-10 font-bold rounded-md" 
        onClick={handleLogOut}
      >
        Logout
      </button>
       
    </div>
  );
};
