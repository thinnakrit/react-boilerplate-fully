import React from 'react'
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
// ---
//
const MobileAuth = ({
	isAuthType,
	authConstant,
	isOpenMobileCodeSelect,
	onSetIsOpenMobileCodeSelect,
	mobileCode,
}) => {
	return (
		<div className="auth-sign-form-wrapper">
			{isAuthType === authConstant.SIGNIN && (
				<div className="auth-sign-form-title">
					Login with mobile number
				</div>
			)}
			{isAuthType === authConstant.SIGNUP && (
				<div className="auth-sign-form-title">
					Register with mobile number
				</div>
			)}
			<InputGroup>
				<Dropdown
					addonType="prepend"
					open={isOpenMobileCodeSelect}
					toggle={() =>
						onSetIsOpenMobileCodeSelect(
							!isOpenMobileCodeSelect
						)
					}
				>
					<DropdownToggle caret theme="light">
						{mobileCode}
					</DropdownToggle>
					<DropdownMenu right={false}>
						<DropdownItem>+66 (Thailand)</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<FormInput
					className="auth-sign-form-input"
					placeholder="0901234567"
				/>
			</InputGroup>

			{isAuthType === authConstant.SIGNIN && (
				<FormInput
					className="auth-sign-form-input-password"
					placeholder="Password"
					type="password"
				/>
			)}
			{isAuthType === authConstant.SIGNUP && (
				<div className="auth-sign-form-otp-detail">
					We will send OTP code in 5 minutes after your
					click <b>"Continue"</b>
				</div>
			)}
			<Button
				block
				theme="secondary"
				className="auth-sign-form-submit"
			>
				Continue
			</Button>
		</div>
	)
}

export default MobileAuth
