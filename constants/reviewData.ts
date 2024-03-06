import GoogleReview from "@/public/assets/images/svg-Images/google-review";
export interface Review {
  profileimg: string;
  review: string;
  name: string;
  designation: string;
  logo: () => React.ReactElement
}
export const ReviewData: Review[] = [
  {
    profileimg: "/assets/images/reviewAvatar3.png",
    review:
      "I'm thrilled with the service I received. The team was responsive, professional, and went above and beyond to meet my needs. I highly recommend them to anyone looking for a great experience.",
    name: "AMMAD",
    designation: "UI DESIGNER",
    logo: GoogleReview
  },
  {
    profileimg: "/assets/images/reviewAvatar1.png",
    review:
      "This product is even better than I expected! It's easy to use, affordable, and has helped me achieve amazing results. I'm so glad I found it!",
    name: "JENICA Doe",
    designation: "SOLUTION",
    logo: GoogleReview
  },
  {
    profileimg: "/assets/images/reviewAvatar2.png",
    review:
      "This service has been a lifesaver for me. It helped me save time and money, and I'm so grateful for it. I can't recommend it enough!",
    name: "DAVID",
    designation: "DEVELOPER",
    logo: GoogleReview
  },
];

export default ReviewData;
