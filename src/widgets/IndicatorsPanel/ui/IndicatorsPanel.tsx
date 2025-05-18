import { FC } from 'react';
import { Card, HStack } from '@project-1114/ui-kit';
import { indicators } from '../const/indicators.ts';
import { Indicator } from '../../../components/Indicator/Indicator.tsx';

export const IndicatorsPanel: FC = () => {
    return (
        <Card variant={'outlined'}>
            <HStack align={'center'} gap={'m'}>
                {indicators.map((indicatorLabel) => (
                    <Indicator key={indicatorLabel} label={indicatorLabel} />
                ))}
            </HStack>
        </Card>
    );
};
