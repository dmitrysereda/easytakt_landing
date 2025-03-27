export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  readTime: string;
  image: string;
  content: string;
}

export interface BlogCategory {
  name: string;
  count: number;
} 