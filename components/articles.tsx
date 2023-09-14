import React from 'react'
import article from '../images/hero-pic1.jpg'
import Image from 'next/image'

export default function articles() {
  return (
    <section className="articles">
    <h2 className="text-black self-start">Check Out Our Articles</h2>
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="relative overflow-hidden bg-no-repeat bg-cover px-2">
        <Image className="w-full"
            src={article} 
            alt="article"
            width={150}
            height={150}
            />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed px-2"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h2 className="text-white uppercase">top 7 exercises for athletes</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <Image className="w-full"
            src={article} 
            alt="article"
            width={150}
            height={150}
            />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h2 className="text-white uppercase">what are the best beginner workouts?</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <Image className="w-full"
            src={article} 
            alt="article"
            width={150}
            height={150}
            />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h2 className="text-white uppercase">how to increase your vertical jump</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

  </section>
  )
}
