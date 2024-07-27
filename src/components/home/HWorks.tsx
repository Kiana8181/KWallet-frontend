import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { HeadingStyle, HowContainerStyle } from "./HomeStyles";

const HWorks = () => {
  const steps = [
    {
      title: "Sign Up and Verify Your Account",
      description:
        "Begin your journey by signing up for our wallet. Provide essential details to create your account. Verify your identity to ensure a secure and compliant experience.",
    },
    {
      title: "Deposit Funds Into Your Wallet",
      description:
        "Start by depositing funds into your wallet. You can purchase KC tokens directly within the app using various payment methods. Your wallet balance will reflect the amount of KC tokens you own.",
    },
    {
      title: "Explore the Dashboard",
      description:
        "Once your wallet is funded, explore the dashboard. Get a quick overview of your current balance, portfolio value, and recent transactions. The dashboard is designed for easy navigation and a clear snapshot of your account.",
    },
    {
      title: "Buy, Sell, or Transfer KC Tokens",
      description:
        "Engage in a variety of transactions effortlessly. Buy KC tokens from the market, sell them when you choose, or transfer tokens to other wallets seamlessly. Our user-friendly interface ensures a straightforward process.",
    },
    {
      title: "Real-Time Transaction Tracking",
      description:
        "Stay informed with real-time transaction tracking. Access your complete transaction history, including dates, amounts, and transaction types, all conveniently displayed in one location.",
    },
    {
      title: "Coming Soon: Pay Bills and Enjoy Rewards",
      description:
        "Exciting features are on the horizon! Soon, you will be able to use your KC tokens to pay utility bills and unlock exclusive rewards. We are dedicated to expanding the utility of your tokens beyond traditional transactions.",
    },
  ];

  const { activeStep } = useSteps({
    index: 6,
    count: steps.length,
  });

  return (
    <Box p="32px">
      <Text sx={HeadingStyle} mb="16px">
        How It Works
      </Text>
      <Box sx={HowContainerStyle}>
        <Stepper
          index={activeStep}
          colorScheme="purple"
          orientation="vertical"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box mb="32px">
                <StepTitle>
                  <Text fontWeight="bold">{step.title}</Text>
                </StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default HWorks;
