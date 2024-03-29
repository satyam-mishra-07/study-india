import React from 'react';

const Card = ({ classData }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Class {classData.userClass}</h2>
      {classData.subjects.map((subject, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
          <p className="text-gray-700 mb-2">{subject.content}</p>
          <div className="flex flex-wrap">
            {subject.resources.map((resource, idx) => (
              <div key={idx} className="mr-4 mb-2">
                <a href={resource.link} className="text-blue-600 hover:underline">
                  {resource.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;