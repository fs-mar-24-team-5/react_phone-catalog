// eslint-disable-next-line import/no-extraneous-dependencies
import Intercom from '@intercom/messenger-js-sdk';

export function Chat() {
  Intercom({
    app_id: 'mva304yk',
  });

  return <div>Example App</div>;
}
