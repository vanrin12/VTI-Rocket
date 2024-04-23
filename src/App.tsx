import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import TableData from "./components/TableData";
import { getAPI } from "./helpers/Apis";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function App() {
  const [accountList, setAccountList] = useState([]);
  const [isShowModalCreate, setIsShowModalCreate] = useState(false);
  const tableHeadItems = [
    { id: 1, name: "ID" },
    { id: 2, name: "Email" },
    { id: 3, name: "Username" },
    { id: 4, name: "Fullname" },
    { id: 5, name: "Image url" },
    { id: 7, name: "mobile" },
    { id: 8, name: "Create date" },
    { id: 9, name: "Edit" },
    { id: 10, name: "Delete" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAPI("accounts");
        if (res.status === 200) {
          const dataFormat = res?.data?.map((data: any) => ({
            id: data.id,
            email: data.email,
            username: data.username,
            fullname: data.fullname,
            avatarImageName: data.avatarImageName,
            mobile: data.mobile,
            createDate: data.createDate,
          }));
          setAccountList(dataFormat);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleClose = () => {
    setIsShowModalCreate(false);
  };
  return (
    <div className="App">
      <div className="container-fluid pt-4">
        <Button variant="primary" onClick={() => setIsShowModalCreate(true)}>
          Create New Account
        </Button>
        <TableData thItems={tableHeadItems} tbodyData={accountList} />
      </div>
      <Modal show={isShowModalCreate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Input email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
