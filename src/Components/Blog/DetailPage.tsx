import Image from "next/image";
import Moment from "react-moment";

const DetailPage = ({ postDate, postTitle, headerImage, authorName }: any) => {
  return (
    <div>
      <div className="relative pt-20">
        {headerImage && (
          <div>
            <Image
              loading="lazy"
              src={headerImage}
              alt="Blog"
              className="object-cover w-full max-h-[70vh]"
              width={1000}
              height={700}
            />
          </div>
        )}
        <div className="overlay">
          <div className="container relative pt-10">
            <h1 className="my-10 text-2xl md:text-4xl font-semibold text-gray-800 ">
              {postTitle}
            </h1>
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-center flex-row">
                <div>
                  {/* <Image
                    loading="lazy"
                    src={"/avatar.png"}
                    alt={""}
                    className="rounded-full"
                    width={80}
                    height={80}
                  /> */}
                </div>
                <div>
                  <div className="flex flex-col self-center pl-4">
                    {/* <p className="text-base font-semibold text-gray-800 capitalize">
                      {authorName ?? "Rafiky"}
                    </p> */}
                    {/* {postDate && (
                      <p className="text-sm font-normal text-gray-400">
                        <Moment format="DD MMM YYYY">{postDate}</Moment>
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
