import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<span className='flex cursor-pointer ml-10'>
			<img src={require('../../../../assets/logo.png')} alt='logo' className='w-12 h-12' />

			<span
				className='font-bold text-3xl
						my-auto ml-2
						transition-colors
			            bg-clip-text
			            fill-transparent
						hover:text-transparent 
						hover:bg-gradient-to-tr 
						hover:from-teal-400 hover:to-blue-500'
			>
				<NavLink to='/'>Daunku</NavLink>
			</span>
		</span>
	)
}

export default Logo
