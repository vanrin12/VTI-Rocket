import { RowDataType } from "./TableDataType";

interface RowDataProps {
  rowData: Array<RowDataType>;
}

const TableRow = ({ rowData }: RowDataProps) => {
  return (
    <>
      {rowData.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
