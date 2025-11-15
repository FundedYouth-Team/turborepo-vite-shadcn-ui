import "@repo/ui/styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

function App() {

  // Header Navigation
  const navigationItems = [
    { text: "Programs", url: "#programs" },
    { text: "About", url: "#about" },
    { text: "Impact", url: "#impact" },
    { text: "Get Involved", url: "#get-involved" }
  ];

  // Optional: Different items for mobile
  const mobileNavigationItems = [
    { text: "Programs", url: "#programs" },
    { text: "About", url: "#about" },
    { text: "Impact", url: "#impact" },
    { text: "Get Involved", url: "#get-involved" },
    { text: "Contact", url: "#contact" } // Extra item only on mobile
  ];

  return (
    <div className="min-h-screen">
      {/* Header - fixed or sticky */}
    <Header desktop={navigationItems} mobile={mobileNavigationItems} />

      {/* Main content - NO padding top */}
      <main>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
