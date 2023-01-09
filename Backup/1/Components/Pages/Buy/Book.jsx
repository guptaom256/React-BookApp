import React from 'react'

function Book(props) {
    return (
        <div>
            <table>
                <tr>
                    <td className='left-td-buy'><label className='label' htmlFor="bookTitle">Book Title: </label></td>
                    <td className='right-td-buy'><input type="text" className='book-title' required onChange={ (e) => {props.name(e.target.value)} }/></td>
                </tr>
                <tr>
                    <td className='left-td-buy'><label className='label' htmlFor="authorName">Author Name: </label></td>
                    <td className='right-td-buy'><input type="text" className='author-name' required onChange={ (e) => {props.author(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td className='left-td-buy'><label className='label' htmlFor="bookPrice">Price(₹): </label></td>
                    <td className='right-td-buy'><input type="number" className='book-price'  min="0.00" onChange={ (e) => {props.price(e.target.value)}} max="10000.00" step="0.1" required /></td>
                </tr>
            </table>
        </div>
    )
}

export default Book;