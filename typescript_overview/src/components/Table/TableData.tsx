import { HeadDataType, RowDataType } from "./TableDataType";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Table from "react-bootstrap/Table";

interface TableDataProps {
  tableData: Array<HeadDataType>;
  rowData: Array<RowDataType>;
}

const TableData = ({ tableData, rowData }: TableDataProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <TableHead tableData={tableData} />
      </thead>
      <tbody>
        <TableRow rowData={rowData} />
      </tbody>
    </Table>
  );
};

export default TableData;
