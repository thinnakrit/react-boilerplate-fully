import React, { useRef, Fragment } from 'react'
import Swiper from 'react-id-swiper'
import size from 'lodash/size'
import map from 'lodash/map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
// ---
const MultipleSlide = ({
	//
	data,
	renderSlide,
	options,
}) => {
	const swiperRef = useRef(null)

	const params = {
		slidesPerView: 'auto',
		centeredSlides: false,
		loop: true,
		...options,
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
		<button
			onClick={goNext}
			className="multiple-slide-button-next"
		>
			<FontAwesomeIcon icon={faChevronRight} />
		</button>
	)

	const RenderPrevButton = () => (
		<button
			onClick={goPrev}
			className="multiple-slide-button-prev"
		>
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
	)

	if (size(data) === 0) {
		return <Fragment />
	}

	return (
		<div className="multiple-slide-top-wrapper">
			<Swiper ref={swiperRef} {...params}>
				{map(data, (item, key) => renderSlide(item, key))}
			</Swiper>
			<RenderNextButton />
			<RenderPrevButton />
		</div>
	)
}

export default MultipleSlide
