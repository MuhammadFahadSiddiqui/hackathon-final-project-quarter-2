import Aboutus from "./component/aboutus";
import Foodcategory from "./component/foodcategory";
import Footer from "./component/footer";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Aboutus/>
     <Foodcategory/>
     <Footer/>
    </div>
  );
}
