import { Container, Heading, Center, Box } from '@chakra-ui/react'
import TableComponent from "../../components/TableComponent"
import { interfaceFieldsTable, interfaceData } from '../../interfaces/FirstInterface';

const fieldsTitle: interfaceFieldsTable[] = [
    {
        "id": "_id",
        "title": "ID"
    },
    {
        "id": "name",
        "title": "Name"
    },
    {
        "id": "age",
        "title": "Age"
    }
];

const passengerList: interfaceData[] = [
    {
        "id": "KJSD93",
        "name": "Maria Anders",
        "age": 20
    },
    {
        "id": "KJSD94",
        "name": "Francisco Chang",
        "age": 35
    },
    {
        "id": "KJSD95",
        "name": "Anna Angelo",
        "age": 28
    }
];

const FirstQuestion = () => {
    return (
        <Container
            display="flex"
            flexDirection="column"
            alignContent="center"
            marginTop={12}
        >
            <Center color='#4eb6c2'>
                <Heading as='h3' size='lg'>Answer to First Question</Heading>
            </Center>
            <Box mt={5}>
                <TableComponent columns={fieldsTitle} data={passengerList} question={1} />
            </Box>
        </Container>
    )
}

export default FirstQuestion;