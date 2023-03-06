import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Tadashi</Text>
          <Text color="gray.300" fontSize="small">
            tadashi.b@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Bruno Tadashi" src="http://github.com/btadashi.png" />
    </Flex>
  );
}