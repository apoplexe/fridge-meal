import React, { Component } from 'react';
import './Select.css';

import { connect } from 'react-redux';
import { selectCategories } from '/rdx/actions/index';

const mapDispatchToProps = dispatch => {
    return {
        select: () => { dispatch(selectCategories()) }
    }
}

class SelectCategories extends Component {
    render(){
        return(
            <span className='next-category' onClick={this.props.select}>></span>
        )
    }
}

const Select = connect(null, mapDispatchToProps)(SelectCategories);

export default Select;
