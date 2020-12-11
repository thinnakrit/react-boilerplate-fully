import React, { Fragment } from 'react'
import {
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from 'shards-react'
// ---
import { SvgComponent } from '~/assets/constant'
// ---
const AuthContinueButton = ({
	isAuthType,
	buttonAuthType,
	onSetIsAuthType,
	buttonName,
	buttonOptions,
	svgName,
}) => {
	if (isAuthType === buttonAuthType) {
		return <Fragment />
	}
	return (
		<Button
			{...buttonOptions}
			className="auth-button-continute"
			onClick={() => onSetIsAuthType(buttonAuthType)}
		>
			{svgName && (
				<SvgComponent
					name={svgName}
					className="auth-button-continute-icon"
				/>
			)}
			<div className="auth-button-continute-name">
				{buttonName}
			</div>
		</Button>
	)
}

export default AuthContinueButton
