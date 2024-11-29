import React from 'react';

interface ICardProps {
  data: {
    image?: string;
    tags: string[];
    title: string;
    description: string;
    liverUrl?: string;
  };
}
const Card = ({ data }: ICardProps) => {
  return (
    <div className="flex flex-col border border-gray">
      <img src={data.image} alt="" />
      <p className="p-1 text-base font-normal text-gray">
        {data.tags.join(' ')}
      </p>
      <div className="flex flex-col gap-2 border border-gray p-2">
        <p className="text-2xl font-medium text-white">{data.title}</p>
        <p className="text-base font-normal text-gray">{data.description} </p>
        <div className="flex items-center gap-4">
          <button className="border border-primary px-4 text-base font-medium">
            Live
          </button>
          <button className="border border-gray px-4 text-base font-medium text-gray">
            Cached
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
