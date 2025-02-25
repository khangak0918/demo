import Post from "./post";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function DetailPost() {
    const postData = [ 
        {
          infomation: "Post 1 Title",
          image: 'https://cdn-i.vtcnews.vn/resize/th/upload/2024/11/27/14cef290ac5111ef818cb578a188498d-17121065.jpeg',
          time: '1h ago',
        },
        {
          infomation: "Post 2 Title",
          image: 'https://i.pinimg.com/originals/19/15/87/191587b38fb54a82998a55a69e78d375.png',
          time: '2h ago',
        },
        {
          infomation: "Post 3 Title",
          image: 'https://www.bing.com/th/id/OGC.ba829517376e4268a8ea8185ed3303e9?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2fgEIQ0JaiG9sAAAAC%2fheineken-back-to-the-bars.gif&ehk=7aq7mSzBRiCsUyWNnTyzlSax0UCOhGGjU5kTdY8CQJM%3d',
            time: '3h ago',
        },
        {
            infomation: "Post 4 Title",
            image: 'https://i.pinimg.com/originals/19/15/87/191587b38fb54a82998a55a69e78d375.png' ,
            time: '4h ago',
          },
    ]
  
    return (
        <div className="flex flex-wrap">  
        <Swiper
                spaceBetween={0} 
                slidesPerView={3} 
                loop={true}
        >
        {postData.map((post) => (
          <SwiperSlide key={post.id}>
            <Post post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    );
  }

export default DetailPost;