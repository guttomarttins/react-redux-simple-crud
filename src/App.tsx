import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './module/Layout';
import UserList from './module/User/UserList';
import UserForm from './module/User/UserForm';

function App() {
  return (
   <BrowserRouter> 
     <Layout/>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<UserList/>}></Route>
        <Route path='/add' element={<UserForm/>}></Route>
      </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
