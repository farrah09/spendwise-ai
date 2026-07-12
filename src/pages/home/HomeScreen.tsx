import { strings } from '../../shared/resources/strings';
import { PlaceholderView } from '../../shared/ui/PlaceholderView';
import { ScreenContainer } from '../../shared/ui/ScreenContainer';

export function HomeScreen() {
  return (
    <ScreenContainer edges={['bottom']}>
      <PlaceholderView
        title={strings.home.placeholderTitle}
        body={strings.home.placeholderBody}
      />
    </ScreenContainer>
  );
}
