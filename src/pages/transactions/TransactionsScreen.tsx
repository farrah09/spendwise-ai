import { strings } from '../../shared/resources/strings';
import { AppScreen, PlaceholderView } from '../../shared/ui';

export function TransactionsScreen() {
  return (
    <AppScreen edges={['bottom']}>
      <PlaceholderView
        title={strings.transactions.placeholderTitle}
        body={strings.transactions.placeholderBody}
      />
    </AppScreen>
  );
}
