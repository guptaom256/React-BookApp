import React, { useState } from 'react'
import ".././Buy.css"
var schoolData = require("../../../School_info.json");
var state = "";
var city = "";
var block = "";


function Location(props) {

    // var state = "";
    const [stateId, setStateId] = useState(0);
    function handleStateChange() {
        for (var i = 0; i < schoolData.state.length; i++) {
            var st = schoolData.state[i].name;
            if (st === state) {
                setStateId(i);
                props.stateId(i);
                props.updateLocation('state', st);
                city = "";
                block = "";
            }
        }
    }

    // var city = "";
    const [cityId, setCityId] = useState(0);
    function handleCityChange() {
        for (var i = 0; i < schoolData.state.length; i++) {
            if (schoolData.state[stateId].name === schoolData.state[i].name) {
                // console.log(schoolData.state[stateId].name + " : " + schoolData.state[i].name)
                for (var j = 0; j < schoolData.state[i].city.length; j++) {
                    var ct = schoolData.state[i].city[j].name;
                    if (ct === city) {
                        setCityId(j);
                        props.cityId(j);
                        props.updateLocation('city', ct);
                        block = "";
                    }
                }
            }
        }
    }

    function handleBlockChange() {
        for (var i = 0; i < schoolData.state.length; i++) {
            if (schoolData.state[stateId].name === schoolData.state[i].name) {
                for (var j = 0; j < schoolData.state[i].city.length; j++) {
                    if (schoolData.state[stateId].city[cityId].name === schoolData.state[i].city[j].name) {
                        // console.log(schoolData.state[stateId].city[cityId].name + " : " + schoolData.state[i].city[j].name)
                        for (var k = 0; k < schoolData.state[i].city[j].block.length; k++) {
                            var bl = schoolData.state[i].city[j].block[k].name;
                            if (bl === block) {
                                props.blockId(k);
                                props.updateLocation('block', bl);
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            <table>
                <tr>
                    <td className="left-td-buy"><label className='label' htmlFor="state">State: </label></td>
                    <td className="right-td-buy"><select className='selection state' name="" id="" required
                        onChange={(e) => {
                            state = e.target.value;
                            handleStateChange()
                        }}
                    >
                        <option value="">------- Select State -------</option>
                        {
                            schoolData.state.map((st, index) => (
                                <option
                                    key={index}
                                    value={st.name}
                                >
                                    {st.name}
                                </option>
                            ))
                        }
                    </select></td>
                </tr>
                {
                    state !== "" &&
                    <tr>
                        <td className="left-td-buy"><label className='label' htmlFor="state">City: </label></td>
                        <td className="right-td-buy"><select className='selection city' name="" id="" required
                            onChange={(e) => {
                                city = e.target.value;
                                handleCityChange()
                            }}
                        >
                            <option value="">-------- Select City ----------</option>
                            {
                                schoolData.state[stateId].city.map((city, index) => (
                                    <option
                                        key={index}
                                        value={city.name}
                                    >
                                        {city.name}
                                    </option>
                                ))
                            }
                        </select></td>
                    </tr>
                }
                {city !== "" &&
                    <tr>
                        <td className="left-td-buy"><label className='label' htmlFor="block">Block: </label></td>
                        <td className="right-td-buy">
                            <select name="" id="" className="block-selection"
                                onChange={(e) => {
                                    block = e.target.value;
                                    handleBlockChange()
                                }}
                            >
                                <option value="">------- Select Block -------</option>
                                {
                                    schoolData.state[stateId].city[cityId].block.map((block, index) => (
                                        <option
                                            key={index}
                                            value={block.name}
                                            onChange={(e) => {
                                            }}
                                        >
                                            {block.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                }
                {block !== "" &&
                    <tr>
                        <td className="left-td-buy"><label className='label' htmlFor="state">Institution Type: </label></td>
                        <td className="right-td-buy"><select className='instituteType-selection' name="" id="" required onChange={(e) => { props.institutionType(e.target.value) }}>
                            <option value="">----- Select Institution -----</option>
                            <option value="School">School</option>
                            <option value="College">College</option>
                            <option value="Others">Others/Competitive Exam</option>
                        </select></td>
                    </tr>
                }

            </table>
        </div>
    )
}

export default Location;