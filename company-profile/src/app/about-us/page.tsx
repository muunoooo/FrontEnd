import FounderPage from "../pages/about/founder";
import KeputusanPage from "../pages/about/keputusan";
import MemberPage from "../pages/about/member";
import VissionMissionPage from "../pages/about/visiMisi";

export default function AboutPage() {
  return (
    <div>
      <KeputusanPage />
      <FounderPage />
      <VissionMissionPage />
      <MemberPage />
    </div>
  );
}
