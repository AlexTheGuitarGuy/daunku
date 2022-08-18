import cn from 'classnames'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../../../redux/shopping-cart-selector'
import { removeFromCart, addToCart } from '../../../../redux/shopping-cart-reducer'

type Species = 'camille-plant' | 'peace-lily' | 'snake-plant'

type ProductProps = {
	name: Species
}

const Product: FC<ProductProps> = ({ name }) => {
	const cartItems = useSelector(getCartItems)
	const dispatch = useDispatch()

	const isItemAdded = cartItems.includes(name)

	const speciesMap = {
		'camille-plant': 'Cammile',
		'peace-lily': 'Peace Lily',
		'snake-plant': 'Snake Plant',
	}

	const handleCartAction = () => {
		if (isItemAdded) dispatch(removeFromCart(name))
		else dispatch(addToCart(name))
	}

	return (
		<div
			className='bg-blue-200 rounded-t-[50px] h-full 
		2xl:w-[330px] 2xl:h-[510px] 
		xl:w-[280px] xl:h-[400px] 
		lg:w-[200px] lg:h-[300px] 
		lg:ml-16'
		>
			<img
				src={require(`../../../../assets/products/${name}.png`)}
				alt={name}
				className='lg:-mt-36 lg:mb-10 -mt-20 mb-6'
			/>
			<div
				className='bg-white flex flex-col justify-between
			  p-10 rounded-t-[50px] h-3/4'
			>
				<div className='xl:text-4xl lg:text-2xl text-xl text-gray-900 font-semibold'>
					{speciesMap[name]}
					<div className='flex mt-2'>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row lg:justify-between lg:items-end items-center'>
					<div className='xl:text-3xl text-xl text-gray-900 my-auto font-semibold'>$65.00</div>
					<div
						className={cn(
							`rounded-full bg-gray-300 cursor-pointer 
							 active:opacity-40 
							transition-opacity transition-colors`,
							{
								'bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-70': !isItemAdded,
							},
							{
								'hover:bg-red-500': isItemAdded,
							},
						)}
						onClick={handleCartAction}
					>
						<img
							src={require('../../../../assets/common/plus.png')}
							alt='add to cart'
							className={cn(
								`w-14 h-14 
									lg:w-10 lg:h-10
									xl:w-14 xl:h-14
								transition-transform`,
								{
									'rotate-45': isItemAdded,
								},
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
