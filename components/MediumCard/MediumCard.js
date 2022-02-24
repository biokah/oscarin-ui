import Image from 'next/image'

export const MediumCard = () => {

  return (
    <div className="c_medium-card rounded-xl flex">
        <section className="image-wrapper overflow-hidden rounded-l-xl">
          <Image
            className="object-cover"
            alt='Picture of the author'
            width={300}
            height={300}
            src='https://placekitten.com/640/360'
          />
        </section>
        <section className="title-wrapper flex flex-col justify-center items-center">
          <span className="font-bold">Name</span>
          <span>Movie</span>
        </section>
    </div>
  );
};