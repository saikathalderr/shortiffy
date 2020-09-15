import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';
import { toast } from 'react-toastify';
import { FETCH_TIME, HOST_URL } from '../config';

const SignOut = () => {
  if (confirm(`Are you sure you want to logout ?`)) {
    localStorage.removeItem('token');
    setTimeout(() => {
      window.location.href = `${HOST_URL}`;
      toast(`Come back soon 🤗`)
    }, FETCH_TIME);
  }
}

function Profile() {
  const menus = (
    <Menu>
      <Menu.Item>
        <a target='_blank' href='#'>
          <b>Your account</b>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' href='#'>
          <b>Settings</b>
        </a>
      </Menu.Item>
      <Menu.Item danger onClick={SignOut}>
        <b>Log out</b>
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
