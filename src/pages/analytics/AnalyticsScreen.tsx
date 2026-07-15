import { strings } from '../../shared/resources/strings';
import { AppScreen, PlaceholderView } from '../../shared/ui';

export function AnalyticsScreen() {
  return (
    <AppScreen edges={['bottom']}>
      <PlaceholderView
        title={strings.analytics.placeholderTitle}
        body={strings.analytics.placeholderBody}
      />
    </AppScreen>
  );
}
