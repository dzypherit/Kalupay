import { Container, Box, Button, Text, Heading } from "@chakra-ui/react";
import React from "react";
import DepositForm from "../components/DepositForm";
import Link from "next/link";
import {
  useBalance,
} from "@thirdweb-dev/react";
import styles from "../styles/CashInOutForm.module.css";

const DepositPage = () => {
  const nativeCurrencyBalance = useBalance();
  return (
    <Container maxW="full" p={[4, 6]} height="100vh">
      {/* Display native currency balance */}
      <Box bgGradient='linear(to-bl, rgba(0, 255, 163, 0.8), rgba(3, 225, 255, 0.3), rgba(220, 31, 255, 0.3))' p={4} borderRadius="lg"
      boxShadow="md" width={["100%", "100%", "80%", "60%"]} // Adjust the width based on your design needs
      mx="auto"
      className={styles.balanceContainer}>
                <Heading as="h3" size="md" mb={1}>
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : "Your Balance:"}
                </Heading>
                <Text fontWeight="bold">
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : nativeCurrencyBalance.data
                    ? `$${nativeCurrencyBalance.data.symbol} ${nativeCurrencyBalance.data.displayValue}`
                    : "No balance available."}
                </Text>
                <br/>
                <Link href="/dashboard">
            <Button mb={4}>Back</Button>
          </Link>
              </Box>
      <DepositForm />
    </Container>
  );
};

export default DepositPage;
