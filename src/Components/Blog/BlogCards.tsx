import Moment from "react-moment";
import Image from "next/image";
import Link from "next-translate-routes/link";
import parse from "html-react-parser";

const BlogCard = ({ data }: any) => {
  return (
    <div className="w-full my-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map(({ node }: any, index: number) => {
            const modifiedString = node?.link?.replace(
              "https://manuelm83.sg-host.com",
              ""
            );

            return (
              <Link href={`${modifiedString || "/"}`} key={index} passHref>
                <div className="bg-[#F2F2FA] rounded-lg flex self-stretch pb-8">
                  <div>
                    <div>
                      {node?.featuredImage?.node?.mediaItemUrl ? (
                        <Image
                          loading="lazy"
                          src={
                            node.featuredImage !== null
                              ? node.featuredImage.node.mediaItemUrl
                              : null
                          }
                          blurDataURL={
                            node.featuredImage !== null
                              ? node.featuredImage.node.mediaItemUrl
                              : null
                          }
                          alt={
                            node.featuredImage !== null
                              ? node.featuredImage.node.altText
                              : null
                          }
                          placeholder="blur"
                          className="w-full object-cover rounded-t-lg article-img max-h-[235px]"
                          width={400}
                          height={235}
                        />
                      ) : (
                        <div className="min-h-[235px]" />
                      )}
                    </div>
                    <h2 className="mx-5 mt-5 text-2xl text-[#4C4C4C] line-clamp-2">
                      {node.title}
                    </h2>
                    <p className="text-[17px] text-[#4C4C4C] mx-5 pt-3">
                      <Moment format="DD MMM YYYY">{node?.date}</Moment>
                    </p>

                    <div className="text-[17px] text-[#4C4C4C] mx-5 pt-3 line-clamp-5">
                      {node?.excerpt && parse(node?.excerpt)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
