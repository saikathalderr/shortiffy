import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

const responseFacebook = (response) => {
  console.log(response);
};

function facebook() {
    return (
      <>
        <FacebookLogin
          appId='1088597931155576'
          autoLoad
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className='my-2 w-full font-sans font-bold bg-transparent hover:bg-black hover:bg-opacity-5 text-black py-2 px-2 border border-black rounded'
              onClick={renderProps.onClick}
            >
              {/* <FontAwesomeIcon icon={faFacebookF} className='mr-2' /> */}
              Continue with Facebook
            </button>
          )}
        />
      </>
    );
}

export default facebook
