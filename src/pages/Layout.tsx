import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Box minH="100vh" position="relative">
      {/* Ambient background glow */}
      <Box
        position="fixed"
        top="-20%"
        left="-10%"
        width="50%"
        height="50%"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(108, 92, 231, 0.06) 0%, transparent 70%)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="fixed"
        bottom="-20%"
        right="-10%"
        width="50%"
        height="50%"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(253, 121, 168, 0.04) 0%, transparent 70%)"
        pointerEvents="none"
        zIndex={0}
      />

      <Box position="relative" zIndex={1}>
        <NavBar />
        <Box padding={{ base: 3, md: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
