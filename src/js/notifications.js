import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

import { success, error } from '@pnotify/core';

function notification(article) {
  if (article.hits.length === 0) {
    error({
      text: 'Nothing found.',
    });
  } else {
    success({
      text: `We found ${article.total} results`,
    });
  }
}

export default notification;
