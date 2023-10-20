import { Container, Flex, Text, Box, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <Flex
            align="center"
            justify="space-between"
            h="60px"
            bg="#4eb6c2"
            color="#fff"
            flexDirection="row"
        >
            <Container maxW="1110px">
                <Flex
                    justify="space-between"
                    align="center"
                >
                    <Text marginRight={3} fontWeight={'bold'} fontSize={20}>
                        <Link as={ReactRouterLink} to='/'>Test DoCheck</Link>
                    </Text>

                    <Box
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Text>
                            <Link as={ReactRouterLink} to='/'>HOME</Link>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};

export default Header;
