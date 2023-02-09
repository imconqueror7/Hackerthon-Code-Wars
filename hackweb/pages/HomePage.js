import Image from 'next/image';
import Link from 'next/link';
import Background from '../public/assests/image1.avif';

const HomePage = () => {
  return (
    <div className="md:flex items-center justify-center md:h-screen mb-[50rem]">
    <Image className="h-full w-full " alt="farming" src={Background}/>
      <div className="absolute p-5 text-white x=[2] md:ml-[50rem] md:mt-0 mt-[-5rem]">
        <h2 className=" text-[2.5rem] font-sans-serif">Hack<span className="font-bold">Web</span></h2>
        <p className="py-5 text-1xl text-[#ffffff]">A security assessment tool which is detect fault injection and behavior monitoring.</p>
        <Link href="/login"><button className=" px-8 py-2 border-2 border-gray-200 md:text-white hover:scale-105 duration-200">LogIn</button></Link>
      </div>
      </div>
  )
}

export default HomePage