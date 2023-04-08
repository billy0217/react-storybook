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
	label: PropTypes.string.isRequired,
	align: PropTypes.oneOf(['left', 'center', 'right']),
};

Heading.defaultProps = {
	/**
	 * Heading content
	 */
	label : 'heading',
	/**
	 * Heading alignment?
	 */
	align: 'left'
};
