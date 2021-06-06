import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterChanged } from '../../actions';

import './filter.scss';

class Filter extends Component {
    render() {
        const { filterChanged } = this.props;

        return (
            <div className="filter">
                <span className="filter__title">Filter</span>
                <input type="text" className="filter__input" onChange={(event) => { filterChanged(event.target.value) }}></input>
            </div>
        );
    };
};

const mapStateToProps = ({ filter }) => {
    return { filter };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterChanged
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Filter);