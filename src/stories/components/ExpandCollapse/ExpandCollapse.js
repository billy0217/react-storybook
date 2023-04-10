import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import "./ExpandCollapse.css"

export const ExpandCollapse = ({heading, description, content}) => {
	const [expanded, setExpanded] = useState(false);
	const [buttonText, setButtonText] = useState('Open');

	const clickHandler = () => {
		setExpanded((current) => !current);

		if(buttonText === "Open"){
			setButtonText("Close");
		}else{
			setButtonText("Open");
		}
	}

	return (
		<div className="c-expandcollapse">
			<h3 className="c-expandcollapse__heading">{heading}</h3>
			<div className="c-expandcollapse__body">
				{description}
			</div>
			<Button
				label={buttonText}
				onClick={clickHandler}
				primary
			/>
			<div className="c-expandcollapse__body" aria-expanded={expanded}>
				{content}
			</div> 
		</div>
	)
}

ExpandCollapse.propTypes = {
	/**
	 * Expand Collapse heading
	 */
	heading: PropTypes.string.isRequired,
	/**
	 * Expand Collapse description
	 */
	description: PropTypes.string.isRequired,
	/**
	 * Expand Collapse content
	 */
	content: PropTypes.string.isRequired
}

ExpandCollapse.defaultProps = {
	heading: null,
	description: null,
	content: null,
};