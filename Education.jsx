import React from 'react';
import CustomTable from '../components/CustomTable';
import './Education.css';

const Education = () => {
  const columns = [
    { header: 'Degree', field: 'degree' },
    { header: 'Institution', field: 'institution' },
    { header: 'Year', field: 'year' },
  ];

  const data = [
    { degree: 'BS Artificial intelligence', institution: 'ITU', year: '2027' },
    { degree: 'Intermediate (Pre-Med)', institution: 'Govt College Civil Lines', year: '2023' },
    { degree: 'Matric', institution: 'CDG High School', year: '2021' },
  ];

  return (
    <div className="bg-edu">
      <h1 style={{ color: '#0f4c75', marginBottom: '20px' }}>Academic Journey</h1>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default Education;
