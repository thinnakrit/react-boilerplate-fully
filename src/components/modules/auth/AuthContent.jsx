import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-grid-system'
// ---
import { useKeyPress } from '~/utils/hooks'
// ---
import { LoadingOverlay } from '~/components/commons/loading'
import { DivideText } from '~/components/commons/divide'
// ---
import {
	AuthContinueButton,
	MobileAuth,
	EmailAuth,
} from '~/components/modules/auth'
// ---
import { container as AuthCoreContainer } from '~/modules/auth/auth-core'
// ---
//
const AuthContent = (props) => {
	const authConstant = {
		SIGNIN: 'SIGNIN',
		SIGNUP: 'SIGNUP',
		EMAIL_AUTH: 'EMAIL_AUTH',
		EMAIL_SIGNUP: 'EMAIL_SIGNUP',
		FACEBOOK_AUTH: 'FACEBOOK_AUTH',
		FACEBOOK_SIGNUP: 'FACEBOOK_SIGNUP',
		GOOGLE_AUTH: 'GOOGLE_AUTH',
		GOOGLE_SIGNUP: 'GOOGLE_SIGNUP',
		APPLE_AUTH: 'APPLE_AUTH',
		APPLE_SIGNUP: 'APPLE_SIGNUP',
	}
	const [isAuthType, setIsAuthType] = useState(
		authConstant.SIGNIN
	)
	const [
		isOpenMobileCodeSelect,
		setIsOpenMobileCodeSelect,
	] = useState(false)

	const [mobileCode, setMobileCode] = useState('+66')

	// const { t, i18n } = useTranslation()

	const _handleSetIsAuthType = (type) => {
		setIsAuthType(type)
	}

	const _handleSetMobileCode = (code) => {
		setMobileCode(code)
	}

	const isEsc = useKeyPress('Escape')
	const { closable, toggle } = props

	useEffect(() => {
		if (isEsc && closable) {
			toggle()
		}
	})

	return (
		<AuthCoreContainer
			{...props}
			toggle={toggle}
			closable={closable}
			render={({
				userID,
				isAuthentication,
				isExitUser,
				isCheckExitUser,
				isAuth,
				//
				onGetEmailAuth,
				onCancelEmailAuth,
				onGetEmailSignin,
				onGetEmailSignup,
			}) => {
				if (isAuth) {
					return <Fragment>Login Success!</Fragment>
				}
				return (
					<Fragment>
						<LoadingOverlay isVisible={isAuthentication} />

						<div className="auth-wrapper">
							<div className="auth-header background">
								{closable && (
									<a className="close" onClick={toggle}>
										Close
									</a>
								)}
							</div>

							<Row nogutter>
								<Col md={5}>
									<div className="auth-helper">
										Left area
									</div>
								</Col>
								<Col md={7}>
									<div className="auth-form">
										{(isAuthType === authConstant.SIGNUP ||
											isAuthType ===
												authConstant.SIGNIN) && (
											<div className="auth-type-form">
												<div
													className={`auth-type-radio ${
														isAuthType ===
														authConstant.SIGNIN
															? `selected`
															: ''
													}`}
													onClick={() =>
														_handleSetIsAuthType(
															authConstant.SIGNIN
														)
													}
												>
													LOGIN
												</div>
												<div
													className={`auth-type-radio ${
														isAuthType ===
														authConstant.SIGNUP
															? `selected`
															: ''
													}`}
													onClick={() =>
														_handleSetIsAuthType(
															authConstant.SIGNUP
														)
													}
												>
													REGISTER
												</div>
											</div>
										)}

										{(isAuthType === authConstant.SIGNUP ||
											isAuthType ===
												authConstant.SIGNIN) && (
											<MobileAuth
												isAuthType={isAuthType}
												authConstant={authConstant}
												isOpenMobileCodeSelect={
													isOpenMobileCodeSelect
												}
												onSetIsOpenMobileCodeSelect={
													setIsOpenMobileCodeSelect
												}
												mobileCode={mobileCode}
											/>
										)}

										{isAuthType ===
											authConstant.EMAIL_AUTH && (
											<EmailAuth
												isAuthentication={isAuthentication}
												isCheckExitUser={isCheckExitUser}
												isExitUser={isExitUser}
												onGetEmailAuth={onGetEmailAuth}
												onCancelEmailAuth={
													onCancelEmailAuth
												}
												onGetEmailSignin={onGetEmailSignin}
												onGetEmailSignup={onGetEmailSignup}
											/>
										)}

										<DivideText text={'OR'} />
										<div>
											<AuthContinueButton
												isAuthType={isAuthType}
												buttonAuthType={authConstant.SIGNIN}
												onSetIsAuthType={
													_handleSetIsAuthType
												}
												buttonName={`Login with mobile number`}
												buttonOptions={{
													block: true,
													outline: true,
													theme: 'secondary',
												}}
											/>

											<AuthContinueButton
												isAuthType={isAuthType}
												buttonAuthType={
													authConstant.EMAIL_AUTH
												}
												onSetIsAuthType={
													_handleSetIsAuthType
												}
												buttonName={`Continue with Email`}
												buttonOptions={{
													block: true,
													outline: true,
													theme: 'secondary',
												}}
												svgName="EmailSvg"
											/>

											<AuthContinueButton
												isAuthType={isAuthType}
												buttonAuthType={
													authConstant.FACEBOOK_AUTH
												}
												onSetIsAuthType={
													_handleSetIsAuthType
												}
												buttonName={`Continue with Facebook`}
												buttonOptions={{
													block: true,
													outline: true,
													theme: 'primary',
												}}
												svgName="FacebookSvg"
											/>

											<AuthContinueButton
												isAuthType={isAuthType}
												buttonAuthType={
													authConstant.GOOGLE_AUTH
												}
												onSetIsAuthType={
													_handleSetIsAuthType
												}
												buttonName={`Continue with Google`}
												buttonOptions={{
													block: true,
													outline: true,
													theme: 'danger',
												}}
												svgName="GoogleSvg"
											/>

											<AuthContinueButton
												isAuthType={isAuthType}
												buttonAuthType={
													authConstant.APPLE_AUTH
												}
												onSetIsAuthType={
													_handleSetIsAuthType
												}
												buttonName={`Continue with Apple`}
												buttonOptions={{
													block: true,
													outline: true,
													theme: 'dark',
												}}
												svgName="AppleSvg"
											/>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Fragment>
				)
			}}
		/>
	)
}

export default AuthContent
