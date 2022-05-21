import { HamburgerIconSvg } from "../../icons";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import MenuItem from "../MenuItem/MenuItem";
import Search from "../Search/Search";
import {
  AuthMenuContent,
  Container,
  HamburgerMenu,
  HeaderLeftContent,
  HeaderRightContent,
  HeaderWrapper,
  MainMenuContent,
} from "./Styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderLeftContent>
          <HamburgerMenu>
            <HamburgerIconSvg />
          </HamburgerMenu>
          <Logo />
          <Search
            background="gray"
            placeholder="Search photo, video, creator etc."
          />
        </HeaderLeftContent>
        <HeaderRightContent>
          <MainMenuContent>
            <MenuItem menuText="Explore" />
            <MenuItem menuText="License" />
            <MenuItem menuText="Pricing" />
          </MainMenuContent>
          <AuthMenuContent>
            <MenuItem menuText="Sign In" isActive={true} />
            <Button text="join" />
          </AuthMenuContent>
        </HeaderRightContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
