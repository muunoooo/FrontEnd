import ComPreview from "./pages/HomePage/companyPreview";
import HomePage from "./pages/HomePage/homepage";
import ValuePage from "./pages/HomePage/valuePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ComPreview />
      <ValuePage/>
    </div>
  );
}
