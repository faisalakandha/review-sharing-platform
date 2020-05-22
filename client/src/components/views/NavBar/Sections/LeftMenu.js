import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Discover</span>}>
      <MenuItemGroup title="Entertainment">
        <Menu.Item key="setting:1"><a href="/movies/">Movies</a></Menu.Item>
        <Menu.Item key="setting:2">Sports</Menu.Item>
		<Menu.Item key="setting:3">Songs</Menu.Item>
		<Menu.Item key="setting:4">Gaming</Menu.Item>
		<Menu.Item key="setting:5">TV Series</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Products">
        <Menu.Item key="setting:6">Smartphone</Menu.Item>
        <Menu.Item key="setting:7">Computers</Menu.Item>
		<Menu.Item key="setting:8">Bikes</Menu.Item>
		<Menu.Item key="setting:9">Cars</Menu.Item>
		
      </MenuItemGroup>
    </SubMenu>
	
	<Menu.Item key="Reviews">
		<a href="/blog/">Reviews</a>
	</Menu.Item>
	
	<Menu.Item key="Create">
		<a href="/blog/create">Create Review</a>
	</Menu.Item>
		
  </Menu>
  )
}

export default LeftMenu