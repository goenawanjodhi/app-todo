import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Checkbox,
    Button,
    Flex,
    Input
} from '@chakra-ui/react'
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { interfaceData } from '../interfaces/ThirdInterface';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, updateTodo } from '../redux/actions/todoActions';
import { apiGetAllTodos } from '../util/api';
import { useState } from 'react';

interface PropsInterfaceData {
    data: interfaceData[]
}

const TableTodo = ({ data }: PropsInterfaceData) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState<string>('');

    const handleEditTodo = async (id: string) => {
        navigate(`/third-question/${id}`)
    }

    const handleDeleteTodo = async (id: string) => {
        let askDelete = confirm('Delete this todo list ?');

        if (askDelete) {
            try {
                await dispatch<any>(deleteTodo(id));

                await apiGetAllTodos().then((response) => {
                    dispatch({ type: 'STORE_TODO', payload: response.data });
                });

                navigate('/third-question');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    const checkTodo = async (id: string, checked: boolean) => {
        const checkJson = { checked };
        dispatch<any>(updateTodo(id, checkJson))
            .then(() => { }).catch((error: any) => {
                console.error('Error:', error);
            });
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <Flex flexDirection={"column"}>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={4}
            >
                <Input
                    placeholder='Search Todo'
                    height={8}
                    mr={5}
                    width={'200px'}
                    value={search}
                    onChange={handleSearchChange}
                />
                <Button
                    width={100}
                    height={8}
                    leftIcon={<AddIcon />} colorScheme='teal' variant='solid' size='xs' marginRight={3}
                    onClick={() => navigate('/third-question/add')}
                >
                    Add Todo
                </Button>
            </Flex>

            <TableContainer>
                <Table size='sm' variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>No. </Th>
                            <Th>Todo List</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data
                            .filter((item: any) =>
                                item.title.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((item: any, i: number) => (
                                <Tr key={i}>
                                    <Td width={"20px"}>{i + 1}</Td>

                                    <Td
                                        textDecoration={item.checked ? "line-through" : "none"}
                                        textDecorationColor="#000"
                                        textDecorationThickness="1px"
                                        color={item.checked ? "gray.600" : "inherit"}
                                    >
                                        <Checkbox size="md" colorScheme="green" defaultChecked={item.checked} marginRight={3}
                                            onChange={() => checkTodo(item._id, !item.checked)}
                                        />
                                        {item.title}
                                    </Td>

                                    <Td>
                                        <Button leftIcon={<EditIcon />} colorScheme='teal' variant='solid' size='xs' marginRight={3} onClick={() => handleEditTodo(item._id)}>
                                            Edit
                                        </Button>
                                        <Button leftIcon={<DeleteIcon />} colorScheme='red' variant='outline' size='xs' onClick={() => handleDeleteTodo(item._id)}>
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default TableTodo;