
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import {getImageDimensions} from '@sanity/asset-utils'
import Btn from "@/components/btn/btn";
import Link from "next/link";

const fetchBlogs = async () => {
  const blogs = await client.fetch(
    `*[_type == "blog"]`,
    {},
    { cache: "no-cache" }
  );
  return blogs;
};

const fetchLatestBlogs = async () => {
  const latestBlogs = await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) [0...4]`,
    {},
    { cache: "no-cache" }
  );
  return latestBlogs;
};

const fetchAuthor = async (authorId: string) => {
  const author = await client.fetch(
    `*[_type == "author" && _id == $authorId]`,
    { authorId },
    { cache: "no-cache" }
  );
  return author[0];
};

export default async function page({ params }: { params: { slug: string } }) {
  const blogs = await fetchBlogs();
  const latestBlogs = await fetchLatestBlogs();
  let authorName = "";
  for (const blog of blogs) {
    const authorReference = blog.author._ref;
    const author = await fetchAuthor(authorReference);
    if (blog.slug.current === params.slug) {
      authorName = author.name || "";
      break;
    }
  }
  const selectedBlog = blogs.find(
    (blog: any) => blog.slug.current === params.slug
  );

  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }
  const SampleImageComponent = ( {value, isInline}:any) => {
    const {width, height} = getImageDimensions (value)
    return (
      <div className="!flex !justify-center  p-5 items-center">
        <img
          src= {imageUrlBuilder (client)
            .image (value)
            .width (isInline ? 100 : 800)
            .fit ('max')
            .auto ('format')
            .url ()}
          alt= {value.alt || ' '}
          loading="lazy"
          style= { {
            display: isInline ? 'inline-block' : 'block',
            aspectRatio: width / height,
            width:'100%'
          }}
        />
      </div>
    )
  }

  const components = {
    types: {
      image: SampleImageComponent,
    },
  }

  return (
    
    <div>
      <div className="lg:mt-[25vh] md:mt-[18vh] mt-[8vh] lg:mx-[187px] md:mx-[90px] mx-[25px]">
        <div >
          <img
            className="w-[100%] h-full"
            src={urlFor(selectedBlog?.mainImage).url()}
            alt={selectedBlog?.mainImage.alt}
          />
        </div>
        <div>
          <h1 className="lg:text-[45px] md:text-[35px] text-[25px] font-[700] mt-[42px] text-[#2D3748]">
            {selectedBlog?.title}
          </h1>
        </div>
        <div className="text-[#718096] text-[18px] font-[400] flex gap-5 items-center">
          <div className="font-[700] text-[18px] text-[#2D3748]  ">
            Written by {authorName}
          </div>
          {new Date(selectedBlog?.publishedAt)
            .toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
        </div>
        <div className="mt-[37px] text-[20px] text-[#718096] font-[400] lg:w-[95%] w-[100%]">
          {selectedBlog?.description}
        </div>
        <div className={`block-content`} >
          <PortableText value= {selectedBlog?.content} components= {components} />
        </div>
      </div>
      <div className="flex justify-center mt-[87px] mb-[65px]">
        <Link href={"/cover-letter"}>
        <Btn title="Create Cover Letter"/>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[36px] mb-[104px]  lg:mx-[187px] md:mx-[90px] mx-[25px]">
            {latestBlogs?.map((blog: any) => (
              blog?.slug.current !== selectedBlog?.slug.current && (
              <Link
                href={`/blogs/${blog?.slug.current}`}
                key={blog._id}
                className={`mb-8 h-full ${blog?.slug.current === selectedBlog?.slug.current ? 'hidden' : ''}`}
              >
                <div className="shadow-md border-gray-200 lg:max-w-[550px] h-full border-opacity-60 rounded-[5px] overflow-hidden">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={urlFor(blog?.mainImage).url()}
                      alt={blog?.mainImage.alt}
                    />
                  </div>
                  <div className="px-6 pt-[19px] h-[300px] justify-between flex flex-col">
                    <h1 className="font-[700] text-[#2D3748] lg:text-[20px] md:text-[20px] text-[16px] mb-2">
                      {blog.title}
                    </h1>
                    <div className="text-ellipsis text-[14px] font-[400] text-[#718096]">
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
            )))}
          </div>

    </div>
    
  );
}

