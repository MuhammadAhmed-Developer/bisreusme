import { client } from "@/sanity/lib/client";
import { urlFor } from "@/utils/urlFor";
import imageUrlBuilder from "@sanity/image-url";

const fetchStories = async () => {
  const stories = await client.fetch(
    `*[_type == "userSuccess"]`,
    {},
    { cache: "no-cache" }
  );
  return stories;
};



export default async function SuccessStories() {
  const stories = await fetchStories();
  return (
    <div>
      <div className="mt-[18vh]">
        <div className="text-center">
          <h1 className="text-medium-blue xl:text-[55px] lg:text-[45px] md:text-[38px] text-[30px] font-Claris-sans">
            Customer <span className="text-primary-blue">success</span> is our    <span className="text-primary-blue">success</span>
          </h1>

          <div className="lg:mx-[80px] md:mx-[40px] mx-[20px] mb-12 xl:mb-[118px] ">
            {stories.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`lg:flex md:flex flex lg:flex-row md:flex-row flex-col ${
                    index % 2 == 0 && "lg:flex-row-reverse md:flex-row-reverse"
                  } lg:justify-between md:justify-between items-center md:items-start justify-center mt-[30px] md:mt-[69px] sm:gap-12  lg:gap-[100px] xl:gap-[230px]`}
                >
                  <div className="relative lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%] lg:my-0 md:my-0 my-7 ">
                    <img
                      className="object-cover object-center w-full h-fit"
                      src={urlFor(item.mainImage).url()}
                      alt={item.mainImage.alt}
                    />
                  </div>
                  <div className="lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%]">
                    <h1 className="lg:text-[36px] md:text-[26px]  text-[20px] font-[700] text-[#2D3748] text-start">
                      {item.userName}
                    </h1>
                    <p className="text-start  text-[#718096]   lg:text-[20px] md:text-[16px] text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
