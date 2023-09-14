/* eslint-disable react/no-unescaped-entities */
import { CiDumbbell, CiFaceSmile, CiGift } from 'react-icons/ci'
import { FaUserFriends } from "react-icons/fa";
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Cta1 from '../components/cta1'
import Cta2 from '../components/cta2';
import Articles from '../components/articles';
export default function HomePage() {
    return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Nav />
      <Hero />
      
      <section className='features'>
        <div>
      <h2 className='text-black text-left md:text-center'>Get Results And See Them</h2>
      <p className='text-left md:text-center my-0 py-0'>From beginners to professional athletes, we have fun with thousands of other people each week while reaching our goals.</p>
      </div>
      <div className='flex flex-wrap justify-between items-start w-[95%]'>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto'>
            <CiDumbbell size={80} />
          </div>
          <h3 className="h-1/2">Best Workout Programs</h3>
          <p className="h-1/2 text-xs">A huge selection of the best workout programs to choose from.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto'>
            <FaUserFriends size={80} />
          </div>
          <h3 className="h-1/2">Best Support</h3>
          <p className="h-1/2 text-xs">Our motivational coach will always be there for you.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto'>
            <CiFaceSmile size={80} />
          </div>
          <h3 className="h-1/2">No Stress</h3>
          <p className="h-1/2 text-xs">Our smart-training system will keep your workouts effective with step-by-step instruction.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto'>
            <CiGift size={80} />
          </div>
          <h3 className="h-1/2">Have Fun</h3>
          <p className="h-1/2 text-xs">Play in competitions earning rewards while you get fit.</p>
        </div>
      </div>
    </section>

        {/* / BENEFITS /  */}

    <section className='benefits'>
           <div>
      <h2 className='text-black text-left md:text-center'>How SweatShowdown Works</h2>
      </div>
      <div className='flex flex-wrap justify-between items-start w-[95%]'>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto text-primary'>
            <CiDumbbell size={80} />
          </div>
          <h3 className="h-1/2">Personalized Routines</h3>
          <p className="h-1/2 text-xs">Based on your fitness goals and history, our Smart-Training System will give you realistic goals to shoot for alongside the best exercises, reps, weights, and rest times to become who you want to be.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto text-primary'>
            <FaUserFriends size={80} />
          </div>
          <h3 className="h-1/2">Progression And Tracking</h3>
          <p className="h-1/2 text-xs">As you begin training, we will automatically adjust to your new and improved strength and endurance, even recommending new programs and setting new goals. Throughout all of this, your individual statistics will be saved, showing you just how far you've come.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto text-primary'>
            <CiFaceSmile size={80} />
          </div>
          <h3 className="h-1/2">Social Fitness</h3>
          <p className="h-1/2 text-xs">SweatShowdown provides weekly and monthly opportunities to Showdown with other users. Compete on a team, compete solo, or compete for your state to see who earns the most sweat. Climb the leaderboards and show off your achievements.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-2'>
          <div className='w-auto h-auto text-primary'>
            <CiGift size={80} />
          </div>
          <h3 className="h-1/2">Accountability</h3>
          <p className="h-1/2 text-xs">Staying consistent is hard, but with SweatShowdown, it couldn't be easier. Our Motivational Coaches send you individualized messages to keep you on track. We refuse to let you give up!</p>
        </div>
      </div>
    </section>
      <Cta1 />
      <SocialProof />
      <Articles />
      <Cta2 />
      {/* / FOOTER / */}
    </div>
    )
}