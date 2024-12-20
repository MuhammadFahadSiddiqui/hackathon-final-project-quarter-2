import Aboutus from "./component/aboutus";
import Foodcategory from "./component/foodcategory";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div className="bg-ododod">
     <Hero/>
     <Aboutus/>
     <Foodcategory/>
    </div>
  );
}
