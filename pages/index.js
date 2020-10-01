// import React from "react";
// function index() {
//   return <div>index by function</div>;
// }
// export default index;

// import React from "react";
// class Index extends React.Component {
//   render() {
//     return <div>index by class</div>;
//   }
// }
// export default Index;

import React, { useState } from "react";

export default function indexHooks() {
  const [index] = useState("index by hooks");
  return <div>{index}</div>;
}
