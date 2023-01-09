import React, { useState } from 'react';
import Author from './Author';
import "../Buy.css";


function College(props) {

  const [degree, setDegree] = useState("");
  const [stream, setStream] = useState("");
  const [semester, setSemester] = useState("");

  const [dsa, setDsa] = useState(false);
  const [oopc, setOopc] = useState(false);
  const [java, setJava] = useState(false);
  const [OS, setOS] = useState(false);
  const [CA, setCA] = useState(false);


  if (dsa === true || oopc === true || java === true || OS === true || CA === true) {
    props.activeCollege(true);
  }
  else {
    props.activeCollege(false);
  }

  function handleCallbackCollege(bookData) {
    props.bookData(bookData);
  }

  return (
    <div>
      <table>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="universityName">University Name: </label></td>
          <td className="right-td-buy"><input type="text" className='university-name'
            onChange={(e) => {
              props.uniname(e.target.value);
            }}
          /></td>
        </tr>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="collegeName">College Name: </label></td>
          <td className="right-td-buy"><input type="text" className='college-name'
            onChange={(e) => {
              props.name(e.target.value);
            }}
          />
          </td>
        </tr>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="degree">Degree: </label></td>
          <td className="right-td-buy"><select className='degree-selection' name="" id="" required
            onChange={(e) => {
              setDegree(e.target.value);
              props.degree(degree);
            }}
          >
            <option value="">------ Select Degree ------</option>
            <option value="B.Tech.">B.Tech.</option>
            <option value="MBBS">MBBS</option>
            <option value="MBA">MBA</option>
            <option value="Diploma">Diploma</option>
          </select></td>
        </tr>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="stream">Stream: </label></td>
          <td className="right-td-buy"><select className='stream-selection' name="" id="" required
            onChange={(e) => {
              setStream(e.target.value);
              props.stream(stream);
            }}
          >
            <option value="">------ Select Stream ------</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical">Mechanical</option>
            <option value="CA">CA</option>
          </select></td>
        </tr>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="semester">Semester: </label></td>
          <td className="right-td-buy"><select className='stream-selection' name="" id="" required
            onChange={(e) => {
              setSemester(e.target.value);
              props.semester(semester);
            }}
          >
            <option value="">------ Select Semester -----</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select></td>
        </tr>

        {semester !== "" ?
          <tr>
            <td className="left-td-buy"><label className='label' htmlFor="subject-name">Subject: </label></td>
            <input id="computer" className='subject-checkbox' type="checkbox" value="Computer"
              onChange={
                (e) => {
                  setDsa(!dsa);
                }}
            />
            <label htmlFor="">Data Structures</label><br />
            {dsa === true ? <Author callbackBook={handleCallbackCollege} dataFromParent={"data structures"}></Author> : null}


            <input id="english" className='subject-checkbox' type="checkbox" value="OOPs (C++)"
              onChange={
                (e) => {
                  setOopc(!oopc);
                }}
            />
            <label htmlFor="">OOPs (C++)</label><br />
            {oopc === true ? <Author callbackBook={handleCallbackCollege} dataFromParent={"OOPs (C++)"}></Author> : null}


            <input className='subject-checkbox' type="checkbox" value="Java"
              onChange={
                (e) => {
                  setJava(!java)
                }}
            />
            <label htmlFor="">Java</label><br />
            {java === true ? <Author callbackBook={handleCallbackCollege} dataFromParent={"java"}></Author> : null}


            <input className='subject-checkbox' type="checkbox" value="Operating System"
              onChange={
                (e) => {
                  setOS(!OS)
                }} />
            <label htmlFor="">Operating System</label><br />
            {OS === true ? <Author callbackBook={handleCallbackCollege} dataFromParent={"operating system"}></Author> : null}


            <input className='subject-checkbox' type="checkbox" value="Computer Architecture"
              onChange={
                (e) => {
                  setCA(!CA)
                }} />
            <label htmlFor="">Computer Architecture</label><br />
            {CA === true ? <Author callbackBook={handleCallbackCollege} dataFromParent={"computer architecture"}></Author> : null}
          </tr>
          :
          null}
      </table>
    </div>
  )
}

export default College;