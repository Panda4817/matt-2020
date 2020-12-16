import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

// Footer component rendered on each page
const Footer = () => (
	<footer className="row justify-content-center text-center">
		<div className="col-12">
			<p id="footer_text">
				Created by Secret Santa<br />
				<FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
			</p>
		</div>
	</footer>
)



export default Footer