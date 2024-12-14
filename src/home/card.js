import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function UserCard(){

 

    const [following, setFollowing] = useState([]);

    const [isPostLoading, setIsPostLoading] = useState(true);

    const [isFollowingLoading, setIsFollowingLoading] = useState(true);


    const [posts, setPosts] = useState([]);


   // Fetch Posts
const fetchPosts = async () => {
    setIsPostLoading(true); // Start loading
    try {
        const response = await fetch('http://localhost:4000/api/v1/posts/', {
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data.data || []); // Ensure posts is always an array
    } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Fallback to empty array in case of error
    } finally {
        setIsPostLoading(false); // Stop loading regardless of success or error
    }
};

// Fetch Following
const fetchFollowing = async () => {
    setIsFollowingLoading(true); // Start loading
    try {
        const response = await fetch('http://localhost:4000/api/v1/users/following', {
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFollowing(data.following?.following || []); // Ensure following is always an array
    } catch (error) {
        console.error('Error fetching following:', error);
        setFollowing([]); // Fallback to empty array in case of error
    } finally {
        setIsFollowingLoading(false); // Stop loading regardless of success or error
    }
};

// UseEffect for Initial Fetch
useEffect(() => {
    // Fetch posts and following in parallel
    const fetchData = async () => {
        await Promise.all([fetchPosts(), fetchFollowing()]);
    };

    fetchData();
}, []); 



    console.log('I am posts array', posts);
    console.log('I am following array', following);


    return(
        <>
            <div className="userDetails userCard">
                <div className="userHeader">
                   
                    <div className="user_name">
                    {isFollowingLoading ? 
                        (
                         <p>Loading...</p>
                        ) : 
                        following.length > 0 ? 
                            (
                                following.map((el) => (
                                    <div className="profilePicture mainPicture" key={el._id}>
                                    <img src={`http://localhost:4000/${el.picture}`} alt="Profile" />
                                    <span>{el.username}</span>
                                    </div>
                                ))
                            ) : 
                            (
                                <p>Nothing to show!</p>
                            )
                    }   
                    </div>

                    <div></div>
                    <div className="threeDots">
                        <span>...</span>
                    </div>
                </div>
               

                <div className="mainContent">
                    <div className="videoSpace">
                        {isPostLoading ? (
                            <p>Loading posts.....</p>
                        ) : posts.length > 0 ? (
                            <div className="post">
                                <Swiper
                                    className="swiper-container"
                                    spaceBetween={20} // Space between slides
                                    slidesPerView={1} // One slide visible at a time
                                    navigation // Enables next/prev navigation
                                    pagination={{ clickable: true }} // Enables pagination dots
                                    loop // Enables infinite scrolling
                                >
                                    {posts.map((post) =>
                                        post.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    className="userPost"
                                                    src={`http://localhost:4000/${image.replace('public/', '')}`}
                                                    alt={`Post ${index + 1}`}
                                                />
                                            </SwiperSlide>
                                        ))
                                    )}
                                </Swiper>
                            </div>
                        ) : (
                            <p>No posts available</p>
                        )}


                    </div>
                    
                </div>


                    
            </div>
        </>
    )
}