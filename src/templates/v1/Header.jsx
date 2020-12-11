import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
	InputGroup,
	InputGroupText,
	InputGroupAddon,
	FormInput,
	Modal,
} from 'shards-react'
import { Container, Row, Col } from 'react-grid-system'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Sticky from 'react-stickynode'
// ---
import { SvgComponent } from '~/assets/constant'
// ---
import Logo from '~/assets/images/logo-landscape.png'
// ---
import { AuthContent } from '~/components/modules/auth'
// ---
import { container as AuthCoreContainer } from '~/modules/auth/auth-core'
// ---
export default (props) => {
	const [isAuthModal, setIsAuthModal] = useState(false)

	return (
		<AuthCoreContainer
			{...props}
			render={({
				isAuth,
				isLoadingSignout,
				onGetSignout,
			}) => {
				return (
					<div className="template-v1">
						<Sticky enabled={true} top={0} innerZ={999}>
							<div className="header">
								<Container>
									<div className="header-wrapper">
										<div className="logo">
											<LazyLoadImage
												src={Logo}
												effect="blur"
												className="popkun-logo"
											/>
										</div>
										<div className="search">
											<div className="search-wrapper">
												<InputGroup seamless>
													<InputGroupAddon type="prepend">
														<InputGroupText>
															<FontAwesomeIcon
																icon={faSearch}
															/>
														</InputGroupText>
													</InputGroupAddon>
													<FormInput
														className="search-group-shards"
														placeholder="Search placeholer ..."
													/>
												</InputGroup>
											</div>
										</div>
										<div className="optional">
											<a href="#">
												<div className="optional-menu-wrapper">
													<div className="option-menu-name">
														Menu 1
													</div>
												</div>
											</a>

											<a href="#">
												<div className="optional-menu-wrapper">
													<div className="option-menu-name">
														Menu 2
													</div>
												</div>
											</a>

											{!isAuth && (
												<a
													onClick={() =>
														setIsAuthModal(true)
													}
												>
													<div className="optional-menu-wrapper">
														<div className="option-auth">
															<div className="option-menu-name">
																LOGIN / REGISTER
															</div>
														</div>
													</div>
												</a>
											)}
											{isAuth && !isLoadingSignout && (
												<a onClick={onGetSignout}>
													<div className="optional-menu-wrapper">
														<div className="option-menu-name">
															LOGOUT
														</div>
													</div>
												</a>
											)}

											<a href="#">
												<div className="optional-menu-wrapper">
													<div className="option-menu-name">
														HELP
													</div>
												</div>
											</a>
										</div>
									</div>
								</Container>
							</div>
						</Sticky>

						<Modal
							open={isAuthModal}
							centered
							modalClassName="auth-content-modal"
							size="lg"
							toggle={() => setIsAuthModal(false)}
						>
							<AuthContent
								{...props}
								closable={true}
								toggle={() => setIsAuthModal(false)}
							/>
						</Modal>
					</div>
				)
			}}
		/>
	)
}
