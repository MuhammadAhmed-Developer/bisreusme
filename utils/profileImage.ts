import { updateImage } from "@/redux/slices/resume.slice";

// imageUtils.ts
export const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: any
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        dispatch(updateImage(result));
      };
      reader.readAsDataURL(file);
    }
  };
  