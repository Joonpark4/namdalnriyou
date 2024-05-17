import Image from "next/image";

export const Section = ({
  image,
  title,
  text,
}: {
  image: any;
  title: string;
  text: React.ReactNode;
}) => {
  return (
    <div className="grid w-full grid-cols-2 gap-3 p-5">
      <Image src={image} alt="Pictures" />
      <div className="flex justify-center flex-col gap-5 p-3">
        <h1 className="p-1 text-3xl font-bold">{title}</h1>
        <div className="p-1 text-lg">{text}</div>
      </div>
    </div>
  );
};
