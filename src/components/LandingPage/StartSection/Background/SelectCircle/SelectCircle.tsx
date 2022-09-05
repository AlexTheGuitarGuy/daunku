import { FC } from 'react'

import ItemDescription from './ItemDescription/ItemDescription'

type SelectCircleProps = {
	price?: string
	name?: string
}

const SelectCircle: FC<SelectCircleProps> = (props) => {
	const { price, name } = props
	return (
		<div className='relative flex justify-center'>
			{price && name && <ItemDescription {...props} />}
			<div
				className='rounded-full 
						border border-white 
						bg-white bg-opacity-20 backdrop-blur-sm
						w-14 h-14
						flex justify-center items-center'
			>
				<div
					className='
						rounded-full 
						bg-white
						w-4 h-4'
				></div>
			</div>
		</div>
	)
}

export default SelectCircle
