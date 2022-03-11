import "./App.css";
import Explore from "./components/explore/Explore";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navigation/NavBar";
import SocialProof from "./components/social-proof/SocialProof";
import Testimonial from "./components/testimonial/Testimonial";
import Tutorial from "./components/tutorial/Tutorial";
import CallToAction from "./components/call-to-action/CallToAction";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <SocialProof />
            <Features />
            <Tutorial />
            <Explore />
            <Testimonial />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
