import React from 'react';

const Testimonal = () => {
	return (
		<div className='relative w-full flex flex-col items-center justify-center md:px-12 mt-16'>
			<h3 className='uppercase text-md md:text-lg text-black tracking-widest font-medium'>
				Testimonial
			</h3>
			<h1 className='text-3xl md:text-5xl text-balance font-extrabold break-all capitalize text-center'>
				what our users
				<br />
				Say About Us?
			</h1>
			<div className=' mx-auto flex flex-col md:flex-row items-center justify-center gap-x-4 max-w-screen-lg'>
				<div className='relative w-full md:w-2/3 lg:w-1/2 flex items-center justify-center'>
					<img
						className='hidden md:block size-full max-w-[720px]'
						src='users.svg'
					/>
					<div className='blob absolute top-8 left-4 size-[35rem] rotate-90'></div>
				</div>
				<div className=' flex flex-col  items-start  w-full md:w-1/3 px-4'>
					<h4 className='flex items-start justify-start gap-x-4 text-2xl tracking-wider font-semibold my-4 capitalize'>
						The best financial accounting app ever
					</h4>
					<p className='mt-4 text-sm text-gray-600 text-balance'>
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
						In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
						et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
						sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
						suspendisse aliquam.
					</p>
					<img
						className='my-4'
						src='users-avatars.svg'></img>
					<h3 className='font-bold text-lg'>Nick Jonas</h3>
				</div>
			</div>
		</div>
	);
};

export default Testimonal;
