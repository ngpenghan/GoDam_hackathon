import Navigation from "./components/Navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Navigation />
    </LanguageProvider>
  );
}

export default App;
