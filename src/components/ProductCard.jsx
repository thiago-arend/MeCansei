import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import apiWishlist from "../services/apiWishlist";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useLocation } from "react-router-dom";

export default function ProductCard(props) {
    const { id, name, description, currentPrice, category, photoUrl } = props.product;
    const {wishlistProducts, setWishlistProducts} = props;
    const { user } = useContext(UserContext);
    const location = useLocation();

    function removeFromWishlist() {
        const addTo = confirm(`Deseja remover ${name} da sua wishlist?`);
        if (!addTo) return;

        apiWishlist.deleteProductFromWishlist(user.token, id)
            .then(() => {
                setWishlistProducts(wishlistProducts.filter(p => p.id !== id));
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    }

    return (
        <Card size="sm" onClick={(location.pathname === "/wishlist") ? removeFromWishlist : (() => {return})} >
            <CardBody align="center">
                <Image
                    width="105px"
                    src={photoUrl}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Stack direction="row" justify="space-between" align="center">
                        <Text color='#5B9A8B' fontSize='md'>
                            R$ {(currentPrice / 100).toFixed(2).replace(".", ",")}
                        </Text>
                        <Text color='#5B9A8B' fontSize='sm'>
                            {category.toUpperCase()}
                        </Text>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}