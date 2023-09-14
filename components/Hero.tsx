/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import heroImage from '../images/social-win-1-crop.jpg'
import Image from 'next/image'
export default function Hero() {
  return (
      <section className="hero-container">
        <div className="hero bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundPosition: 'top',
          backgroundImage: `url(${heroImage})`,
          height: '600px',
        }}
        >
            <div className='w-full h-full flex flex-col items-center justify-center'
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
            }}
            >
              <div className='w-full h-3/4 flex flex-col items-center justify-evenly'>
                <h2 className='text-left self-start leading-relaxed py-1 my-1'>
                    #1 Social Fitness App
                </h2>
                <h2 className='self-start text-left text-xl leading-relaxed text-black py-1 my-1'>
                   Stay Motivated. Stay Active. <br />Totally Free.
                </h2>
                <p className="text-left self-start my-0 py-0 w-1/2">SweatShowdown personalizes your training and keeps you on track. Join us and we'll help you reach your fitness goals - and enjoy it.</p>
                <button className='self-start'>
                    Join Now
        </button>
        </div>
            </div>
            
        </div>
        
      </section>
  )
}
