import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const responseGoogle = (response) => {
  console.log(response);
};

function Google() {
  return (
    <>
      <GoogleLogin
        clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className='w-full font-sans font-bold bg-transparent hover:bg-black hover:bg-opacity-5 text-black py-2 px-2 border border-black rounded'
          >
            {/* <FontAwesomeIcon icon={faGoogle} className='mr-2' /> */}
            Continue with Google
          </button>
        )}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default Google;
