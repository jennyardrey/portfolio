/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core'
import ProjectsContent from './ProjectsContent';
import ProjectSlide from './ProjectSlide';
import Arrow from "./Arrow"
import Dots from './Dots'
/**
 *  @function Projects 
 */

const Projects = props => {
	const getWidth = () => window.innerWidth
	console.log(getWidth())

	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45
	})


	const { translate, transition, activeIndex } = state

	const nextSlide = () => {
		if (activeIndex === props.slides.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0
			})
		}
		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * getWidth()
		})
	}

	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (props.slides.length - 1) * getWidth(),
				activeIndex: props.slides.length - 1
			})
		}

		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * getWidth()
		})
	}

	return (
		<div css={SliderCSS}>
			<ProjectsContent
				translate={translate}
				transition={transition}
				width={getWidth() * props.slides.length}
			>
				{props.slides.map((slide, i) => (
					<ProjectSlide key={slide + i} content={slide} />
				))}
			</ProjectsContent>
			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />
			<Dots slides={props.slides} activeIndex={activeIndex} />
		</div>
	)
}

const SliderCSS = css`
position: relative;
height: 60vh;
width: 80vw;
margin: 0 auto;
overflow: hidden;
-webkit-box-shadow: 3px 22px 62px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 3px 22px 62px 0px rgba(0,0,0,0.5);
box-shadow: 3px 22px 62px 0px rgba(0,0,0,0.5);
`

export default Projects