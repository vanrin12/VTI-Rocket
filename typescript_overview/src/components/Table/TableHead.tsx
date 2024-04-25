import TableData from "./TableData";
import { HeadDataType } from "./TableDataType";

interface TableHeadProps {
  tableData: Array<HeadDataType>;
}

const TableHead = ({ tableData }: TableHeadProps) => {
  const tableHeaders = tableData.map((header) => (
    <th key={header.id}>{header.fieldName}</th>
  ));
  return (
    <>
      <tr>{tableHeaders}</tr>
    </>
  );
};

export default TableHead;
