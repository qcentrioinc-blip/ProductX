import { ArrowRight } from "lucide-react";
import {  H4 } from "../../../styles/Typography";

 

const BlogContent = () => {
  const blogPosts = [
    {
      id: 1,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 2,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 3,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 4,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 5,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 6,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 7,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 8,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 9,
      date: '12 Oct 2025',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-6 lg:pt-10 pb-20 px-4 ">
      <div className="max-w-8xl  lg:mx-10">
       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Content Container */}
              <div className="p-6 ">
                {/* Date and Category */}
                <div className="flex  font-bricolage  justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm border-1 border-gray-700 px-4 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <H4 className="  text-gray-900   leading-tight">
                  {post.title}
                </H4>
              </div>
             <div className="flex justify-end items-start pr-4 pb-4">
  <a
    href="#"
    className="text-blue-800 font-bricolage font-medium relative group flex items-center gap-1"
  >
    <span>Read More</span>
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      <ArrowRight />
    </span>
    {/* Underline animation */}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
  </a>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;