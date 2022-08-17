const SearchBar = () => {
	return (
		<div className='w-1/5 justify-center mt-10 relative mx-auto'>
			<input
				className='px-8 py-6 
						rounded-full 
						border border-white 
						bg-white bg-opacity-20 backdrop-blur-lg	
						w-full
						outline-0
						transition
						text-xl'
				placeholder='Search plant'
			/>
			<div
				className='w-14 h-14 rounded-full 
				bg-gradient-to-r from-teal-400 to-blue-500
				absolute right-3 top-3
				text-center
				flex justify-center items-center
				pointer-events-none'
			>
				<img src={require('../../../../assets/search-icon.png')} alt='search' className='w-7 h-7' />
			</div>
		</div>
	)
}

export default SearchBar
