import { Box, Heading, Text, Button, VStack, Image, Link } from "@chakra-ui/react";
import { FaRobot, FaGoogle, FaCreditCard } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading mb={2}>Automated Code Generation and Optimization System</Heading>
          <Text fontSize="lg">A sophisticated Python project leveraging OpenAI and Google APIs to create an automated system for generating and optimizing complex AI codebases.</Text>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Key Features
          </Heading>
          <VStack align="start">
            <Text>
              <FaRobot /> OpenAI API Integration: Utilizes algorithms from OpenAI to generate and optimize code.
            </Text>
            <Text>
              <FaGoogle /> Google API Integration: Accesses Google's resources to enhance code generation.
            </Text>
            <Text>
              <FaCreditCard /> Coinbase Merchant API Integration: Enables secure payment functionality.
            </Text>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Implementation Details
          </Heading>
          <VStack align="start">
            <Text>1. Code Generation: Leverages OpenAI's models and Google APIs for initial drafts and enhancements.</Text>
            <Text>2. Code Optimization: Uses OpenAI's algorithms for refining code efficiency and performance.</Text>
            <Text>3. User Interface: User-friendly interface for specifying requirements and reviewing generated code.</Text>
            <Text>4. Payment Module: Secure payment processing through Coinbase Merchant API.</Text>
            <Text>5. Data Management: Utilizes Google Cloud Storage for code storage and version control.</Text>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Benefits
          </Heading>
          <VStack align="start">
            <Text>Automates the generation and optimization of AI codebases.</Text>
            <Text>Produces high-quality, efficient code using cutting-edge algorithms.</Text>
            <Text>Enhances productivity and reduces development costs and time-to-market.</Text>
            <Text>Facilitates the creation of innovative AI applications and solutions.</Text>
          </VStack>
        </Box>

        <Box>
          <Button colorScheme="blue" leftIcon={<FaRobot />}>
            Learn More
          </Button>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1705129472480-2145aecb9aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTM5MjIwNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>

        <Box>
          <Link href="https://zapier.com/editor/232377746/draft/_GEN_1711093549819/setup" isExternal>
            Project Setup Link
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
