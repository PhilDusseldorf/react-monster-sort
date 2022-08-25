import React from 'react';
import CardItem from '../card-item/card-item.component';
import './card-list.styles.css';

class CardList extends React.Component {
    render() {
        const { items } = this.props;

        return (
            <div className="card-list">
                {items.map((item) => (
                    <CardItem item={item}/>
                )
                )}
            </div>
        )
    }
}
export default CardList;