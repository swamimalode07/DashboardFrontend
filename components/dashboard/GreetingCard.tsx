import Image from "next/image";

const GreetingCard = () => {
  return (
    <div className="relative bg-white rounded-lg p-8 mt-10 pr-40 shadow-sm overflow-visible">
      <div className="max-w-[60%]">
        <h2 className="text-lg font-medium text-[#534F5A]">
          Congratulations <span className="font-semibold">John!</span> 🎉
        </h2>

        <p className="mt-2 text-sm text-[#79767E] leading-relaxed">
          You have done 72% 😎 more sales today. Check your new raising badge in your profile.
        </p>
      </div>
      <Image
        src="/assets/dashimage.png"
        alt=""
        width={400}
        height={400}
        className="absolute bottom-0 right-4 transform "
      />

    </div>
  );
};

export default GreetingCard;
