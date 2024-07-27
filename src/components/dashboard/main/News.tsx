import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { NewsHeaderStyle, NewsTitleStyle } from "./MainStyle";

const News = () => {
  const news = [
    {
      title: "Exciting News for Our Users!",
      context:
        "We are thrilled to announce that in the upcoming weeks, users will have the ability to use their KC tokens to pay utility bills directly from their wallet. This new feature adds a practical dimension to your token ownership, making it not just an investment but a versatile asset that enhances everyday convenience. Stay tuned for more details on this exciting development!",
    },
    {
      title: "Unlocking New Possibilities: KC Token Rewards Program",
      context:
        "We're excited to unveil our upcoming KC Token Rewards Program! As the value of KC tokens continues to soar, users will soon be able to unlock exclusive rewards and privileges by holding and actively using their tokens. This program is designed to appreciate our community and provide added benefits for your loyalty. Keep an eye out for more details on the rewards awaiting you!",
    },
    {
      title: "Breaking News: KC Token Value Surges!",
      context:
        "In a remarkable turn of events, the value of KC tokens has experienced a significant surge in the market. The recent increase reflects growing confidence in the project, and we want to express our gratitude to our dedicated community for their continued support. This uptrend is a testament to the strength of the project, and we remain committed to delivering value to our users.",
    },
    {
      title: "Upcoming Feature: Peer-to-Peer Token Lending",
      context:
        "We're excited to share a sneak peek into an upcoming feature: Peer-to-Peer Token Lending. Soon, users will have the option to lend their KC tokens to others in the community, providing a new way to earn rewards. This feature empowers our users to actively participate in the growth of the ecosystem while benefiting from additional opportunities. Stay tuned for more details on this innovative lending feature!",
    },
  ];

  return (
    <Box height="100%" overflow="hidden">
      <Text sx={NewsHeaderStyle}>News</Text>

      <Box height="calc(100% - 32px)" p="16px" overflowY="scroll">
        <Accordion defaultIndex={[0]} allowMultiple>
          {news.map((n, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" sx={NewsTitleStyle}>
                    {n.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{n.context}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default News;
