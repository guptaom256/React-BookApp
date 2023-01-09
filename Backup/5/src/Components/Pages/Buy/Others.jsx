import React from 'react'
import "../Buy.css";

function Others() {
  return (
    <div>
      <table>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="universityName">Enter Book Name: </label></td>
          <td className='right-td-buy'><input type="text" className='university-name' /></td>
        </tr>
        {/* <tr>
          <td className="left-td-buy"><label className='label' htmlFor="universityName">Book Title: </label></td>
          <td className='right-td-buy'><input type="text" className='university-name' /></td>
        </tr>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="universityName">Book Author: </label></td>
          <td className='right-td-buy'><input type="text" className='university-name' /></td>
        </tr> */}
      </table>
    </div>
  )
}

export default Others
