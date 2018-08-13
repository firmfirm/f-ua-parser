import './f-browser-icon.js';
import './f-os-iconset.js';
FirmFirm.OsIcon = (function() {
  'use strict';
  class OsIcon extends FirmFirm.BrowserIcon {
    static get is() { return 'f-os-icon'; }
    _computeIcon(os) {
      let icon = (os || '').toLowerCase();
      if (icon.indexOf('android') >= 0) icon = 'android';
      else if (icon.indexOf('windows') >= 0) icon = 'windows';
      else if (icon.indexOf('ios') >= 0 || icon.indexOf('mac') >= 0) icon = 'ios';
      else if (icon.indexOf('blackberry') >= 0) icon = 'blackberry';
      else icon = 'linux';
      return `os:${icon}`;
    }
  }
  customElements.define(OsIcon.is, OsIcon);
  return OsIcon;
})();
