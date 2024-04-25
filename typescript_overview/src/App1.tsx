import React, { useState } from "react";
import TableData from "./components/Table/TableData";
import { useEffect } from "react";
import { getAPI } from "./helpers/Api";

const App1 = () => {
  const [productList, setProductList] = useState([]);

  const tableHeadItems = [
    { id: 1, fieldName: "id" },
    { id: 2, fieldName: "title" },
    { id: 3, fieldName: "price" },
    { id: 4, fieldName: "category" },
    { id: 5, fieldName: "description" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAPI("products"); // Specify Product[] type for data
        if (response.status == 200) {
          console.log(response.data);
          setProductList(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <TableData tableData={tableHeadItems} rowData={productList} />
    </div>
  );
};

export default App1;
