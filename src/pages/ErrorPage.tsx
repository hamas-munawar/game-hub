import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";

import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box className="error-page" paddingInline={6}>
        <Heading className="error-code">Oops!</Heading>
        <Text className="error-message">
          {isRouteErrorResponse(error)
            ? "The page you're looking for seems to have vanished into the digital void."
            : "An unexpected error occurred. Our team of highly trained monkeys has been dispatched."}
        </Text>
        
        <Button 
          className="error-back-btn" 
          onClick={() => navigate("/")}
        >
          <LuArrowLeft style={{ marginRight: '8px' }} />
          Return Home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;
