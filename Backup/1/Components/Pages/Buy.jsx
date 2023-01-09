import React, { useState } from 'react'
import Navbar from './Navbar'
import "./Buy.css";
import Location from './Buy/Location';
import School from './Buy/School';
import College from './Buy/College';
import Others from './Buy/Others';
import { useNavigate } from 'react-router-dom';

function Buy(props) {

  const [instType, setInstType] = useState("");
  const [active, setActive] = useState(false);
  const [activeCollege, setActiveCollege] = useState(false);

  const navigate = useNavigate();

  function handleInst(institutionType) {
    setInstType(institutionType)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Proceding to checkout!!");
    navigate("/login/dashboard/buy/checkout");
  }

  function handleSchoolBook(bd) {
    props.finalBookData(bd);
  }

  function handleCollegeBook(bd) {
    props.finalBookData(bd);
  }

  const [stateId, setstateId] = useState("0");
  const [cityId, setcityId] = useState("0");
  const [blockId, setblockId] = useState("0");
  const [schoolLocation, setSchoolLocation] = useState({});

  const updateLocation = (key, value) => {         //
    let obj = {};
    obj[key] = value;
    let newObj = Object.assign({}, schoolLocation, obj)
    console.log(newObj);
    setSchoolLocation(newObj);
  }

  function handleStateId(sid) {
    setstateId(sid);
  }
  function handleCityId(cid) {
    setcityId(cid);
  }
  function handleBlockId(bid) {
    setblockId(bid);
  }
  var schoolName = "";
  function handleSchoolName(sn) {
    schoolName = sn;
  }
  var boardName = "";
  function handleBoardqName(bn) {
    boardName = bn;
  }

  return (
    <div>
      <Navbar name={props.name}></Navbar>
      <div style={{ paddingBottom: "200px", height: "1500px" }} className="buy-container">
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <div style={{ margin: "0", paddingTop: "50px" }} className='header'>
            <h4>Select Location of the Institute:-</h4>
          </div>
          <div className='location container'>
            <Location
              institutionType={handleInst}
              stateId={handleStateId}
              cityId={handleCityId}
              blockId={handleBlockId}
              updateLocation={updateLocation}
            >
            </Location>
          </div>
          {instType !== "" && instType !== "others"
            ?
            <div>
              <div className='header'>
                {instType !== "Others" && instType !== "" ?
                  <h4>Institute Information:-</h4>
                  :
                  <h4>Enter Book Details:-</h4>
                }
              </div>
              <div className="institute container">
                {instType === "College" ?
                  <College
                    activeCollege={(a) => setActiveCollege(a)}
                    bookData={handleCollegeBook}
                  >
                  </College>
                  :
                  instType === "School" ?
                    <School
                      stId={stateId}
                      ctId={cityId}
                      bkId={blockId}
                      active={(a) => setActive(a)}
                      bookData={handleSchoolBook}
                      scName={handleSchoolName}
                      bdName={handleBoardqName}
                      schoolLocation={schoolLocation} //
                    >
                    </School>
                    :
                    instType === "Others" ?
                      <Others></Others>
                      :
                      null}
              </div>
            </div>
            :
            null}
          {instType === "School" ?
            <div className='header school'>
              {active === true ?
                <button className='add-button' type="submit">Checkout</button>
                :
                <button disabled className='add-button' type="submit">Checkout</button>
              }
            </div>
            :
            instType === "College" ?
              <div className='header college'>
                {activeCollege === true ?
                  <button className='add-button' type="submit">Checkout</button>
                  :
                  <button disabled className='add-button' type="submit">Checkout</button>
                }
              </div>
              : null
          }
        </form>
      </div>
    </div>
  )
}

export default Buy;