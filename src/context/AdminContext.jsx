import { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange } from '../service/firebase';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    onUserStateChange(setUser, setAdmin);
  }, []);

  return <AdminContext.Provider value={{ user, admin }}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  return useContext(AdminContext);
}
