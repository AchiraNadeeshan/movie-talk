import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router';
import Loader from '../../components/loader/Loader';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h1 className=' text-center text-2xl font-bold'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            All Blogs
                        </h1>
                    </div>
                    {/* Main Content  */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1  */}
                        {getAllBlog.length > 0
                            ?
                            <>
                                {getAllBlog.map((item, index) => {
                                    const { thumbnail, id, date } = item
                                    console.log(item)
                                    return (
                                        <div className="p-4 md:w-1/3" key={index}>
                                            <div
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(75, 11, 28)'
                                                        : 'white',
                                                    borderBottom: mode === 'dark'
                                                        ?
                                                        ' 4px solid rgb(226, 232, 240)'
                                                        : ' 4px solid rgb(75, 11, 28)'
                                                }}
                                                onClick={() => navigate(`/bloginfo/${id}`)}
                                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                                ${mode === 'dark'
                                                        ? 'shadow-gray-700'
                                                        : 'shadow-xl'
                                                    } 
                                                rounded-xl overflow-hidden`}
                                            >
                                                {/* Blog Thumbnail  */}
                                                <img className=" w-full" src={thumbnail} alt="blog" />

                                                {/* Top Items  */}
                                                <div className="p-6">
                                                    {/* Blog Date  */}
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(75, 11, 28)'
                                                    }}>
                                                        {date}
                                                    </h2>

                                                    {/* Blog Title  */}
                                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(75, 11, 28)'
                                                    }}>
                                                        {item.blogs.title}
                                                    </h1>

                                                    {/* Blog Description  */}
                                                    <p className="leading-relaxed mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(75, 11, 28)'
                                                    }}>
                                                        {item.blogs.category}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                {/* <h1 className='text-xl font-bold'>Not Found</h1> */}
                                <Loader />
                            </>
                        }
                    </div>
                </div>
            </section >
        </Layout >
    )
}

export default AllBlogs