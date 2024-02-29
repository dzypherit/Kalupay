import type { NextPage } from "next";
import {
  Image,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/CashInOutForm.module.css";

const Home: NextPage = () => {
  return (
    <Container maxW="380" p={4}
    borderRadius="lg"
    boxShadow="md"
    bg="black"
    className={styles.formContainer}
    width={["100%", "100%", "80%", "60%"]}
    height="100vh"
    maxHeight={1080}
    mx="auto">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 2, md: 10 }}
        py={8}
        borderRadius={20}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          w={{ base: "100%", md: "100%" }}
        >
          <Stack spacing={4} justifyContent="center">
          <Flex justifyContent="center" alignItems="center">
  <Image
    src="/kalupay_circlebg.png"
    alt="Kalupay"
    w={100}
    maxW={['100%', '80%', '60%', '40%']} // Adjust as needed for different breakpoints
    h="auto" // To maintain the aspect ratio and prevent stretching
  />
  <Text ml={5} textAlign="center" fontWeight='extrabold' fontSize={"60"} color={"white"}
               >Kalupay</Text>
</Flex>
            <Heading
               bgGradient='linear(to-bl, rgba(0, 255, 163, 0.8), rgba(3, 225, 255, 0.8), rgba(220, 31, 255, 0.8))'
               bgClip='text'
               fontSize='6xl'
               fontWeight='extrabold'
            >
              The Simplest Way to Pay Your Friends
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }}>
            A Web3 Wallet built by Filipinos for Filipinos
            </Text>
            <Center>
            <Flex alignItems="center" mt={4}>
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </Flex>
            </Center>



          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
