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

    // const [com, setCom] = useState(false);
    // const [eng, setEng] = useState(false);
    // const [hin, setHin] = useState(false);
    // const [math, setMath] = useState(false);
    // const [sst, setSst] = useState(false);
    // const [ccom, setCCom] = useState(false);
    // const [acc, setAcc] = useState(false);
    // const [bus, setBus] = useState(false);
    // const [eco, setEco] = useState(false);
    // const [ceng, setCEng] = useState(false);
    // const [chin, setCHin] = useState(false);
    // const [cmath, setCMath] = useState(false);
    // const [mcom, setMCom] = useState(false);
    // const [chem, setChem] = useState(false);
    // const [phy, setPhy] = useState(false);
    // const [mmath, setMMath] = useState(false);
    // const [meng, setMEng] = useState(false);
    // const [mhin, setMHin] = useState(false);
    // const [bcom, setBCom] = useState(false);
    // const [bio, setBio] = useState(false);
    // const [bchem, setBChem] = useState(false);
    // const [bhin, setBHin] = useState(false);
    // const [bphy, setBPhy] = useState(false);
    // const [beng, setBEng] = useState(false);
    // const [schoolName, setSchoolName] = useState('');

    // if (com === true || eng === true || hin === true || math === true || sst === true) {
    //     props.active(true);
    // }
    // if (ccom === true || acc === true || bus === true || eco === true || ceng === true || chin === true || cmath === true) {
    //     props.active(true);
    // }
    // else if (mcom === true || chem === true || phy === true || mmath === true || meng === true || mhin === true) {
    //     props.active(true);
    // }
    // else if (bcom === true || bio === true || bchem === true || bchem === true || bphy === true || beng === true) {
    //     props.active(true);
    // }
    // else {
    //     props.active(false);
    // }

    // const onChange = (event) => {
    //     setSchoolName(event.target.value);
    //     props.name(event.target.value);
    // };
    // const onSearch = (searchTerm) => {
    //     setSchoolName(searchTerm);
    //     console.log("search ", searchTerm);
    // };

    // function handleCallbackSchool(bookData) {
    //     props.bookData(bookData);
    // }

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


    useEffect(() => {
        const state = schoolData.state.find((stateObj) => { return stateObj.name == props.schoolLocation.state })
        const city = state.city.find((cityObj) => { return cityObj.name == props.schoolLocation.city });
        const block = city.block.find((blockObj) => { return blockObj.name == props.schoolLocation.block });
        const schoolArray = block.school;
        console.log("schoolArray", schoolArray);
        setSchoolList(schoolArray);
    }, [props.schoolLocation]);

    useEffect(() => {
        const school = schoolList.find((schoolObj) => { return schoolObj.name == schoolName })
        if (school) {
            const boardArray = school.board;
            console.log("boardArray", boardArray);
            setBoardList(boardArray);
        }
    }, [schoolName]);

    useEffect(() => {
        const board = boardList.find((boardObj) => { return boardObj.name == boardName })
        if (board) {
            const classArray = board.standard;
            console.log("classArray", classArray);
            setClassList(classArray);
        }
    }, [boardName]);

    useEffect(() => {
        const clazz = classList.find((classObj) => { return classObj.name == className })
        if (clazz) {
            const streamArray = clazz.stream;
            console.log("streamArray", streamArray);
            setStreamList(streamArray);
        }
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
                                // console.log("Outside: " + school);
                                //handleSchoolChange()
                                setSchoolName(e.target.value)
                            }}
                        >
                            <option value="">------- Select School -------</option>
                            {
                                //schoolData.state[props.stId].city[props.ctId].block[props.bkId].school.map((school, index) => (
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
                                    //handleBoardChange()
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
                                    //handleStandardChange()
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
                                        <span value={sub.name}>{sub.name}</span>
                                        <div>
                                            <input className="messageCheckbox" style={{ position: "absolute", top: "10px", left: "0", width: "13px" }} type="checkbox"
                                                value={sub.name}
                                                onChange={(e) => {
                                                    console.log(sub.name + ", isChecked : " + e.target.checked)
                                                    if(e.target.checked)
                                                    {

                                                    }
                                                }}
                                            />
                                            {/* <table>
                                                <tr>
                                                    <td>
                                                        <select name="" id="" className='author-list'>
                                                            <option value="">Select Author</option>
                                                            {schoolData.state[props.stId].city[props.ctId].block[props.bkId].school[schoolId].board[boardId].standard[standardId].stream[streamId].subject[subjectId].Author.map((auth, index) => (
                                                                <option value={auth.name}>
                                                                    {auth.name} :- ₹{auth.price}
                                                                </option>
                                                            ))
                                                            }
                                                        </select>
                                                    </td>
                                                </tr>
                                            </table> */}
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