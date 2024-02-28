import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

function Footer() {
    return (
        <div className=' bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className=' my-12 flex flex-col md:flex-row gap-10'>
                <div className=' w-1/2 space-y-8'>
                    <a href="/" className=' text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className=' w-10 inline-block items-center' />
                        <span className=' text-white'>XYZ</span>
                    </a>

                    <p className=' md:w-1/2'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
                    <div className=' flex'>
                        <input type="email" name='email' placeholder='Your email' id='email' className=' bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className=' px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                    </div>
                </div>
                {/* Footer navigations */}
                <div className=' md:w-1/2 flex flex-col md:flex-row flex-wrap gap-8 items-start justify-between' >
                    <div className=' space-y-6 mt-5'>
                        <h4 className=' text-xl'>Platform</h4>
                        <ul className=' space-y-3'>
                            <a href="/" className=' block hover:text-gray-300'>Overview</a>
                            <a href="/" className=' block hover:text-gray-300'>Features</a>
                            <a href="/" className=' block hover:text-gray-300'>About</a>
                            <a href="/" className=' block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className=' space-y-4 mt-5'>
                        <h4 className=' text-xl'>Help</h4>
                        <ul className=' space-y-3'>
                            <a href="/" className=' block hover:text-gray-300'>How does it work?</a>
                            <a href="/" className=' block hover:text-gray-300'>Where to ask questions?</a>
                            <a href="/" className=' block hover:text-gray-300'>How to play?</a>
                            <a href="/" className=' block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className=' space-y-4 mt-5'>
                        <h4 className=' text-xl'>Contacts</h4>
                        <ul className=' space-y-3'>
                            <p className=' hover:text-gray-300'>3253253532</p>
                            <p className=' hover:text-gray-300'>3535325532</p>
                            <p className=' hover:text-gray-300'>jfdjfjn@mail.com</p>
                            <p className=' hover:text-gray-300'>343355</p>
                        </ul>
                    </div>
                </div>

            </div>

            <hr />
            <div className=' flex flex-col md:flex-row justify-between mt-5 space-y-5 pb-5 items-center'>
                <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
                <div className=' flex gap-5'>
                    <img src={facebook} alt="" className=' w-8 cursor-pointer hover:-translate-y-5 transition-all duration-500' />
                    <img src={linkedin} alt="" className=' w-8 cursor-pointer hover:-translate-y-5 transition-all duration-500' />
                    <img src={twitter} alt="" className=' w-8 cursor-pointer hover:-translate-y-5 transition-all duration-500' />
                    <img src={instagram} alt="" className=' w-8 cursor-pointer hover:-translate-y-5 transition-all duration-500' />
                </div>
            </div>

        </div>
    )
}

export default Footer