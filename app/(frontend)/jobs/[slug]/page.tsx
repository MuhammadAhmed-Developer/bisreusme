import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { IoMdArrowBack } from "react-icons/io";

const fetchJobs = async () => {
  const jobs = await client.fetch(
    `*[_type == "jobs"]`,
    {},
    { cache: "no-cache" }
  );
  return jobs;
};

export default async function page({ params }: { params: { slug: string } }) {
  const jobs = await fetchJobs();
  const selectedjob = jobs.find((jobs: any) => jobs._id === params.slug);
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }
  const postedAtDate = new Date(selectedjob._createdAt);
  const timeDifference = formatDistanceToNow(postedAtDate, {
    addSuffix: true,
  });

  const isEmail = (str: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  };

  const applyLink = isEmail(selectedjob.howToApply)
    ? `mailto:${selectedjob.howToApply}`
    : selectedjob.howToApply;

  return (
    <div>
      <div className="text-center lg:mt-[20vh] md:mt-[18vh] mt-[14vh] lg:mx-[187px] md:mx-[90px] mx-[25px]">
        <div className="flex justify-center">
          <img
            className="w-[50%] bg-sky-light rounded-lg"
            src={urlFor(selectedjob?.mainImage).url()}
            alt={selectedjob?.mainImage?.alt}
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="lg:text-[45px] md:text-[35px] text-[25px] font-[700] mt-[42px] text-[#2D3748]">
            {selectedjob?.title}
          </h1>
          <div className="text-gray-600 ">
            <span className="font-bold">Compensation:</span>
            {selectedjob.minimumSalary} - {selectedjob.maximumSalary}
            {selectedjob.rateType}
          </div>
          <div className="text-gray-600">
            
            <span className="font-bold">PostedAt: </span>
             {timeDifference.replace("about", "")}
          </div>
          <div className="flex gap-2 items-center mt-3">
            <div className="text-gray-600 text-end bg-sky-light px-3 py-2 font-semibold rounded-full">
              {selectedjob.jobType}
            </div>
            <div className="text-gray-600 text-end bg-sky-light px-3 py-2 font-semibold rounded-full">
              {selectedjob.workPlaceType}
            </div>
          </div>
          <Link
            href={`${applyLink}`}
            target="_blank"
            className="bg-primary-blue px-10 py-3 rounded-full text-white mt-5 font-semibold"
          >
            Apply Now
          </Link>
        </div>

        <div className="flex justify-start mt-2"></div>
        <div className="mt-6 lg:text-[30px] md:text-[25px] text-[18px] font-[700] text-[#2D3748]">
          Job Requirement
        </div>
        <div className={`block-content !text-start `}>
          <PortableText value={selectedjob?.content} />
        </div>
        <div className="mb-24 mt-10  flex justify-center items-center">
          <Link
            href={"/jobs"}
            className="bg-primary-blue text-center justify-center flex items-center gap-2 text-white px-8 py-3 rounded-full !mt-5"
          >
            <IoMdArrowBack />
            Back To Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
