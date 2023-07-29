import React, { useContext, useState } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price , setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary'></RiWallet3Line>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
        <div className='text-[13px]'>Choose price range</div>
      </div>
      {
        isOpen ? (<RiArrowDownSLine className='dropdown-icon-secondary'></RiArrowDownSLine>) : (<RiArrowUpSLine className='dropdown-icon-secondary'></RiArrowUpSLine>)
      }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (<Menu.Item onClick={() => setProperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
          {property}
        </Menu.Item>)
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
