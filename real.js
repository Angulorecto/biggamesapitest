function replace(iconType, iconSVG) {
    const icons = document.querySelectorAll(`.${iconType}`);
  
    icons.forEach(span => {
      const iconSVGImage = new DOMParser().parseFromString(iconSVG, 'image/svg+xml').querySelector('svg');
  
      span.parentNode.replaceChild(iconSVGImage, span);
    });
}

const icons = {
    leaderboardIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 365 511.41" fill="#FFFFFF"><path d="M312.22 319.17 365 442.58l-66.17-.77-54.38 44.12-47.7-116.25c13.79-3.35 27.44-10.32 41.22-21.13l1.66-1.22-.03-.04.9-.7-.04-.06c1.75-1.4 3.55-2.83 5.15-4.05 3.33.21 6.93.34 11.42.13 6.19-.28 12.83-1.26 20.17-3.62 6.46-2.08 12.45-4.63 17.95-7.67a92.904 92.904 0 0 0 15.92-11.07l-.04-.05 1.19-1.03zM176.94.02c6.61-.18 12.52.85 18.01 2.74 5.06 1.74 9.7 4.23 14.27 7.13 4.64 2.88 9.01 6.59 13.68 10.59 4.47 3.82 9.4 8.02 14.35 10.85l.32.19c2.04.78 7.25.99 12.7 1.18 18.99.7 39.48 1.46 54.86 24.29l.84 1.35c11.01 16.92 11.83 29.59 12.62 41.99l.04.87c.25 3.82.69 7.41 1.89 10.96 1.32 3.75 3.64 8.07 7.74 13.5 11.11 14.68 17.97 27.55 20.79 40.04 3.34 14.82 1.15 28.02-6.3 41.3-5.31 9.44-12.4 15.52-18.65 20.87-2.26 1.93-3.38 1.55-3.83 2.61l-.46 1.01c-1.07 3.17-1.14 7.07-1.19 11.04-.15 10.2-.33 20.77-7.49 34.9-4.49 8.84-10.36 16.31-17.53 22.41-7.04 6.06-15.27 10.57-24.61 13.58-9.57 3.08-17.24 2.54-24.49 2.02-2.77-.19-4.74-.67-5.07-.53-5.2 2.25-10.72 6.69-15.91 10.84l-1.2.9c-32.39 25.86-61.07 23.86-91.96-.9-5.18-4.15-10.71-8.58-15.92-10.76-.52-.23-4.25.39-5.06.45-7.26.52-14.93 1.06-24.49-2.02-9.35-3.01-17.57-7.52-24.61-13.5-7.13-6.06-12.99-13.56-17.53-22.49-7.18-14.14-7.34-24.71-7.49-34.91-.06-4.41-.14-8.72-1.57-12.04-.5-1.17-1.57-.61-3.91-2.61-6.24-5.34-13.35-11.41-18.66-20.87-7.45-13.28-9.63-26.48-6.29-41.3 2.81-12.5 9.67-25.36 20.78-40.04 4.1-5.43 6.43-9.75 7.72-13.51l.25-.7c1.03-3.31 1.43-6.68 1.65-10.25l.09-1.36c.81-12.58 1.77-25.45 13.42-42.77 15.37-22.9 35.87-23.67 54.87-24.37 5.79-.21 11.31-.43 13.04-1.33 4.94-2.87 9.86-7.07 14.35-10.91l1.22-.97c4.21-3.57 8.18-6.91 12.37-9.56 4.46-2.89 9.11-5.38 14.33-7.17C164.41.87 170.29-.16 176.94.02zm.01 17.56c8.32-.36 14.88 2.54 21.5 6.75 8.4 5.33 17.86 15.85 29.53 22.53 16.43 9.38 46.85-3.57 62.43 19.58 9.09 13.49 9.51 24.08 10.19 34.53.73 11.28 2.71 21.65 14.25 36.92 19.11 25.27 23.09 42.09 13.25 59.62-6.72 11.95-20.85 18.59-24.12 26.16-6.96 16.1.74 28.24-8.79 47.01-6.61 13.03-16.82 21.61-30.42 25.99-11.46 3.69-22.96-1.65-32.14 2.21-16.13 6.77-28.03 22.53-40.86 26.51-4.95 1.53-9.89 2.29-14.82 2.26-4.93.03-9.87-.73-14.82-2.26-12.84-3.98-24.73-19.74-40.86-26.51-9.18-3.86-20.68 1.48-32.15-2.21-13.59-4.38-23.8-12.96-30.41-25.99-9.53-18.77-1.83-30.91-8.79-47.01-3.27-7.57-17.41-14.21-24.12-26.16-9.85-17.53-5.86-34.35 13.24-59.62 11.54-15.27 13.52-25.64 14.25-36.92.68-10.45 1.11-21.04 10.19-34.53 15.58-23.15 46.01-10.2 62.43-19.58 11.68-6.68 21.13-17.2 29.54-22.53 6.62-4.21 13.18-7.11 21.5-6.75zm1.92 110.29 12.5 29.27 31.71 2.84a2.53 2.53 0 0 1 2.31 2.75 2.55 2.55 0 0 1-.86 1.7l-23.98 20.94 7.09 31.05a2.543 2.543 0 0 1-3.87 2.7l-27.25-16.29-27.33 16.34c-1.21.72-2.77.33-3.49-.88a2.53 2.53 0 0 1-.3-1.87l7.1-31.05-23.99-20.94a2.538 2.538 0 0 1-.24-3.59c.47-.54 1.12-.83 1.78-.87l31.62-2.83 12.51-29.29c.55-1.3 2.04-1.9 3.34-1.35.64.27 1.1.78 1.35 1.37zm-2.35-52.98c55.04 0 99.67 44.63 99.67 99.67 0 55.05-44.63 99.67-99.67 99.67-55.05 0-99.67-44.62-99.67-99.67 0-55.04 44.62-99.67 99.67-99.67zm0 16.83c45.75 0 82.84 37.09 82.84 82.84 0 45.76-37.09 82.84-82.84 82.84-45.76 0-82.84-37.08-82.84-82.84 0-45.75 37.08-82.84 82.84-82.84zm-.33 280.31-55.64 139.38-54.38-44.11-66.17.76 57.72-137.29 1.05.59c5.5 3.01 11.49 5.57 17.91 7.63 7.33 2.36 13.97 3.34 20.16 3.62 4.44.21 8.02.08 11.33-.12 1.63 1.23 3.51 2.73 5.31 4.18l.04.03c20.08 16.08 40.24 24.8 61.63 25.32l1.04.01z"/></svg>
    `,
    battleIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 118.71" style="enable-background:new 0 0 122.88 118.71" xml:space="preserve" fill="#FFFFFF"><g><path d="M51.31,31.23c2.55-4.65,5.15-8.64,7.79-12c0.1-0.13,0.2-0.25,0.3-0.38c3.19-5.52,5.43-11.01,2.84-12.81l0,0 c-1.68-1.16-4.12-1.2-6.67-0.64c-3.81,0.83-7.67,2.93-9.99,4.82c-3.04,2.47-5.75,5.62-8.07,8.98c-2.76,4.01-4.93,8.28-6.38,12.04 c-1.48,3.85-2.54,7.96-3.15,12.36c-0.59,4.29-0.75,8.85-0.44,13.69c2.83,7.42,6.63,14,11.44,19.69c0.36,0.41,0.72,0.81,1.09,1.21 c5.54,5.96,12.31,10.72,20.21,14.36l0,0c0.09,0.04,0.18,0.09,0.27,0.15c0.95-0.07,1.92-0.16,2.9-0.28c1.7-0.21,3.35-0.48,4.96-0.81 c5.3-1.09,9.78-2.69,14.01-4.83c4.28-2.16,8.34-4.88,12.77-8.15c2.16-1.6,4.31-3.32,6.44-5.17c2.12-1.84,4.14-3.75,6.05-5.74l0,0 c4.16-4.7,7.01-9.24,8.61-13.63c1.55-4.26,1.91-8.38,1.11-12.38c-0.74-3.73-3.16-8.11-6.22-12.32c-3.91-5.38-8.82-10.38-12.66-13.4 c-1.65-1.3-3.28-2.39-4.88-3.27c-5.18-2.83-10.31-3.58-15.3-2.11c-5.09,1.5-10.16,5.29-15.11,11.53c-2.06,3.59-4.37,6.95-6.13,9.51 c-0.48,0.7-0.9,1.31-1.55,2.3c-0.77,1.16-2.34,1.48-3.5,0.71C50.93,33.91,50.6,32.38,51.31,31.23L51.31,31.23z M19.5,66.5 c-0.17,6.41,0.83,9.06,5.6,15.25c1.68,2.18,3.51,4.36,5.5,6.54c3.73,2.86,4.32,5.71,1.4,8.57l-1.4,1.56 c-2.52,1.56-5.31,1.85-9.04-2.34l-5.54-7.03c-2.49-3.16-5.72-6.19-5.96-10.43c-0.04-0.79-0.01-1.6,0.09-2.44l-2.43,2.51 c-0.79,1-1.43,2.03-1.88,3.1C5.39,82.82,5.12,83.89,5.06,85c-0.21,3.71,3.45,9.41,8.27,14.78c5.86,6.53,13.25,12.32,17.65,13.58 c6.96,2.01,14.64-6.88,21.08-14.32c0.88-1.02,1.74-2.01,2.58-2.96c-7.18-3.96-13.31-8.84-18.42-14.59 c-0.42-0.47-0.83-0.94-1.23-1.42c-4.53-5.21-8.26-11.21-11.14-18.04L19.5,66.5L19.5,66.5z M59.89,97.79 c-1.27,1.37-2.62,2.93-4.03,4.56c-7.4,8.56-16.22,18.76-26.28,15.87c-5.24-1.51-13.61-7.92-20.02-15.07 C3.96,96.9-0.28,89.91,0.01,84.72c0.1-1.74,0.51-3.39,1.18-4.95c0.65-1.51,1.54-2.95,2.64-4.32l0,0c0.05-0.06,0.1-0.12,0.16-0.18 l18.43-19.06c-0.22-4.66-0.02-9.1,0.56-13.31c0.66-4.75,1.82-9.23,3.44-13.46c1.59-4.12,3.95-8.78,6.93-13.11 c2.57-3.72,5.61-7.24,9.04-10.03c2.82-2.29,7.5-4.84,12.11-5.84c3.79-0.83,7.62-0.64,10.61,1.44l0.01,0l0,0 c2.78,1.93,3.45,4.96,2.9,8.44c2.92-2.16,5.89-3.68,8.91-4.56c6.33-1.86,12.74-0.96,19.13,2.53c1.89,1.03,3.76,2.27,5.59,3.72 c4.15,3.27,9.43,8.64,13.63,14.41c3.44,4.73,6.19,9.79,7.09,14.31c0.97,4.89,0.55,9.91-1.33,15.06c-1.82,5-5.02,10.11-9.65,15.33 c-0.02,0.03-0.05,0.05-0.07,0.08l0,0c-2.09,2.16-4.21,4.17-6.37,6.05c-2.15,1.87-4.4,3.67-6.75,5.41c-4.65,3.44-8.94,6.3-13.5,8.6 c-4.61,2.33-9.49,4.08-15.27,5.27c-1.83,0.38-3.63,0.67-5.37,0.89C62.7,97.59,61.31,97.71,59.89,97.79L59.89,97.79z"/></g></svg>
    `,
    historyIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 101.37" style="enable-background:new 0 0 122.88 101.37" xml:space="preserve" fill="#FFFFFF"><g><path d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"/></g></svg>
    `,
    uClanIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="111.811px" height="122.88px" viewBox="0 0 111.811 122.88" enable-background="new 0 0 111.811 122.88" xml:space="preserve" fill="#FFFFFF"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M55.713,0c20.848,13.215,39.682,19.467,55.846,17.989 c2.823,57.098-18.263,90.818-55.63,104.891C19.844,109.708-1.5,77.439,0.083,17.123C19.058,18.116,37.674,14.014,55.713,0L55.713,0 z M56.163,19.543c14.217,9.011,27.061,13.274,38.083,12.268c1.925,38.936-12.454,61.93-37.935,71.526 c-0.161-0.059-0.319-0.12-0.479-0.18V19.796L56.163,19.543L56.163,19.543z M55.735,7.055 c18.454,11.697,35.126,17.232,49.434,15.923c2.498,50.541-16.166,80.39-49.241,92.846C23.986,104.165,5.091,75.603,6.493,22.211 C23.29,23.091,39.768,19.46,55.735,7.055L55.735,7.055z"/></g></svg>
    `,
  searchIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.879px" height="119.799px" viewBox="0 0 122.879 119.799" enable-background="new 0 0 122.879 119.799" xml:space="preserve" fill="#FFFFFF"><g><path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"/></g></svg>
    `
};

document.addEventListener("DOMContentLoaded", function() {
    Object.keys(icons).forEach(iconType => {
        replace(iconType, icons[iconType]);
    });
});