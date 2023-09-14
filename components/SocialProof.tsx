/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Woman from '../images/woman-smiling-boxing.jpg'

export default function SocialProof() {
  return (
    <section className='benefits'>
    <h2 className='text-black text-left'>What People Like You Are Saying</h2>
    <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
      <div className="my-4">
        <div className="flex justify-center">
          <Image className="rounded-full shadow-lg w-32 h-32 mb-2 mx-auto"
            src={Woman} 
            alt="avatar"
            width={150}
            height={150}
            />
        </div>
        <h5 className="text-lg font-bold mb-2 text-primary">Maria Smantha</h5>
        <p className="text-xs">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          I wanted to lose some weight for a wedding where I'd be the best man. I was a bit embarassed with the shape I was in coming out of covid but haven't been able to change it myself. With SweatShowdown, I managed to lose 18 pounds and actually enjoy working out!
        </p>
      </div>
      <div className="my-4">
        <div className="flex justify-center">
          <Image className="rounded-full shadow-lg w-32 h-32 mb-2 mx-auto"
            src={Woman} 
            alt="avatar"
            width={150}
            height={150}
            />
        </div>
        <h5 className="text-lg font-bold mb-2 text-primary">Maria Smantha</h5>
        <p className="text-xs">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          I wanted to lose some weight for a wedding where I'd be the best man. I was a bit embarassed with the shape I was in coming out of covid but haven't been able to change it myself. With SweatShowdown, I managed to lose 18 pounds and actually enjoy working out!
        </p>
      </div>
      <div className="my-4">
        <div className="flex justify-center">
          <Image className="rounded-full shadow-lg w-32 h-32 mb-2 mx-auto"
            src={Woman} 
            alt="avatar"
            width={150}
            height={150}
            />
        </div>
        <h5 className="text-lg font-bold mb-2 text-primary">Maria Smantha</h5>
        <p className="text-xs">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
            className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          I wanted to lose some weight for a wedding where I'd be the best man. I was a bit embarassed with the shape I was in coming out of covid but haven't been able to change it myself. With SweatShowdown, I managed to lose 18 pounds and actually enjoy working out!
        </p>
      </div>
    </div>
    </section>
  )
}
