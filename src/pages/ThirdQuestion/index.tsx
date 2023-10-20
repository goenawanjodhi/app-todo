import { useState, useEffect } from 'react';
import { Container, Heading, Center, Box, Spinner } from '@chakra-ui/react';
import { apiGetAllTodos } from '../../util/api';
import TableTodo from '../../components/TableTodo';
import { useSelector, useDispatch } from 'react-redux';

const ThirdQuestion = () => {
    const data = useSelector((state: any) => state.todo.todos);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        apiGetAllTodos()
            .then((response) => {
                dispatch({ type: 'STORE_TODO', payload: response.data });
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [dispatch]);

    useEffect(() => {
        apiGetAllTodos()
            .then((response) => {
                dispatch({ type: 'STORE_TODO', payload: response.data });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [dispatch]);

    return (
        <Container
            display="flex"
            flexDirection="column"
            alignContent="center"
            marginTop={12}
        >
            <Center color='#4eb6c2'>
                <Heading as='h3' size='lg'>Answer to Third Question</Heading>
            </Center>
            <Box mt={5}>
                {loading ? (
                    <Center>
                        <Spinner size='lg' />
                    </Center>
                ) : (
                    <TableTodo data={data} />
                )}
            </Box>
        </Container>
    )
}

export default ThirdQuestion;
