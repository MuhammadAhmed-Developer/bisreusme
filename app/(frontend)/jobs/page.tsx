import { client } from "@/sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { formatDistanceToNow } from "date-fns";

const fetchJobs = async () => {
  const jobs = await client.fetch(
    `*[_type == "jobs"] | order(_updatedAt desc)`,
    {},
    { cache: "no-cache" }
  );
  return jobs;
};

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function Jobs() {
  const jobs = await fetchJobs();
  return (
    <div>
      <div className="bg-[#EAF1FC] h-auto w-full">
        <div className="px-3 sm:px-0">
          <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
            Apply on <span className=" text-[#2871DE] ">Jobs</span> {" "}
          </h1>
          <div className="text-center pt-5 pb-11 sm:px-[20px] lg:px-[170px] text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
            Explore exciting &nbsp; 
             <span className="text-black font-semibold">
              career opportunities
            </span>
            on our website job section, featuring a diverse array of job
            listings from &nbsp; 
            <span className="text-black font-semibold">
              reputable companies.
            </span>
            Whether you are seeking growth in tech, finance, or creative
            industries, our platform connects you with varied opportunities to &nbsp; 
            <span className="text-black font-semibold">
              elevate your career
            </span>
          </div>
        </div>
      </div>
      <div className="my-10  flex flex-col items-center justify-center mx-4 md:mx-8">
        <h1 className="text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
          Latest<span className=" text-[#2871DE]"> Jobs</span>{" "}
        </h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-x-10 gap-y-4 mt-3">
          {jobs?.map(async (job: any, index: number) => {
            const postedAtDate = new Date(job._createdAt);
            const timeDifference = formatDistanceToNow(postedAtDate, {
              addSuffix: true,
            })
            return (
              <div
                key={index}
                className="bg-white px-5 py-5 shadow-lg rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-50 h-12 bg-sky-light rounded-md"
                    src={urlFor(job?.mainImage).url()}
                    alt={job?.mainImage?.alt}
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">{job?.title}</h2>
                    <div className="text-gray-600 font-bold">
                      {job?.companyName}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 mt-3">
                  <div className="text-gray-600">
                    <span className="font-bold">Location:</span> {job?.location}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-bold">Compensation:</span>{" "}
                    {job?.minimumSalary} - {job?.maximumSalary} {job?.rateType}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-bold">PostedAt: </span>
                    {timeDifference?.replace("about", "")}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 flex-wrap gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="text-gray-600 text-end bg-sky-light px-3 py-2 font-semibold rounded-full">
                      {job?.jobType}
                    </div>
                    <div className="text-gray-600 text-end bg-sky-light px-3 py-2 font-semibold rounded-full">
                      {job?.workPlaceType}
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`jobs/${job._id}`}
                      className="bg-primary-blue text-white px-3 py-2 !mt-2 text-[12px] rounded-full"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
                <hr className="mt-3" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
