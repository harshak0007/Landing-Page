import React from 'react';

import { UiFryFeatures } from '@/app/constants';

const Features = () => {
	return (
		<div className='w-full mx-auto flex items-center justify-center gap-x-4 p-4 mt-12 flex-wrap max-w-screen-lg relative md:px-12'>
			<div className='hidden md:block illustration before:top-[2rem] before:left-[-4rem] before:size-[35rem] relative w-[500px] min-w-[400px] mt-8'>
				<img
					src='/mobile1.svg'
					className='rotate-[15deg]'
					alt=''
				/>
				<div className='blob absolute top-10 -left-24 size-[35rem]'></div>
			</div>
			<div className='w-1/3 h-full flex-1'>
				<h3 className='text-sm text-orange-600 font-medium tracking-widest md:text-lg  '>
					FEATURES
				</h3>
				<h1 className='mt-2 text-3xl md:text-5xl font-extrabold'>
					Uifry Premium
				</h1>
				<ul className='mt-8'>
					{UiFryFeatures.map(feature => (
						<li className='mt-4'>
							<h4 className='text-lg font-semibold text-black flex gap-x-2 items-center justify-start'>
								<img
									src='/bullet1.svg'
									alt=''
								/>
								{feature.heading}
							</h4>
							<p className='mt-2 text-gray-600'>{feature.content}</p>
						</li>
					))}
				</ul>
			</div>
			<div className='blob absolute size-[35rem] top-[-2rem] right-[-15rem]'></div>
		</div>
	);
};

export default Features;
