import Header from "@/components/Header"
import Banner from "@/components/Banner"
import VideoSection from "@/components/VideoSection"
import StandingSign from "@/components/StandingSign"
import FanMessage from "@/components/FanMessage"
import NewFan from "@/components/NewFan"
import KnowCyg from "@/components/KnowCyg"
import CygIntroduction from "@/components/CygIntroduction"
import Welcome from "@/components/Welcome"
import FootMarquee from "@/components/FootMarquee"
import Footer from "@/components/Footer"
import GoTop from "@/components/GoTop"
import Overlay from "@/components/Overlay"

export default function Home() {
  return (
    <>
      <Overlay />
      <Header />
      <main>
        <Banner />
        <VideoSection />
        <StandingSign />
        <FanMessage />
        <NewFan />
        <KnowCyg />
        <CygIntroduction />
        <Welcome />
      </main>
      <FootMarquee />
      <Footer />
      <GoTop />
    </>
  )
}
