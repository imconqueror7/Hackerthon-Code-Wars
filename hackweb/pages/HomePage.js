import Image from 'next/image';
import Link from 'next/link';
import Background from '../public/assests/image2.jpg';

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 py-4 mb-[28rem] " >
      <div className="image">
          <div><Image src={Background} alt="security-image" width={800} height={800} /></div>
      </div>
      <div className="flex justify-center flex-col w-4/5">
        <div>
          <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-[#051087] via-[#2069dd] to-[#2fbded]">HackWeb</div>
        </div>
        <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-600">Get rid of your thefts.</div>
        </div>
        <p className="text-gray-500 py-3">
          A security web assessment tool which will detect fault injection and behavior monitoring.
        </p>
        <Link href="/login"><button className=" px-8 py-2 border-2 border-[#3b49e6] text-[#5764f3] hover:scale-105 duration-200">LogIn</button></Link>
      </div>
    </div>
  )
}

export default HomePage