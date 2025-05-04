import VideoSection from '@/app/components/VideoSection'
import StandingSign from '@/app/components/StandingSign'
import FanMessage from '@/app/components/FanMessage'
import NewFan from '@/app/components/NewFan'
import KnowCyg from '@/app/components/KnowCyg'
import CygIntroduction from '@/app/components/CygIntroduction'
import AboutCyg from '@/app/components/AboutCyg'
import Welcome from '@/app/components/Welcome'

export default function Home() {
  return (
    <>
      <VideoSection />
      <StandingSign />
      <FanMessage />
      <NewFan />
      <KnowCyg />
      <CygIntroduction />
      <AboutCyg />
      <Welcome />
    </>
  )
}
