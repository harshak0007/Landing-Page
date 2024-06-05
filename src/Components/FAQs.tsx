'use client';
import React, { useState, useEffect } from 'react';
export function FAQs() {
	const [viewportWidth, setViewportWidth] = useState(800);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const array = viewportWidth <= 760 ? [0, 2, 4] : [0, 3, 4];
	return (
		<section className='mx-auto p-2 md:px-12 mt-16'>
			<div>
				<div className='mx-auto max-w-5xl '>
					<h3 className='text-sm text-orange-600 font-medium tracking-widest md:text-lg  '>
						FAQ
					</h3>
					<h2 className='text-2xl md:text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-3xl'>
						Frequently Asked <br />
						Questions
					</h2>
				</div>
				<div className='mx-auto max-w-screen-lg mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2'>
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className={`p-4 rounded-lg ${
								array.includes(i) ? 'bg-[#FF5555]' : ''
							}`}>
							<h2
								className={`text-xl md:text-2xl capitalize font-semibold ${
									array.includes(i) ? 'text-white' : 'text-black'
								}`}>
								the best financial accounting app ever!
							</h2>
							<p
								className={`mt-2 ${
									array.includes(i) ? 'text-white' : 'text-gray-500'
								} leading-6 tracking-wide text-md md:text-base `}>
								“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
								ultricies. In ultrices malesuada elit mauris.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
