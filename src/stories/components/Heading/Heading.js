import React from 'react'
import PropTypes from 'prop-types';
import "./Heading.css";

export const Heading = ({label, align}) => {
	return (
		<>
			<h2
				className={['c-heading', `c-heading--${align}`].join(' ')}
			>
				{label}
			</h2>
		</>
	)
}

Heading.propTypes = {
	/**
	 * Heading content
	*/
	label: PropTypes.string.isRequired,
	/**
	 * Heading alignment?
	 */
	align: PropTypes.oneOf(['left', 'center', 'right']),
};

Heading.defaultProps = {
	label : 'heading',
	align: 'left'
};
