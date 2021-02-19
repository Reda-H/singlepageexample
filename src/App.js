import AboutUs from './AboutUs';
import './App.css';
import ContactUs from './ContactUs';
import Header from './Header';
import WorkExamples from './WorkExamples';

function App() {
  return (
    <div className="App">
      {/* Hero Header */}
      <Header />
      {/* Who we are */}
      <AboutUs />
      {/* Examples of what we do */}
      <WorkExamples />
      {/* Contact */}
      <ContactUs />
    </div>
  );
}

export default App;
