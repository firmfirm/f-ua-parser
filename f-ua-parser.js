import '@polymer/polymer/polymer-legacy.js';
import 'ua-parser-js/dist/ua-parser.min.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
window.FirmFirm = window.FirmFirm || {};
FirmFirm.UaParser = (function() {
  class UaParser extends PolymerElement {
    static get is() { return 'f-ua-parser'; }
    static get properties() {
      return {
        ua: String,
        data: {
          type: Object,
          notify: true,
          computed: '_computeData(ua)',
        },
      };
    }
    _computeData(ua) {
      if (!ua) return;
      const parser = new UAParser();
      parser.setUA(ua);
      return parser.getResult();
    }
  }
  customElements.define(UaParser.is, UaParser);
  return UaParser;
})();
