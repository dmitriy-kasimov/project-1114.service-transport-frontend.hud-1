import { FC } from 'react';
import { Text } from '@project-1114/ui-kit';

type IndicatorProps = {
    label: string;
    active?: boolean;
};
export const Indicator: FC<IndicatorProps> = ({ label, active }) => (
    <Text color={active ? 'success' : 'secondary'} size={'l'}>
        {label}
    </Text>
);
