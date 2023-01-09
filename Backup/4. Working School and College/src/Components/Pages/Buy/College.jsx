import React, { useState, useEffect } from 'react';
import Author from './Author';
import "../Buy.css";
var schoolData = require("../../../School_info.json");

var college = "";
var degree = "";
var stream = "";
var semester = "";

function College(props) {

  const [collegeList, setCollegeList] = useState([]);
  const [degreeList, setDegreeList] = useState([]);
  const [streamList, setStreamList] = useState([]);
  const [semesterList, setSemesterList] = useState([]);
  const [collegeSubjectList, setCollegeSubjectList] = useState([]);

  const [collegeName, setCollegeName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [streamName, setStreamName] = useState("");
  const [semesterName, setSemesterName] = useState("");

  const [finalBooksResult, setfinalBooksResult] = useState([]);
  function handleCallbackCollege(book) {
    var isFound = false
    // console.log("Length of Array : " + finalBooksResult.length)
    console.log(book);
    if (book === "")
      return
    for (let index = 0; index < finalBooksResult.length; index++) {
      const element = finalBooksResult[index];
      console.log("Parser Subject Name : " + JSON.parse(book).subjectName)
      console.log("Element Subject Name : " + element.subjectName)
      if (JSON.parse(book).subjectName === element.subjectName) {
        console.log("Subject Found : " + element.subjectName)
        console.log("Element: " + element);
        isFound = true;
        if (JSON.parse(book).checkedStatus !== undefined) {
          element.subjectName = JSON.parse(book).subjectName;
          element.checkedStatus = JSON.parse(book).checkedStatus;
          if (!element.checkedStatus) {
            element.authorName = undefined;
            element.price = undefined;
          }
        }
        else {
          element.subjectName = JSON.parse(book).subjectName;
          element.authorName = JSON.parse(book).authorName;
          element.price = JSON.parse(book).price;
        }
        finalBooksResult[index] = element;
        break;
      }
    }
    if (!isFound) {
      console.log("Nothing found in array Inserting data : " + book)
      finalBooksResult.push(JSON.parse(book));
    }
    props.bookAuthorData(finalBooksResult);
    console.log("FINAL: " + JSON.stringify(finalBooksResult));
    console.log("FINAL Lenght : " + finalBooksResult.length);
  }

  useEffect(() => {
    const state = schoolData.state.find((stateObj) => { return stateObj.name == props.schoolLocation.state })
    const city = state.city.find((cityObj) => { return cityObj.name == props.schoolLocation.city });
    const block = city.block.find((blockObj) => { return blockObj.name == props.schoolLocation.block });
    const collegeArray = block.school.filter((collegeObj) => { return collegeObj.name.split('-')[0] == 2 });
    console.log("CollegeArray", collegeArray);
    setCollegeList(collegeArray);
    console.log("College List : " + collegeList);
  }, [props.schoolLocation]);

  useEffect(() => {
    const college = collegeList.find((collegeObj) => { return collegeObj.name == collegeName })
    if (college) {
      const degreeArray = college.board;
      console.log("degreeArray", degreeArray);
      setDegreeList(degreeArray);
    }
  }, [collegeName]);

  useEffect(() => {
    const degree = degreeList.find((degreeObj) => { return degreeObj.name == degreeName })
    if (degree) {
      const streamArray = degree.standard;
      console.log("streamArray", streamArray);
      setStreamList(streamArray);
    }
  }, [degreeName]);

  useEffect(() => {
    const stream = streamList.find((streamObj) => { return streamObj.name == streamName })
    if (stream) {
      const semesterArray = stream.stream;
      console.log("semesterArray", semesterArray);
      setSemesterList(semesterArray);
    }
  }, [streamName]);

  useEffect(() => {
    const semester = semesterList.find((semesterObj) => { return semesterObj.name == semesterName })
    if (semester) {
      const collegeSubjectArray = semester.subject;
      console.log("collegeSubjectArray", collegeSubjectArray);
      setCollegeSubjectList(collegeSubjectArray);
    }
  }, [semesterName]);

  return (
    <div>
      <table>
        <tr>
          <td className="left-td-buy"><label className='label' htmlFor="collegeName">College Name: </label></td>
          <td className="right-td-buy">
            <select name="" id="" className="school-name"
              onChange={(e) => {
                college = e.target.value;
                setCollegeName(e.target.value)
              }}
            >
              {console.log("Final School List : " + JSON.stringify(collegeList))}
              <option value="">------- Select College -------</option>
              {
                collegeList.map((college, index) => (
                  <option
                    key={index}
                    value={college.name}
                  >
                    {college.name.split('-')[1]}
                  </option>
                ))
              }
            </select>
          </td>
        </tr>

        {college !== "" &&
          <tr>
            <td className='left-td-buy'><label className='label' htmlFor="board">Degree Type: </label></td>
            <td className="right-td-buy">
              <select name="" id="" className='board-selection'
                onChange={(e) => {
                  degree = e.target.value;
                  setDegreeName(e.target.value)
                }}
              >
                <option value="">------- Select Degree -------</option>
                {
                  degreeList.map((deg, index) => (
                    <option
                      key={index}
                      value={deg.name}
                    >
                      {deg.name}
                    </option>
                  ))
                }
              </select>
            </td>
          </tr>
        }

        {
          degree !== "" &&
          <tr>
            <td className='left-td-buy'>
              <label className='label' htmlFor="board">Stream: </label>
            </td>
            <td className="right-td-buy">
              <select name="" id="" className="class-selection"
                onChange={(e) => {
                  stream = e.target.value;
                  setStreamName(e.target.value);
                }}
              >
                <option value="">------- Select Stream -------</option>
                {
                  streamList.map((str, index) => (
                    <option
                      key={index}
                      value={str.name}
                    >
                      {str.name}
                    </option>
                  ))
                }
              </select>
            </td>
          </tr>
        }

        {
          stream !== "" &&
          <tr>
            <td className='left-td-buy'>
              <label className='label' htmlFor="board">Semester: </label>
            </td>
            <td className="right-td-buy">
              <select name="" id="" className="stream-selection"
                onChange={(e) => {
                  semester = e.target.value;
                  setSemesterName(e.target.value)
                }}
              >
                <option value="">------- Select Semester -------</option>
                {
                  semesterList.map((sem, index) => (
                    <option
                      key={index}
                      value={sem.name}
                    >
                      {sem.name}
                    </option>
                  ))
                }
              </select>
            </td>
          </tr>
        }

        {
          semester !== "" &&
          <tr>
            <td className='left-td-buy'>
              <label className='label' htmlFor="subject">Subject: </label>
            </td>
            <td className="right-td-buy">
              {
                collegeSubjectList.map((sub, index) => (
                  <div key={index} style={{ position: "relative", padding: "2px 0" }}>
                    {/* {console.log("subjectList : " + JSON.stringify(sub) + ", Index : " + index)} */}
                    <span value={sub.name}>{sub.name}</span>
                    <div>
                      <table>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              className='abcdef'
                              style={{ position: "absolute", top: "10px", left: "0", width: "13px" }}
                              value={sub.name}
                              onChange={(e) => {
                                // console.log("Tarang Subject : " + JSON.stringify(sub))
                                handleCallbackCollege(JSON.stringify({
                                  "subjectName": sub.name,
                                  "checkedStatus": e.target.checked,
                                }))

                              }}
                            />
                            <select name="" id="" className="author-selection"
                              onChange={(e) => {
                                //console.log("Tarang Rocks!!!" + e.target.value);
                                //stream = e.target.value;
                                //setStreamName(e.target.value)
                                handleCallbackCollege(e.target.value)
                              }}
                            >
                              <option value={JSON.stringify(
                                {
                                  "subjectName": sub.name,
                                  "authorName": "",
                                  "price": ""
                                })}
                              >
                                ------- Select Author -------</option>
                              {
                                sub.Author.map((bookAuthor, index) => (
                                  <option
                                    key={index}
                                    // value={sub.name + "," + bookAuthor.name + "," + bookAuthor.price}
                                    value={JSON.stringify(
                                      {
                                        "subjectName": sub.name,
                                        "authorName": bookAuthor.name,
                                        "price": bookAuthor.price
                                      })}
                                  >
                                    {bookAuthor.name}:   Rs.{bookAuthor.price}
                                  </option>
                                ))
                              }
                            </select>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                ))
              }
            </td>
          </tr>
        }
      </table>
    </div>
  )
}

export default College;