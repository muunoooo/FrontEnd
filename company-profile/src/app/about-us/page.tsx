import KeputusanPage from "../pages/about/keputusan";
import MemberPage from "../pages/about/member";
import PhotoAboutUsPage from "../pages/about/PhotoAboutUs";
import VissionMissionPage from "../pages/about/visiMisi";

export default function AboutPage() {
  return (
    <div>
      <KeputusanPage/>
      <VissionMissionPage/>
      <MemberPage/>
      <PhotoAboutUsPage/>
    </div>
  );
}
