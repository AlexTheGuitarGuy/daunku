import CustomInput from '../../common/CustomInput/CustomInput'
import InfoSection from './InfoSection/InfoSection'

const Footer = () => {
	return (
		<div
			className='bg-gradient-to-r from-slate-500 to-slate-800 text-white 
						px-24 py-32'
		>
			<div
				className='flex flex-col lg:flex-row lg:items-end lg:justify-between 
							border-b border-white pb-20'
			>
				<div className='flex flex-col lg:w-1/5 lg:mr-48 mb-6 lg:mb-0'>
					<div className='lg:text-5xl text-3xl text-center lg:text-beginning'>Newsletter</div>
					<CustomInput placeholder='Enter your email' className='w-full mt-10'>
						<div className='lg:text-xl lg:w-36 lg:h-14 w-24 h-12 flex justify-center items-center'>
							Subscribe
						</div>
					</CustomInput>
				</div>

				<div
					className='flex lg:flex-row flex-col lg:justify-between lg:w-3/5
								text-center lg:text-beginning
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
			<div className='lg:text-2xl text-center lg:mt-28 mt-16'>
				© 2022 Daunku - All rights reserved.
			</div>
		</div>
	)
}

export default Footer
