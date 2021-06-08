import React, { Component } from 'react';
import './list-item.scss';

const defaultTitleForPrice = 'New Properties for Sale from';
const defaultTextForInfo = 'Shared Ownership Available';
const defaultImageURL = 'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=title';
const defaultTypes = ['IndependentLiving', 'SupportAvailable'];

const returnTypePropertyEl = (type) => {
    let className = "list-item__type";
    if (type === defaultTypes[0]) {
        return <p className={ className + " list-item__type_blue"}>{ defaultTypes[0] }</p>
    }
    return <p className={ className + " list-item__type_orange"}>{ defaultTypes[1] }</p>
}

export default class ListItem extends Component {
    render () {
        const { property: { title, address, type, price }, currency } = this.props;

        return (
            <React.Fragment>
                <div className="list-item__img-wrapper">
                    <img src={ defaultImageURL } className="list-item__img" alt={ address }/>
                    { returnTypePropertyEl(type) }
                </div>                
                <h3 className="list-item__title">{ title }</h3>
                <p className="list-item__address">{ address } </p>
                <p className="list-item__price"> { defaultTitleForPrice }
                    <span> 
                        { currency }
                        { price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") } 
                    </span> 
                </p>
                <p className="list-item__additional-info">{ defaultTextForInfo }</p>
            </React.Fragment>
        );
    }    
};