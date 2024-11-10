import { Input } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Avatar } from "../components/ui/avatar";
import { Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const UpdateProfile = () => {
  return (
    <Box
      bg="gray.900"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="md" p={6} bg="gray.800" borderRadius="md" boxShadow="lg" >
        <Button
          bg="transparent"
          textAlign={"left"}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          p={0}
          mb={2}
        >
          <Icon fontSize="2xl" color="white">
            <IoIosArrowBack />
          </Icon>
          <Text color="white"  fontWeight="bold">
            Edit Profile
          </Text>
        </Button>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar
            size="2xl"
            name="Panji Gunawan"
            src="https://bit.ly/sage-adebayo"
            mb={4}
          />
        </Box>
        <Text color="gray.400" mb={1}>
          Profile URL
        </Text>
        <Input
          type="url"
          placeholder="example@gmail.com"
          mb={4}
          bg="gray.700"
          color="white"
        />

        <Text color="gray.400" mb={1}>
          Name
        </Text>
        <Input
          type="text"
          placeholder="example@gmail.com"
          mb={4}
          bg="gray.700"
          color="white"
        />

        <Text color="gray.400" mb={1}>
          Email
        </Text>
        <Input
          type="email"
          placeholder="example@gmail.com"
          mb={4}
          bg="gray.700"
          color="white"
        />

        <Text color="gray.400" mb={1}>
          Password
        </Text>
        <Input
          type="password"
          placeholder="Password"
          mb={6}
          bg="gray.700"
          color="white"
        />
        <Button
          bg="#805AD5"
          color="white"
          width="100%"
          py={2}
          fontWeight="bold"
          _hover={{ bg: "purple.600" }}
        >
          <Icon fontSize="md" color="white">
            <FaCheck />
          </Icon>
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default UpdateProfile;
