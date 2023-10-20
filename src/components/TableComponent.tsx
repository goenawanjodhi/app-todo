import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { interfaceFieldsTable, interfaceData } from '../interfaces/FirstInterface';
import { ItemData, secFieldsTable } from '../interfaces/SecondInterface';

interface PropsTable1 {
    columns: interfaceFieldsTable[];
    data: interfaceData[];
    question: 1;
}

interface PropsTable2 {
    columns: secFieldsTable[];
    data: ItemData[];
    question: 2;
}

type PropsTable = PropsTable1 | PropsTable2;

const TableHead = ({ columns }: { columns: PropsTable["columns"] }) => {
    return (
        <Thead>
            <Tr>
                {columns.map((column, i) => (
                    <Th key={i}>{column.title}</Th>
                ))}
            </Tr>
        </Thead>
    )
}

const TableBody = ({ data, question }: { data: PropsTable["data"], question: PropsTable["question"] }) => {
    return (
        <Tbody>
            {data.map((item, i) => (
                <Tr key={i}>
                    {
                        question === 1 ?
                            <RowQuestion1 item={item as interfaceData} />
                            :
                            <RowQuestion2 item={item as ItemData} />
                    }
                </Tr>
            ))}
        </Tbody>
    )
}

const RowQuestion1 = ({ item }: { item: interfaceData }) => {
    return (
        <>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.age}</Td>
        </>
    )
}

const RowQuestion2 = ({ item }: { item: ItemData }) => {
    return (
        <>
            <Td>{item.name}</Td>
            <Td>{item.qty}</Td>
            <Td>{item.price}</Td>
        </>
    )
}

const TableComponent = ({ columns, data, question }: PropsTable) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableHead columns={columns} />
                <TableBody data={data} question={question} />
            </Table>
        </TableContainer>
    );
}

export default TableComponent;
