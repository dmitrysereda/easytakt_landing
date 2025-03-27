'use server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  country: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      country: formData.get('country') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        error: 'Please fill in all required fields.',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        error: 'Please enter a valid email address.',
      };
    }

    // TODO: Send email using your preferred email service
    // For now, we'll just log the data
    console.log('Contact form submission:', data);

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      error: 'Something went wrong. Please try again later.',
    };
  }
} 