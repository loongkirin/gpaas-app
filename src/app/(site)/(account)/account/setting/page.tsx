'use client';

import { getSession, useSession } from 'next-auth/react';
import React, { useCallback } from 'react';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import { UIElement } from '@/models/UIElement';
import Form from '@/components/forms/Form';
import UIItem from '@/components/uidesigner/UIItem';
import { BiBluetooth, BiAlarm, BiAnchor } from 'react-icons/bi'
import UILoading from '@/components/uidesigner/UILoading';
import Avatar from '@/components/avatar/Avatar';
import Image from 'next/image';


const items: UIElement[] = [
  {
    api_name: "name",
    lable: "Name",
    type: "input",
    placeholder: "Name",
    readonly: true,
  },
  {
    api_name: "mobile",
    lable: "Mobile",
    type: "input",
    placeholder: "Mobile",
  },
  {
    api_name: "password",
    lable: "Password",
    type: "password",
    placeholder: "Password",
  },
]

const dataList = [
  { title: "Test1", content: "Test1 Content.........." },
  { title: "Test2", content: "Test2 Content.........." },
  { title: "Test3", content: "Test3 Content.........." },
]

const uiItems = [
  { label: "Alarm", icon: BiAlarm },
  { label: "Anchor", icon: BiAnchor },
  { label: "Bluetooth", icon: BiBluetooth },
]
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
    <div className='flex flex-col space-y-2'>
      <Link href={"/admin"}>Admin Setting</Link>
      <button onClick={clickHandler}>Get Server Session</button>
      <button onClick={() => {
        setThemeColor("green");
        setThemeMode("light")
      }}>Apply Theme</button>
      <Form id='222' items={items}></Form>
      {uiItems.map((item, index) => <UIItem key={index} lable={item.label} icon={item.icon} />)}
      <UILoading />
      <Avatar>
        <Image src="/images/logo.jpg" alt="logo" width={48} height={48} />
      </Avatar>
    </div>
  );
}

export default Setting;