import React, { useState, useCallback } from "react";
import { Layout, Input } from "antd";
import { GithubOutlined, UserAddOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
import "./layout.css";

export default ({ children }) => {
  const [searchStr, setSearchStr] = useState("");
  const handleSearchStrChange = useCallback(
    e => {
      setSearchStr(e.target.value);
    },
    [setSearchStr]
  );

  const handleSearchStrSearch = useCallback(() => {}, []);
  const githubIconStyle = {
    color: "white",
    fontSize: 40,
    display: "block"
  };

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="header-inner">
            <div className="header-left">
              <div className="logo">
                <GithubOutlined style={githubIconStyle} />
              </div>
              <div className="search_warpper">
                <Input.Search
                  placeholder="搜索仓库"
                  value={searchStr}
                  onChange={handleSearchStrChange}
                  onSearch={handleSearchStrSearch}
                />
              </div>
            </div>
            <div className="header-right">
              <div className="user">
                <UserAddOutlined style={githubIconStyle} />
              </div>
            </div>
          </div>
        </Header>
        <Content style={{ padding: "0 50px", minHeight: "600px" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
