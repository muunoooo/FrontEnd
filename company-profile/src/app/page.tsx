import ComPreview from "./pages/HomePage/companyPreview";
import HomePage from "./pages/HomePage/homepage";
import Services from "./pages/HomePage/services";
import Testimonial from "./pages/HomePage/testimonial";
import ValuePage from "./pages/HomePage/valuePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ComPreview />
      <ValuePage/>
      <Services/>
      <Testimonial/>
    </div>
  );
}
