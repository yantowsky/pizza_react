import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Menu from './pages/Menu/Menu.jsx';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </div>
    );
}

export default App;