import { strings } from '../../shared/resources/strings';
import { PlaceholderView } from '../../shared/ui/PlaceholderView';
import { ScreenContainer } from '../../shared/ui/ScreenContainer';

export function SettingsScreen() {
  return (
    <ScreenContainer edges={['bottom']}>
      <PlaceholderView
        title={strings.settings.placeholderTitle}
        body={strings.settings.placeholderBody}
      />
    </ScreenContainer>
  );
}
