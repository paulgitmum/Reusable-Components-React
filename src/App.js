import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const addHandle = () => {
    alert("Add button clicked");
  };
  const updateHandle = () => {
    alert("Update button clicked");
  };
  const deleteHandle = () => {
    alert("Delete button clicked");
  };
  return (
    <div className="App">
      <h1>Reusable button</h1>
      <Button
        size="16px"
        height="50px"
        width="160px"
        children="Add Product"
        color="green"
        borderRadius="5px"
        border="1px solid green"
        onClick={addHandle}
      />
      <br></br>
      <Button
        size="16px"
        height="50px"
        width="160px"
        children="update Product"
        color="blue"
        borderRadius="5px"
        border="1px solid blue"
        onClick={updateHandle}
      />
      <br></br>
      <Button
        size="16px"
        height="50px"
        width="160px"
        children="Delete Product"
        color="red"
        borderRadius="5px"
        border="1px solid red"
        onClick={deleteHandle}
      />
    </div>
  );
}

export default App;
