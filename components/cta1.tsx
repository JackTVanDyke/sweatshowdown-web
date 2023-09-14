/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import cta from '../images/CTA-photo.jpg'

export default function cta1() {
  return (
    <section className="CTA mb-12">
      <div className="flex overflow-hidden bg-no-repeat bg-cover w-full" 
      style={{
          backgroundPosition: 'top',
          backgroundImage: `url(${cta})`,
          height: '600px',
        }}></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div className="block rounded-lg shadow-lg mt-[-350px] px-6 py-12 md:py-16 md:px-12" 
          style={{
            background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(30px)'
            }}>
            <h3 className="tracking-tight text-5xl mb-8 text-primary font-semibold">Don't Miss Out</h3>
            <h3 className="tracking-tight text-5xl mb-8 font-extrabold">Join The Fun</h3>
            <button>Join Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}
