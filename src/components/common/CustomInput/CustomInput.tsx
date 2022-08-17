import { FC, ReactNode } from 'react'
import cn from 'classnames'

type CustomInputProps = {
	placeholder?: string
	children?: ReactNode
	className?: string
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, children, className }) => {
	return (
		<div className={cn('relative', className)}>
			<input
				className='px-8 py-6 
						rounded-full 
						border border-white 
						bg-white bg-opacity-20 backdrop-blur-lg	
						w-full
						outline-0
						transition
						text-xl'
				placeholder={placeholder}
			/>
			<div
				className='absolute right-3 top-3 rounded-full 
							bg-gradient-to-r from-teal-400 to-blue-500
							text-center
							cursor-pointer
							hover:opacity-70 active:opacity-40 transition-opacity'
			>
				{children}
			</div>
		</div>
	)
}

export default CustomInput
