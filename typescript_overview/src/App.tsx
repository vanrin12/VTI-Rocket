import "./App.css";

function App() {
  // Basic function
  const printCoord = (point: { x: number; y: number }) => {
    console.log("The coordinate's X value is: ", point.x);
    console.log("The coordinate's Y value is: ", point.y);
  };

  printCoord({ x: 15, y: 25 });

  // Optional Chaining
  const printName = (obj: { firstName: string; lastName?: string }) => {
    console.log(`FirstName is: ${obj.firstName.toUpperCase()}`);

    console.log(`LastName is: ${obj.lastName?.toUpperCase()}`);
  };

  printName({ firstName: "Bob  " });
  printName({ firstName: "Bob  ", lastName: "Alisson" });

  // Union Type
  const printId = (id: number | string) => {
    console.log(`Your ID is: ${id}`);
  };

  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  // printId({ myID: 22342 });

  // Type Aliases

  type Point = {
    x: number;
    y: number;
  };

  const printNewCoord = (pt: Point) => {
    console.log("The new coordinate's X value is: ", pt.x);
    console.log("The new coordinate's Y value is: ", pt.y);
  };

  printNewCoord({ x: 100, y: 100 });

  // Union alias type
  type StringOrId = string | number;

  const processStringOrId = (value: StringOrId) => {
    console.log(`Value: ${value}`);
  };

  const stringValue: StringOrId = "abc";
  const numberValue: StringOrId = 123;

  processStringOrId(stringValue);
  processStringOrId(numberValue);
  return <></>;
}

export default App;
