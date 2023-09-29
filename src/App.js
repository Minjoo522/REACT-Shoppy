import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <>
      <Header />
      <AdminProvider>
        <Outlet />
      </AdminProvider>
    </>
  );
}

export default App;
