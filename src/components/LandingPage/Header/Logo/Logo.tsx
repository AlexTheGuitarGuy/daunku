import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<span className='flex cursor-pointer'>
			<img src={require('../../../../assets/logo.png')} alt='logo' />

			<span
				className='
							not-italic font-bold text-3xl leading-10 text-white
							my-auto ml-3
							'
			>
				<NavLink to='/'>Daunku</NavLink>
			</span>
		</span>
	)
}

export default Logo
