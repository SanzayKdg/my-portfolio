import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Suspense, lazy } from "react";
import Loading from "./layout/Loading";
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
    </Suspense>
  );
};

export default App;
