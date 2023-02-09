import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footer = () => {
    return (
        <main>
            <section className="max-w-[50%] m-auto px-16 py-3 rounded-md transition-transform translate-y-10 bg-white">
                <div className="grid grid-cols-3 items-center gap-20 ">
                    <div className="text-gray-600 text-sm">
                        <h3>Ready to get started</h3>
                    </div>
                    <div className='text-white'>
                        <a href="/">
                            <button className="bg-gradient-to-tr text-1xl from-[#953508] via-[#ca6512] to-[#f3ba2b] h-10 w-32 hover:scale-105 duration-100 ease-in-out hover:tracking-wide rounded-md  ">Get Started</button>
                        </a>
                    </div>
                    <div className="text-gray-600 text-sm">
                        <h3>Talk to us today</h3>
                    </div>
                </div>
            </section>
            <footer className="px-1 py-20 h-[23rem] bg-gray-100 ">
                <div className="max-w-[70%] m-auto px-16 md:py-2 grid grid-cols-4">
                    <div>
                        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-[#712806] via-[#e97b21] to-[#f0c24c] ">HackWeb</h3>
                        <p className="text-gray-600 ">A security assessment tool which is detect fault injection and behavior monitoring.</p>
                    </div>
                    <div className="px-16 p-5">
                        <ul className="text-gray-600 text-1xl">
                            <li className="hover:bg-gray-200 rounded-md h-6 w-36 px-2"><a href="/">Home</a></li>
                            <li className="hover:bg-gray-200 rounded-md h-6 w-36 px-2"><a href="/">Services</a></li>
                            <li className="hover:bg-gray-200 rounded-md h-6 w-36 px-2"><a href="/">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <h3 className="text-gray-600 text-lg">Follow Us</h3>
                        <div className="flex p-3 ">
                            <div className=" cursor-pointer text-2xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                                <a href="https://www.instagram.com/mardav_113/" target="blank"><FaInstagram /></a>
                            </div>
                            <div className=" cursor-pointer text-2xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                                <a href="www.facebook.com" target="blank"><FaFacebook /></a>
                            </div>
                            <div className=" cursor-pointer text-2xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                                <a href="https://twitter.com/mardav_13" target="blank"><FaTwitter /></a>
                            </div>
                            <div className=" cursor-pointer text-2xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                                <a href="https://github.com/mardavsj" target="blank"><FaGithub /></a>
                            </div>
                            <div className=" cursor-pointer text-2xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                                <a href="https://www.linkedin.com/in/mardav-jadaun-13s/" target="blank"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 text-gray-600 p-4 ">
                        <h3 className="text-lg">Call us</h3>
                        <h3 className="py-3">+919503501043</h3>
                    </div>
                </div>
                <div className="p-8" >
                    <div className="bg-gradient-to-tr from-[#712806] via-[#e97b21] to-[#f0c24c] h-1">
                        <hr />
                    </div>
                    <div className="text-center">
                        <p className="text-slate-400 mt-9 font-sans">
                            Copyright : CropConnect @{new Date().getFullYear()}
                        </p>
                        <p className="text-slate-400 font-sans">
                            All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default footer