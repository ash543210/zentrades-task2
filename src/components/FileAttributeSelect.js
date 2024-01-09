import React, { useEffect, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FileAttributeSelect = (props) => {
  const [displayedArray, setDisplayedArray] = useState([]);
  const [displayedString, setDisplayedString] = useState("");
  const [selectPointer, setSelectPointer] = useState(-1);
  const attributes = useMemo(() => {
    return ["id", "subcategory", "title", "price", "popularity"];
  }, []);

  useEffect(() => {
    let newString = "";
    for (const element of displayedArray) {
      newString +=
        element.charAt(0).toUpperCase() + element.substring(1) + "\r\n";
    }
    setDisplayedString(newString);
    props.setSelectedAttributes(displayedArray);
  }, [displayedArray]);

  useEffect(() => {
    if (!props.isProductFileUploaded) {
      setDisplayedArray([]);
      setSelectPointer(-1);
    }
  }, [props.isProductFileUploaded]);

  useEffect(() => {
    if (selectPointer !== -1)
      setDisplayedArray((prevState) => {
        let newArray = [...prevState];
        if (!newArray.includes(attributes[selectPointer]))
          newArray.push(attributes[selectPointer]);
        return newArray;
      });
  }, [selectPointer]);

  return (
    <React.Fragment>
      <Form.Check
        className="me-4"
        inline
        label="Step 3:"
        name="step3"
        type="checkbox"
        defaultChecked
        id={`inline-checkbox-1`}
      />
      <div className="d-flex flex-column">
        <div>
          <p>Display Handling</p>
        </div>
        <div>
          <p>Select the fields to be displayed</p>
        </div>
        <div className="d-flex flex-row">
          <div className="me-2">
            <p>Available Fields</p>
            {props.isProductFileUploaded && (
              <textarea
                placeholder="Product Id&#10;Subcategory&#10;Title&#10;Price&#10;Popularity&#10;"
                rows="5"
                disabled></textarea>
            )}
            {!props.isProductFileUploaded && (
              <textarea rows="5" disabled></textarea>
            )}
          </div>
          <div className="d-flex flex-column justify-content-center">
            <Button
              variant="light border mb-2"
              onClick={() => {
                if (props.isProductFileUploaded)
                  setSelectPointer((prevState) => (prevState + 1) % 5);
              }}>
              {">>"}
            </Button>
            <Button
              onClick={() => {
                setDisplayedArray((prevState) => {
                  let newArray = [...prevState];
                  newArray.pop();
                  return newArray;
                });
              }}
              variant="light border">
              {"<<"}
            </Button>
          </div>
          <div className="ms-2">
            <p>Fields to be Displayed</p>
            <textarea rows="5" disabled value={displayedString}></textarea>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FileAttributeSelect;
