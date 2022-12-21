import React from 'react';

const Feature = () => {
    return (
 <div className='my-20'>
	       <section className="p-4 lg:p-8 rounded-xl bg-gray-100 text-gray-800">
		   <h3 className='text-4xl font-bold text-center my-5'>POPULAR TOURIST PLACE</h3>
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">Tourist place in the Cox's bazar beach</h3>
				<p className="my-6 text-gray-600">With a long unbroken beach and a small port, Cox's Bazar is a popular tourist resort, connected by road, rail, and air with Chittagong. Major industries in addition to tourism include fish processing, salt production, ice making, printing, and the milling of rice, flour, and wood.</p>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://www.daily-sun.com/assets/news_images/2016/06/27/Daily-Sun-Magazine-18.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold"> Tourist Place in Bandarban</h3>
				<p className="my-6 text-gray-600">Bandarban is the pious hub of Theravada Buddhism practiced by tribal communities like Marma or Mogh. Here you will find Buddha Dhatu Jadi, the largest</p>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/6388152_sajek-valley-Bangladesh.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">Sajek valley in the Famous place in Tourist </h3>
				<p className="my-6 text-gray-600">Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable.</p>
				
			</div>
		</div>
	</div>
</section>

 </div>
    );
};

export default Feature;