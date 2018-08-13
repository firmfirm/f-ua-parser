import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="os" size="24">
  <svg>
    <defs>
      <path id="windows" d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z"></path>
      <path id="linux" d="M13.18,14.5C12.53,15.26 11.47,15.26 10.82,14.5L7.44,10.5C7.16,11.28 7,12.12 7,13C7,14.67 7.57,16.18 8.5,17.27C10,17.37 11.29,17.96 11.78,19C11.85,19 11.93,19 12.22,19C12.71,18 13.95,17.44 15.46,17.33C16.41,16.24 17,14.7 17,13C17,12.12 16.84,11.28 16.56,10.5L13.18,14.5M20,20.75C20,21.3 19.3,22 18.75,22H13.25C12.7,22 12,21.3 12,20.75C12,21.3 11.3,22 10.75,22H5.25C4.7,22 4,21.3 4,20.75C4,19.45 4.94,18.31 6.3,17.65C5.5,16.34 5,14.73 5,13C4,15 2.7,15.56 2.09,15C1.5,14.44 1.79,12.83 3.1,11.41C3.84,10.6 5,9.62 5.81,9.25C6.13,8.56 6.54,7.93 7,7.38V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7V7.38C17.46,7.93 17.87,8.56 18.19,9.25C19,9.62 20.16,10.6 20.9,11.41C22.21,12.83 22.5,14.44 21.91,15C21.3,15.56 20,15 19,13C19,14.75 18.5,16.37 17.67,17.69C19.05,18.33 20,19.44 20,20.75M9.88,9C9.46,9.5 9.46,10.27 9.88,10.75L11.13,12.25C11.54,12.73 12.21,12.73 12.63,12.25L13.88,10.75C14.29,10.27 14.29,9.5 13.88,9H9.88M10,5.25C9.45,5.25 9,5.9 9,7C9,8.1 9.45,8.75 10,8.75C10.55,8.75 11,8.1 11,7C11,5.9 10.55,5.25 10,5.25M14,5.25C13.45,5.25 13,5.9 13,7C13,8.1 13.45,8.75 14,8.75C14.55,8.75 15,8.1 15,7C15,5.9 14.55,5.25 14,5.25Z"></path>
      <path id="ios" d="M20,9V7H16A2,2 0 0,0 14,9V11A2,2 0 0,0 16,13H18V15H14V17H18A2,2 0 0,0 20,15V13A2,2 0 0,0 18,11H16V9M11,15H9V9H11M11,7H9A2,2 0 0,0 7,9V15A2,2 0 0,0 9,17H11A2,2 0 0,0 13,15V9A2,2 0 0,0 11,7M4,17H6V11H4M4,9H6V7H4V9Z"></path>
      <path id="android" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z"></path>
      <path id="blackberry" d="M5.45,10.28C6.4,10.28 7.5,11.05 7.5,12C7.5,12.95 6.4,13.72 5.45,13.72H2L2.69,10.28H5.45M6.14,4.76C7.09,4.76 8.21,5.53 8.21,6.5C8.21,7.43 7.09,8.21 6.14,8.21H2.69L3.38,4.76H6.14M13.03,4.76C14,4.76 15.1,5.53 15.1,6.5C15.1,7.43 14,8.21 13.03,8.21H9.41L10.1,4.76H13.03M12.34,10.28C13.3,10.28 14.41,11.05 14.41,12C14.41,12.95 13.3,13.72 12.34,13.72H8.72L9.41,10.28H12.34M10.97,15.79C11.92,15.79 13.03,16.57 13.03,17.5C13.03,18.47 11.92,19.24 10.97,19.24H7.5L8.21,15.79H10.97M18.55,13.72C19.5,13.72 20.62,14.5 20.62,15.45C20.62,16.4 19.5,17.17 18.55,17.17H15.1L15.79,13.72H18.55M19.93,8.21C20.88,8.21 22,9 22,9.93C22,10.88 20.88,11.66 19.93,11.66H16.5L17.17,8.21H19.93Z"></path>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);