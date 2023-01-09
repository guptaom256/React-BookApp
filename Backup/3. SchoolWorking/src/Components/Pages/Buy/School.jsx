import React, { useState, useEffect } from 'react'
// import Author from './Author';
import "../Buy.css";
import "./Autofill.css";
var schoolData = require("../../../School_info.json");
var school = "";
var board = "";
var standard = "";
var stream = "";

function School(props) {

    // var school = "";
    const [schoolId, setSchoolId] = useState(0);
    const [schoolList, setSchoolList] = useState([]);
    const [boardList, setBoardList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [streamList, setStreamList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);
    const [authorList, setAuthorList] = useState([]);


    const [schoolName, setSchoolName] = useState("");
    const [boardName, setBoardName] = useState("");
    const [className, setClassName] = useState("");
    const [streamName, setStreamName] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [authorName, setAuthorName] = useState("");


    const [finalBooksResult, setfinalBooksResult] = useState([]);
    function handleCallbackSchool(book) {
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
        const schoolArray = block.school;
        console.log("schoolArray", schoolArray);
        setSchoolList(schoolArray);
        school = "";
        board = "";
        standard = "";
        stream = "";

    }, [props.schoolLocation]);

    useEffect(() => {
        const school = schoolList.find((schoolObj) => { return schoolObj.name == schoolName })
        if (school) {
            const boardArray = school.board;
            console.log("boardArray", boardArray);
            setBoardList(boardArray);
        }
        // school="";
        board = "";
        standard = "";
        stream = "";
    }, [schoolName]);

    useEffect(() => {
        const board = boardList.find((boardObj) => { return boardObj.name == boardName })
        if (board) {
            const classArray = board.standard;
            console.log("classArray", classArray);
            setClassList(classArray);
        }
        // school="";
        // board="";
        standard = "";
        stream = "";
    }, [boardName]);

    useEffect(() => {
        const clazz = classList.find((classObj) => { return classObj.name == className })
        if (clazz) {
            const streamArray = clazz.stream;
            console.log("streamArray", streamArray);
            setStreamList(streamArray);
        }
        // school="";
        // board="";
        // standard="";
        stream = "";
    }, [className]);

    useEffect(() => {
        const stream = streamList.find((streamObj) => { return streamObj.name == streamName })
        if (stream) {
            const subjectArray = stream.subject;
            console.log("subjectArray", subjectArray);
            setSubjectList(subjectArray);
        }
    }, [streamName]);

    return (
        <div>
            <table>
                <tr>
                    <td className='left-td-buy'>
                        <label className='label' htmlFor="schoolName">School Name: </label>
                    </td>
                    <td className="right-td-buy">
                        <select name="" id="" className="school-name"
                            onChange={(e) => {
                                school = e.target.value;
                                setSchoolName(e.target.value)
                            }}
                        >
                            <option value="">------- Select School -------</option>
                            {
                                schoolList.map((school, index) => (
                                    <option
                                        key={index}
                                        value={school.name}
                                    >
                                        {school.name}
                                    </option>
                                ))
                            }
                        </select>
                    </td>
                </tr>

                {school !== "" &&
                    <tr>
                        <td className='left-td-buy'><label className='label' htmlFor="board">Board Type: </label></td>
                        <td className="right-td-buy">
                            <select name="" id="" className='board-selection'
                                onChange={(e) => {
                                    board = e.target.value;
                                    setBoardName(e.target.value)
                                }}
                            >
                                <option value="">------- Select Board -------</option>
                                {
                                    boardList.map((brd, index) => (
                                        <option
                                            key={index}
                                            value={brd.name}
                                        >
                                            {brd.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                }

                {
                    board !== "" &&
                    <tr>
                        <td className='left-td-buy'>
                            <label className='label' htmlFor="board">Class: </label>
                        </td>
                        <td className="right-td-buy">
                            <select name="" id="" className="class-selection"
                                onChange={(e) => {
                                    standard = e.target.value;
                                    setClassName(e.target.value);
                                }}
                            >
                                <option value="">------- Select Class -------</option>
                                {
                                    classList.map((cls, index) => (
                                        <option
                                            key={index}
                                            value={cls.name}
                                        >
                                            Class {cls.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                }

                {
                    standard !== "" &&
                    <tr>
                        <td className='left-td-buy'>
                            <label className='label' htmlFor="board">Stream: </label>
                        </td>
                        <td className="right-td-buy">
                            <select name="" id="" className="stream-selection"
                                onChange={(e) => {
                                    stream = e.target.value;
                                    setStreamName(e.target.value)
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
                            <label className='label' htmlFor="subject">Subject: </label>
                        </td>
                        <td className="right-td-buy">
                            {

                                subjectList.map((sub, index) => (

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
                                                                handleCallbackSchool(JSON.stringify({
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
                                                                handleCallbackSchool(e.target.value)
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

export default School;