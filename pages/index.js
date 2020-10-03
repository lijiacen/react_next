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

import React, { useState, useEffect } from "react";
import "./test.css";
import axois from "axios";
import { Button } from "antd";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function indexHooks() {
  const [index] = useState("index");

  useEffect(() => {
    axois.get("/users").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {index}
      <a href={publicRuntimeConfig.github_oauth}>登录</a>
      <Button>click it</Button>
    </div>
  );
}
