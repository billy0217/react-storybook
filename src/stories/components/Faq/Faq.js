import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Faq.css";

export const Faq = ({heading, content, ...props}) => {
	const [openFaq, setOpenFaq] = useState(false);

	const htmlMockUp = { __html: content };
	
	const clickHandler = () => {
		setOpenFaq((current) => !current);
	}

	return (
		<div className="c-faq">
			<div
				onClick={clickHandler}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						clickHandler()
					}
				}} 
				tabindex="0"
				role="button" 
				{...props}
			>
				<h3 className='c-faq__heading'>{heading}</h3>
			</div>
			<div className='c-faq__body' aria-expanded={openFaq}>
				<div dangerouslySetInnerHTML={htmlMockUp} />
			</div>
		</div>
	)
}

Faq.propTypes = {
	/**
	 * Faq content
	 */
	heading: PropTypes.string.isRequired,
	/**
	 * Faq content
	 */
	content: PropTypes.string.isRequired,
}


Faq.defaultProps = {
	heading : null,
	content: null,
};
