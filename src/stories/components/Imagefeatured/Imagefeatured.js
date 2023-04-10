import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Image/Image'
import "./Imagefeatured.css"

export const Imagefeatured = ({fullwidth, theme, image, align, heading, content,link}) => {
	const width = (fullwidth)? "c-image-featured__layout-full" : "c-image-featured__layout";
	const targert = (link?.targert)? "_blank" : '';
	return (
		<div className={["c-image-featured", `c-image-featured__${theme}`].join(" ")}>
			<div className={["c-image-featured__container", width ,`c-image-featured__${align}`].join(" ")}>
				<div className="c-image-featured__image">
					<Image
						alt={image.alt}
						crop="landscape"
						src="https://picsum.photos/1000/1000.jpg "
						webp="https://picsum.photos/1000/1000.webp "
					/>
				</div>
				<div className="c-image-featured__content">
					<h3 className="c-image-featured__heading">{heading}</h3>
					<div className="c-image-featured__body">
						{
							content && 
							<div className="c-image-featured__body-text">
								{content}
							</div>
						}
						{ link?.src &&
							<a href={link?.src} target={targert}>{link?.text}</a>
						}
					</div>

				</div>
			</div>
			
		</div>
	)
}

Imagefeatured.propTypes = {
	/**
	 * Image Featured Layout
	 */
	
	fullwidth: PropTypes.bool,

	/**
	 * Image Featured Theme
	 */
	theme: PropTypes.oneOf(['light', 'dark']),

	/**
	 * Image Featured Image
	 */
	image: PropTypes.object.isRequired,

	/**
	 * Image Featured Aligment
	 */
	align: PropTypes.oneOf(['left', 'right']),

	/**
	 * Image Featured Heading
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * Image Featured Content
	 */
	content: PropTypes.string,

	/**
	 * Image Featured Link
	 */
	link: PropTypes.object,
}


Imagefeatured.defaultProps = {
	fullwidth: false,
	theme: 'light',
	image: {
		webp: null,
		src: null,
		alt: null,
		crop: null
	},
	heading: null,
	align: 'left',
	content: null,
	link: {
		src: null,
		text: null,
		targert: null,
	}
};