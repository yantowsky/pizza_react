import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import UserNewOrder from './pages/UserNewOrder.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Fetch from './pages/Fetch.jsx';


function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order/new' element={<UserNewOrder />} />
                <Route path='/fetch' element={<Fetch />} />
            </Routes>
        </div>
    );
}

export default App;