const ShoppingButton = () => {
	return (
		<span className='flex justify-end my-auto mr-10'>
			<img
				src={require('../../../../assets/shopping-icon.png')}
				alt='shopping'
				className='w-10 h-10'
			/>
			<div
				className='w-5 h-5 rounded-full 
				bg-gradient-to-tr from-teal-400 to-blue-500
				absolute top-13 right-8
				text-center'
			>
				<div className='text-sm'>1</div>
			</div>
		</span>
	)
}

export default ShoppingButton
