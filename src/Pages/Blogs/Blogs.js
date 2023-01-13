import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogsQuestionAnswer from './BlogsQuestionAnswer/BlogsQuestionAnswer';

const Blogs = () => {
    const{data:blogs=[]}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/blogs`)
            const data=await res.json()

            return data
        }
    })
    return (
        <div>
            <div className="bg-gray-800 container mx-auto">
      <div className="w-5/6 md:w-2/3 lg:w-11/12 mx-auto pb-8 pt-6">
        <div className="flex flex-col items-center pb-6">
          <h3 className="text-3xl text-white mb-3">Interview Questions</h3>
          <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
        </div>
        <div >
          {blogs.map((blog) => (
            <BlogsQuestionAnswer blog={blog}></BlogsQuestionAnswer>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blogs;