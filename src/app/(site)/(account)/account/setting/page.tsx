'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import { fetchData } from '@/services/apiBase';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

const Setting = () => {
  const { data: session } = useSession();
  const sessionData = getSession().then(res => {
    console.log("res data", res);
  });
  
  console.log("session data:", session)
  return (
    <div>Setting</div>
  );
}

export default Setting;