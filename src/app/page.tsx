import Advantages from '@/Components/Advantages';
import { Download } from '@/Components/Download';
import { FAQs } from '@/Components/FAQs';
import Features from '@/Components/Features';
import Footer from '@/Components/Footer';
import { Landing } from '@/Components/Landing';
import { Navbar } from '@/Components/Navbar';
import Testimonal from '@/Components/Testimonal';

import React from 'react';

const Home = () => {
	return (
		<div className='w-full h-full  overflow-x-hidden'>
			<Navbar />
			<Landing />
			<Features />
			<Advantages />
			<Testimonal />
			<FAQs />
			<Download />
			<Footer />
		</div>
	);
};

export default Home;
