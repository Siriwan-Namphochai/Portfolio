// src/components/Team.jsx
import React, { useState, useEffect } from 'react';

const Team = () => {
  const [testCases, setTestCases] = useState([]);
  
  const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbzTxNa6yf8nSFSBptLubYIPi0Kl-Vi19LaAwlcllNAxg22iWlGRrEaznTIKb3nGkw2k/exec';

  useEffect(() => {
    fetch(googleAppsScriptUrl)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(testCase => 
          testCase['Test case ID'] !== '' && testCase['Test case ID'] !== undefined
        );
        setTestCases(filteredData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
        Test Plan Example
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test case ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Function
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Desc
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                P/N
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data Test
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Step
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expected Result
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testCases.map((testCase, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {testCase['Test case ID']}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {testCase['Section']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['Function']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['Desc']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['P/N']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['Data Test']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['Test Step']}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {testCase['Expected Result']}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;