import { Offcanvas, Button, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  const {
    productState: { sort },
    productDispatch,
    show,
    setShow,
  } = CartState();

  console.log(sort);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="filters">
      <>
        <Button variant="outline dark" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />{" "}
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <span className="title"> Sort by price</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="content">
            <span>
              <Form.Check
                inline
                label="Low to high"
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
            </span>
            <span>
              <Form.Check
                inline
                label="High to low"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow" ? true : false}
              />
            </span>

            <Button
              variant="light"
              onClick={() =>
                productDispatch({
                  type: "CLEAR_FILTERS",
                })
              }
            >
              Clear Filters
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Filter;
