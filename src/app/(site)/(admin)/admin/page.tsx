'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

const Setting = () => {
  const { data: session, status } = useSession();
  console.log("admin session data:", session, " status:", status)
  const dd = process.env.NEXTAUTH_SECRET;
  console.log("admin dd: ", dd);
  return (
    <div>
      <Link href={"/account/setting"}>Account Setting</Link>
    </div>
  );
}

export default Setting;