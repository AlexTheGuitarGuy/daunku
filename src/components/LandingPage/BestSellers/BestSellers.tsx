import Service from './Service/Service'
import Product from './Product/Product'

const BestSellers = () => {
	return (
		<div
			className='w-full h-screen relative 
						flex flex-col lg:justify-between'
		>
			<div
				className='lg:grid lg:grid-cols-3 
							space-y-8
							mx-auto
							pt-10'
			>
				<Service icon='shipping' />
				<Service icon='payment' />
				<Service icon='customer-support' />
			</div>
			<div className='flex lg:flex-row flex-col lg:mx-80 lg:mb-60 mt-10'>
				<div className='flex flex-col justify-center text-center'>
					<div className='lg:text-6xl text-3xl text-gray-900'>Best Seller Product</div>
					<div
						className='lg:text-2xl text-xl text-gray-700 flex lg:mt-20 mt-8
									flex justify-center'
					>
						See all collection
						<span className='my-auto lg:ml-6'>
							<img src={require('../../../assets/common/arrow.png')} alt='arrow' />
						</span>
					</div>
				</div>
				<div className='flex lg:mt-10 mt-20'>
					<Product name='camille-plant' />
					<Product name='peace-lily' />
					<Product name='snake-plant' />
				</div>
			</div>
		</div>
	)
}

export default BestSellers
