import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Box, Heading, Text } from "@chakra-ui/react";

import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box paddingInline={6}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist"
            : " An Unexpected Error Occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
