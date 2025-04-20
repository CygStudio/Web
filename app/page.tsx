import Header from "@/app/components/Header"
import Banner from "@/app/components/Banner"
import VideoSection from "@/app/components/VideoSection"
import StandingSign from "@/app/components/StandingSign"
import FanMessage from "@/app/components/FanMessage"
import NewFan from "@/app/components/NewFan"
import KnowCyg from "@/app/components/KnowCyg"
import CygIntroduction from "@/app/components/CygIntroduction"
import Welcome from "@/app/components/Welcome"
import FootMarquee from "@/app/components/FootMarquee"
import Footer from "@/app/components/Footer"
import GoTop from "@/components/GoTop"

export default function Home() {
  return (
    <>
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
