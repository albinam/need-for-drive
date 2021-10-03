import React from 'react';
import PropTypes from "prop-types";
import './Marker.scss';

function Marker({handleClick}) {

    return <div className="location-map_marker" onClick={handleClick}/>;
}

Marker.propTypes = {
    handleClick: PropTypes.func
}

export default Marker;