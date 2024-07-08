import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
    const navigate = useNavigate();
    const { removeItem } = useCart();

    const handleRemoveItem = (e) => {
        e.stopPropagation();
        removeItem(id);
    };

    return (
        <Flex width='90vw' onClick={() => navigate(`/item/${id}`)} cursor='pointer' m={3}>
            <Box
                role={'group'}
                p={6}
                maxW={'100%'}
                w={'full'}
                bg='white'
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Flex justifyContent='space-between' alignItems='center'>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Flex justifyContent='space-around' width='50%' alignItems='center'>
                        <Text fontWeight={800} fontSize={'xl'} mr={3}>
                            Cantidad: {quantity}
                        </Text>
                        <Text fontWeight={800} fontSize={'xl'} mr={3}>
                            Precio: ${price}
                        </Text>
                        <Text fontWeight={800} fontSize={'xl'}>
                            Subtotal: ${price * quantity}
                        </Text>
                    </Flex>
                    <Button 
                        variant="solid" 
                        size="md" 
                        backgroundColor="#ff6666"
                        color="#ffffff"
                        onClick={handleRemoveItem}
                    >
                        Remove
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}

export default CartItem;
