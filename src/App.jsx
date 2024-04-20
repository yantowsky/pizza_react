import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';

const UserNewOrderLazy = lazy(() => import('./pages/UserNewOrder.jsx'));
const MainLazy = lazy(() => import('./pages/Main.jsx'));
const LoginLazy = lazy(() => import('./pages/Login.jsx'));
const MenuLazy = lazy(() => import('./pages/Menu/Menu.jsx'));
const FetchLazy = lazy(() => import('./pages/Fetch.jsx'));
const CounterLazy = lazy(() => import('./pages/Counter.jsx'));


function App() {
    return (
        <div className="wrapper">
            <Header />
            <Suspense fallback={
                <main className="content">
                    <h1 className="title">
                        Loading...
                    </h1>
                </main>
            }>
                <Routes>
                    <Route path='/' element={<MainLazy />} />
                    <Route path='/login' element={<LoginLazy />} />
                    <Route path='/menu' element={<MenuLazy />} />
                    <Route path='/order/new' element={<UserNewOrderLazy />} />
                    <Route path='/fetch' element={<FetchLazy />} />
                    <Route path='/counter' element={<CounterLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;