// icons
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const path = usePathname()
 
  return (
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 z-50 mt-auto fixed bottom-0 xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md h-max xl:h-screen'>
    <div className='flex w-full items-center justify-between bg-white/10 backdrop-blur-sm py-8 px-4 h-[80px] md:px-40 xl:px-0 xl:h-max xl:text-xl xl:flex-col text-3xl xl:justify-center  gap-y-10 xl:rounded-full'>
      {navData.map((link,index)=>(
        <Link key={index} href={link.path}
         className={`${path === link.path && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}>
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden  xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-1.5 rounded'>
                  <div className='text-12px leading-none font-semibold capitalize'>{link.name}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-white absolute border-l-8 border-y-transparent border-r-0 border-y-[6px] -right-2'>
                  </div>
                </div>
              </div>
              <div>{link.icon}</div>
        </Link>     
      ))}
    </div>
  </nav>);
};

export default Nav;
