import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Memos from './pages/Memos';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default () => {  
  

  return (      
    <div>             
      <Routes >         
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<ProtectedRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path='/memos' element={<ProtectedRoute />} >
          <Route path="/memos" element={<Memos />} />
        </Route>


        <Route path="*" element={<NotFound />} />                      
      </Routes>    
    </div>
  )
}
