import DigitalClock from "./DigitalClock.jsx";
import './App.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Student from "./Student.jsx";
import Weather from "./Weather.jsx";
import UserGreeting from "./Usergreeting.jsx";
function App() {
  return (
    <>
    <Student name="John" age = {30} isStudent ={true} />
      <Header />
      <UserGreeting isLoggedIn={true} user="Vincent" />
      <DigitalClock />
      <Weather />
      <Footer />
    </>
  )
}
export default App;