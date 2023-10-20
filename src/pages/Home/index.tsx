import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Link
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';

const listMenu = [
    {
        label: "Answer of First Question",
        path: "/first-question"
    },
    {
        label: "Answer of Second Question",
        path: "/second-question"
    },
    {
        label: "Answer of Third Question",
        path: "/third-question"
    },
];

const Home = () => {
    return (
        <Container
            display="flex"
            flexDirection="column"
            alignContent="center"
            marginTop={12}
        >
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Please choose an answer</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>No.</Th>
                            <Th>List of answers</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {listMenu.map((item: any, i: number) => (
                            <Tr key={i}>
                                <Td width={'5%'}>{i + 1}</Td>
                                <Td>
                                    <Link as={ReactRouterLink} to={item.path}>{item.label}</Link>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Home