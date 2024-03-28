import * as css from "../Styles/NavbarCss";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import {
  BsPersonCircle as PersonLogo,
  BsSearch as SearchIcon,
} from "react-icons/bs";

import Logo from "./Logo";
import { Context } from "../Redux/Context";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../Redux/Authentication/actionTypes";

const Navbar = () => {
  const { token, setToken, loggedInUser, userNameLogged, setUserNameLogged } =
    useContext(Context);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setToken("");
    localStorage.clear();
    navigate("/");
  };

  const location = useLocation();
  const [searchInp, setSearchInp] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const ScrollOffset = false ? -90 : false ? -100 : -60;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg="greybg"
      fontFamily="primaryf"
      css={css.OuterBox(isScrolled, location.pathname)}
    >
      <Box css={css.TopInnerCont}>
        <Logo fontSize={["20px", "22px", "26px"]} />

        {/* Navbar Middle Items */}
        {location.pathname === "/" ? (
          <Box css={css.LinksCont}>
            {LinksData.map((item, ind) => (
              <ScrollLink
                offset={ScrollOffset}
                to={item.to}
                style={{ zIndex: 1200 }}
                smooth={true}
                duration={600}
                key={item.title + ind}
              >
                <Center css={css.LinksText} color="greytext">
                  {item.title}
                </Center>
              </ScrollLink>
            ))}
          </Box>
        ) : (
          <Box css={css.SearchCont}>
            {/* <MenuItem> */}
                <NavLink  to="/task" css={css.MenuTextsCss}>
                  Task
                </NavLink>
              {/* </MenuItem> */}
          </Box>
        )}

        {/* Log In & Sign Up */}
        {token ? (
          <Box className="flex items-center space-x-5 ">
            <Menu>
              <MenuButton>
                <Avatar
                  name={userNameLogged}
                  size={["xs", "xs", "sm"]}
                  bg="primary"
                  color="white"
                />
              </MenuButton>
              <MenuList>
                <Text
                  css={css.NameText}
                  pr="5px"
                >{`Hi ${userNameLogged} !`}</Text>
                <NavLink to="/profile">
                  <MenuItem>
                    <Text css={css.MenuTextsCss}>Profile</Text>
                  </MenuItem>
                </NavLink>
                <MenuItem onClick={logout}>
                  <Text css={css.MenuTextsCss}>Log Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Menu>
            <MenuButton>
              <Image color="greytext" as={PersonLogo} css={css.PersonIconCss} />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavLink to="/login" css={css.MenuTextsCss}>
                  Log In
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/signup" css={css.MenuTextsCss}>
                  Sign Up
                </NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};

const LinksData = [
  {
    to: "features",
    title: "Features",
  },
  {
    to: "workflow",
    title: "Workflow",
  },
  {
    to: "pricing",
    title: "Pricing",
  },
  {
    to: "about",
    title: "About",
  },
];

export default Navbar;
