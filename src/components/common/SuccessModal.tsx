import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import success from "../../assets/pictures/success.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

const SuccessModal = ({ isOpen, onClose, text }: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return (
    <Modal
      size="xs"
      closeOnOverlayClick={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent p="16px" borderRadius="24px">
        <ModalBody p="0">
          <Box>
            <Center mt="16px" mb="24px">
              <Image src={success} alt="success" />
            </Center>
            <Text
              fontSize="32px"
              fontWeight="500"
              lineHeight="normal"
              color="#555555"
              textAlign="center"
            >
              Done!
            </Text>
            <Text
              mt="12px"
              fontSize="16px"
              fontWeight="400"
              lineHeight="200.016%"
              color="#555555"
              textAlign="center"
            >
              {text}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter p="0" mt="24px">
          <Center width="100%">
            <Button
              colorScheme="purple"
              borderRadius="24px"
              width="100%"
              onClick={() => navigate("/KWallet-frontend/")}
            >
              Close
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
