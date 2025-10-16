import CultureZeta from "../components/ourvirtues/CultureZeta";
import Location from "../components/ourvirtues/Location";
import OurCommitment from "../components/ourvirtues/OurCommitment";
import OurMission from "../components/ourvirtues/ourmission";
import OurVirtues from "../components/ourvirtues/OurVirtues";
import OurVision from "../components/ourvirtues/OurVision";
import VirtueHero from "../components/ourvirtues/VirtueHero";
const Virtues = () => {
  return (
    <div className="mt-20 max-w-[1400px] mx-auto w-full h-auto">
      <VirtueHero />
      <OurMission />
      <OurVision />
      <OurCommitment/>
      <OurVirtues/>
      <CultureZeta/>
      <Location/>
    </div>
  );
};

export default Virtues;
