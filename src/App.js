import "./App.css";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navigation/NavBar";
import SocialProof from "./components/social-proof/SocialProof";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <SocialProof />
            <Features />
        </div>
    );
}

export default App;
