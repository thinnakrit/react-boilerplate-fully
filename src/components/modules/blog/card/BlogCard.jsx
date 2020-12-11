import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BlogCard = (
	{
		//
	}
) => {
	return (
		<div className="blog-preview-card">
			<div className="image-cover">
				<LazyLoadImage
					src={
						'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg'
					}
					effect="blur"
					className="image-cover-source"
				/>
				<div className="date react-linear-gradient-wrapper">
					12 Sep 2020
				</div>
			</div>
			<div className="title">
				<h4>Travel at Bangkok 2D1N</h4>
			</div>
			<div className="profile">
				<div className="avatar">
					<LazyLoadImage
						src={
							'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/136697800/original/ad0b0ec86b4d6cc39a8f2350c1979d0be2182691/do-youtube-banner-watermark-avatar-logo-for-your-channel.png'
						}
						effect="blur"
						className="avatar-source"
					/>
				</div>
				<div className="detail">
					<div className="name">Thinnakrit</div>
					<div className="group">Group Name</div>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
