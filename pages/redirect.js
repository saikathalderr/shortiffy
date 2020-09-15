import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../config';

function redirect() {
  const router = useRouter();
  const { query } = router;
  const { url_crypto } = query;

  useEffect(() => {
    if (url_crypto) {
      fetch('https://jsonip.com')
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          if (data.ip) {
            window.location.href = `${API_URL}/link/redirectShortLink/${url_crypto}?ip=${data.ip}`;
          }
        })
        .catch((err) => {
          console.log(err);
          window.location.href = `${API_URL}/link/redirectShortLink/${url_crypto}`;
        });
    }
  }, [url_crypto]);
  return (
    <>
      <h1>URL redirecting...</h1>
    </>
  );
}

export default redirect;
