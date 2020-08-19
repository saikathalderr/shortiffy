import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';
import { FETCH_TIME, HOST_URL } from '../config';

function Profile() {
  const menus = (
    <Menu>
      <Menu.Item>
        <a target='_blank' href='#'>
          Account
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' href='#'>
          Settings
        </a>
      </Menu.Item>
      <Menu.Item danger onClick={() => {
          localStorage.removeItem('token');
          setTimeout(() => {
            window.location.href = `${HOST_URL}`;
          }, FETCH_TIME);
      }}>
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menus} className='ml-5 cursor-pointer'>
        <Avatar
          onClick={(e) => e.preventDefault()}
          src='https://tinyurl.com/y2fo9uhf'
        />
      </Dropdown>
    </>
  );
}

export default Profile;
