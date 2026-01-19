import TopHeader from "./Components/TopHeader";
import SubHeader from "./Components/SubHeader";
import LandingStatement from "./Components/LandingStatement";
import LandingPageTopImage from "./Components/LandingPageTopImage";
import CompanyCarousel from "./Components/CompanyCarousel";
import StatsSection from "./Components/StatsSection";
import FurnitureSlab from "./Components/FurnitureSlab";
import Footer from "./Components/Footer";



function App() {
  return (
    <div style={{position: 'relative', zIndex: 10, backgroundColor: 'white'}}>
      <TopHeader />
      <SubHeader />
      <LandingStatement />
      <LandingPageTopImage />
      <CompanyCarousel />
      <StatsSection />
      <FurnitureSlab />
      <Footer />
      <p className="disclaimer">
        Portfolio demonstration. Logos used for presentation purposes only."
      </p>
    </div>
  );
}



export default App;




