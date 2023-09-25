import React from 'react'

export const DefaultLayout = ({ children }) => {
	return (
		<div className='container'>
			<main>{children}</main>
		</div>
	)
}
