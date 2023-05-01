import React from "react";
// import MenuList from "../MenuList";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "../MainPage";

// import Header from "../Header";
// import Navigation from "../Navigation";
// import Footer from "../Footer";
// import Products from "../Products";
// import CatProduct from "../CatProduct";
// import Slider from "../Slider/Slider.js";
// import { Divider } from "@mui/material";
// import BestProducts from "../Products/bestSellingProducts";
// import NewProducts from "../Products/exploreNewProducts";
// import Categories from "../Category/Categories";
// import Frame911 from "../Frame911/Frame911";
// import CategoryCard from "../CategoryCard";
// import CategorySlider from "../Category";
// import CategorySlider from "../Category";


const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
         <Home/>
              {/* <Header /> */}
            
              {/* return ( */}
    {/* <CustomNav
      li={[
        ["Dashboard", "img/dashboard.svg"],
        ["Restautant’s", "img/restaurant.svg"],
        ["Manage User’s", "img/manage user.svg"],
        ["Manage Order’s", "img/manage  order.svg"],
        ["Manage Coupon’s", "img/manage coupon.svg"]
      ]} */}
    
     
              {/* <Navigation />
          
              <Outlet />
            
         
              <Footer />
          */}
           
            </>
          }
        >
          {/*--------------------------------- Home page --------------------------------------*/}
          <Route
            path="/"
            element={
              <>
                {/* <Slider />
              
                <Divider variant="middle" />
               
                <Categories/>
                <CategorySlider/>
               
                <Divider variant="middle" />
               
                <CatProduct /> */}
              </>
            }
          />
          {/*-------------------------------- End home page ----------------------------------*/}

          {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
        </Route>
        
      
        

      </Routes>
    </BrowserRouter>
  );
};

export default routes;
