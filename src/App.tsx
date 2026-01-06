<script src="http://localhost:5174"></script>;
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Hero } from "./sections/Hero";
import { Inventory } from "./sections/Inventory";
import { Contact } from "./sections/Contact";
import { Maps } from "./sections/Maps";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a]">
        <Navbar />
        <Hero />
        <Inventory />
        <Contact />
        <Maps />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
