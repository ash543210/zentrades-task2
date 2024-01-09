import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!file) {
      setFile("");
      setError("");
      props.fileUploadedHandler(false);
    } else if (!file.products) {
      setError("Upload product details file");
      props.fileUploadedHandler(false);
    } else if (file.products) {
      props.setProductData(file.products);
      setError("");
      props.fileUploadedHandler(true);
    }
  }, [file]);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setFile(jsonData);
        } catch (err) {
          setError("Not a JSON file");
        }
      };
    } else {
      setFile("");
      setError("");
    }
  };

  return (
    <React.Fragment>
      <div className="me-5">
        <p>Step 1:</p>
      </div>
      <div className="">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select File</Form.Label>
          <Form.Control
            ref={props.fileUploader}
            onChange={handleChange}
            type="file"
          />
        </Form.Group>
        <p>Supported File Types(s): .CSV, .JSON</p>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
