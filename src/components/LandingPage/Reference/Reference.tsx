import ExampleImage from './ExampleImage/ExampleImage'

const Reference = () => {
	return (
		<div className='w-full h-fit'>
			<div className='flex flex-col justify-center pt-10'>
				<div className='lg:text-6xl text-3xl text-gray-900 font-semibold mx-auto'>
					Interior Plant Reference
				</div>
				<div className='lg:text-2xl text-xl text-gray-700 mx-auto lg:mt-10 mt-4'>
					make your home so comfortable with refreshing plants
				</div>
			</div>
			<div className='flex lg:flex-row flex-col justify-center mt-20 pb-14 space-y-4 lg:space-y-0'>
				<div className='px-8 space-y-4 lg:space-y-0'>
					<ExampleImage image='living-room' />
					<div className='lg:pt-11 '>
						<ExampleImage image='working-area' />
					</div>
				</div>
				<div className='px-8'>
					<ExampleImage image='bedroom' />
				</div>
			</div>
		</div>
	)
}

export default Reference
