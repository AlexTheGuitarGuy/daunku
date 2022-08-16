import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

const Header = () => {
	return (
		<div className='w-full h-screen relative'>
			<img
				src={require('../../../assets/home-page-bg.png')}
				alt='background'
				className='
					absolute
					top-0
					w-full h-screen 
					z-10'
			/>
			<div
				className='
					absolute 
					h-48
					w-full 
					bottom-0
					bg-gradient-to-b from-transparent to-white
					z-20'
			></div>
			<header
				className='pt-10 relative 
						flex flex-row justify-around
						z-30'
			>
				<Logo />
				<Navbar />
				<span>Shopping</span>
			</header>
		</div>
	)
}

export default Header
