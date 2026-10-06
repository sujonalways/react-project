import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import Stats from "./assets/components/Stats";
import Studying from "./assets/components/Studying";
import Featured from "./assets/components/Featured";
import HowitWorsk from "./assets/components/HowitWorsk";
import AiDaylearning from "./assets/components/AiDaylearning";
import Review from "./assets/components/Review";
import Pricing from "./assets/components/Pricing";
import FAQ from "./assets/components/FAQ";
import NextStudySession from "./assets/components/NextStudySession";
import Footer from "./assets/components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <Studying />
      <Featured  />
      <HowitWorsk  />
      <AiDaylearning />
      <Review />
      <Pricing />
      <FAQ />
      <NextStudySession />
      <Footer />
    </div>
  );
}

export default App;
