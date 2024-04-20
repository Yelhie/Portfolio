import { useState } from "react";
import { HomePage } from "./pages/home/HomePage";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  };

  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
