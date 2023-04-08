import React from 'react'
import PropTypes from 'prop-types';

export const RTE = ({ content }) => {
	const htmlMockUp = { __html: content };
	return (
		<div className='c-rte'>
			<div dangerouslySetInnerHTML={htmlMockUp} />
		</div>
	)
}

RTE.propTypes = {
	content: PropTypes.string,
}