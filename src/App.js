import Footer from "./component/Footer/Footer.js";
import Navbar from "./component/Navigation/Navbar.js";
import Home from "./pages/Home/home.js";

export default function App() {
  return (
    <div className="">
        <Navbar />
      <div>
        <Home />
      </div>
      <Footer/>
    </div>
  )
}