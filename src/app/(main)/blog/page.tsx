import { redirect } from 'next/navigation';
import { getLatestPost } from '@/app/services/posts.service';

export default async function BlogRedirectPage() {
  const latestPost = await getLatestPost();

  if (!latestPost) {
    redirect('/');
  }

  redirect(`/blog/${latestPost.id}`);
  
  return null;
}