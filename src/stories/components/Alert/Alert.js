import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';


export const Alert = ({content, type}) => {
	return (
		<div className={['c-alert', `c-alert__${type}`].join(" ")} role="alert">
			{content}
		</div>
	)
}

Alert.propTypes = {
	/**
	 * Alert content
	*/
	content: PropTypes.string,
	/**
	 * Alert type
	*/
	type: PropTypes.oneOf(['error', 'warning', 'info', 'success' ]).isRequired,
}

Alert.defaultProps = {
	content: null,
	type: 'error',
};