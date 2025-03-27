export const getImagePath = (imagePath: string | undefined): string => {
  if (!imagePath) return '/images/blog/default-post.jpg';
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
}; 