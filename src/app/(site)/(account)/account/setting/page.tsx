'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const Setting = () => {
  const { data: session, status } = useSession();
  
  console.log("session data:", session, " status:", status)
  return (
    <div>Setting</div>
  );
}

export default Setting;