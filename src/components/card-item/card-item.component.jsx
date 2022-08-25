import React from 'react';
import './card-item.styles.css';

class CardItem extends React.Component {

    render () {
        const { item } = this.props;
        const { name, email, id } = item;
        console.log(item);
        return (
        <div key={id} className="card-item">
            <img alt={`${name}-Card`} src={`https://robohash.org/${id+12}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
    }
}

export default CardItem;