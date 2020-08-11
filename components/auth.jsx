import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Loading from './Loading';

const auth = (props) => {
  if (process.browser) {
    const router = useRouter();
    const priaveRoutes = ['/dashboard'];
    const authRoutes = ['/login', '/register'];

    const token = window.localStorage.getItem('token');
    useEffect(() => {
      let isPrivateRoute = priaveRoutes.find((p) => p === router.asPath);
      let isAuthRoute = authRoutes.find((p) => p === router.asPath);
      if (isPrivateRoute) {
        if (!token) router.push('/login');
      }
      if (isAuthRoute) {
        if (token) {
          toast.warn('You are already logged in 😜');
          router.push('/');
        }
      }
    }, [router.route]);
  }

  return <>{process.browser ? props.children : <Loading />}</>;
};

export default auth;
