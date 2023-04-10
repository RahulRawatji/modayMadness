import { AiOutlineDown } from 'react-icons/ai';

import LOGO from '../assets/Logo.svg';

import { IoReorderThreeOutline } from 'react-icons/io5'
const Header = () => {
  return (
    <div className='bg-[#53389E]'>
        <div className=' px-4 py-2 flex justify-between items-center sm:w-10/12 mx-auto'>
        <div className='flex items-center gap-10'>
          <img src={LOGO}/>
          <ul className='hidden md:flex items-center gap-10'>
            <li className='text-slate-200 text-base'>Home</li>
            <li className='text-slate-200 flex gap-2 items-center text-base'>Products  <AiOutlineDown size={14}/></li>
            <li className='text-slate-200 flex gap-2 items-center text-base'>Resources <AiOutlineDown size={14}/></li>
          </ul>
        </div>
        <div>
          <ul className='hidden md:flex items-center gap-10 '>
            <li className='text-slate-200 text-base'>Support</li>
            <li className='text-slate-200 bg-[#7F56D9] px-4 py-2 rounded-md text-base'>Talk to Sales</li>
          </ul>
          <IoReorderThreeOutline className='md:hidden' size={38} color='#ffff'/>
        </div>
        </div>
    </div>
  )
}

export default Header