import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
// ---
import { Template } from '~/templates/v1'
// ---
import { AuthContent } from '~/components/modules/auth'
// ---
const AuthView = (props) => {
	return (
		<Template
			contentRender={
				<Container fluid style={{ marginTop: 50 }}>
					<Row justify="center" nogutter>
						<Col md={6}>
							<AuthContent {...props} />
						</Col>
					</Row>
				</Container>
			}
		/>
	)
}

AuthView.getInitialProps = async (props) => {
	try {
		const { store } = props
		const {
			authStore: {
				authCore: { isAuth },
			},
		} = store.getState()

		if (isAuth) {
			return { redirectTo: '/' }
		}
	} catch (error) {}
}

export default AuthView
