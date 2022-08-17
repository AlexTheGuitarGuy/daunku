const Background = () => {
	return (
		<>
			<img
				src={require('../../../../assets/start-page/home-page-bg.png')}
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
					-bottom-1
					bg-gradient-to-b from-transparent to-white
					z-20'
			></div>
		</>
	)
}

export default Background
