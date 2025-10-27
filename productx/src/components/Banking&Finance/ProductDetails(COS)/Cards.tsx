import React from 'react';
import { H2, P } from '../../../styles/Typography';

interface ColumnData {
  heading: string;
  text: string;
}

interface InfoColumnsProps {
  columns?: ColumnData[]; // optional now
}

// Default data if no props are passed
const defaultColumns: ColumnData[] = [
  {
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolore magna aliqua."
  },
  {
    heading: "Dolor sit amet",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    heading: "Consectetur",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

const InfoColumns: React.FC<InfoColumnsProps> = ({ columns = defaultColumns }) => (
  <div className="bg-gray-200 w-full py-20">
    <div className="w-full mx-auto px-1 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
      {columns.map((col, idx) => (
        <div key={idx} className="flex-1 max-w-xs text-center mx-auto">
          <H2 className="mb-4">{col.heading}</H2>
          <P className="text-gray-600 text-base">{col.text}</P>
        </div>
      ))}
    </div>
  </div>
);

export default InfoColumns;

