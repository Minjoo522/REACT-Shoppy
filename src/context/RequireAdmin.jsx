import { useNavigate } from 'react-router-dom';
import { useAdmin } from './AdminContext';
import { useEffect, useState } from 'react';

export default function RequireAdmin({ children }) {
  const { user, admin } = useAdmin();
  const [isAdmin, setIsAdmin] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(user && admin && user.uid === admin);

    if (!isAdmin && isAdmin !== undefined) {
      navigate('/');
    }
  }, [user, admin, isAdmin, navigate]);

  return children;
}
