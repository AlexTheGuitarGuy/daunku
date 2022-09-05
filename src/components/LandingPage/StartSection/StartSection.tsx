import CustomInput from '../../common/CustomInput/CustomInput'
import Background from './Background/Background'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import ShoppingButton from './ShoppingButton/ShoppingButton'

const StartScreen = () => {
	return (
		<header
			className='w-full 
							2xl:h-[1440px] 
							xl:h-[1080px]
							h-[768px]
							relative text-white'
		>
			<Background />

			<div className='relative z-40 w-full xl:space-y-24 sm:space-y-24 lg:space-y-10'>
				<section className='pt-10 grid grid-cols-3'>
					<span className='order-2 lg:order-1'>
						<Logo />
					</span>
					<span className='order-1 lg:order-2'>
						<Navbar />
					</span>
					<span className='order-3 lg:order-3'>
						<ShoppingButton />
					</span>
				</section>
				<h2
					className='mx-auto text-center 
						font-bold 
						xl:text-8xl
						lg:text-5xl
						text-3xl
						lg:w-2/3
						mx-10 lg:mx-auto
						leading-10'
				>
					Bring Serenity to Your Place With Interior Plants
				</h2>
				<p
					className='lg:mx-auto text-center 
						text-xl xl:text-3xl
						mx-10
						lg:w-1/4
						leading-6'
				>
					find your dream plant for you home decoration with us, and we will make it happen.
				</p>

				<div>
					<CustomInput
						placeholder='Search plant'
						className='mx-auto 
								xl:w-1/5 lg:w-1/3
								w-2/3'
					>
						<button
							className='lg:w-14 lg:h-14
									w-12 h-12 
									flex justify-center items-center'
						>
							<img
								src={require('../../../assets/common/search-icon.png')}
								alt='search'
								className='lg:w-7 lg:h-7 w-6 h-6'
							/>
						</button>
					</CustomInput>
				</div>
			</div>
		</header>
	)
}

export default StartScreen
