import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Header/Banner';
import Copyright from '../../Components/Copyright/copyright';


const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>


      <main>
        <Outlet></Outlet>
      </main>


      <footer>
        <Footer></Footer>
        <Copyright></Copyright>
      </footer>
    </div>
  );
};

export default Root;