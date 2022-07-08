import { Component } from 'react';
import Card from '../card/card.component.jsx';
import './card-list.modules.css';

const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => {
                    return (
                        <Card key={monster.id} monster={monster}/>
                    )
                })
            }
        </div>
    )
}

// class CardList extends Component {
//     render() {
//         return (
//             <div className='card-list'>
//                 {
//                     this.props.monsters.map(monster => {
//                         return (
//                             <Card monster={monster}/>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

export default CardList;