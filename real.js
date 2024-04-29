function replace(iconType, iconSVG) {
    const icons = document.querySelectorAll(`.${iconType}`);
  
    icons.forEach(span => {
      const iconSVGImage = new DOMParser().parseFromString(iconSVG, 'image/svg+xml').querySelector('svg');
  
      span.parentNode.replaceChild(iconSVGImage, span);
    });
}

const icons = {
    leaderboardIcon: `
    <svg class="leaderIconDone" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 365 511.41" fill="#FFFFFF"><path d="M312.22 319.17 365 442.58l-66.17-.77-54.38 44.12-47.7-116.25c13.79-3.35 27.44-10.32 41.22-21.13l1.66-1.22-.03-.04.9-.7-.04-.06c1.75-1.4 3.55-2.83 5.15-4.05 3.33.21 6.93.34 11.42.13 6.19-.28 12.83-1.26 20.17-3.62 6.46-2.08 12.45-4.63 17.95-7.67a92.904 92.904 0 0 0 15.92-11.07l-.04-.05 1.19-1.03zM176.94.02c6.61-.18 12.52.85 18.01 2.74 5.06 1.74 9.7 4.23 14.27 7.13 4.64 2.88 9.01 6.59 13.68 10.59 4.47 3.82 9.4 8.02 14.35 10.85l.32.19c2.04.78 7.25.99 12.7 1.18 18.99.7 39.48 1.46 54.86 24.29l.84 1.35c11.01 16.92 11.83 29.59 12.62 41.99l.04.87c.25 3.82.69 7.41 1.89 10.96 1.32 3.75 3.64 8.07 7.74 13.5 11.11 14.68 17.97 27.55 20.79 40.04 3.34 14.82 1.15 28.02-6.3 41.3-5.31 9.44-12.4 15.52-18.65 20.87-2.26 1.93-3.38 1.55-3.83 2.61l-.46 1.01c-1.07 3.17-1.14 7.07-1.19 11.04-.15 10.2-.33 20.77-7.49 34.9-4.49 8.84-10.36 16.31-17.53 22.41-7.04 6.06-15.27 10.57-24.61 13.58-9.57 3.08-17.24 2.54-24.49 2.02-2.77-.19-4.74-.67-5.07-.53-5.2 2.25-10.72 6.69-15.91 10.84l-1.2.9c-32.39 25.86-61.07 23.86-91.96-.9-5.18-4.15-10.71-8.58-15.92-10.76-.52-.23-4.25.39-5.06.45-7.26.52-14.93 1.06-24.49-2.02-9.35-3.01-17.57-7.52-24.61-13.5-7.13-6.06-12.99-13.56-17.53-22.49-7.18-14.14-7.34-24.71-7.49-34.91-.06-4.41-.14-8.72-1.57-12.04-.5-1.17-1.57-.61-3.91-2.61-6.24-5.34-13.35-11.41-18.66-20.87-7.45-13.28-9.63-26.48-6.29-41.3 2.81-12.5 9.67-25.36 20.78-40.04 4.1-5.43 6.43-9.75 7.72-13.51l.25-.7c1.03-3.31 1.43-6.68 1.65-10.25l.09-1.36c.81-12.58 1.77-25.45 13.42-42.77 15.37-22.9 35.87-23.67 54.87-24.37 5.79-.21 11.31-.43 13.04-1.33 4.94-2.87 9.86-7.07 14.35-10.91l1.22-.97c4.21-3.57 8.18-6.91 12.37-9.56 4.46-2.89 9.11-5.38 14.33-7.17C164.41.87 170.29-.16 176.94.02zm.01 17.56c8.32-.36 14.88 2.54 21.5 6.75 8.4 5.33 17.86 15.85 29.53 22.53 16.43 9.38 46.85-3.57 62.43 19.58 9.09 13.49 9.51 24.08 10.19 34.53.73 11.28 2.71 21.65 14.25 36.92 19.11 25.27 23.09 42.09 13.25 59.62-6.72 11.95-20.85 18.59-24.12 26.16-6.96 16.1.74 28.24-8.79 47.01-6.61 13.03-16.82 21.61-30.42 25.99-11.46 3.69-22.96-1.65-32.14 2.21-16.13 6.77-28.03 22.53-40.86 26.51-4.95 1.53-9.89 2.29-14.82 2.26-4.93.03-9.87-.73-14.82-2.26-12.84-3.98-24.73-19.74-40.86-26.51-9.18-3.86-20.68 1.48-32.15-2.21-13.59-4.38-23.8-12.96-30.41-25.99-9.53-18.77-1.83-30.91-8.79-47.01-3.27-7.57-17.41-14.21-24.12-26.16-9.85-17.53-5.86-34.35 13.24-59.62 11.54-15.27 13.52-25.64 14.25-36.92.68-10.45 1.11-21.04 10.19-34.53 15.58-23.15 46.01-10.2 62.43-19.58 11.68-6.68 21.13-17.2 29.54-22.53 6.62-4.21 13.18-7.11 21.5-6.75zm1.92 110.29 12.5 29.27 31.71 2.84a2.53 2.53 0 0 1 2.31 2.75 2.55 2.55 0 0 1-.86 1.7l-23.98 20.94 7.09 31.05a2.543 2.543 0 0 1-3.87 2.7l-27.25-16.29-27.33 16.34c-1.21.72-2.77.33-3.49-.88a2.53 2.53 0 0 1-.3-1.87l7.1-31.05-23.99-20.94a2.538 2.538 0 0 1-.24-3.59c.47-.54 1.12-.83 1.78-.87l31.62-2.83 12.51-29.29c.55-1.3 2.04-1.9 3.34-1.35.64.27 1.1.78 1.35 1.37zm-2.35-52.98c55.04 0 99.67 44.63 99.67 99.67 0 55.05-44.63 99.67-99.67 99.67-55.05 0-99.67-44.62-99.67-99.67 0-55.04 44.62-99.67 99.67-99.67zm0 16.83c45.75 0 82.84 37.09 82.84 82.84 0 45.76-37.09 82.84-82.84 82.84-45.76 0-82.84-37.08-82.84-82.84 0-45.75 37.08-82.84 82.84-82.84zm-.33 280.31-55.64 139.38-54.38-44.11-66.17.76 57.72-137.29 1.05.59c5.5 3.01 11.49 5.57 17.91 7.63 7.33 2.36 13.97 3.34 20.16 3.62 4.44.21 8.02.08 11.33-.12 1.63 1.23 3.51 2.73 5.31 4.18l.04.03c20.08 16.08 40.24 24.8 61.63 25.32l1.04.01z"/></svg>
    `,
    battleIcon: `
      <svg class="battleIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 118.71" style="enable-background:new 0 0 122.88 118.71" xml:space="preserve" fill="#FFFFFF"><g><path d="M51.31,31.23c2.55-4.65,5.15-8.64,7.79-12c0.1-0.13,0.2-0.25,0.3-0.38c3.19-5.52,5.43-11.01,2.84-12.81l0,0 c-1.68-1.16-4.12-1.2-6.67-0.64c-3.81,0.83-7.67,2.93-9.99,4.82c-3.04,2.47-5.75,5.62-8.07,8.98c-2.76,4.01-4.93,8.28-6.38,12.04 c-1.48,3.85-2.54,7.96-3.15,12.36c-0.59,4.29-0.75,8.85-0.44,13.69c2.83,7.42,6.63,14,11.44,19.69c0.36,0.41,0.72,0.81,1.09,1.21 c5.54,5.96,12.31,10.72,20.21,14.36l0,0c0.09,0.04,0.18,0.09,0.27,0.15c0.95-0.07,1.92-0.16,2.9-0.28c1.7-0.21,3.35-0.48,4.96-0.81 c5.3-1.09,9.78-2.69,14.01-4.83c4.28-2.16,8.34-4.88,12.77-8.15c2.16-1.6,4.31-3.32,6.44-5.17c2.12-1.84,4.14-3.75,6.05-5.74l0,0 c4.16-4.7,7.01-9.24,8.61-13.63c1.55-4.26,1.91-8.38,1.11-12.38c-0.74-3.73-3.16-8.11-6.22-12.32c-3.91-5.38-8.82-10.38-12.66-13.4 c-1.65-1.3-3.28-2.39-4.88-3.27c-5.18-2.83-10.31-3.58-15.3-2.11c-5.09,1.5-10.16,5.29-15.11,11.53c-2.06,3.59-4.37,6.95-6.13,9.51 c-0.48,0.7-0.9,1.31-1.55,2.3c-0.77,1.16-2.34,1.48-3.5,0.71C50.93,33.91,50.6,32.38,51.31,31.23L51.31,31.23z M19.5,66.5 c-0.17,6.41,0.83,9.06,5.6,15.25c1.68,2.18,3.51,4.36,5.5,6.54c3.73,2.86,4.32,5.71,1.4,8.57l-1.4,1.56 c-2.52,1.56-5.31,1.85-9.04-2.34l-5.54-7.03c-2.49-3.16-5.72-6.19-5.96-10.43c-0.04-0.79-0.01-1.6,0.09-2.44l-2.43,2.51 c-0.79,1-1.43,2.03-1.88,3.1C5.39,82.82,5.12,83.89,5.06,85c-0.21,3.71,3.45,9.41,8.27,14.78c5.86,6.53,13.25,12.32,17.65,13.58 c6.96,2.01,14.64-6.88,21.08-14.32c0.88-1.02,1.74-2.01,2.58-2.96c-7.18-3.96-13.31-8.84-18.42-14.59 c-0.42-0.47-0.83-0.94-1.23-1.42c-4.53-5.21-8.26-11.21-11.14-18.04L19.5,66.5L19.5,66.5z M59.89,97.79 c-1.27,1.37-2.62,2.93-4.03,4.56c-7.4,8.56-16.22,18.76-26.28,15.87c-5.24-1.51-13.61-7.92-20.02-15.07 C3.96,96.9-0.28,89.91,0.01,84.72c0.1-1.74,0.51-3.39,1.18-4.95c0.65-1.51,1.54-2.95,2.64-4.32l0,0c0.05-0.06,0.1-0.12,0.16-0.18 l18.43-19.06c-0.22-4.66-0.02-9.1,0.56-13.31c0.66-4.75,1.82-9.23,3.44-13.46c1.59-4.12,3.95-8.78,6.93-13.11 c2.57-3.72,5.61-7.24,9.04-10.03c2.82-2.29,7.5-4.84,12.11-5.84c3.79-0.83,7.62-0.64,10.61,1.44l0.01,0l0,0 c2.78,1.93,3.45,4.96,2.9,8.44c2.92-2.16,5.89-3.68,8.91-4.56c6.33-1.86,12.74-0.96,19.13,2.53c1.89,1.03,3.76,2.27,5.59,3.72 c4.15,3.27,9.43,8.64,13.63,14.41c3.44,4.73,6.19,9.79,7.09,14.31c0.97,4.89,0.55,9.91-1.33,15.06c-1.82,5-5.02,10.11-9.65,15.33 c-0.02,0.03-0.05,0.05-0.07,0.08l0,0c-2.09,2.16-4.21,4.17-6.37,6.05c-2.15,1.87-4.4,3.67-6.75,5.41c-4.65,3.44-8.94,6.3-13.5,8.6 c-4.61,2.33-9.49,4.08-15.27,5.27c-1.83,0.38-3.63,0.67-5.37,0.89C62.7,97.59,61.31,97.71,59.89,97.79L59.89,97.79z"/></g></svg>
    `,
    enchantIcon: `
      <svg class="enchantIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 101.37" style="enable-background:new 0 0 122.88 101.37" xml:space="preserve" fill="#FFFFFF"><g><path d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"/></g></svg>
    `,
    uClanIcon: `
      <svg class="uClanIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="111.811px" height="122.88px" viewBox="0 0 111.811 122.88" enable-background="new 0 0 111.811 122.88" xml:space="preserve" fill="#FFFFFF"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M55.713,0c20.848,13.215,39.682,19.467,55.846,17.989 c2.823,57.098-18.263,90.818-55.63,104.891C19.844,109.708-1.5,77.439,0.083,17.123C19.058,18.116,37.674,14.014,55.713,0L55.713,0 z M56.163,19.543c14.217,9.011,27.061,13.274,38.083,12.268c1.925,38.936-12.454,61.93-37.935,71.526 c-0.161-0.059-0.319-0.12-0.479-0.18V19.796L56.163,19.543L56.163,19.543z M55.735,7.055 c18.454,11.697,35.126,17.232,49.434,15.923c2.498,50.541-16.166,80.39-49.241,92.846C23.986,104.165,5.091,75.603,6.493,22.211 C23.29,23.091,39.768,19.46,55.735,7.055L55.735,7.055z"/></g></svg>
    `,
    searchIcon: `
      <svg class="searchIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.879px" height="119.799px" viewBox="0 0 122.879 119.799" enable-background="new 0 0 122.879 119.799" xml:space="preserve" fill="#FFFFFF"><g><path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"/></g></svg>
    `
    ,
    itemsIcon: `
      <svg class="itemsIconDone" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 481.157" fill="#FFFFFF"><path d="M35.64 0h159.702c19.604 0 35.641 16.037 35.641 35.64v145.308c0 19.604-16.037 35.64-35.641 35.64H35.64c-19.603 0-35.64-16.036-35.64-35.64V35.64C0 16.037 16.037 0 35.64 0zm281.017 264.569h159.702c19.604 0 35.641 16.036 35.641 35.64v145.307c0 19.604-16.037 35.641-35.641 35.641H316.657c-19.603 0-35.64-16.037-35.64-35.641V300.209c0-19.604 16.037-35.64 35.64-35.64zm-281.017 0h159.702c19.604 0 35.641 16.036 35.641 35.64v145.307c0 19.604-16.037 35.641-35.641 35.641H35.64C16.037 481.157 0 465.12 0 445.516V300.209c0-19.604 16.037-35.64 35.64-35.64zM316.657 0h159.702C495.963 0 512 16.037 512 35.64v145.308c0 19.604-16.037 35.64-35.641 35.64H316.657c-19.603 0-35.64-16.036-35.64-35.64V35.64c0-19.603 16.037-35.64 35.64-35.64z"/></svg>
    `,
    historyIcon: `
      <svg class="historyIconDone" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 513.11" fill="#FFFFFF"><path fill-rule="nonzero" d="M210.48 160.8c0-14.61 11.84-26.46 26.45-26.46s26.45 11.85 26.45 26.46v110.88l73.34 32.24c13.36 5.88 19.42 21.47 13.54 34.82-5.88 13.35-21.47 19.41-34.82 13.54l-87.8-38.6c-10.03-3.76-17.16-13.43-17.16-24.77V160.8zM5.4 168.54c-.76-2.25-1.23-4.64-1.36-7.13l-4-73.49c-.75-14.55 10.45-26.95 25-27.69 14.55-.75 26.95 10.45 27.69 25l.74 13.6a254.258 254.258 0 0136.81-38.32c17.97-15.16 38.38-28.09 61.01-38.18 64.67-28.85 134.85-28.78 196.02-5.35 60.55 23.2 112.36 69.27 141.4 132.83.77 1.38 1.42 2.84 1.94 4.36 27.86 64.06 27.53 133.33 4.37 193.81-23.2 60.55-69.27 112.36-132.83 141.39a26.24 26.24 0 01-12.89 3.35c-14.61 0-26.45-11.84-26.45-26.45 0-11.5 7.34-21.28 17.59-24.92 7.69-3.53 15.06-7.47 22.09-11.8.8-.66 1.65-1.28 2.55-1.86 11.33-7.32 22.1-15.7 31.84-25.04.64-.61 1.31-1.19 2-1.72 20.66-20.5 36.48-45.06 46.71-71.76 18.66-48.7 18.77-104.46-4.1-155.72l-.01-.03C418.65 122.16 377.13 85 328.5 66.37c-48.7-18.65-104.46-18.76-155.72 4.1a203.616 203.616 0 00-48.4 30.33c-9.86 8.32-18.8 17.46-26.75 27.29l3.45-.43c14.49-1.77 27.68 8.55 29.45 23.04 1.77 14.49-8.55 27.68-23.04 29.45l-73.06 9c-13.66 1.66-26.16-7.41-29.03-20.61zM283.49 511.5c20.88-2.34 30.84-26.93 17.46-43.16-5.71-6.93-14.39-10.34-23.29-9.42-15.56 1.75-31.13 1.72-46.68-.13-9.34-1.11-18.45 2.72-24.19 10.17-12.36 16.43-2.55 39.77 17.82 42.35 19.58 2.34 39.28 2.39 58.88.19zm-168.74-40.67c7.92 5.26 17.77 5.86 26.32 1.74 18.29-9.06 19.97-34.41 3.01-45.76-12.81-8.45-25.14-18.96-35.61-30.16-9.58-10.2-25.28-11.25-36.11-2.39a26.436 26.436 0 00-2.55 38.5c13.34 14.2 28.66 27.34 44.94 38.07zM10.93 331.97c2.92 9.44 10.72 16.32 20.41 18.18 19.54 3.63 36.01-14.84 30.13-33.82-4.66-15-7.49-30.26-8.64-45.93-1.36-18.33-20.21-29.62-37.06-22.33C5.5 252.72-.69 262.86.06 274.14c1.42 19.66 5.02 39 10.87 57.83z"/></svg>
    `,
    acheivementsIcon: `
      <svg class="acheivementsIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 96.59 122.88" style="enable-background:new 0 0 96.59 122.88" xml:space="preserve" fill="#FFFFFF"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M16.75,0h62.99l-0.05,0.09l16.89,21.48L73.28,61.58c5.83,6.51,9.38,15.1,9.38,24.53 c0,20.31-16.46,36.77-36.77,36.77c-20.31,0-36.77-16.46-36.77-36.77c0-10.97,4.81-20.82,12.43-27.55L0,21.57L16.84,0.15L16.75,0 L16.75,0L16.75,0z M54,50.24L78.96,1.29L68.09,19.12H28.36L18.08,2.19l24.14,47.33c1.21-0.12,2.43-0.18,3.67-0.18 C48.68,49.34,51.39,49.65,54,50.24L54,50.24L54,50.24z M45.89,57.08c16.03,0,29.03,12.99,29.03,29.03c0,16.04-13,29.03-29.03,29.03 c-16.03,0-29.03-13-29.03-29.03C16.86,70.07,29.86,57.08,45.89,57.08L45.89,57.08z"/></g></svg>
    `,
    boostsIcon: `
      <svg class="boostsIconDone" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 478.78" fill="#FFFFFF"><path d="M215.19 151.71L56.73 10.4C31.89-11.1 1.69 1.61 0 40.45v395.71c1.02 39.29 32.69 53.89 59.87 32.97l155.32-138.47v105.5c2.22 40.63 32.38 53.53 59.87 32.97L492.5 275.3c26.35-23.5 25.65-44.41 0-68.21L271.92 10.4c-24.85-19.99-55.61-7.36-56.73 30.05v111.26z"/></svg>
    `,
    boothsIcon: `
      <svg class="boothsIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 119.83 122.88" style="enable-background:new 0 0 119.83 122.88" xml:space="preserve" fill="#FFFFFF"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M20.57,0h79.69c1.87,0,3.39,1.53,3.39,3.4s-1.53,3.4-3.39,3.4l-79.69,0c-1.87,0-3.39-1.53-3.39-3.4 C17.17,1.53,18.7,0,20.57,0L20.57,0z M118.58,43.17v4.1c0.04,0.39,0.06,0.78,0.06,1.17c0,6.88-6.43,12.46-14.36,12.46 c-7.93,0-14.36-5.58-14.36-12.46c0-0.29,0.01-0.59,0.03-0.88l-0.57,0c0.02,0.29,0.03,0.58,0.03,0.88c0,6.88-6.43,12.46-14.36,12.46 c-7.93,0-14.36-5.58-14.36-12.46c0-0.29,0.01-0.59,0.03-0.88h-0.57c0.02,0.29,0.03,0.58,0.03,0.88c0,6.88-6.43,12.46-14.36,12.46 c-7.93,0-14.36-5.58-14.36-12.46c0-0.29,0.01-0.59,0.03-0.88h-0.36c0.02,0.29,0.03,0.58,0.03,0.88c0,6.88-6.43,12.46-14.36,12.46 c-7.93,0-14.36-5.58-14.36-12.46c0-0.34,0.02-0.67,0.05-1v-4.27L118.58,43.17L118.58,43.17z M16.84,10.44h87.64l11.17,23.85H5.26 L16.84,10.44L16.84,10.44z M3.39,108.01h12.12v-38.3c0.2,0.01,0.4,0.02,0.6,0.02l0.05,0l0.23,0h0.04l0.03,0h0.16l0.03,0h0.14v0.03 h0.01v-0.03c5.48,0,10.55-1.75,14.5-4.65l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.01,0.01l0.02,0.01 l0.03,0.02l0.03,0.02l0.03,0.02l0.01,0l0.1,0.07l0,0l0.03,0.02l0.01,0.01l0.05,0.03l0.03,0.02l0.03,0.02l0.01,0.01l0.02,0.01 l0.03,0.02l0.03,0.02l0.03,0.02L32,65.59l0.03,0.02l0.02,0.02l0,0l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02 l0.01,0l0.23,0.15l0.03,0.02l0.03,0.02l0.18,0.12l0.03,0.02l0.22,0.13L33,66.22l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02l0.03,0.02 l0.03,0.02l0.03,0.02v25.1l53.38,0V66.93c0.86-0.45,1.7-0.96,2.49-1.51l0.02-0.02l0.01,0l0.16-0.11l0.01-0.01l0.05-0.03l0.05-0.03 l0,0l0.08-0.06l0.01,0l0.01-0.01l0.17-0.12c3.97,2.95,9.08,4.73,14.61,4.73v0.03l0.01,0v-0.03h0.03v38.27h12.12 c1.87,0,3.4,3.34,3.4,7.43c0,4.09-1.53,7.43-3.4,7.43H3.39c-1.86,0-3.39-3.34-3.39-7.43C0,111.36,1.53,108.01,3.39,108.01 L3.39,108.01z"/></g></svg>
    `,
    boxesIcon: `
      <svg class="boxesIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.878px" height="110.041px" viewBox="0 0 122.878 110.041" enable-background="new 0 0 122.878 110.041" xml:space="preserve" fill="#FFFFFF"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M1.149,0h120.583c0.631,0,1.146,0.518,1.146,1.149v28.383 c0,0.634-0.516,1.149-1.146,1.149H1.149C0.518,30.681,0,30.166,0,29.532V1.149C0,0.518,0.518,0,1.149,0L1.149,0z M7.224,36.787 h108.433c0.526,0,0.962,0.43,0.962,0.961v71.331c0,0.529-0.436,0.962-0.962,0.962H7.224c-0.528,0-0.961-0.433-0.961-0.962V37.749 C6.263,37.217,6.695,36.787,7.224,36.787L7.224,36.787z M45.005,48.526h32.87c3.529,0,6.419,2.888,6.419,6.417l0,0 c0,3.529-2.89,6.416-6.419,6.416h-32.87c-3.532,0-6.419-2.887-6.419-6.416l0,0C38.586,51.414,41.474,48.526,45.005,48.526 L45.005,48.526z"/></g></svg>
    `,
    buffsIcon: `
      <svg class="buffsIconDone" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="512" height="298" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 298.04" fill="#FFFFFF"><path fill-rule="nonzero" d="M70.94 285.81c-16.17 16.24-42.46 16.32-58.71.15-16.24-16.16-16.32-42.46-.15-58.7L226.57 12.23c16.16-16.24 42.46-16.32 58.7-.15l214.65 215.18c16.17 16.24 16.09 42.54-.15 58.7-16.25 16.17-42.54 16.09-58.71-.15L256 100.29 70.94 285.81z"/></svg>
    `,
    charmsIcon: `
      <svg class="charmsIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 108.79" style="enable-background:new 0 0 122.88 108.79" xml:space="preserve" fill="#FFFFFF"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M79.31,53.77c-1.98,0.6-4.01,1.1-6.08,1.5L94.1,76.13l-32.66,32.66L28.78,76.13l2.72-2.72l18.22-18.22 c-2.06-0.41-4.08-0.92-6.05-1.53l0.11-0.12c-2.12,2.42-5.23,3.95-8.69,3.95c-6.38,0-11.55-5.17-11.55-11.55 c0-0.93,0.11-1.84,0.32-2.7c-3.68-2.9-7.02-6.23-9.94-9.89c-0.76,0.16-1.55,0.24-2.35,0.24C5.17,33.58,0,28.41,0,22.03 c0-3.22,1.32-6.14,3.45-8.23c-0.97-3.04-1.71-6.19-2.19-9.42C0.95,2.29,2.4,0.35,4.49,0.04c2.09-0.31,4.04,1.14,4.34,3.23 c0.37,2.48,0.92,4.9,1.62,7.26l-0.01,0c0.37-0.04,0.74-0.05,1.11-0.05c6.38,0,11.55,5.17,11.55,11.55c0,2.78-0.98,5.32-2.61,7.31 l0.01-0.01c2.26,2.72,4.78,5.22,7.53,7.45l0,0c1.95-1.51,4.4-2.4,7.05-2.4c6.38,0,11.55,5.17,11.55,11.55 c0,0.32-0.07,1.75-0.02,0.61c3.17,0.93,6.47,1.57,9.85,1.9c3.3,0.2,6.62,0.27,9.99,0.04c3.38-0.3,6.66-0.91,9.82-1.81 c-0.02-0.24-0.02-0.49-0.02-0.74c0-6.38,5.17-11.55,11.55-11.55c2.76,0,5.3,0.97,7.28,2.59c0.15-0.12,0.3-0.24,0.45-0.36 c2.57-2.11,4.94-4.45,7.08-7c-1.76-2.03-2.83-4.68-2.83-7.58c0-6.38,5.17-11.55,11.55-11.55c0.52,0,1.04,0.04,1.54,0.1 c0.48-1.59,0.88-3.22,1.21-4.87c0.41-2.08,2.42-3.43,4.49-3.02c2.08,0.41,3.43,2.42,3.02,4.49c-0.47,2.38-1.08,4.7-1.82,6.97 c1.92,2.06,3.1,4.83,3.1,7.88c0,6.38-5.17,11.55-11.55,11.55c-0.67,0-1.32-0.06-1.96-0.17c-2.67,3.33-5.68,6.38-8.99,9.09 c-0.42,0.35-0.85,0.69-1.28,1.02c0.16,0.78,0.25,1.58,0.25,2.4c0,6.38-5.17,11.55-11.55,11.55C84.45,57.49,81.42,56.06,79.31,53.77 L79.31,53.77z M111.33,16.49c3.06,0,5.55,2.48,5.55,5.55s-2.48,5.55-5.55,5.55c-3.06,0-5.55-2.48-5.55-5.55 S108.26,16.49,111.33,16.49L111.33,16.49z M11.55,16.49c3.06,0,5.55,2.48,5.55,5.55s-2.48,5.55-5.55,5.55 C8.49,27.58,6,25.1,6,22.03S8.49,16.49,11.55,16.49L11.55,16.49z M35.08,40.39c3.06,0,5.55,2.48,5.55,5.55 c0,3.06-2.48,5.55-5.55,5.55c-3.06,0-5.55-2.48-5.55-5.55C29.53,42.87,32.01,40.39,35.08,40.39L35.08,40.39z M87.81,40.39 c3.06,0,5.55,2.48,5.55,5.55c0,3.06-2.48,5.55-5.55,5.55c-3.06,0-5.55-2.48-5.55-5.55C82.26,42.87,84.74,40.39,87.81,40.39 L87.81,40.39z M61.44,69.56c3.63,0,6.57,2.94,6.57,6.57s-2.94,6.57-6.57,6.57c-3.63,0-6.57-2.94-6.57-6.57S57.81,69.56,61.44,69.56 L61.44,69.56z M42.68,76.13l18.76-18.76L80.2,76.13L61.44,94.89L42.68,76.13L42.68,76.13z"/></g></svg>
    `,
    currencyIcon: `
      <svg class="currencyIconDone" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 72.23 122.88" fill="#FFFFFF"><title>dollar</title><path d="M23.71,111.63a32.57,32.57,0,0,1-3.49-.43l-6.12-.88-3.78-.63c-1.22-.22-2.45-.46-3.66-.73s-2.47-.58-3.53-.86l-1.44-.39V84.06l6.69.55,4.91.29,5.15.23,5.22.16,5.07.1,4.72,0c1.43,0,2.68,0,3.76-.14a22.78,22.78,0,0,0,3-.45,9.46,9.46,0,0,0,2.09-.71,4.65,4.65,0,0,0,1.26-.86,2.7,2.7,0,0,0,.63-1,4.47,4.47,0,0,0,.24-1.55V79.15a3.09,3.09,0,0,0-1.2-2.72,5.5,5.5,0,0,0-1.63-.8,7,7,0,0,0-2-.27h-6.9a49.84,49.84,0,0,1-13.82-1.75A27.5,27.5,0,0,1,8.5,68.25a22,22,0,0,1-6.43-9.72A42.4,42.4,0,0,1,0,44.51V40.22A35.58,35.58,0,0,1,2.29,27a23.85,23.85,0,0,1,7-9.67,32.26,32.26,0,0,1,6.92-4.57,28.29,28.29,0,0,1,7.49-2.25V0H45.52V10.07a91.3,91.3,0,0,1,9.93,1.43l1.84.32c1.53.27,3.05.56,4.56.88s2.78.59,4.08.9l1.48.36V37.64l-2.1-.18c-2.08-.18-4.19-.34-6.31-.47-2.31-.15-4.67-.27-7.08-.38s-4.9-.19-7.09-.24c-2,0-4.17-.07-6.44-.07-1.19,0-2.29,0-3.29.12a26.91,26.91,0,0,0-2.88.36,8.23,8.23,0,0,0-2,.63,4.82,4.82,0,0,0-1.34.92,3,3,0,0,0-.71,1.18,6.19,6.19,0,0,0-.29,2v1.3a5.49,5.49,0,0,0,.36,2.12,3.47,3.47,0,0,0,1,1.33,4.92,4.92,0,0,0,1.91.9,13.07,13.07,0,0,0,3.25.35H43a39.54,39.54,0,0,1,8.77.92,26.84,26.84,0,0,1,7.35,2.79A24.48,24.48,0,0,1,69,61.4a28.62,28.62,0,0,1,2.46,6.79,34.51,34.51,0,0,1,.82,7.57v4.3A51.37,51.37,0,0,1,71.1,91.38,26.08,26.08,0,0,1,67.61,100a22.65,22.65,0,0,1-5.7,6,24.53,24.53,0,0,1-7.62,3.63l-.73.2a43,43,0,0,1-8,1.74v11.35H23.71V111.63Z"/></svg>
    `,
    eggsIcon: `
      <svg class="eggIconDone" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 93.59 122.88" fill="#FFFFFF"><title>egg</title><path d="M45.54,0c8.29,0,15.77,3.37,22.22,9,8.08,7,14.57,17.66,19,29.48a106.22,106.22,0,0,1,6.82,36.38c0,13-3,24.7-9.5,32.22-.86,1-1.71,1.88-2.58,2.7-8.83,8.43-21.28,12.75-33.65,13.09S23.08,119.53,14.39,112c-.85-.73-1.66-1.51-2.45-2.33C3.62,100.91,0,87.5,0,73A104.14,104.14,0,0,1,6.41,38C10.53,26.69,16.48,16.62,23.68,9.76,30.06,3.67,37.45,0,45.54,0ZM71.78,76.68a3.45,3.45,0,0,1,4-2.63,3.21,3.21,0,0,1,2.89,3.62,49.34,49.34,0,0,1-3.12,10.85,32.66,32.66,0,0,1-5.27,8.57,40.68,40.68,0,0,1-6.11,5.72,45.74,45.74,0,0,1-7.35,4.53,3.66,3.66,0,0,1-4.72-1.27,3,3,0,0,1,1.39-4.29,38.62,38.62,0,0,0,6.21-3.84,34.13,34.13,0,0,0,5.12-4.77A26.21,26.21,0,0,0,69,86.23a42.93,42.93,0,0,0,2.74-9.55ZM62.56,14c-5.09-4.42-10.82-7.07-17-7.07-5.85,0-11.42,2.86-16.39,7.6C22.71,20.63,17.34,29.78,13.56,40.1A97.9,97.9,0,0,0,7.57,73c0,12.94,3.06,24.75,10.08,32.1.61.64,1.26,1.26,1.94,1.86,7.2,6.26,17.59,9.29,28.06,9s21-3.91,28.39-11q1.17-1.11,2.13-2.22c5.4-6.2,7.85-16.42,7.85-28a99.92,99.92,0,0,0-6.4-34.18C75.54,29.83,69.71,20.19,62.56,14Z"/></svg>
    `,
    enchantsIcon: `
      <svg class="enchantIconDone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 101.37" style="enable-background:new 0 0 122.88 101.37" xml:space="preserve" fill="#FFFFFF"><g><path d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"/></g></svg>
    `,
    upgradeIcon: `
      <svg class="upgradeIconDone" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 115.4 122.88" fill="#FFFFFF"><title>up-arrow</title><path d="M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"/></svg>
    `,
    flagIcon: `
      <svg class="flagIconDone" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 473 511.75" fill="#FFFFFF"><path d="M91.15 312.04C272.88 326.11 263.42 222.71 473 173.28 324.26 45.51 208.34 132.39 91.15 30.16v-5.3C91.15 11.13 80.02 0 66.29 0 52.57 0 41.43 11.13 41.43 24.86v445.45H16.3c-8.97 0-16.3 7.33-16.3 16.3v25.14h132.58v-25.16c0-8.92-7.32-16.28-16.28-16.28H91.15V312.04z"/></svg>
    `
};

const iconOrder = ["acheivementsIcon", "boostsIcon", "boothsIcon", "boxesIcon", "buffsIcon", "charmsIcon", "currencyIcon", "eggsIcon", "enchantsIcon"];

document.addEventListener("DOMContentLoaded", function() {
    Object.keys(icons).forEach(iconType => {
        replace(iconType, icons[iconType]);
    });
});
