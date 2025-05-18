import cls from './App.module.css';
import { Speedometer } from './components/Speedometr/Speedometer.tsx';
import { IndicatorsPanel } from './widgets/IndicatorsPanel';
import { ResourcesPanel } from './widgets/ResourcesPanel';
import { HStack } from '@project-1114/ui-kit';

function App() {
    return (
        <div className={cls.App}>
            <HStack gap={'m'}>
                <Speedometer />
                <IndicatorsPanel />
                <ResourcesPanel />
            </HStack>
        </div>
    );
}

export default App;
