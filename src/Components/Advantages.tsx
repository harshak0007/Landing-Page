import React from 'react';
import { Bell } from 'lucide-react';

const Advantages = () => {
	return (
		<div className=' max-w-screen-lg w-full mx-auto my-24'>
			<div className='w-full mx-auto flex items-center justify-center gap-x-4 p-4 mt-12 flex-wrap max-w-screen-xl relative'>
				<div className='hidden md:block illustration before:top-[2rem] before:left-[-4rem] before:size-[35rem] relative min-w-[400px] mt-8 order-2'>
					<img
						src='/mobile2.svg'
						className='rotate-[15deg] '
						alt=''
					/>
					<div className='blob absolute top-12 -left-[35%] rotate-90 size-[35rem]'></div>
				</div>
				<div className='w-1/3 h-full flex-1 -mt-16'>
					<h3 className='text-sm text-orange-600 font-medium tracking-widest md:text-lg  '>
						ADVANTAGES
					</h3>
					<h1 className='mt-2 text-3xl md:text-5xl font-extrabold'>
						Why choose UiFry?
					</h1>
					<h4 className='flex items-center gap-x-4 text-xl md:text-2xl tracking-wider font-semibold my-4'>
						<Bell className='stroke-white bg-orange-600 p-2 size-10 rounded-full' />
						<span>Clever Notifications</span>
					</h4>
					<p className='mt-4 text-gray-600 text-balance font-medium'>
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
						In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
						et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
						sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
						suspendisse aliquam.
					</p>
				</div>
			</div>
			<div className='w-full mx-auto flex items-center justify-center gap-x-4 p-4 flex-wrap max-w-screen-xl relative mt-8'>
				<div className='hidden md:block illustration before:top-[2rem] before:left-[-4rem] before:size-[35rem] relative min-w-[400px] mt-8'>
					<img
						src='/mobile1.svg'
						className='rotate-[15deg]'
						alt=''
					/>
					<div className='blob absolute top-[5%] left-[50%] size-[40rem]'></div>
				</div>
				<div className='w-1/3 h-full flex-1 -mt-16'>
					<h4 className='flex items-center gap-x-4 text-xl md:text-2xl tracking-wider font-semibold my-4'>
						<Bell className='stroke-white bg-orange-600 p-2 size-10 rounded-full' />
						<span>Fully Customizable</span>
					</h4>
					<p className='mt-4 text-gray-600 text-balance font-medium'>
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
						In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
						et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
						sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
						suspendisse aliquam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
