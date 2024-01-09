import React from "react";
import Form from "react-bootstrap/Form";

const FileFormat = () => {
  return (
    <React.Fragment>
      <div className="me-3">
        <p>Step 2:</p>
      </div>
      <div className="w-75 d-flex flex-column">
        <div>
          <p>Specify Format</p>
        </div>
        <Form.Group className=" d-flex flex-row justify-content-between mb-2">
          <div className="me-auto d-inline">
            <Form.Label className="me-auto">File Type</Form.Label>
          </div>
          <div className="d-inline w-50">
            <Form.Select className="ms-auto">
              <option>JSON</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className=" d-flex flex-row justify-content-between mb-2">
          <div className="me-auto d-inline">
            <Form.Label className="me-auto">Character Encoding</Form.Label>
          </div>
          <div className="d-inline w-50">
            <Form.Select className="ms-auto">
              <option>UTF-8</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className=" d-flex flex-row justify-content-between mb-2">
          <div className="me-auto d-inline">
            <Form.Label className="me-auto">Delimiter</Form.Label>
          </div>
          <div className="d-inline w-50">
            <Form.Select className="ms-auto">
              <option>comma</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className=" d-flex flex-row justify-content-between mb-2">
          <div className="me-auto d-inline">
            <Form.Label className="me-auto">Has Header</Form.Label>
          </div>
          <div className="d-inline w-50">
            <Form.Check
              inline
              name="group1"
              type="checkbox"
              defaultChecked
              id={`inline-checkbox-1`}
            />
          </div>
        </Form.Group>
      </div>
    </React.Fragment>
  );
};

export default FileFormat;
