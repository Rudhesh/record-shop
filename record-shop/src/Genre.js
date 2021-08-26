import React from "react";
import SingleProduct from "./components/Player/SingleProduct";
import { CartState } from "./Context/Context";
import {
  BrowserRouter,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
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
  console.log("hello", url);
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav>
              <Link to={`${url}/pop`}>POP</Link>{" "}
              <Link to={`${url}/jazz`}>JAZZ</Link>{" "}
              <Link to={`${url}/rock`}>ROCK</Link>{" "}
              <Link to={`${url}/hiphop`}>HIPHOP</Link>{" "}
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          {/* <Route exact path={`${path}/:genre`}>
            <CourseItem />
          </Route> */}
          <Route exact path={`${path}/pop`} component={Pop} />
          <Route exact path={`${path}/jazz`} component={Jazz} />
          <Route exact path={`${path}/rock`} component={Rock} />
          <Route exact path={`${path}/hiphop`} component={Hiphop} />
        </Switch>
      </div>
    </BrowserRouter>
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
