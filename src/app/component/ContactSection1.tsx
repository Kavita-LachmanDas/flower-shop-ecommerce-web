import ContactSection2 from "./ContactSection2";
import ContactSection3 from "./ContactSection3";
import Header from "./Header";

export default function AboutSection1() {
    return (
      
      
  <div>
  <div className="contact">
  <Header/>
        <div className=" w-full flex flex-col justify-center content-center relative top-8">
        
        <div className=" justify-center content-center text-center text-white p-4">
     <h1 className='text-[20px] font-bold'>Contact Us</h1>
     <p className='font-bold text-[60px] font-serif'>Get in Touch with Our <br /> Experts Team</p>
     <p>Share some details here. This is Flexible section where you can share anything you want. It could be details or <br />
      some information.</p>
  </div>
  </div>
  </div>



<ContactSection2/>
<ContactSection3/>











  </div>
    )
}