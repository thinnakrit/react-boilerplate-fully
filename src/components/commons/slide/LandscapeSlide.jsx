import React, { useRef } from 'react'
import Swiper from 'react-id-swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

// ---
const LandscapeSlide = (
	{
		//
	}
) => {
	const swiperRef = useRef(null)

	const params = {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
	}

	const goNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext()
		}
	}
	const goPrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	const RenderNextButton = () => (
		<button onClick={goNext} className="slide-button-next">
			<FontAwesomeIcon icon={faChevronRight} />
		</button>
	)

	const RenderPrevButton = () => (
		<button onClick={goPrev} className="slide-button-prev">
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
	)

	return (
		<div className="slide-top-wrapper">
			<Swiper ref={swiperRef} {...params}>
				<div className="slide-top-list">Slide #1</div>
				<div className="slide-top-list">Slide #2</div>
				<div className="slide-top-list">Slide #3</div>
				<div className="slide-top-list">Slide #4</div>
				<div className="slide-top-list">Slide #5</div>
			</Swiper>
			<RenderNextButton />
			<RenderPrevButton />
		</div>
	)
}

export default LandscapeSlide
