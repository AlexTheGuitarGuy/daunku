import CustomInput from '../../common/CustomInput/CustomInput'
import InfoSection from './InfoSection/InfoSection'

const Footer = () => {
	return (
		<div
			className='bg-gradient-to-r from-slate-500 to-slate-800 text-white 
						px-24 py-32'
		>
			<div
				className='flex items-end justify-between 
							border-b border-white pb-20'
			>
				<div className='flex flex-col w-1/5 mr-48 '>
					<div className='text-5xl'>Newsletter</div>
					<CustomInput placeholder='Enter your email' className='w-full mt-10'>
						<div className='text-xl w-36 h-14 flex justify-center items-center'>Subscribe</div>
					</CustomInput>
				</div>

				<div className='flex justify-between w-3/5'>
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
			<div className='text-2xl text-center mt-28'>© 2022 Daunku - All rights reserved.</div>
		</div>
	)
}

export default Footer
