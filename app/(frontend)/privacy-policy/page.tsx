import { NextPage } from 'next';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';


const fetchPrivacyPolicy = async ()=> {
  const privacyPolicy = await client.fetch(
    `*[_type == "privacyPolicy"]`,
    {},
    { cache: 'no-cache' }
  );
  return privacyPolicy;
};

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const PrivacyPolicy: NextPage = () => {
  const fetchAndRenderPrivacyPolicy = async () => {
    const privacyPolicy = await fetchPrivacyPolicy();

    if (!privacyPolicy || privacyPolicy.length === 0) {
      // Handle case where privacy policy data is not available
      return <div>No Privacy Policy data available</div>;
    }

    const blocks = privacyPolicy[0].content;


    const renderChild = (child:any, childIndex: number) => {
      if (child._type === 'span') {
        // Handle spans or inline styles if needed
        return <span key={childIndex}>{child.text}</span>;
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
              src={urlFor(privacyPolicy[0].mainImage).url()}
              alt={privacyPolicy[0].mainImage.alt}
            />
          </div>
          <div>
            <h1 className="lg:text-[45px] md:text-[35px] text-[25px] font-[700] mt-[42px] text-[#2D3748]">
              {privacyPolicy[0].title}
            </h1>
          </div>
          <div className="mt-[37px] text-[20px] text-[#718096] font-[400] lg:w-[95%] w-[100%]">
            {privacyPolicy[0].description}
          </div>
          <div className="block-content mb-[98px]">
            {blocks.map((block:any, index:number) => {
              switch (block.style) {
                case 'h2':
                  return (
                    <h2
                      key={index}
                      className=" !text-[#2D3748] !text-[20px] font-normal"
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
  };

  return fetchAndRenderPrivacyPolicy();
};

export default PrivacyPolicy;
