import Image from "next/image";

const CommunitySection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 py-8">
      {/* Text Content */}
      <div className="flex flex-col items-start gap-6 w-full md:w-1/2 order-1 md:order-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">
          You're Not Alone
        </h2>
        <p className="text-xl font-normal text-[var(--color-foreground)] leading-relaxed max-w-md">
          Become part of a supportive engineering community. Ask questions,
          share progress, and grow with others who are on the same journey.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-[var(--color-primary)] text-xl font-normal hover:text-[#2a4b8c]"
        >
          Join the DevHeads IoT Community
          <div className="flex gap-2">
            <div className="w-1.5 h-3 border-2 border-[var(--color-primary)]" />
            <div className="w-3 h-0.5 border-2 border-[var(--color-primary)]" />
          </div>
        </a>
      </div>

      {/* Image Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 order-2 md:order-1">
        <div className="relative w-full aspect-[212/206] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Image1.png"
            alt="Community Image 1"
            width={212}
            height={206}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative w-full aspect-[212/255] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Image2.png"
            alt="Community Image 2"
            width={212}
            height={255}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative w-full aspect-[212/255] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Image3.png"
            alt="Community Image 3"
            width={212}
            height={255}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative w-full aspect-[212/206] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Image4.png"
            alt="Community Image 4"
            width={212}
            height={206}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
