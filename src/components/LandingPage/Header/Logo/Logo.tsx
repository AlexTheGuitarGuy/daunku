import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<span className='flex cursor-pointer ml-10'>
			<img src={require('../../../../assets/logo.png')} alt='logo' />

			<span
				className='
						font-bold text-4xl text-white
						my-auto ml-2
							'
			>
				<NavLink to='/'>Daunku</NavLink>
			</span>
		</span>
	)
}

export default Logo
