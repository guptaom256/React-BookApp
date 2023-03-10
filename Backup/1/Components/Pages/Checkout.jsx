import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function Checkout(props) {

  var finalBookData = props.bookDetails;
  var totalPrice = 0;
  var length = (finalBookData).length;
  for (let index = 0; index < length; index++) {
    totalPrice += finalBookData[index].price;
  }

  const navigate = useNavigate();

  function handleCancelClick() {
    // if (confirm("Sure you want to cancel?") === true) {
    //   navigate("/login/dashboard");
    // }
    // else{}
    finalBookData = [{}];
    alert("Cancelling...")
    navigate("/login/dashboard");
  }

  function handlePaymentClick() {
    alert("Redirecting to payment gateway...")
    navigate("/login/dashboard/buy/checkout/payment");
  }

  return (
    <div>
      <Navbar name={props.name}></Navbar>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "50px", marginTop: "30px" }} className='checkout-header'>CheckOut</h1>
        <div className='checkout-content' style={{ border: "2px solid black", borderRadius: "5px", margin: "10px auto", padding: "20px 10px", alignItems: "center", width: "fit-content", backgroundColor: "#fff6e6" }}>
          <table>
            <th style={{borderBottom: "1px solid black"}} colSpan={4}>
              <td style={{ width: "70px", fontSize: "21px" }}>S.No.</td>
              <td style={{ width: "180px", fontSize: "21px" }}>Subject</td>
              <td style={{ width: "150px", fontSize: "21px" }}>Author</td>
              <td style={{ width: "80px", fontSize: "21px" }}>Price</td>
            </th>

            {finalBookData.map((book, index) => {
              return (
                <tr style={{ lineHeight: "2" }} key={index}>
                  <td style={{ width: "70px" }}>{index + 1}.</td>
                  <td style={{ width: "180px" }}>{(JSON.stringify(book.subject).slice(1, JSON.stringify(book.subject).length - 1)).toUpperCase()}</td>
                  <td style={{ width: "150px" }}>{(JSON.stringify(book.author).slice(1, JSON.stringify(book.author).length - 1)).toUpperCase()}</td>
                  <td style={{ width: "80px" }}>???{JSON.stringify(book.price)}.00</td>
                </tr>
              )
            })}
            <tfoot>
              <td style={{ fontWeight: "bolder", borderTop: "1px solid black" }} colSpan={3}>Total: </td>
              <td style={{ fontWeight: "bolder", borderTop: "1px solid black" }}>???{totalPrice}.00</td>
            </tfoot>
          </table>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleCancelClick} style={{ padding: "4px 8px", margin: "0 5px", borderRadius: "15px" }}>Cancel</button>
          <button onClick={handlePaymentClick} style={{ padding: "4px 8px", margin: "0 5px", borderRadius: "15px" }} type="submit">Proceed to payment</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;