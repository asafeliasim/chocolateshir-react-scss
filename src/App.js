import React,{useState,useEffect} from 'react';
import './sass/main.scss';
import Cookies from "./components/gallery/Cookies";
import CookieDivider from "./components/layout/CookieDivider";
import ImageTransition from "./components/layout/ImageTransition";
import {firstBG,secondBG} from "./components/layout/backGround";
import About from "./components/about/About";
import Footer from './components/layout/footer/Footer';
import OrderList from "./components/order/OrderList";
import LandingPopup from "./components/landing/LandingPopup";
import logo from './asserts/images/‏‏shirlogo.PNG';

import Swal from 'sweetalert2';

// components

import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import ShirNavbar from "./components/layout/ShirNavbar";
import CookieCart from "./components/cookie-cart/CookieCart";



const App=()=> {

    const {cartOpen,setCartOpen} = useState(false);
    const openCart = () => {
        setCartOpen(true);
    }

  useEffect(()=>{
      Swal.fire({
          title: 'הסבר על תהליך ההזמנה באתר',
          html:'ניתן למלא פה מארז של עוגיות טריות (בקפיצות 5)<br/> ולמלא מארז של קפואות (12 עוגיות!!!). <br/> <br/> <strong>עוגיות טריות</strong> 5 ב-&#8362;40  ו10 ב75 &#8362; <br/> מארז של 12 עוגיות קפואות עולה 75 שקלים.',
          confirmButtonText:"בואו נתחיל",
          imageUrl:logo,
          imageHeight: 140,
          customClass:{
              popup: 'swal-popup',
              title:'swal-title',
              content:'swal-text',
              confirmButton:'swal-btn'
          },
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      })
  },[])
  return (
    <main className="main">
        <ShirNavbar openCart={openCart}/>


       {/* <LandingPopup />*/}
        <Header />
        <CookieDivider />

          <CookieCart cartOpen={cartOpen}/>
          <Cookies />
          <OrderList />
          <CookieDivider />
          <ImageTransition bg={firstBG}/>
          <CookieDivider />
          <Contact />
          <CookieDivider />
          <ImageTransition bg={secondBG}/>
          <CookieDivider />
          <About />

        <Footer />
    </main>
  );
}

export default App;
