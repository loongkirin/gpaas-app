
import { authOptions } from '@/features/authentication/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const Setting = async () => {
  let serverSessionData = await getServerSession(authOptions);
  console.log("server session data:", serverSessionData);



  return (
    <div>
      dfsdsf
    </div>
  );
}

export default Setting;