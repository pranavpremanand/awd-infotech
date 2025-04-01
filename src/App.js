import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./constant";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));

AOS.init({
  once: true,
  duration: 500,
  offset: -70,
});

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SpinnerContextProvider>
        <Router>
          <LoadingSpinnerContext />
          <WhatsAppIcon />
          <ScrollToTop />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            {/* Website pages */}
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog/:title" element={<BlogDetails />} />

            {/* Landing pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
        </Router>
      </SpinnerContextProvider>
    </Suspense>
  );
}

export default App;
