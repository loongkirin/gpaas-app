import React from 'react'
import MenuItem from './MenuItem';
import {HiOutlineDocumentText, HiOutlineCog8Tooth} from 'react-icons/hi2'

const MenuItems = [
    { Id: "1", name: "Create Object", icon: HiOutlineDocumentText},
    { Id: "2", name: "Create File", icon: HiOutlineCog8Tooth},
]

const Menu = () => {
  return (
    <>
        <ul className='py-4 space-y-3'>
            {MenuItems.map((menuItem) => {
                return <li key={menuItem.Id}> <MenuItem icon={menuItem.icon} lable={menuItem.name}/> </li>
            })}
        </ul>
    </>
  );
}

export default Menu;