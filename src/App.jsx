import React from 'react'
import HomePage from './components/Home';
import WhyChooseStudyGroup from './components/WhyChooseStudyGroup';
import HowStudyGroupWorks from './components/HowStudyGroupWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/ContactFooter';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div>
     <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    </Router>
     <Navbar/>
      <HomePage />
      <WhyChooseStudyGroup />
      <HowStudyGroupWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
