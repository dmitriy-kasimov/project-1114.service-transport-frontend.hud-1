import { Text, HStack, Card } from '@project-1114/ui-kit';
import { FC } from 'react';

export const Speedometer: FC = () => {
    return (
        <Card variant={'transparent'}>
            <HStack align={'center'} gap={'s'}>
                <Text size={'xl'}>55</Text>
                <Text>км/ч</Text>
            </HStack>
        </Card>
    );
};
