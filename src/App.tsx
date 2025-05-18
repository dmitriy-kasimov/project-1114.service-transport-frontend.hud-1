import cls from './App.module.css';
import { Speedometer } from './components/Speedometr/Speedometer.tsx';
import { CtrlsPanel } from './widgets/CtrlsPanel';
import { ResourcesPanel } from './widgets/ResourcesPanel';
import { HStack } from '@project-1114/ui-kit';

function App() {
    return (
        <div className={cls.App}>
            <HStack gap={'m'}>
                <Speedometer />
                <CtrlsPanel />
                <ResourcesPanel />
            </HStack>
        </div>
    );
}

export default App;
