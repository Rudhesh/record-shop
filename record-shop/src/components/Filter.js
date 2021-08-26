import { Button, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";

const Filter = () => {
  const {
    productState: { sort },
    productDispatch,
  } = CartState();

  console.log(sort);

  return (
    <div className="filters">
      <span className="title"> Sort by price</span>

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
    </div>
  );
};

export default Filter;
