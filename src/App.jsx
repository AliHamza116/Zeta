import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import NavDesktop from "./components/NavDesktop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  window.scrollTo(0, 0);

  return (
    <>
      <NavDesktop />

      {isLoading && <Loader />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
