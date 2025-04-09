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
const LandingPage = lazy(() => import("./pages/landingpages/LandingPage"));
const BlockchainLanding = lazy(() =>
  import("./pages/landingpages/BlockchainLanding")
);
const GameDevelopmentLanding = lazy(() =>
  import("./pages/landingpages/GameDevelopmentLanding")
);
const RPALanding = lazy(() => import("./pages/landingpages/RPALanding"));
const AILanding = lazy(() => import("./pages/landingpages/AILanding"));
const MLLanding = lazy(() => import("./pages/landingpages/MLLanding"));
const CloudComputingLanding = lazy(() =>
  import("./pages/landingpages/CloudComputingLanding")
);
const DataScienceLanding = lazy(() =>
  import("./pages/landingpages/DataScienceLanding")
);
const NLPLanding = lazy(() => import("./pages/landingpages/NLPLanding"));
const CloudMigrationLanding = lazy(() =>
  import("./pages/landingpages/CloudMigrationLanding")
);
const UIUXLanding = lazy(() =>
  import("./pages/landingpages/UIUXLanding")
);
const AgenticAILanding = lazy(() =>
  import("./pages/landingpages/AgenticAILanding")
);
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
            <Route
              path="/blockchain-development"
              element={<BlockchainLanding />}
            />
            <Route
              path="/game-development"
              element={<GameDevelopmentLanding />}
            />
            <Route path="/rpa-development" element={<RPALanding />} />
            <Route path="/ai-development" element={<AILanding />} />
            <Route path="/ml-development" element={<MLLanding />} />
            <Route
              path="/cloud-computing"
              element={<CloudComputingLanding />}
            />
            <Route path="/data-science" element={<DataScienceLanding />} />
            <Route path="/nlp-development" element={<NLPLanding />} />
            <Route
              path="/cloud-migration"
              element={<CloudMigrationLanding />}
            />
            <Route
              path="/ui-ux-design"
              element={<UIUXLanding />}
            />
            <Route
              path="/agentic-ai"
              element={<AgenticAILanding />}
            />
          </Routes>
        </Router>
      </SpinnerContextProvider>
    </Suspense>
  );
}

export default App;
