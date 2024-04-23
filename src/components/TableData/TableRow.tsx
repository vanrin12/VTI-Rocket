import Button from "react-bootstrap/Button";

interface tableRowProps {
  rowItem: Record<string, any>;
}

function TableRow({ rowItem }: tableRowProps) {
  const renderTd = () => {
    return Object.keys(rowItem).map((item) => (
      <td key={item}>{rowItem[item]}</td>
    ));
  };
  return (
    <tr>
      {renderTd()}
      <td>
        <Button variant="warning">Edit</Button>
      </td>
      <td>
        <Button variant="warning">Delete</Button>
      </td>
    </tr>
  );
}

export default TableRow;
