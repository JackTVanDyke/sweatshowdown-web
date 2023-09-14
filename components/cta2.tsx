/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import cta from '../images/woman-smiling-boxing.jpg'

export default function cta2() {
  return (
    <section className="CTA mb-12">
      <div className="flex overflow-hidden bg-no-repeat bg-cover w-full" 
      style={{
          backgroundPosition: 'top',
          backgroundImage: `url(${cta})`,
          height: '600px',
        }}></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center">
          <div className="block rounded-lg shadow-lg mt-[-350px] px-6 py-12 md:py-16 md:px-12" 
          style={{
            background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(30px)'
            }}>
            <h3 className="tracking-tight text-5xl mb-8 text-primary font-semibold text-center">What Are You Waiting For?</h3>
            <h3 className="tracking-tight text-5xl mb-8 text-black font-semibold text-center">Reach Your Goals Now</h3>
            <button>Join Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}
