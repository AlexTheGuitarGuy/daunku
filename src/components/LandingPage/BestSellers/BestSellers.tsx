import Service from './Service/Service'
import Product from './Product/Product'

const BestSellers = () => {
	return (
		<div
			className='w-full h-screen relative 
						flex flex-col justify-between'
		>
			<div className='grid grid-cols-3 pt-10'>
				<Service icon='shipping' />
				<Service icon='payment' />
				<Service icon='customer-support' />
			</div>
			<div className='flex mx-80 mb-60'>
				<div className='flex flex-col justify-center'>
					<div className='text-6xl text-gray-900'>Best Seller Product</div>
					<div className='text-2xl text-gray-700 flex mt-20'>
						See all collection
						<span className='my-auto ml-6'>
							<img src={require('../../../assets/common/arrow.png')} alt='arrow' />
						</span>
					</div>
				</div>
				<div className='flex'>
					<Product name='camille-plant' />
					<Product name='peace-lily' />
					<Product name='snake-plant' />
				</div>
			</div>
		</div>
	)
}

export default BestSellers
