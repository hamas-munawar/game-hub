import { Link } from "react-router-dom";
import { HStack, Image, Button } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import Searchbox from "./common/Searchbox";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack
      className="navbar"
      paddingInline={{ base: 3, md: 5 }}
      paddingBlock={3}
      gap={4}
      alignItems="center"
    >
      <Link to={"/"}>
        <Image
          className="navbar-logo"
          src={logo}
          boxSize="50px"
          objectFit="contain"
        />
      </Link>
      <Searchbox />
      <HStack gap={2}>
        <Link to="/wishlist">
          <Button variant="subtle" size="sm" borderRadius="full" paddingInline={3}>
            ❤ Wishlist
          </Button>
        </Link>
        <ColorModeButton />
      </HStack>
    </HStack>
  );
};

export default NavBar;
