import React from "react";
import { MenuItemTag } from "./Styles";
import { MenuItemProps } from "./Types";

const MenuItem = React.memo(
  ({ isActive, menuText, ...props }: MenuItemProps) => {
    return (
      <MenuItemTag isActive={isActive} {...props} href="#">
        {menuText}
      </MenuItemTag>
    );
  },
);

export default MenuItem;
