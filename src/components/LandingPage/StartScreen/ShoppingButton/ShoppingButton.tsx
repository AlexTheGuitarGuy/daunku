const ShoppingButton = () => {
	return (
		<span className='flex justify-end my-auto mr-10'>
			<button className='relative'>
				<img
					src={require('../../../../assets/shopping-icon.png')}
					alt='shopping'
					className='w-9 h-10'
				/>
				<div
					className='w-6 h-6 rounded-full 
				bg-gradient-to-r from-teal-400 to-blue-500
				absolute top-0 -right-2
				text-center'
				>
					<div className='text-sm text-black mt-0.5'>1</div>
				</div>
			</button>
		</span>
	)
}

export default ShoppingButton
