import Home from "../Components/Home/Home";
import ScrollToTop from "../Components/Global/ScrollToTop/ScrollToTop";
import About from "../Components/About/About";
import Header from "../Components/Home/Header";
import Services from "../Components/Services/Services";
import Works from "../Components/Works/Works";
import Clients from "../Components/Clients/Clients"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"

const Landing = () => {
  return (
    <div className=" ">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Works />
        </section>
        <section>
          <Clients />
        </section>
        <section>
          <Contact/>
        </section>
        <section>
          <Footer/>
        </section>
        <ScrollToTop />
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
