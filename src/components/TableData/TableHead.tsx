import { TheadItemType } from "./TableDataTypes";

interface TheadProps {
  thItems: Array<TheadItemType>;
}
function TableHead({ thItems }: TheadProps) {
  return (
    <thead>
      <tr>
        {thItems.map((item) => (
          <th key={item.id}>{item.name}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
