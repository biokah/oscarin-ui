import Image from 'next/image'

export const LargeCard = () => {

  return (
    <div className="c_large-card rounded-xl">
        <section className="image-wrapper rounded-t-xl overflow-hidden">
          <Image
            className="object-cover"
            alt='Picture of the author'
            width={300}
            height={300}
            src='https://placekitten.com/640/360'
          />
        </section>
        <section className="title-wrapper rounded-b-xl flex justify-center items-center font-bold">
          Title
        </section>
    </div>
  );
};