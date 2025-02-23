import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>

      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
