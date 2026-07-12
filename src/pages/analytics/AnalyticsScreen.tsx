import { strings } from '../../shared/resources/strings';
import { PlaceholderView } from '../../shared/ui/PlaceholderView';
import { ScreenContainer } from '../../shared/ui/ScreenContainer';

export function AnalyticsScreen() {
  return (
    <ScreenContainer edges={['bottom']}>
      <PlaceholderView
        title={strings.analytics.placeholderTitle}
        body={strings.analytics.placeholderBody}
      />
    </ScreenContainer>
  );
}
