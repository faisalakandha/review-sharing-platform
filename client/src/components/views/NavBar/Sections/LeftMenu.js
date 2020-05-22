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
    <SubMenu title={<span><a href="">Discover</a></span>}>
      <MenuItemGroup title="Watch">
        <Menu.Item key="setting:1">Movie Reviews</Menu.Item>
        <Menu.Item key="setting:2">Wine Reviews</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Ride">
        <Menu.Item key="setting:3">Bike Reviews</Menu.Item>
        <Menu.Item key="setting:4">Car Reviews</Menu.Item>
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