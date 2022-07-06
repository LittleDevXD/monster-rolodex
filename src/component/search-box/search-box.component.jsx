import { Component } from 'react';
import './search-box.modules.css';

class SearchBox extends Component {
    render() {
        return (
            <input 
                className='search-box'
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;