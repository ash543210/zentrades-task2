import React, { useRef, useState } from "react";
import styles from "./App.module.css";
import FileFormat from "./components/FileFormat";
import FileAttributeSelect from "./components/FileAttributeSelect";
import FileUpload from "./components/FileUpload";
import Button from "react-bootstrap/Button";
import TableData from "./components/TableData";

function App() {
  const [isProductFileUploaded, setIsProductFileUploaded] = useState(false);
  const [productData, setProductdata] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const fileUploader = useRef();
  return (
    <div className="d-flex flex-column mt-5 px-4 justify-content-between">
      <div>
        <p>Import Products</p>
      </div>
      <div className="d-flex flex-row w-100 justify-content-between mb-3">
        <div
          className={"d-flex flex-row rounded-1 ps-4 pt-4" + " " + styles.form}>
          <FileUpload
            fileUploader={fileUploader}
            setProductData={setProductdata}
            fileUploadedHandler={(truth) => {
              setIsProductFileUploaded(truth);
            }}
            isProductFileUploaded={isProductFileUploaded}
          />
        </div>
        <div
          className={"d-flex flex-row rounded-1 ps-4 pt-4" + " " + styles.form}>
          <FileFormat />
        </div>
      </div>
      <div
        className={
          "d-flex flex-row w-100 rounded-1 ps-4 pt-4 mb-3" + " " + styles.form3
        }>
        <FileAttributeSelect
          setSelectedAttributes={setSelectedAttributes}
          isProductFileUploaded={isProductFileUploaded}
        />
      </div>
      <div className="d-flex flex-row justify-content-end">
        <div>
          <Button onClick={() => setShowTable(true)} variant="success me-3">
            Next
          </Button>
          <Button
            onClick={() => {
              setShowTable(false);
            }}
            variant="light"
            className="text-danger">
            Cancel
          </Button>
        </div>
      </div>
      {isProductFileUploaded &&
        showTable &&
        productData &&
        selectedAttributes.length && (
          <TableData
            selectedAttributes={selectedAttributes}
            productData={productData}
          />
        )}
      {showTable && selectedAttributes.length === 0 && (
        <p>Select Fields to disply</p>
      )}
    </div>
  );
}

export default App;
