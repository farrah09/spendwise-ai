import { strings } from '../../shared/resources/strings';
import { PlaceholderView } from '../../shared/ui/PlaceholderView';
import { ScreenContainer } from '../../shared/ui/ScreenContainer';

export function TransactionsScreen() {
  return (
    <ScreenContainer edges={['bottom']}>
      <PlaceholderView
        title={strings.transactions.placeholderTitle}
        body={strings.transactions.placeholderBody}
      />
    </ScreenContainer>
  );
}
