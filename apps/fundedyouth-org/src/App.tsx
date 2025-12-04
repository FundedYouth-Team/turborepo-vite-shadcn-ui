import "@repo/ui/styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { TeachersAndSchools } from "./pages/TeachersAndSchools";
import { Memberships } from "./pages/Memberships";
import { Volunteers } from "./pages/Volunteers";
import { Impact } from "./pages/Impact";
import { Learn } from "./pages/Learn";

function App() {

  // Header Navigation
  const navigationItems = [
    { text: "Learn", url: "/learn" },
    { text: "Teachers", url: "/teachers-and-schools" },
    { text: "Memberships", url: "/memberships" },
    { text: "Impact", url: "/impact" },
    { text: "Get Involved", url: "/volunteers" },
    { text: "Passion Projects", url: "#projects" },
  ];

  // Optional: Different items for mobile
  const mobileNavigationItems = [
    { text: "Learn", url: "/learn" },
    { text: "Teachers", url: "/teachers-and-schools" },
    { text: "Memberships", url: "/memberships" },
    { text: "Impact", url: "/impact" },
    { text: "Get Involved", url: "/volunteers" },
    { text: "Passion Projects", url: "#projects" },
    { text: "Contact", url: "#contact" } // Extra item only on mobile
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Header - fixed or sticky */}
        <Header desktop={navigationItems} mobile={mobileNavigationItems} />

        {/* Main content - NO padding top */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers-and-schools" element={<TeachersAndSchools />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
