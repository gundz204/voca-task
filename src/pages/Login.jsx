import { Input } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box bg="gray.900" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="md" p={6} bg="gray.800" borderRadius="md" boxShadow="lg">
        <Text fontSize="2xl" color="purple.300" fontWeight="bold" textAlign="center" mb={0}>
          VOCA
        </Text>
        <Text fontSize="2xl" color="white" fontWeight="semibold" textAlign="center" mb={4}>
          Task
        </Text>
        <Text color="gray.400" mb={1}>Email</Text>
        <Input type="email" placeholder="example@gmail.com" mb={4} bg="gray.700" color="white" />
        <Text color="gray.400" mb={1}>Password</Text>
        <Input type="password" placeholder="Password" mb={6} bg="gray.700" color="white" />
        <Button 
          bg="#805AD5" 
          color="white" 
          width="100%" 
          py={2} 
          fontWeight="bold" 
          _hover={{ bg: "purple.600" }}
        >
          Sign In
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
