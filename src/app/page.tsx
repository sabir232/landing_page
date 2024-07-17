import DoesThisSoundFamiliar from "@/components/DoesThisSoundFamiliar";
import EQbeatsIQ from "@/components/EQbeatsIQ";
import Footer from "@/components/Footer";
import MasterLife from "@/components/MasterLife";
import MeetAheadCard from "@/components/MeetAheadCard";
import Navbar from "@/components/Navbar";
import SelfImprovement from "@/components/SelfImprovement";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard />
      <SelfImprovement />
      <Footer />
    </>
  );
}
