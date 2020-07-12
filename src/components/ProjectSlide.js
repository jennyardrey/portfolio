/** @jsx jsx  */
import React from 'react';
import { css, jsx } from '@emotion/core';

const ProjectSlide = ({ content }) => (
	<div
		css={css`
      height: 100%;
      width: 100%;
	 background-color: rgba(255, 255, 255, 0.2);
	 padding: 30px;
	 
	 
    `}
	>
		<h1>{content.title}</h1>
		<img
			css={css`
			max-width: 50%;
			max-height: 50%;
			`}
			src={content.img} alt="project" />
		<p>{content.info}</p>
	</div>
)

export default ProjectSlide;

/* background-image: url('${content}');
	 background-size: cover;
	 background-repeat: no-repeat;
	 background-position: center; */
