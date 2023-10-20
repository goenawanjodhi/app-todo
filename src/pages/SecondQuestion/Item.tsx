import { useItemContext } from './ItemContext';
import { Container, Heading, Center, Box } from '@chakra-ui/react';
import TableComponent from "../../components/TableComponent";
import { ItemData, secFieldsTable } from '../../interfaces/SecondInterface';

const Item = () => {
    const { item } = useItemContext();

    const fieldsTitle: secFieldsTable[] = [
        {
            "id": "name",
            "title": "Name"
        },
        {
            "id": "qty",
            "title": "QTY"
        },
        {
            "id": "price",
            "title": "Price"
        }
    ];

    const itemData: ItemData[] = [
        {
            "name": item.name,
            "qty": item.qty,
            "price": item.price
        },
    ];

    return (
        <Container
            display="flex"
            flexDirection="column"
            alignContent="center"
            marginTop={12}
        >
            <Center color='#4eb6c2'>
                <Heading as='h3' size='lg'>Answer to Second Question</Heading>
            </Center>
            <Box mt={5}>
                <TableComponent columns={fieldsTitle} data={itemData} question={2} />
            </Box>
        </Container>
    );
};

export default Item;






