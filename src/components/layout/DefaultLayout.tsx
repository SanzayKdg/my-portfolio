import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../header/Header";
import ThemeProvider from "../provider/theme-provider";

const DefaultLayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col gap-7">
        <Header />
        <main className="px-6 lg:px-8 transition-all ease-in-out duration-300 grow flex items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default DefaultLayout;
