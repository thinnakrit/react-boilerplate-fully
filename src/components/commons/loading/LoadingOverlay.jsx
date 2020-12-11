import React, { Fragment } from 'react'
import { Modal } from 'shards-react'
import Lottie from 'react-lottie'
// ---
import animationData from '~/assets/images/loading.json'
// ---
const LoadingOverlay = ({ isVisible }) => {
	if (isVisible) {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		}

		return (
			<Modal
				open={true}
				centered
				modalContentClassName="loading-overlay"
			>
				<div>
					<Lottie
						options={defaultOptions}
						height={200}
						width={200}
						isStopped={false}
						isPaused={false}
						isClickToPauseDisabled={true}
						style={{ cursor: 'default' }}
					/>
				</div>
			</Modal>
		)
	}
	return <Fragment />
}

export default LoadingOverlay
