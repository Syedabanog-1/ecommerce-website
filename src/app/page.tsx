import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";
import HeaderMin from "./components/HeaderMin";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <div>
     <HeaderTop />
      <HeaderMin />
      <Navbar />
      <Hero />

      <Image className="rounded-xl object-cover w-full max-h-[400px] sm:max-h-[500px] md:max-h-[400px] lg:max-h-[500px] object-center transition-transform duration-300 ease-in-out"
        src="/productsdetail.jpg" // Update with your image path
        alt="Display"
        width={500} // Set your desired width
        height={300} // Set your desired height
         /> <br /><br />
      <Image 
        src="/iStock.jpg" // Update with your image path
        alt="Display"
        width={500} // Set your desired width
        height={300} // Set your desired height
         /> 
      <NewProducts />
      <Footer />
    </div>
  );
}