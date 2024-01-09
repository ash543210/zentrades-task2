import Table from "react-bootstrap/Table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TablePage from "./TablePage";

const TableData = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(props.productData);
    let newArray = [];
    for (const id in props.productData) {
      let newArrayElement = {};
      for (const element of props.selectedAttributes) {
        if (element !== "id")
          newArrayElement[element] = props.productData[id][element];
      }
      if (props.selectedAttributes.includes("id")) newArrayElement["id"] = id;
      newArray.push(newArrayElement);
    }
    newArray.sort((a, b) => {
      if (a.popularity - b.popularity > 0) return -1;
      else if (a.popularity - b.popularity < 0) return 1;
      else return 0;
    });
    setData(newArray);
  }, [props.selectedAttributes]);

  const updateTableData = useCallback(
    (newPage) => {
      setPage(newPage);
    },
    [setPage]
  );

  return (
    <React.Fragment>
      {data.length > 0 && (
        <div className="d-inline w-75 mt-4">
          <Table striped bordered hover responsive className="border">
            <thead>
              <tr>
                <th>Product Rank</th>
                {props.selectedAttributes.map((col, id) => (
                  <th key={id}>
                    {col.charAt(0).toUpperCase() + col.substring(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {new Array(6).fill(0).map((_, id) => {
                const rowId = (page - 1) * 6 + id;
                if (rowId < data.length)
                  return (
                    <tr key={id}>
                      <td>{(page - 1) * 6 + id + 1}</td>
                      {props.selectedAttributes.map((col, id) => (
                        <td key={id}>{data[rowId][col]}</td>
                      ))}
                    </tr>
                  );
              })}
            </tbody>
          </Table>
          <TablePage
            dataPerPage={6}
            pagesPerWindow={6}
            dataSize={data.length}
            setPage={updateTableData}
          />
        </div>
      )}
      {!data.length && <h2 className="ms-2 mt-2">No data</h2>}
    </React.Fragment>
  );
};

export default TableData;
