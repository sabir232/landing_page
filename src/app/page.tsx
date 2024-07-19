import BeBestYou from "@/components/BeBestYou";
import DoesThisSoundFamiliar from "@/components/DoesThisSoundFamiliar";
import EQbeatsIQ from "@/components/EQbeatsIQ";
import EverWonder from "@/components/EverWonder";
import Footer from "@/components/Footer";
import MasterLife from "@/components/MasterLife";
import MeetAheadCard from "@/components/MeetAheadCard";
import Navbar from "@/components/Navbar";
import OpenVacancies from "@/components/Openvacancies";
import SelfImprovement from "@/components/SelfImprovement";
import Test from "@/components/Test";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard />
      <SelfImprovement />
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <OpenVacancies />
      <Footer />
    </>
  );
}
