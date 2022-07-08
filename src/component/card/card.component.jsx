import { Component } from 'react';
import './card.modules.css';

const Card = ({monster}) => {
    const { id, name, email } = monster;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component {
//     render() {
//         let { id, name, email } = this.props.monster;
//         return(
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h3>{name}</h3>   
//                 <p>{email}</p>                     
//             </div>
//         )
//     }
// }

export default Card;
