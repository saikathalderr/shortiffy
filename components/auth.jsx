import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Loading from './Loading';

const auth = (props) => {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [authloading, setauthloading] = useState(token ? false : true);

  if (process.browser) {
    const router = useRouter();
    const privateRoutes = ['/dashboard'];
    const authRoutes = ['/login', '/register'];

    useEffect(() => {
      let isPrivateRoute = privateRoutes.find((p) => p === router.route);
      let isAuthRoute = authRoutes.find((p) => p === router.route);      
      if (isPrivateRoute) {
        if (!token) router.push('/login');
      }
      if (isAuthRoute) {
        if (token) {
          toast.warn('You are already logged in 😜');
          router.push('/');
        } else {
          setauthloading(false)
        }
      }
    }, [router.route]);
  }

  return <>{process.browser && !authloading ? props.children : <Loading />}</>;
};

export default auth;
