import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  useEffect(() => {
    const changeColor= () =>{
      if(window.scrollY >=100) {
        setColor('#ffffff')
        setTextColor('#091275')
      }
      else{
        setColor('transparent')
        setTextColor('#ffffff')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  const menuItem = [
    {
      id: '/',
      name: "Home"
    },
    {
      id: '/contactpage',
      name: "Contact Us"
    },
    {
      id:'/teampage',
      name:"Team Page"

    },
    {
      id: '/signup',
      icon: <BsPerson/>
    }
  ]

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-500">
      <div className="max-w-[1100px] m-auto flex justify-between items-center p-4">
          <h1 style={{ color: `${textColor}` }} className="text-2xl">HackWeb</h1>
        <div className="w-96 justify-center">
          <input type="text" className=" w-96 h-8 px-3 bg-white border-slate-300 rounded-md text-sm placeholder-slate-500 shadow-md shadow-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Select urls" />
        </div>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex uppercase font-sans text-sm ease-in-out duration-500">
          <li className="px-4 hover:font-semibold duration-200 ">
            <Link href='/'>Home</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200">
            <Link href='/teampage'>Team</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200 ">
            <Link href='/contactpage'><div>Contact us</div></Link>
          </li>
          <Link href="/signup">
          <li className="text-xl px-4 hover:scale-110 duration-200 cursor-pointer">
            <BsPerson/>
          </li>
          </Link>
        </ul>
        <div className="sm:hidden block z-10 ">
          {!navigation && (
            <div style={{ color: `${textColor}` }} className="sm:hidden bg-fixed text-2xl" onClick={() => setNavigation(true)}>
              <AiOutlineMenu />
            </div>
          )}
        </div>
        <div className={
          navigation 
          ? "sm:hidden absolute top-0 left-0 right-0 button-0 w-4/5 flex justify-center items-center h-screen bg-black text-center ease-in duration-200 text-white" 
          : "sm:hidden absolute top-0 left-[-100%] right-0 button-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"}>
          <div>
            <div onClick={() => setNavigation(false)}>
              <AiOutlineClose size={22} />
            </div>
            <div className="mt-8 flex flex-col h-fit uppercase gap-20 font-sans text-white">
              <ul onClick={() => setNavigation(false)}>
                {menuItem.map(({ id, name, index, icon }) => (
                  <Link key={index} href={`${id}`}>
                    <li className="py-4 text-xl">{name}</li>
                    <li className="py-4 text-xl">{icon}</li>
                  </Link>
                ))}
              </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar