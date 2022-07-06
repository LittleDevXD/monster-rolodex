import { Component } from 'react';
import Card from '../card/card.component.jsx';
import './card-list.modules.css';

class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map(monster => {
                        return (
                            <Card monster={monster}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;