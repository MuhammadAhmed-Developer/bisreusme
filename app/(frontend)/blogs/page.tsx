import Navbar from "@/components/navbar/navbar";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "@/components/footer/footer";

const fetchBlogs = async () => {
  const blogs = await client.fetch(
    `*[_type == "blog"]`,
    {},
    { cache: "no-cache" }
  );
  return blogs;
};

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function Blogs() {
  const blogs = await fetchBlogs();
  return (
    <div>
      <div className="lg:mt-32 md:mt-32 mt-24 xl:mx-[188px] md:mx-[90px] mx-[20px]">
        <div className="text-center">
          <h1 className="lg:text-[45px] md:text-[32px] text-[28px] font-Claris-sans">
            All Articles
          </h1>
        </div>
        <div className=" px-0 lg:py-[84px] md:py-20 py-8  lg:mx-auto md:mx-auto mx-[10px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full lg:gap-[55px] gap-[30px]">
            {blogs?.slice(0, 2).map((blog: any) => (
              <Link
                href={`/blogs/${blog?.slug.current}`}
                key={blog._id}
                className="mb-8 h-full"
              >
                <div className="shadow-md border-gray-200 lg:max-w-[550px] xl:max-w-full h-full border-opacity-60 rounded-[5px] overflow-hidden">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={urlFor(blog?.mainImage).url()}
                      alt={blog?.mainImage.alt}
                    />
                  </div>
                  <div className="px-6 py-4  flex flex-col">
                    <h1 className="font-[700] text-[#2D3748] lg:text-[30px] md:text-[20px] text-[16px] ">
                      {blog?.title}
                    </h1>
                    <div className="text-ellipsis pt-[25.22px] text-[14px] font-[400] text-[#718096]">
                      {blog?.description?.split(" ").slice(0, 20).join(" ")}
                      {blog?.description?.split(" ").length > 20 && "..."}
                    </div>
                    <div className="flex justify-between items-center mt-5 text-[#718096] text-[12px] font-[400]">
                      <div>
                        {new Date(blog?.publishedAt)
                          .toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                          .replace(",", "")}
                      </div>
                      <div
                        className="text-[#2D3748] font-[700]"
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* 2nd row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[36px] mt-8">
            {blogs?.slice(2).map((blog: any) => (
              <Link
                href={`/blogs/${blog?.slug.current}`}
                key={blog._id}
                className="mb-8 h-full"
              >
                <div className="shadow-md border-gray-200 lg:max-w-[550px] h-full border-opacity-60 rounded-[5px] overflow-hidden">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={urlFor(blog?.mainImage).url()}
                      alt={blog?.mainImage.alt}
                    />
                  </div>
                  <div className="px-6 pt-[19px]  flex flex-col">
                    <h1 className="font-[700] text-[#2D3748] lg:text-[20px] md:text-[20px] text-[16px]">
                      {blog.title}
                    </h1>
                    <div className="text-ellipsis pt-[16.49px] text-[14px] font-[400] text-[#718096]">
                      {blog?.description?.split(" ").slice(0, 20).join(" ")}
                      {blog?.description?.split(" ").length > 20 && "..."}
                    </div>
                    <div className="flex justify-between items-center mt-5 text-[#718096] text-[12px] font-[400]">
                      <div>
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <div
                        className="text-[#2D3748] font-[700]"
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-[44px]">
            <Link href={`/blogs/writing-guide`} className="mb-8 h-full">
              <div className="shadow-md border-[1px]   border-gray-200 gap-8 lg:flex md:flex block lg:flex-row-reverse md:flex-row-reverse flex-col lg:w-full h-full border-opacity-60 rounded-[5px] overflow-hidden">
                <div className="relative lg:w-[50%] md:w-[50%] w-[100%]">
                  <img
                    className="object-cover object-center w-[101%] h-full"
                    src="/assets/images/who-to-write-resume.svg"
                    alt="how to write resume"
                  />
                </div>
                <div className="pt-[41px] pl-[59px] h-full flex flex-col justify-between gap-5 lg:w-[50%] md:w-[50%] w-[100%]">
                  <h1 className="font-[700] text-[#2D3748] lg:text-[20px] md:text-[20px] text-[16px] mb-2">
                    How to Write Resume
                  </h1>
                  <div className="text-ellipsis text-[14px] font-[400] text-[#718096]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </div>
                  <div className="flex justify-between items-center mt-5 text-[#718096] text-[12px] font-[400] pb-3">
                    <div>May 20th 2020</div>
                    <div
                      className="text-[#2D3748] mx-4 font-[700]"
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
