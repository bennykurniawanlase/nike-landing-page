import React, { useState } from 'react'
import './header.css'

const TABS = ['Men`s', 'Women`s', 'Kid`s', 'Collection`s']

const Header = () => {
	const [activeTab, setActiveTab] = useState(TABS[0])
	return (
		<div className="header">
			<img
				alt="Nike"
				className="header-logo"
				src={require('../../Assets/logo.png')}
			/>
			<div className="header-tabs-container">
				{TABS.map((_tab) => (
					<div
						className={`${activeTab === _tab ? 'header-tab header-tab-active' : 'header-tab'}`}
						onClick={() => setActiveTab(_tab)}>
						{_tab}
					</div>
				))}
			</div>
		</div>
	)
}

export default Header
