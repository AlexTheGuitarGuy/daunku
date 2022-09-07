import ExampleImage from './ExampleImage/ExampleImage'

const Reference = () => {
	return (
		<section className='w-full h-max lg:mt-0 mt-32 snap-start'>
			<header className='flex flex-col justify-center lg:pt-10'>
				<h2 className='xl:text-6xl lg:text-4xl text-3xl text-gray-900 font-semibold mx-auto'>
					Interior Plant Reference
				</h2>
				<p className='xl:text-2xl text-xl text-gray-700 text-center mx-auto mx-8 lg:mt-10 mt-4'>
					make your home so comfortable with refreshing plants
				</p>
			</header>
			<div
				className='flex lg:flex-row flex-col justify-center mt-20 pb-14
				mx-8 lg:mx-16 xl:mx-0
			space-y-4 lg:space-y-0 lg:space-x-16'
			>
				<div className='space-y-4 lg:space-y-0 lg:flex lg:flex-col lg:justify-between'>
					<ExampleImage image='living-room' />
					<div>
						<ExampleImage image='working-area' />
					</div>
				</div>
				<div>
					<ExampleImage image='bedroom' />
				</div>
			</div>
		</section>
	)
}

export default Reference
