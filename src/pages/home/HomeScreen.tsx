import { strings } from '../../shared/resources/strings';
import { AppScreen, PlaceholderView } from '../../shared/ui';

export function HomeScreen() {
  return (
    <AppScreen edges={['bottom']}>
      <PlaceholderView
        title={strings.home.placeholderTitle}
        body={strings.home.placeholderBody}
      />
    </AppScreen>
  );
}
