import Link from 'next/link';

const Navbar = () => {

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-500 shadow-md bg-white">
      <div className="max-w-[1100px] m-auto flex justify-between items-center p-4">
          <h1 className="text-2xl">HackWeb</h1>
        <div className="w-96 justify-center">
          <input type="text" className=" w-96 h-9 px-3 bg-gray-100 border-slate-300 rounded-md text-sm placeholder-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search the urls." />
        </div>
        <ul className="hidden sm:flex font-sans text-sm ease-in-out duration-500 items-center">
          <li className="hover:font-semibold duration-200 uppercase">
            <Link href='/'>Home</Link>
          </li>
          <li className="px-10 hover:font-semibold duration-200 uppercase">
            <Link href='/teampage'>Team</Link>
          </li>
          <li className="text-[15px] py-1 text-white h-8 px-4 cursor-pointer bg-gradient-to-tr from-[#091275] via-[#2069dd] to-[#2fd4ed] rounded-md hover:bg-gradient-to-bl duration-200 items-center justify-center text-center">
            <Link href='/signup'>Signup</Link>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar