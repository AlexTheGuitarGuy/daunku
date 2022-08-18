import CustomInput from '../../common/CustomInput/CustomInput'
import InfoSection from './InfoSection/InfoSection'

const Footer = () => {
	return (
		<div
			className='bg-gradient-to-r from-slate-500 to-slate-800 text-white 
						md:px-24 py-32'
		>
			<div
				className='flex flex-col lg:flex-row lg:items-end lg:justify-between 
							border-b border-white pb-20'
			>
				<div className='flex flex-col 2xl:w-1/5 lg:w-2/5 lg:mr-48 mb-6 lg:mb-0 mx-8 '>
					<div className='xl:text-5xl text-3xl text-center lg:text-start'>Newsletter</div>
					<CustomInput placeholder='Enter your email' className='w-full  mt-10'>
						<div className='break-words lg:text-xl text-m xl:w-36 lg:w-28 md:w-24 w-20 lg:h-14 h-12 flex justify-center items-center'>
							Subscribe
						</div>
					</CustomInput>
				</div>

				<div
					className='flex lg:flex-row flex-col lg:justify-between lg:w-4/5
								text-center lg:text-start
								space-y-8 lg:space-y-0'
				>
					<InfoSection title='Support'>
						<div>About Us</div>
						<div>Careers</div>
						<div>Blog</div>
					</InfoSection>
					<InfoSection title='Useful Links'>
						<div>Payment & Tax</div>
						<div>Terms of service</div>
						<div>Privacy Policy</div>
					</InfoSection>
					<InfoSection title='Our Menu'>
						<div>Best Product</div>
						<div>Category</div>
					</InfoSection>
					<InfoSection title='Address'>
						<div>JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</div>
						<div>hallo@daunku.com</div>
					</InfoSection>
				</div>
			</div>
			<div className='xl:text-2xl lg:text-l text-center lg:mt-28 mt-16'>
				© 2022 Daunku - All rights reserved.
			</div>
		</div>
	)
}

export default Footer
