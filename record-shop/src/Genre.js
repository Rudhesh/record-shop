import React from "react";
import SingleProduct from "./components/Player/SingleProduct";
import { CartState } from "./Context/Context";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import CourseItem from "./components/Player/CourseItem";
import Pop from "./components/Player/genre/Pop";
import Jazz from "./components/Player/genre/Jazz";
import Rock from "./components/Player/genre/Rock";
import Hiphop from "./components/Player/genre/Hiphop";

const Genre = () => {
  const {
    state: { songs },
  } = CartState();

  const { url, path } = useRouteMatch();

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <NavLink to={`${url}/pop`}>POP</NavLink>{" "}
            <NavLink to={`${url}/jazz`}>JAZZ</NavLink>{" "}
            <NavLink to={`${url}/rock`}>ROCK</NavLink>{" "}
            <NavLink to={`${url}/hiphop`}>HIPHOP</NavLink>{" "}
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path={`${path}/:genre`}>
          <CourseItem />
        </Route>
        <Route path="/pop">
          <Pop />
        </Route>
        <Route path="/jazz">
          <Jazz />
        </Route>
        <Route path="/rock">
          <Rock />
        </Route>
        <Route path="/hiphop">
          <Hiphop />
        </Route>
      </Switch>
    </div>
  );
};

// import React from "react";
// import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
// import CourseItem from "./components/Player/CourseItem";

// function Genre() {
//   const { url, path } = useRouteMatch();

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={`${url}/programming`}>Programming</Link>
//         </li>
//         <li>
//           <Link to={`${url}/networking`}>Networking</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route path={`${path}/:genre`}>
//           <CourseItem></CourseItem>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

export default Genre;
