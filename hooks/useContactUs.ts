import { useState } from 'react';
import { toast } from 'react-toastify';
import { ChangeEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactUsHook {
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  formData: ContactFormData;
  error: any; 
  buttonText: string;
  isLoading: boolean;
}

const useContactUs = (): ContactUsHook => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [buttonText, setButtonText] = useState('Send Message');
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    switch (true) {
      case !formData.name:
        toast.error('Please fill in the name field.');
        return;
    
      case !formData.email:
        toast.error('Please fill in the email field.');
        return;
    
      case !formData.message:
        toast.error('Please fill in the message field.');
        return;
    
      default:
        // Code to execute when none of the cases match
        break;
    }
    // Validate email
    if (!validateEmail(formData.email)) {
      toast.error('Invalid email address');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('https://ammadai.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      await response.json();
        toast.success("Email Send Successfully");
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error("network error")
        setError(errorData);
      }
    } catch (error) {
      setError(error);
    } finally {
      // Set loading state back to false when the request is completed
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    handleInputChange,
    handleSubmit,
    formData,
    error,
    buttonText,
    isLoading,
  };
};

export default useContactUs;
