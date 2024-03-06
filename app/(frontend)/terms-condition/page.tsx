import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/utils/urlFor";

const fetchtermsAndConditions = async () => {
  const termsAndConditions = await client.fetch(
    `*[_type == "termsAndConditions"]`,
    {},
    { cache: "no-cache" }
  );
  return termsAndConditions;
};

export default async function TermsAndConditions() {
  const TermsAndConditions = await fetchtermsAndConditions();
  if (!TermsAndConditions || TermsAndConditions.length === 0) {
    // Handle case where privacy policy data is not available
    return <div>No Privacy Policy data available</div>;
  }
  const blocks = TermsAndConditions[0].content;


  const renderChild = (child: any, childIndex: number) => {
    if (child._type === 'span') {
      // Check if 'strong' mark is present
      const isStrong = child.marks && child.marks.includes('strong');
  
      // Apply styling based on the 'strong' mark
      return (
        <span
          key={childIndex}
          style={isStrong ? { fontWeight: 'bold' } : undefined}
        >
          {child.text}
        </span>
      );
    }
    // Handle other types of children if needed
    return null;
  };
  


  return (
    <div>
      <div className="mt-[110px] lg:mx-[187px] md:mx-[90px] mx-[25px]">
        <div>
          <img
            className="w-[100%] h-full"
            src={urlFor(TermsAndConditions[0].mainImage).url()}
            alt={TermsAndConditions[0].mainImage.alt}
          />
        </div>
        <div>
          <h1 className="lg:text-[45px] md:text-[35px] text-[25px] font-[700] mt-[42px] text-[#2D3748]">
            {TermsAndConditions[0].title}
          </h1>
        </div>
        <div className="mt-[37px] text-[20px] text-[#718096] font-[400] lg:w-[95%] w-[100%]">
          {TermsAndConditions[0].description}
        </div>
        <div className="block-content mb-[98px]">
        {blocks.map((block:any, index:number) => {
              switch (block.style) {
                case 'h2':
                  return (
                    <h2
                      key={index}
                      className=" !text-[#2D3748] !text-[20px] font-bold"
                    >
                      {block.children.map(renderChild)}
                    </h2>
                  );
                default:
                  return (
                    <p
                      className=" !text-[#718096] !text-[20px] font-normal"
                      key={index}
                    >
                      {block.children.map(renderChild)}
                    </p>
                  );
              }
            })}
        </div>
      </div>
    </div>
  );
}
