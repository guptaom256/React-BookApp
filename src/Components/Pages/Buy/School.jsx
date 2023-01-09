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

    const [schoolList, setSchoolList] = useState([]);
    const [boardList, setBoardList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [streamList, setStreamList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);

    const [schoolName, setSchoolName] = useState("");
    const [boardName, setBoardName] = useState("");
    const [className, setClassName] = useState("");
    const [streamName, setStreamName] = useState("");

    useEffect(() => {
        const state = schoolData.state.find((stateObj) => { return stateObj.name == props.schoolLocation.state })
        const city = state.city.find((cityObj) => { return cityObj.name == props.schoolLocation.city });
        const block = city.block.find((blockObj) => { return blockObj.name == props.schoolLocation.block });
        const schoolArray = block.school.filter((schoolObj) => { return schoolObj.name.split('-')[0] == 1 });
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
            setBoardList(boardArray);
        }
        board = "";
        standard = "";
        stream = "";
    }, [schoolName]);

    useEffect(() => {
        const board = boardList.find((boardObj) => { return boardObj.name == boardName })
        if (board) {
            const classArray = board.standard;
            setClassList(classArray);
        }
        standard = "";
        stream = "";
    }, [boardName]);

    useEffect(() => {
        const clazz = classList.find((classObj) => { return classObj.name == className })
        if (clazz) {
            const streamArray = clazz.stream;
            setStreamList(streamArray);
        }
        stream = "";
    }, [className]);

    useEffect(() => {
        const stream = streamList.find((streamObj) => { return streamObj.name == streamName })
        if (stream) {
            const subjectArray = stream.subject;
            setSubjectList(subjectArray);
        }
    }, [streamName]);

    const [finalBooksResult, setfinalBooksResult] = useState([]);
    function handleCallbackSchool(book) {
        // console.log("Book" + book);
        var isFound = false;
        if (book === "")
            return
        for (let index = 0; index < finalBooksResult.length; index++) {
            const element = finalBooksResult[index];
            if (JSON.parse(book).subjectName === element.subjectName) {
                isFound = true;
                if (JSON.parse(book).checkedStatus !== undefined) {
                    element.subjectName = JSON.parse(book).subjectName;
                    element.checkedStatus = JSON.parse(book).checkedStatus;
                    if (!element.checkedStatus) {
                        element.authorName = undefined;
                        element.price = undefined;
                        element.image = undefined;
                    }
                }
                else {
                    element.subjectName = JSON.parse(book).subjectName;
                    element.authorName = JSON.parse(book).authorName;
                    element.price = JSON.parse(book).price;
                    element.image = JSON.parse(book).image;
                }
                finalBooksResult[index] = element;
                break;
            }
        }
        if (!isFound) {
            finalBooksResult.push(JSON.parse(book));
        }
        // console.log("Final Book Result: " + JSON.stringify(finalBooksResult));
        props.bookAuthorData(finalBooksResult);
    }

    const [subjectIndex, setSubjectIndex] = useState();
    function handleSubjectIndex(subject) {
        setSubjectIndex(subject)
        console.log("Subject Index: " + subject);
    }

    const [authorIndex, setAuthorIndex] = useState(0);
    function handleAuthorIndex(author) {
        setAuthorIndex(author)
        console.log("Author Index: " + author);
    }

    var selectedSubject = JSON.stringify(subjectList[0]);
    
    return (
        <div>
            <table>
                <tr>
                    <td className='left-td-buy'>
                        <label className='label' htmlFor="schoolName">School Name: </label>
                    </td>
                    <td className="right-td-buy">
                        <select name="" id="" className="school-name" required
                            onChange={(e) => {
                                school = e.target.value;
                                setSchoolName(e.target.value)
                            }}
                        >
                            {/* {console.log("Final School List : " + JSON.stringify(schoolList))} */}
                            <option value="">------- Select School -------</option>
                            {
                                schoolList.map((school, index) => (
                                    <option
                                        key={index}
                                        value={school.name}
                                    >
                                        {school.name.split('-')[1]}
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
                            <select name="" id="" className='board-selection' required
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
                            <select name="" id="" className="class-selection" required
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
                            <select name="" id="" className="stream-selection" required
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
                                                            key={index}
                                                            type="checkbox"
                                                            className='abcdef'
                                                            style={{ position: "absolute", top: "10px", left: "0", width: "13px" }}
                                                            value={sub.name}
                                                            onChange={(e) => {
                                                                handleSubjectIndex(index);
                                                                handleCallbackSchool(JSON.stringify({
                                                                    "subjectName": sub.name,
                                                                    "checkedStatus": e.target.checked,
                                                                }))

                                                            }}
                                                        />
                                                        <select style={{ width: "135px", marginRight: "20px" }} name="" id="" className="author-selection"
                                                            onChange={(e) => {
                                                                handleCallbackSchool(e.target.value);
                                                                // handleBookImage(e);
                                                                handleAuthorIndex(JSON.parse(e.target.value).index);
                                                            }}
                                                        >
                                                            <option value={JSON.stringify(
                                                                {
                                                                    "subjectName": sub.name,
                                                                    "authorName": "",
                                                                    "price": ""
                                                                })}
                                                            >
                                                                - Select Author - </option>
                                                            {
                                                                sub.Author.map((bookAuthor, index) => (
                                                                    <option
                                                                        key={index}
                                                                        // value={sub.name + "," + bookAuthor.name + "," + bookAuthor.price}
                                                                        value={JSON.stringify(
                                                                            {
                                                                                "subjectName": sub.name,
                                                                                "authorName": bookAuthor.name,
                                                                                "price": bookAuthor.price,
                                                                                "image": bookAuthor.image,
                                                                                "index": index
                                                                            })}
                                                                    >
                                                                        {bookAuthor.name}:   Rs.{bookAuthor.price}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                                        <p id="authorWarning" style={{color: "red", fontSize: "15px"}}>*select an author to proceed</p>
                                                        {/* {console.log(bookImage)} */}
                                                        {/* <img style={{ width: "70px", height: "80px", borderRadius: "10px" }} src={bookImage} alt="select an author to preview image" /> */}
                                                    </td>
                                                    {/* {console.log("sub: " + JSON.stringify(sub))} */}
                                                    {console.log("Image: "+ selectedSubject.Author)}
                                                    <td>
                                                        <img
                                                            style={{ width: "70px", height: "80px", borderRadius: "10px" }}
                                                            src={sub.Author[authorIndex].image}
                                                            alt="img-preview"
                                                        />
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