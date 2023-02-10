import Image from 'next/image';
import Link from 'next/link';
import Background from '../public/assests/image2.jpg';
import Image1 from '../public/assests/image1.jpg';
import Image5 from '../public/assests/image5.jpg';
import Image6 from '../public/assests/image6.jpg';

const HomePage = () => {
  return (
    <main>
      <section className="grid grid-cols-2 py-4 ">
      <div className="image">
          <div><Image src={Background} alt="security-image" width={800} height={800} /></div>
      </div>
      <div className="flex justify-center flex-col w-4/5 ">
        <div>
          <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-[#051087] via-[#2069dd] to-[#2fbded]">HackWeb</div>
        </div>
        <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-600">Get rid of your thefts.</div>
        </div>
        <p className="text-gray-500 py-3">
          A security web assessment tool which will detect fault injection and behavior monitoring.
        </p>
        <Link href="/login"><button className=" px-8 py-2 border-2 border-[#3b49e6] text-[#3b49e6] hover:scale-105 duration-200">LogIn</button></Link>
      </div>
      </section>
      <section className="px-4 text-center">
        <h3 className=" mx-auto text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#03083c] via-[#3178e9] to-[#2fbded] py-8 ">Why choose HackWeb?</h3>
          <div className="text-center px-[22rem]"><Image src={Image1} alt="info" width={800} height={200} /></div>
      </section>
      <section className="px-4">
        <h3 className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#03083c] via-[#3178e9] to-[#2fbded] py-8 ">Screenshots</h3>
      <div className="flex gap-12 px-4">
          <div><Image src={Image5} alt="info" width={700} height={800}/></div>
          <div><Image src={Image6} alt="info" width={700} height={800}/></div>
        </div>
      </section>
    </main>
  )
}

export default HomePage