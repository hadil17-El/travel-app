import { Route, Routes, BrowserRouter as Router, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from 'react';
import "./App.css";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Loading from "./components/Loading.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./Booking/Booking.jsx";
import Destination from "./Destination/Destination.jsx";
import Create from "./CreatAccount/Create.jsx"; // Verifica il nome corretto!
import Account from "./Account/Account.jsx";

const AppContent = () => {
  const location = useLocation();
  const isLoadingPage = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${isLoadingPage ? "loading-page-body" : ""}`}>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Destination" element={<Destination />} />
              <Route path="/account" element={<Account />} />
              <Route path="/create-account" element={<Create />} />
              <Route path="/Booking" element={<Booking />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
