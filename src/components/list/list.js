import React, { Component } from 'react';
import './list.scss';
import ListItem from '../list-item';
import { connect } from 'react-redux';
import withRealEstateService from '../hoc';
import { listOfPropertiesLoaded } from '../../actions';
import { bindActionCreators } from 'redux';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';


class List extends Component {

componentDidMount() {
    const { realEstateService } = this.props;
    realEstateService.getListOfProperties()
        .then((data) => {
            this.props.listOfPropertiesLoaded(data);
        })    
}
render() {
    const { listOfProperties, loading, currency } = this.props;

    if (loading) {
        return <Spinner />;
    };

    listOfProperties.map((property) => {
        if (property.isHidden) {
            property.style = 'd-none';
        } else {
            property.style = '';
        }
    });

    return (
    <ul className="list">
        {
            listOfProperties.map((property) => {
                return (
                    <li key={ property.id } className={`list-item ${ property.style }`}>
                        <Link to={`/details/${ property.id }`}>
                            <ListItem property={ property } currency={ currency }/>
                        </Link>
                    </li>
                )
            })
        }
        </ul>
    );
    
};
};

const mapStateToProps = ({ listOfProperties, loading, currency }) => {
return { listOfProperties, loading, currency }
};

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
    listOfPropertiesLoaded
}, dispatch);
};


export default withRealEstateService()(
connect(mapStateToProps, mapDispatchToProps)(List)
);