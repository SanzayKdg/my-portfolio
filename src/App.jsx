import { Suspense, lazy } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Loading from "./layout/Loading";
import MoveToTop from "./layout/MoveToTop";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <MoveToTop />
    </Suspense>
  );
};

export default App;
