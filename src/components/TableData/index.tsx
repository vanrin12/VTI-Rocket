import Table from "react-bootstrap/Table";
import TableHead from "./TableHead";
import { TheadItemType } from "./TableDataTypes";
import TableRow from "./TableRow";
interface TableProps {
  thItems: Array<TheadItemType>;
  tbodyData: Array<any>;
}
const TableData = ({ thItems, tbodyData }: TableProps) => {
  return (
    <Table>
      <TableHead thItems={thItems} />
      <tbody>
        {tbodyData.map((data) => (
          <TableRow key={data.id} rowItem={data} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
