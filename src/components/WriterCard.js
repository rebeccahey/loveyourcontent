import React from 'react';
import Card from './Card';

const WriterCard = ({ writer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{writer.title}</p>
    <p className="mt-6">{writer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={writer.writerImage}
        alt={writer.writerName}
      />
      <div>
        <p>{writer.writerName}</p>
        <p className="text-sm text-gray-600">{writer.writerTitle}</p>
      </div>
    </div>
  </Card>
);

export default WriterCard;
