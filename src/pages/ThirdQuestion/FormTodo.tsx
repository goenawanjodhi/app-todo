import { useState, useEffect } from 'react';
import {
    Container,
    Heading,
    Center,
    Box,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addTodo, getTodo, updateTodo } from '../../redux/actions/todoActions';

const FormTodo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [formData, setFormData] = useState({ title: '', body: '' });
    const [alert, setAlert] = useState({ isShow: false, message: '' });

    const actionSave = async () => {
        dispatch<any>(addTodo(formData)).then(() => {
            setFormData({ title: '', body: '' });
            navigate('/third-question');

        }).catch((error: any) => {
            console.error('Error:', error);
        });
    }

    const actionUpdate = async (id: string) => {
        dispatch<any>(updateTodo(id, formData)).then(() => {
            setFormData({ title: '', body: '' });
            navigate('/third-question');

        }).catch((error: any) => {
            console.error('Error:', error);
        });
    }

    const handleAction = async () => {
        if (formData.title && formData.body) {
            (id !== undefined) ? actionUpdate(id) : actionSave()

        } else {
            setAlert({ isShow: true, message: 'Please fill in both title and body.' })
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            dispatch<any>(getTodo(id))
                .then((res: any) => {
                    if (res) {
                        setFormData({
                            title: res.title,
                            body: res.body
                        });
                    }
                })
                .catch((err: any) => {
                    console.error('Error:', err);
                })
        }
    }, [dispatch])

    return (
        <Flex
            flexDirection={"column"}
        >
            {
                alert.isShow ?
                    <Container maxW={"1110px"} mt={6}>
                        <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle>{alert.message}</AlertTitle>
                        </Alert>
                    </Container>
                    : ''
            }

            <Container
                display="flex"
                flexDirection="column"
                alignContent="center"
                marginTop={12}
            >
                <Center color='#4eb6c2'>
                    <Heading as='h3' size='lg'>Answer to Third Question</Heading>
                </Center>

                <Center color='#000'>
                    <Heading as='h4' size='sm'>Add Todo List</Heading>
                </Center>

                <Box mt={5}>
                    <FormControl isRequired mb={4}>
                        <FormLabel>Title</FormLabel>
                        <Input
                            name='title'
                            placeholder='ex: Membeli buah.'
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Body</FormLabel>
                        <Input
                            name='body'
                            placeholder='ex: Untuk kebutuhan selama 1 hari.'
                            value={formData.body}
                            onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
                    </FormControl>

                    <Flex
                        mt={3}
                        justifyContent={"flex-end"}
                    >
                        <Button mr={4} size='sm' onClick={() => navigate('/third-question')}>
                            Back
                        </Button>
                        <Button colorScheme='teal' size='sm' onClick={handleAction}>
                            {id !== undefined ? 'Update' : 'Save'}
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </Flex>
    )
}

export default FormTodo