import React, { Fragment, useState, useEffect } from 'react'
import {
	InputGroup,
	FormInput,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	Button,
} from 'shards-react'
import { SvgComponent } from '~/assets/constant'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
// ---
import { useKeyPress } from '~/utils/hooks'
//
const EmailAuth = ({
	isAuthentication,
	isExitUser,
	isCheckExitUser,
	//
	onGetEmailAuth,
	onCancelEmailAuth,
	onGetEmailSignin,
	onGetEmailSignup,
}) => {
	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [
		confirmPasswordInput,
		setConfirmPasswordInput,
	] = useState('')

	const isCheckPassword =
		passwordInput === confirmPasswordInput
	const isMinPassword = size(passwordInput) >= 8

	const isSignInDisable =
		!isMinPassword || isEmpty(emailInput)

	const isSignUpDisable =
		!isMinPassword ||
		!isCheckPassword ||
		isEmpty(emailInput)

	const handleCancelEmailAuth = () => {
		setEmailInput('')
		setPasswordInput('')
		setConfirmPasswordInput('')
		onCancelEmailAuth()
	}

	const handleGetEmailAuth = () => {
		if (!isEmpty(emailInput) && !isCheckExitUser) {
			onGetEmailAuth({ email: emailInput })
		}
	}

	const handleGetEmailSignin = () => {
		if (!isSignInDisable && isExitUser && isCheckExitUser) {
			onGetEmailSignin({
				email: emailInput,
				password: passwordInput,
			})
		}
	}

	const handleGetEmailSignup = () => {
		if (
			!isSignUpDisable &&
			!isExitUser &&
			isCheckExitUser
		) {
			onGetEmailSignup({
				email: emailInput,
				password: passwordInput,
			})
		}
	}

	const isEnter = useKeyPress('Enter')

	useEffect(() => {
		if (isEnter) {
			handleGetEmailAuth()
			handleGetEmailSignin()
			handleGetEmailSignup()
		}
	})

	useEffect(() => {
		return () => {
			handleCancelEmailAuth()
		}
	}, [])
	return (
		<div className="auth-sign-form-wrapper">
			<div className="auth-sign-form-title">
				Continue with Email
			</div>

			{!isCheckExitUser && (
				<FormInput
					className="auth-sign-form-input"
					placeholder="example@popkun.com"
					type="email"
					disabled={isAuthentication}
					value={emailInput}
					onChange={(event) =>
						setEmailInput(event.target.value)
					}
				/>
			)}
			{isExitUser && isCheckExitUser && (
				<Fragment>
					<div className="continue-wrapper">
						Login with Email "{emailInput}" (
						<a onClick={handleCancelEmailAuth}>Change</a>)
					</div>

					<FormInput
						className="auth-sign-form-input-password"
						placeholder="รหัสผ่าน"
						type="password"
						disabled={isAuthentication}
						value={passwordInput}
						onChange={(event) =>
							setPasswordInput(event.target.value)
						}
					/>
				</Fragment>
			)}

			{!isExitUser && isCheckExitUser && (
				<Fragment>
					<div className="continue-wrapper">
						Register with Email "{emailInput}" (
						<a onClick={handleCancelEmailAuth}>Change</a>)
					</div>

					<FormInput
						className="auth-sign-form-input-password"
						placeholder="Password min 8 chars"
						type="password"
						disabled={isAuthentication}
						value={passwordInput}
						invalid={
							!isEmpty(passwordInput) && !isMinPassword
						}
						onChange={(event) =>
							setPasswordInput(event.target.value)
						}
					/>

					<FormInput
						className="auth-sign-form-input-password"
						placeholder="Confirm password"
						type="password"
						disabled={isAuthentication}
						value={confirmPasswordInput}
						invalid={
							!isEmpty(passwordInput) &&
							!isEmpty(confirmPasswordInput) &&
							!isCheckPassword
						}
						onChange={(event) =>
							setConfirmPasswordInput(event.target.value)
						}
					/>
				</Fragment>
			)}

			{!isCheckExitUser && (
				<Button
					block
					theme="secondary"
					className="auth-sign-form-submit"
					disabled={isEmpty(emailInput) || isAuthentication}
					onClick={handleGetEmailAuth}
				>
					Continue
				</Button>
			)}

			{isExitUser && isCheckExitUser && (
				<Button
					block
					theme="secondary"
					className="auth-sign-form-submit"
					disabled={isSignInDisable}
					onClick={handleGetEmailSignin}
				>
					LOGIN
				</Button>
			)}

			{!isExitUser && isCheckExitUser && (
				<Button
					block
					theme="secondary"
					className="auth-sign-form-submit"
					disabled={isSignUpDisable}
					onClick={handleGetEmailSignup}
				>
					REGISTER
				</Button>
			)}
		</div>
	)
}

export default EmailAuth
