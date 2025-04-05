export interface Translation {
  common: {
    language: string;
    loading: string;
  };
  navigation: {
    solutions: string;
    features: string;
    pricing: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    subtitle: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  solutions: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    price: {
      amount: string;
      period: string;
      description: string;
    };
    cta: {
      primary: string;
      secondary: string;
    };
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        metric: string;
        emphasis: string;
      }>;
    };
    faq: {
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    finalCta: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    copyright: string;
    links: Array<{
      title: string;
      items: Array<{
        text: string;
        href: string;
      }>;
    }>;
  };
} 