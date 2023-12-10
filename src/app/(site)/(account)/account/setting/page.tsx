'use client';

import { getSession, useSession } from 'next-auth/react';
import React, { useCallback } from 'react';
import Link from 'next/link';
// import getSession from '@/features/authentication/getSession';
import { getServerSession } from 'next-auth';
import { useThemeContext } from '@/context/ThemeContext';

const Setting = () => {
  const { data: session, status } = useSession();
  const { themeColor, setThemeColor, themeMode, setThemeMode } = useThemeContext();

  console.log("account session data:", session, " status:", status)
  const dd = process.env.NEXTAUTH_SECRET;
  console.log("account dd: ", dd);

  const clickHandler = useCallback(async () => {
    let serverSessionData = await getSession();
    console.log("server session data:", serverSessionData);
  }, []);

  return (
    <div className='flex'>
      <Link href={"/admin"}>Admin Setting</Link>
      <button onClick={clickHandler}>Get Server Session</button>
      <button onClick={() => {
        setThemeColor("green");
        setThemeMode("light")
      }}>Apply Theme</button>
    </div>
  );
}

export default Setting;