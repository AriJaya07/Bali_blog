import React from "react";
import "./PostList.css";
import Post from "../post/Post";

const PostList = () => {
const blogPosts = [
	{
	title: "KEBAYA BALINASE",
	body: `In Bali, religious, customary and cultural activities form a lifestyle that is preserved. Including the tradition of wearing kebaya for Balinese women. The Advisory Board of the National Team for the Day of Kebaya towards Unesco is very much inspired by very strong Balinese traditions, one of which is the use of kebaya in various traditional rituals and religious ceremonies`,
	author: "TRIBUNNEWS.COM",
	imgUrl:
		"https://i.pinimg.com/originals/ac/26/91/ac26915f0a72b16095ce96a67ae3a9ef.jpg",
	},
	{
	title: "KUTA BEACH, SOUTH BALI",
	body: `This beach has a 2 km long and curved coastline, and has an exotic natural beauty with soft white sand on your feet, crashing waves, and coconut trees lining the beach. In addition, this beach is also known as the "Sunset Beach" because it has a very beautiful sunset charm. This tourist spot is also known as one of the favorite surfing spots in Bali, so many tourists surf at this beach, even Kuta Beach is often used as a place for national and international surfing competitions.`,
	author: "bali.blogspot.com",
	imgUrl:
		"https://th.bing.com/th/id/R.d7572047dc9207c88ae9ec162c44df21?rik=5S94nnoiXzwuTg&riu=http%3a%2f%2fbaliholidaystours.com%2fcms%2fwp-content%2fuploads%2f2017%2f11%2fKuta-Beach.jpg&ehk=TEm53dX3jtY9rlOvwLqsOTb4pi4W1kjyuTfMGRVwm4M%3d&risl=&pid=ImgRaw&r=0",
	},
	{
	title: "BALINESE SPICED CHICKEN",
	body: `Bahasa is a common universal language throughout Indonesia islands, however, each region may have its own dialect too. The Balinese also has its own dialect. Betutu is the Balinese term for using a whole chicken marinated in rich aromatic spices and herbs and then steamed and/or grill. Different regions in Bali also prepare betutu in slightly different way.`,
	author: "cooktoday.com",
	imgUrl:
		"https://th.bing.com/th/id/OIP.1qoxfxVfa9jyaS7jr-BU_AHaE8?pid=ImgDet&rs=1",
	},
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default PostList;
