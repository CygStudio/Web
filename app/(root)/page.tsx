import VideoSection from '@/app/(root)/components/VideoSection'
import StandingSign from '@/app/(root)/components/StandingSign'
import FanMessage from '@/app/(root)/components/FanMessage'
import NewFan from '@/app/(root)/components/NewFan'
import KnowCyg from '@/app/(root)/components/KnowCyg'
import CygIntroduction from '@/app/(root)/components/CygIntroduction'
import AboutCyg from '@/app/(root)/components/AboutCyg'
import Welcome from '@/app/(root)/components/Welcome'

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
