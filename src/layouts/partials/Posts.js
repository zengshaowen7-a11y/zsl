import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  return (
    <div className="jw-blog-list">
      <article className="jw-blog-featured">
        <div className="jw-blog-featured-grid">
          <div className="jw-blog-featured-media">
            {posts[0].frontmatter.image && (
              <Image
                className="h-auto w-full rounded-lg"
                src={posts[0].frontmatter.image}
                alt={posts[0].frontmatter.title}
                width={540}
                height={227}
                priority={true}
              />
            )}
          </div>
          <div className="jw-blog-featured-copy">
            <span>SOURCING & FULFILLMENT GUIDE</span>
            <h2>
              <Link
                href={`/${blog_folder}/${posts[0].slug}`}
                className="block hover:text-primary"
              >
                {posts[0].frontmatter.title}
              </Link>
            </h2>
            <p className="text-text">
              {plainify(
                posts[0].content?.slice(0, Number(summary_length)),
                "div"
              )}
            </p>
            <Link
              className="ff-btn ff-btn-primary"
              href={`/${blog_folder}/${posts[0].slug}`}
              rel=""
            >
              Read guide
            </Link>
          </div>
        </div>
      </article>
      <div className="jw-blog-grid">{posts.slice(1).map((post, i) => (
        <article key={`key-${i}`} className="jw-blog-card">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <div className="jw-blog-card-copy"><span>JW INSIGHTS</span><h2>
            <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-text">{post.frontmatter.desc}</p>
          <Link
            className="jw-blog-link"
            href={`/${blog_folder}/${post.slug}`}
            rel=""
          >
            Read guide
          </Link></div>
        </article>
      ))}</div>
    </div>
  );
};

export default Posts;
