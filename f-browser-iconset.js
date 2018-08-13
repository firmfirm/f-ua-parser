import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="browsers" size="24">
  <svg>
    <defs>
      <path id="chrome" d="M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
      <path id="android" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z"></path>
      <path id="firefox" d="M21,11.7C21,11.3 20.9,10.7 20.8,10.3C20.5,8.6 19.6,7.1 18.5,5.9C18.3,5.6 17.9,5.3 17.5,5C16.4,4.1 15.1,3.5 13.6,3.2C10.6,2.7 7.6,3.7 5.6,5.8C5.6,5.8 5.6,5.7 5.6,5.7C5.5,5.5 5.5,5.5 5.4,5.5C5.4,5.5 5.4,5.5 5.4,5.5C5.3,5.3 5.3,5.2 5.2,5.1C5.2,5.1 5.2,5.1 5.2,5.1C5.2,4.9 5.1,4.7 5.1,4.5C4.8,4.6 4.8,4.9 4.7,5.1C4.7,5.1 4.7,5.1 4.7,5.1C4.5,5.3 4.3,5.6 4.3,5.9C4.3,5.9 4.3,5.9 4.3,5.9C4.2,6.1 4,7 4.2,7.1C4.2,7.1 4.2,7.1 4.3,7.1C4.3,7.2 4.3,7.3 4.3,7.4C4.1,7.6 4,7.7 4,7.8C3.7,8.4 3.4,8.9 3.3,9.5C3.3,9.7 3.3,9.8 3.3,9.9C3.3,9.9 3.3,9.9 3.3,9.9C3.3,9.9 3.3,9.8 3.3,9.8C3.1,10 3.1,10.3 3,10.5C3.1,10.5 3.1,10.4 3.2,10.4C2.7,13 3.4,15.7 5,17.7C7.4,20.6 11.5,21.8 15.1,20.5C18.6,19.2 21,15.8 21,12C21,11.9 21,11.8 21,11.7M13.5,4.1C15,4.4 16.4,5.1 17.5,6.1C17.6,6.2 17.7,6.4 17.7,6.4C17.4,6.1 16.7,5.6 16.3,5.8C16.4,6.1 17.6,7.6 17.7,7.7C17.7,7.7 18,9 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.3 17.4,11.9 17.4,12.3C17.4,12.4 16.5,14.2 16.6,14.2C16.3,14.9 16,14.9 15.9,15C15.8,15 15.2,15.2 14.5,15.4C13.9,15.5 13.2,15.7 12.7,15.6C12.4,15.6 12,15.6 11.7,15.4C11.6,15.3 10.8,14.9 10.6,14.8C10.3,14.7 10.1,14.5 9.9,14.3C10.2,14.3 10.8,14.3 11,14.3C11.6,14.2 14.2,13.3 14.1,12.9C14.1,12.6 13.6,12.4 13.4,12.2C13.1,12.1 11.9,12.3 11.4,12.5C11.4,12.5 9.5,12 9,11.6C9,11.5 8.9,10.9 8.9,10.8C8.8,10.7 9.2,10.4 9.2,10.4C9.2,10.4 10.2,9.4 10.2,9.3C10.4,9.3 10.6,9.1 10.7,9C10.6,9 10.8,8.9 11.1,8.7C11.1,8.7 11.1,8.7 11.1,8.7C11.4,8.5 11.6,8.5 11.6,8.2C11.6,8.2 12.1,7.3 11.5,7.4C11.5,7.4 10.6,7.3 10.3,7.3C10,7.5 9.9,7.4 9.6,7.3C9.6,7.3 9.4,7.1 9.4,7C9.5,6.8 10.2,5.3 10.5,5.2C10.3,4.8 9.3,5.1 9.1,5.4C9.1,5.4 8.3,6 7.9,6.1C7.9,6.1 7.9,6.1 7.9,6.1C7.9,6 7.4,5.9 6.9,5.9C8.7,4.4 11.1,3.7 13.5,4.1Z"></path>
      <path id="ie" d="M13,3L14,3.06C16.8,1.79 19.23,1.64 20.5,2.92C21.5,3.93 21.58,5.67 20.92,7.72C21.61,9 22,10.45 22,12L21.95,13H9.08C9.45,15.28 11.06,17 13,17C14.31,17 15.47,16.21 16.2,15H21.5C20.25,18.5 16.92,21 13,21C11.72,21 10.5,20.73 9.41,20.25C6.5,21.68 3.89,21.9 2.57,20.56C1,18.96 1.68,15.57 4,12C4.93,10.54 6.14,9.06 7.57,7.65L8.38,6.88C7.21,7.57 5.71,8.62 4.19,10.17C5.03,6.08 8.66,3 13,3M13,7C11.21,7 9.69,8.47 9.18,10.5H16.82C16.31,8.47 14.79,7 13,7M20.06,4.06C19.4,3.39 18.22,3.35 16.74,3.81C18.22,4.5 19.5,5.56 20.41,6.89C20.73,5.65 20.64,4.65 20.06,4.06M3.89,20C4.72,20.84 6.4,20.69 8.44,19.76C6.59,18.67 5.17,16.94 4.47,14.88C3.27,17.15 3,19.07 3.89,20Z"></path>
      <path id="opera" d="M17.33,3.57C15.86,2.56 14.05,2 12,2C10.13,2 8.46,2.47 7.06,3.32C4.38,4.95 2.72,8 2.72,11.9C2.72,17.19 6.43,22 12,22C17.57,22 21.28,17.19 21.28,11.9C21.28,8.19 19.78,5.25 17.33,3.57M12,3.77C15,3.77 15.6,7.93 15.6,11.72C15.6,15.22 15.26,19.91 12.04,19.91C8.82,19.91 8.4,15.17 8.4,11.67C8.4,7.89 9,3.77 12,3.77Z"></path>
      <path id="safari" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z"></path>
      <path id="edge" d="M2.74,10.81C3.83,-1.36 22.5,-1.36 21.2,13.56H8.61C8.61,17.85 14.42,19.21 19.54,16.31V20.53C13.25,23.88 5,21.43 5,14.09C5,8.58 9.97,6.81 9.97,6.81C9.97,6.81 8.58,8.58 8.54,10.05H15.7C15.7,2.93 5.9,5.57 2.74,10.81Z"></path>
      <path id="default" d="M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"></path>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);