import ExampleImage from './ExampleImage/ExampleImage'

const Reference = () => {
	return (
		<div className='w-full h-fit'>
			<div className='flex flex-col justify-center pt-10'>
				<div className='text-6xl text-gray-900 font-semibold mx-auto'>Interior Plant Reference</div>
				<div className='text-2xl text-gray-700 mx-auto mt-10'>
					make your home so comfortable with refreshing plants
				</div>
			</div>
			<div className='flex flex-row justify-center mt-20 pb-14'>
				<div className='px-8'>
					<ExampleImage image='living-room' />
					<div className='pt-11'>
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
