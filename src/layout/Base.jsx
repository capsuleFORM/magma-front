import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BaseLayout() {

  return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </>
  );
}
