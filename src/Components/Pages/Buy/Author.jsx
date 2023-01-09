import React, { useState } from 'react'
import "../Buy.css";

function Author(props) {
    const [author, setAuthor] = useState("");
    const [subject, setSubject] = useState("");

    var Price;
    if (author === "Author 1") {
        Price = 300;
    } else if (author === "Author 2") {
        Price = 500;
    } else if (author === "Author 3") {
        Price = 700;
    } else if (author === "Author 4") {
        Price = 900;
    } else if (author === "Author 5") {
        Price = 1100;
    }
    else {
        Price = 0;
    }

    if (author !== "") {
        handleEvent()
    }

    function handleEvent() {
        props.callbackBook({
            author: author,
            price: Price,
            subject: subject
        });
    }

    return (
        <div>
            <div id="author" className="author-list">
                <table>
                    <tr>
                        <td>
                            <select style={{ width: "120px", margin: "3px 0", marginRight: "5px" }} required
                                onChange={(e) => {
                                    setAuthor(e.target.value)
                                    setSubject(props.dataFromParent)
                                }
                                }>
                                <option value="">- Select Author -</option>
                                <option value="Author 1">Author 1</option>
                                <option value="Author 2">Author 2</option>
                                <option value="Author 3">Author 3</option>
                                <option value="Author 4">Author 4</option>
                                <option value="Author 5">Author 5</option>
                            </select> <br />
                        </td>
                        {author !== "" ?
                            <td rowSpan={2}>
                                <img style={{ width: "80px", height: "90px", border: "1px solid black", borderRadius: "10px" }} src="https://sbgstore.com/wp-content/uploads/2021/02/mathsobjective-vol1-rdsharma1-scaled.jpg" alt="book-preview" />
                            </td>
                            :
                            null}

                    </tr>
                    {author !== "" ?
                        <tr>
                            <td>
                                <label htmlFor="">Price: ₹{Price !== 0 ? Price : "--"}
                                </label>
                            </td>
                        </tr>
                        :
                        null}
                </table>
            </div>
        </div>
    )
}

export default Author;