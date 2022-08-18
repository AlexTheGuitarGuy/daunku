import { FC } from 'react'

type ItemDescriptionProps = {
	price?: string
	name?: string
}

const ItemDescription: FC<ItemDescriptionProps> = ({ price, name }) => {
	return (
		<div className='absolute -top-36 mx-auto flex justify-center'>
			<div
				className='w-8 h-8 mx-auto rotate-45 z-0
							absolute -bottom-3	 						
							border border-white
							rounded-lg
							bg-white bg-opacity-20 backdrop-blur-sm'
			></div>
			<div
				className='w-48 border rounded-3xl z-10
						border-white
						bg-white bg-opacity-20 backdrop-blur-sm
						p-4
						'
			>
				<div className='font-bold mx-2'>
					<div className='lg:text-3xl text-xl'>{price}</div>
					<div className='mt-3 text-m'>{name}</div>
				</div>
			</div>
		</div>
	)
}

export default ItemDescription
