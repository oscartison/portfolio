import { Box, BoxProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props extends BoxProps {
  underlineColor?: string;
  emoji?: string;
}

const Header = ({ emoji, ...props }: PropsWithChildren<Props>) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left"
  >
    {/* <UnderlinedText color={underlineColor}>{children}</UnderlinedText> */}
    {emoji ? ' ' + emoji : ''}
  </Box>
);
export default Header;
