import Image from "next/image";
export default function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? "xl:h-[500px] h-[210px] w-full relative inline-block"
              : "hidden"
          }
        >
          <Image
            src={slide.cover}
            alt="slide"
            layout="fill"
            className="w-full h-full absolute object-cover rounded-[20px]"
          />
        </div>
      ))}
    </section>
  );
}
