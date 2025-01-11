import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BaseLayout() {
  const location = useLocation();

  return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer isHomePage={location.pathname === '/' ? true : false} />
        <ScrollRestoration />
      </>
  );
}
