import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function ProductCard(props) {
    const { name, description, currentPrice, category, photoUrl } = props.product;

    return (
        <Card size="sm">
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
                            {category}
                        </Text>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}