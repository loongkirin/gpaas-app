import axios from '@/lib/axios';
import { getServerSession } from 'next-auth';
// import getSession from '../services/getSession'

import { getSession } from 'next-auth/react';

const fetchData = async (url: string) => {
  let data = null;
  try {
    const authHeaders = await getAuthHeaders();
    const axiosOptions = {
      headers: { ...authHeaders },
    };
    const res = await axios.get(url, axiosOptions);
    console.log("fetchData res:", res);
    const result = res.data;
    data = result;
} catch (err) {
    console.log(err);
} finally {

}
  return data;
}

const getAuthHeaders = async () => {
  const session = await getServerSession();
  console.log("get auth headers session:", session);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session?.user?.email}` 
  }
  return headers;
}

export { fetchData };