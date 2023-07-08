import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
    <About />
    <div className="gradiant-03 z-o" />
    <Explore />
    </div>
    <div className="relative">
    <GetStarted />
    <div className="gradiant-04 z-o" />
    <WhatsNew />
    </div> 
    <World />
    <div className="relative">
    <Insights />
    <div className="gradiant-04 z-o" />
    <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
