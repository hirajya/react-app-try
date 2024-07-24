// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import ButtonPrimary from "./components/ButtonPrimary";
import Button from "./components/Button";
import Alert2 from "./components/Alert2";
import Alert3 from "./components/Alert3";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  //   let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   }
  //   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  // }

  // ----------------------------
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );
  // ----------------------------

  // return (
  //   <div>
  //     <ButtonPrimary text={"pogi"}></ButtonPrimary>
  //   </div>
  // )
  // ------------

  // return (
  //   <>
  //     <Alert2 />
  //   </>
  // );


  // ---------------
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)} children={"My Button"}></Button>
    </div>
  )
}

export default App;
