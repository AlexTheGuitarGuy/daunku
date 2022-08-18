import ExampleImage from './ExampleImage/ExampleImage'

const Reference = () => {
	return (
		<div className='w-full h-max lg:mt-0 mt-32'>
			<div className='flex flex-col justify-center lg:pt-10'>
				<div className='xl:text-6xl lg:text-4xl text-3xl text-gray-900 font-semibold mx-auto'>
					Interior Plant Reference
				</div>
				<div className='xl:text-2xl text-xl text-gray-700 text-center mx-auto mx-8 lg:mt-10 mt-4'>
					make your home so comfortable with refreshing plants
				</div>
			</div>
			<div
				className='flex lg:flex-row flex-col justify-center mt-20 pb-14
				mx-8 lg:mx-16 xl:mx-0
			space-y-4 lg:space-y-0 lg:space-x-16'
			>
				<div className='space-y-4 lg:space-y-0'>
					<ExampleImage image='living-room' />
					<div className='lg:pt-11'>
						<ExampleImage image='working-area' />
					</div>
				</div>
				<div>
					<ExampleImage image='bedroom' />
				</div>
			</div>
		</div>
	)
}

export default Reference
