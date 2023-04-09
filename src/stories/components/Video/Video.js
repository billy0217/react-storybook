import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

export const Video = ({src, size, title}) => {

	const videoSrc = (src) => {
		let domain = (new URL(src));
		let videoID = domain.pathname.match(/([^\/]*)\/*$/)[1];

		if(domain.origin.includes("youtube") || domain.origin.includes("youtu")){
			return `https://www.youtube.com/embed/${videoID}`;
		}

		if(domain.origin.includes("vimeo")){
			return `https://player.vimeo.com/video/${videoID}`;
		}
		
	}

	return (
		<div className={["c-video", `c-vidoe__${size}`].join(" ")}>
			<iframe className="c-video__embed" src={videoSrc(src)} title={title} allowFullScreen={true}></iframe>
		</div>
	)
}

Video.propTypes = {
	/**
	 * Video src
	*/
	src: PropTypes.string.isRequired,
	/**
	 * Image webP
	*/
	title: PropTypes.string,
	/**
	 * Video size
	*/
	size: PropTypes.oneOf(['4x3', '16x9']),
}

Video.defaultProps = {
	title: null,
	src: null,
	size: "4x3"
};