import React from 'react'
import PropTypes from 'prop-types'
import "./Image.css";

export const Image = ({src, webp, crop, alt}) => {
	
	return (
		<div className={[ "c-fig", `c-fig__${crop}`].join(" ")}>
			<picture>
				{
					webp &&
					<source srcset={webp} type="image/webp" />
				}
				<img className="c-fig__img" src={src} alt={alt} loading="lazy" />
			</picture>
		</div>
	)
}

Image.propTypes = {
	/**
	 * Image src
	*/
	src: PropTypes.string.isRequired,
	/**
	 * Image webP
	*/
	webp: PropTypes.string,
	/**
	 * Image crop size
	*/
	crop: PropTypes.oneOf(['square', 'landscape']),
	/**
	 * Image alt text
	*/
	alt: PropTypes.string,
};

Image.defaultProps = {
	webp: 'https://picsum.photos/1000/1000.webp',
	src: 'https://picsum.photos/1000/1000.jpg',
	alt: 'Placeholder',
	crop: "square"
};