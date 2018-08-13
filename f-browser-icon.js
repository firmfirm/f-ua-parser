import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-icon/iron-icon.js';
import './f-browser-iconset.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
window.FirmFirm = window.FirmFirm || {};
FirmFirm.BrowserIcon = class BrowserIcon extends PolymerElement {
  static get template() {
    return html`
    <iron-icon icon="[[_icon]]"></iron-icon>
`;
  }

  static get is() { return 'f-browser-icon'; }
  static get properties() {
    return {
      icon: {
        type: String,
        reflectToAttribute: true,
      },
      _icon: {
        type: String,
        computed: '_computeIcon(icon)',
      },
    };
  }
  _computeIcon(browser) {
    if (!browser) return;
    let icon = browser.toLowerCase();
    if (icon.indexOf('android') >= 0) icon = 'android';
    else if (icon.indexOf('chrom') >= 0) icon = 'chrome';
    else if (icon.indexOf('opera') >= 0) icon = 'opera';
    else if (icon.indexOf('safari') >= 0) icon = 'safari';
    else if (icon.indexOf('ie') == 0) icon = 'ie';
    else icon = 'default';
    return `browsers:${icon}`;
  }
}
customElements.define(FirmFirm.BrowserIcon.is, FirmFirm.BrowserIcon);
