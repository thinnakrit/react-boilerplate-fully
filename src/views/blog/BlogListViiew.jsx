import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'universal-cookie'
import { Container, Row, Col } from 'react-grid-system'
import map from 'lodash/map'
// ---
import { Template } from '~/templates/v1'
import { SvgComponent } from '~/assets/constant'
// ---
import { BlogCard } from '~/components/modules/blog/card'
import {
	LandscapeSlide,
	MultipleSlide,
} from '~/components/commons/slide'
// ---
import { container as AppCategoryContainer } from '~/modules/app/app-category'
// ---
const cookies = new Cookies()
//
const BlogListViiew = (props) => {
	const { t, i18n } = useTranslation()

	const changeLang = () => {
		const lang = cookies.get('lang') === 'th' ? 'en' : 'th'
		i18n.changeLanguage(lang)
		cookies.set('lang', lang)
	}

	const selectCategory = 'story'

	return (
		<Template
			contentRender={
				<Fragment>
					<Container style={{ marginTop: 25 }}>
						<Row className="main-category" gutterWidth={0}>
							<AppCategoryContainer
								{...props}
								render={({ categories }) => {
									return (
										<Fragment>
											<MultipleSlide
												data={categories}
												renderSlide={(item, key) => {
													return (
														<Col md={1} key={key}>
															<div
																className={`main-category-list${
																	selectCategory ===
																	item.enum
																		? ' active'
																		: ''
																}`}
															>
																<SvgComponent
																	name={item.iconName}
																	className="main-category-icon"
																/>
																<div className="main-category-name">
																	{item.name}
																</div>
															</div>
														</Col>
													)
												}}
											/>
										</Fragment>
									)
								}}
							/>
						</Row>
					</Container>
					<Container>
						<Row>
							{map(
								['1', '2', '3', '4', '5', '6', '7', '8'],
								(item, key) => {
									return (
										<Col md={3} key={key}>
											<BlogCard />
										</Col>
									)
								}
							)}
						</Row>
					</Container>
					<div>{t('welcome')}</div>
				</Fragment>
			}
		/>
	)
}

export default BlogListViiew
