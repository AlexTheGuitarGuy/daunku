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
		<div className='bg-blue-200 rounded-t-[50px] h-full w-[330px] ml-16'>
			<img
				src={require(`../../../../assets/products/${name}.png`)}
				alt={name}
				className='-mt-36 mb-10'
			/>
			<div
				className='bg-white flex flex-col justify-between
			  p-10 rounded-t-[50px] h-3/4'
			>
				<div className='text-3xl text-gray-900 font-semibold'>
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
				<div className='flex justify-between items-end'>
					<div className='text-3xl text-gray-900 my-auto'>$65.00</div>
					<div
						className={cn('rounded-full bg-gray-300', {
							'bg-gradient-to-r from-teal-400 to-blue-500': !isItemAdded,
						})}
						onClick={handleCartAction}
					>
						<img
							src={require('../../../../assets/common/plus.png')}
							alt='add to cart'
							className={cn('w-14 h-14 transition-transform', { 'rotate-45': isItemAdded })}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
