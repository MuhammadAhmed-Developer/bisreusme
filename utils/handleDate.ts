export default function handleInputChange(inputValue: string, type: string | undefined): string {
    let formattedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  
    if (type === "YYYY-MM") {
      if (formattedValue.length > 4) {
        formattedValue = formattedValue.slice(0, 4) + '-' + formattedValue.slice(4);
      }
    } else if (type === "MM/YYYY") {
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
    } else if (type === "YYYY") {
      const yearValue = formattedValue.slice(0, 4); // Allow only up to 4 digits
      formattedValue = yearValue.length > 0 ? `${yearValue}` : ''; // Format as "XXXX-YYYY" if there are numeric characters
    } else if(type === "text"){
      formattedValue = inputValue
    }
    return formattedValue;
  }