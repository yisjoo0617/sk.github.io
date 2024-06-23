import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map((blog) => (
          <Link
            href={`/posts/${blog.slug}`}
            key={blog.slug}
            className="flex py-5 items-start justify-between gap-2"
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="font-bold text-lg break-all line-clamp-2">
                {blog.title}
              </span>
              <span className="break-all">{blog.description}</span>
              <time className="text-xs text-gray-500 mt-1">{blog.date}</time>
            </div>
            <Image
              width={150}
              height={150}
              src={blog.thumbnailUrl}
              alt={blog.title}
              className="object-cover w-32 h-24 rounded"
            />
          </Link>
        ))}
    </div>
  );
}
