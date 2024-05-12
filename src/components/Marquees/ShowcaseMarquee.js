// "use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const ShowcaseMarquee = () => {
  const imageUrls = [];

  for (let i = 1; i <= 40; i++) {
    imageUrls.push(`/screenshots/tool_ (${i}).webp`);
  }

  const chunkArray = (array, size) => {
    const chunkedArray = [];

    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }

    return chunkedArray;
  };

  const chunkedImages = chunkArray(imageUrls, 10);

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        {chunkedImages.map((group, index) => (
          <Marquee
            key={index}
            direction={index % 2 == 1 ? `right` : `left`}
            speed={30}
            autoFill
            gradient
            gradientColor="#000"
            gradientWidth={70}
            loop="infinite"
          >
            <div className="w-full flex gap-3" key={index}>
              {group.map((imageUrl, i) => (
                <div
                  className="w-[150px] md:w-[220px] aspect-[3/2] overflow-hidden rounded-md mx-3"
                  key={i}
                >
                  <Image
                    src={imageUrl}
                    height={1000}
                    width={1000}
                    alt={imageUrl}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        ))}
      </div>
    </>
  );
};

export default ShowcaseMarquee;
