import React, { useState } from 'react';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Buy from './Pages/Buy';
import Logout from './Pages/Logout';
import Checkout from './Pages/Checkout';
import Payment from './Pages/Payment';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState([]);
  const [institute, setInstitute] = useState([]);

  // var bookData;
  const [bookData, setbookData] = useState([]);
  function handleFinalBookData(data) {
    setbookData(data);
    console.log("Inside App: " + JSON.stringify(bookData));
  }

  // var finalBooksResult = [];
  // function handleCallbackSchool(book) {
  //   var isFound = false
  //   for (let index = 0; index < finalBooksResult.length; index++) {
  //     const element = finalBooksResult[index];
  //     if (book.subject === element.subject) {
  //       isFound = true;
  //       element.author = book.author
  //       element.price = book.price
  //       break;
  //     }
  //   }
  //   if (!isFound) {
  //     finalBooksResult.push(book);
  //   }
  // }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Registration></Registration>} />

          <Route exact path="/login"
            element={
              <Login
                name={(n) => setName(n)}
                username={(un) => setEmail(un)}
                password={(p) => setPassword(p)}
              >
              </Login>} />

          <Route exact path="/login/dashboard" element={<Dashboard name={name}></Dashboard>} />

          <Route exact path="/login/dashboard/profile"
            element={
              <Profile
                name={name}
                email={email}
                password={password}
              >
              </Profile>} />

          <Route exact path="/login/dashboard/buy"
            element={
              <Buy
                name={name}
                locationData={(ld) => setLocation(ld)}
                institutionData={(id) => setInstitute(id)}
                finalBookData={handleFinalBookData}
              >
              </Buy>} />

          <Route exact path="/login/dashboard/buy/checkout"
            element={
              <Checkout
                name={name}
                location={location}
                institute={institute}
                bookDetails={bookData}
              >
              </Checkout>} />

          <Route exact path="/login/dashboard/buy/checkout/payment" element={<Payment></Payment>} />
          <Route exact path="/login" element={<Logout></Logout>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;