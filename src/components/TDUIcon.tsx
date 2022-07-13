import { createIcon } from "@chakra-ui/react";

export const TDUIcon = createIcon({
  displayName: "TDUIcon",
  viewBox: "0 0 900 900",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <g fill="currentColor">
      <path d="M541.6 33.7c-.3 1.6-.8 14-1.1 27.8-.2 13.7-.7 28.4-1 32.5-.3 4.1-.7 14.7-1 23.5-1.3 51.9-1.9 66.1-2.8 67.2-.7 1-6.9 1.3-25.1 1.3-13.2 0-24.6-.4-25.3-.8-1.2-.8-7.9-14.7-18.8-39.2-5.5-12.3-19.4-42.6-23.4-51.1-1.7-3.7-3.8-7.2-4.6-7.9-1.6-1.3-2.1-1-15 10.5-3.8 3.5-18 15.8-31.5 27.5-22.2 19.2-42.6 36.9-45.4 39.5-.6.6-2.7 2.3-4.6 3.9-1.9 1.6-6.4 5.4-10 8.6-3.6 3.1-10.4 9-15.1 13.1-16.4 14.1-30.4 26.3-30.9 26.9-.3.3-9.3 8.2-20 17.5s-21.5 18.7-24 20.9c-2.5 2.3-6.4 5.7-8.5 7.6-2.2 1.9-6.5 5.7-9.6 8.5-3 2.7-9.5 8.4-14.4 12.5s-14.1 12.2-20.4 18c-6.4 5.8-14.7 13.2-18.6 16.4-3.8 3.3-7.4 6.5-8 7.1-.5.6-6.8 6.3-14 12.5-7.1 6.2-14.6 12.8-16.5 14.5-1.9 1.8-6.2 5.6-9.5 8.6-3.3 2.9-6.2 5.5-6.5 5.9-.3.3-4.3 3.9-9 8-4.7 4-8.7 7.6-9 8-.3.4-3.8 3.5-7.9 7-17.2 14.8-25.5 24.3-11.4 13.2 3.3-2.6 11.2-8.6 17.4-13.4 6.3-4.9 20.4-15.8 31.4-24.4 11-8.5 23.6-18.3 28-21.7 4.4-3.3 12.1-9.3 17-13.2 5-4 13.3-10.5 18.7-14.6 13.4-10.3 27.6-21.5 53.4-41.9 12.1-9.6 29.4-23.3 38.5-30.4 9-7.1 19.5-15.5 23.4-18.5 3.8-3.1 8.1-6.5 9.6-7.6 1.5-1.1 9.4-7.4 17.6-14 8.1-6.6 17.3-13.9 20.3-16.2 3-2.3 11-8.6 17.7-14 6.7-5.4 17.9-14.3 24.9-19.8s16.7-13.3 21.7-17.4l8.9-7.5 1.7 2.2c.9 1.2 3.6 7.1 6 13 6.7 16 16 38.2 18.1 42.8 1.1 2.2 2.8 6.5 4 9.5 1.2 3 3.5 8.4 5.2 12.1l3 6.6 11.2.6c6.1.3 23.9 1 39.6 1.6 15.7.6 33.3 1.3 39.1 1.6 7.9.4 10.9.2 11.5-.7.4-.7 1.1-8 1.5-16.3.4-8.3 1.3-23.2 1.9-33.1 1.3-20.9 1.7-28.1 1.9-38.8.1-10 1.6-10.8 7.4-4.1 2.3 2.6 6.2 7.1 8.7 9.9 7.5 8.5 9.6 11 18.2 21.2 4.5 5.4 9.2 10.9 10.4 12.3 1.2 1.4 5.1 5.9 8.6 10 3.6 4.1 15.9 18.5 27.4 31.9 11.5 13.5 23.4 27.4 26.3 31 3 3.6 10 11.8 15.5 18.1 5.6 6.3 11.7 13.3 13.6 15.6 5.8 7 19.3 22.9 20 23.4.3.3 3.2 3.6 6.5 7.5 3.3 3.8 6.5 7.4 7.1 8 .5.5 2.6 3 4.6 5.5 1.9 2.5 6.2 7.5 9.4 11.1 3.3 3.6 7.9 9 10.4 12 3.9 4.6 12.4 14.4 14 15.9.3.3 4.3 5 9 10.5s12.9 15.1 18.3 21.3l9.9 11.3-1.6 10.2c-.8 5.6-2.7 18.7-4.1 29.2-1.4 10.4-3.2 23.5-4 29-2.8 18.5-3.4 23-5 34.5-.9 6.3-2 14.4-2.5 18-.5 3.6-1.2 8.5-1.5 11-.3 2.5-1 7.2-1.5 10.5s-1.9 13.4-3.2 22.4l-2.3 16.4-13.5 12.6c-7.5 6.9-20.5 18.9-29 26.6-8.4 7.7-17.9 16.3-20.9 19.1-3.1 2.8-8.6 7.9-12.3 11.2l-6.7 6.2-4.8-2.1c-2.6-1.1-9.7-4.7-15.8-7.8-6-3.2-38.4-19.7-72-36.6-33.5-17-61.7-31.2-62.5-31.6-.8-.5-9.1-4.6-18.5-9.3-9.3-4.6-19.2-9.5-22-11-30.1-15.4-78-38.6-79.9-38.6-1.3 0-5.7 2-9.8 4.4-4 2.4-13.6 8.1-21.3 12.6-7.7 4.6-17.8 10.6-22.5 13.5-4.7 2.8-16.4 9.8-26 15.4-9.6 5.7-18.6 11.1-20 12-2.6 1.7-61 36.9-102.8 61.8-13 7.8-25.7 15.5-28.2 17.1-6.9 4.7-14 8.1-15.3 7.6-.7-.2-1.9-1.9-2.6-3.7-1.4-3.2-5.6-12.3-13.6-29.2-2.3-5-5.5-11.7-7-15-1.5-3.3-5.9-12.4-9.6-20.3-3.8-7.8-7.8-16.4-9-19-1.2-2.6-5.6-11.9-9.9-20.7-4.3-8.8-10-20.7-12.7-26.5-33.8-71-51.6-106.9-52-104.9-.3 1.2 14.3 39.2 21.6 56.4.5 1.1 1.7 4 2.6 6.5 2.2 5.7 4.4 10.9 5.5 13.5.5 1.1 3.1 7.6 5.9 14.5 2.7 6.9 8.8 22.2 13.6 34 4.8 11.8 10.6 26.2 13 32 4.2 10.5 14.9 36.8 16.5 40.5.5 1.1 2.5 6 4.5 11 2 4.9 4.5 11 5.5 13.5s5.3 12.9 9.6 23.2c4.2 10.4 8.2 19.6 8.9 20.5 1.2 1.6 2 1.3 10.6-3.2 5.2-2.6 11-5.7 12.9-6.8 1.9-1.1 6.9-3.8 11-6s10.9-5.9 15-8.2c4.1-2.3 11.1-6.1 15.5-8.5 4.4-2.4 18.4-10 31-17 12.7-7 26.6-14.6 31-17 4.4-2.3 12.5-6.7 18-9.8 22.6-12.4 29.3-16.1 35.5-19.4 12.8-6.9 18.6-10.1 22.2-12.5 2.1-1.2 4-2.3 4.2-2.3.4 0 10.5-5.6 29.1-16 3.3-1.9 9.1-5.1 12.9-7.1l7-3.7 9.5 5c5.3 2.8 14.8 7.9 21.2 11.4 6.4 3.5 15.2 8.2 19.5 10.5 4.4 2.3 11.1 5.8 14.9 7.9 3.9 2.1 10.4 5.6 14.5 7.8s13.6 7.2 21 11.2c7.4 4 17.3 9.3 22 11.8 11.6 6.1 38.9 20.6 48 25.5 4.1 2.2 12.5 6.6 18.5 9.7 11.2 5.8 41 21.5 54.5 28.8 24.6 13.2 32.7 17.3 34.8 17.9 1.6.4 3.5-.5 7-3.3 2.6-2.1 5.2-4.4 5.7-5 .6-.7 9.8-8.9 20.5-18.4 10.7-9.5 23.1-20.5 27.5-24.5 4.4-4 10-9 12.5-11.1 2.5-2.2 6.8-6 9.5-8.5 13-12 21.4-19.4 26.2-23.2 2.8-2.3 5.4-5.1 5.7-6.2.3-1.1 2.4-14.4 4.6-29.5 6.5-44.9 14.8-101.7 16.4-113 .9-5.8 2-13.9 2.6-18 .5-4.1 2.3-16.7 4-28 1.6-11.3 3-21.5 3-22.7 0-2.2-.8-3.2-14.5-18.7-4.4-5-10.5-12-13.5-15.6-3-3.6-7.2-8.5-9.5-11-2.2-2.5-6.5-7.5-9.6-11-3.1-3.6-9-10.3-13.1-15-4-4.7-13.4-15.5-20.7-24-7.4-8.5-16.2-18.7-19.6-22.5-7.7-8.7-45.2-51.4-60-68.5-13-15-23.5-26.9-32-36.5-3.4-3.9-9.3-10.6-13-15-3.8-4.4-8.9-10.3-11.4-13-4.9-5.4-6-6.7-23.4-26.5-6.1-6.9-11.7-13.2-12.6-14.1-.9-.9-3.6-4-6.1-6.9-4.2-5-27.8-31.9-29-33-.3-.3-3.2-3.7-6.4-7.5-3.3-3.9-6.6-7.7-7.5-8.5-.9-.9-3.8-4.1-6.4-7.3-5.4-6.3-7.3-7-8.1-3z" />
      <path d="M424.3 277.7c-1.1 1.5-3.6 5.7-5.5 9.3-1.9 3.6-4.8 8.7-6.5 11.5-1.6 2.7-3.3 5.9-3.7 7-.9 2.3-1.9 171-1 173.7.5 1.5 1.8 1.8 9.4 1.8 5.5 0 9.1-.4 9.6-1.1.8-1.3.9-203.8.1-204.5-.3-.3-1.4.7-2.4 2.3zM299.7 286.8l-3.8.3.3 9.7.3 9.7 33.5.5c18.4.3 33.6.7 33.8.8.7.6 0 2.3-1.6 3.9-1.7 1.6-14.3 18.2-32.2 42.1-3.6 4.8-8.6 11.4-11.2 14.7-2.7 3.3-4.8 6.4-4.8 7 0 .5 1.6 2.7 3.6 4.9 3.8 4.1 3.8 4.1 13.4 1.6 2.6-.7 7.8-1 12.1-.7 18.6 1.2 33 14.2 37 33.3 2.4 11.6-2.4 25.6-11.8 34.9-15.3 15-39.5 14.8-55.1-.4-4.6-4.4-11.2-15.3-11.2-18.4 0-2.5-2.3-2.6-7-.3-2.5 1.2-6.1 2.8-8 3.6-5.7 2.3-5.7 2.1.4 15 4.8 10.2 15.7 20.6 28 26.5 9.1 4.5 10.2 4.7 19.9 5.2 13.8.7 21.9-.7 32.1-5.6 11.6-5.5 21.4-15.3 27.4-27.3 2.3-4.6 4.2-9.2 4.2-10.1 0-.9.7-4.2 1.5-7.4 4.3-16.2-4.1-40.5-18.7-53.9-7.2-6.6-21.9-14.4-27.3-14.4-2.9 0-1.4-4 4.5-11.7 12.3-15.9 17.8-23.1 28.5-37.3 6-8 12.6-16.6 14.8-19.3 2.1-2.6 3.7-5.3 3.4-6.1-.5-1.1-9.1-1.4-51.4-1.3-27.9.1-52.5.3-54.6.5zM446.9 287.7c-.6.6-.9 5.1-.7 10l.3 8.8 33 .3c18.1.1 33.3.6 33.8 1.1.4.4-6.2 10-14.8 21.2-8.6 11.2-18.6 24.4-22.3 29.3-3.7 4.9-7.9 10.4-9.4 12.1-1.6 1.8-2.8 3.9-2.8 4.6.1.8 1.6 3.2 3.5 5.4l3.4 4 6.8-1.8c12.9-3.3 23.4-1.8 33.8 4.8 6.4 4 10.7 9 14.7 16.8 2.6 5.2 3.2 7.6 3.6 15 .5 8.9.4 9.1-4.3 20.2-2.4 5.8-10.3 13.3-17.8 17-15.1 7.4-32.4 4.5-45-7.4-4-3.8-10-13.7-11.1-18.4-.4-1.5-1.1-2.7-1.6-2.7-1.7 0-16.8 7.8-17.5 9.1-.4.6 1.3 5.2 3.8 10.3 3.4 6.7 6.3 10.9 11.4 16 3.7 3.7 7.7 7.2 8.8 7.7 1.1.5 3.4 1.8 5 2.8 1.7 1.1 5.9 3 9.5 4.3 8.8 3.1 29.5 3.4 38 .4 11.6-4 21.6-11 28.4-19.5 12.1-15.5 16.3-34.5 11.5-52.7-5.2-20-19.4-36.2-36.9-41.9-9.5-3.1-10.2-3.4-9.6-5.1.6-1.6 10.1-14.2 35.1-46.8 19.9-25.8 18.9-24.5 18.1-25.4-1.3-1.2-107.7-.8-108.7.5zM601.3 289c-3.4 1-7.5 2.5-9 3.3-1.6.8-4.4 2.3-6.3 3.2-1.9 1-7.1 5.5-11.5 9.9-9.3 9.4-13.8 17.7-16.3 29.8-1.9 8.9-1.3 10.2 4.9 11.8 1.9.5 5.3 1.4 7.7 2.1 2.8.8 4.7.8 5.3.2.5-.5 1.5-4.1 2-7.9 2.7-17.2 16-30.5 33.6-33.4 7.8-1.3 13.5-.4 21.8 3.5 13.6 6.5 22.2 18.3 23.2 31.9.3 4.4.1 9.5-.7 12.7-2.2 9.5-4.5 12.8-24 34.4-3 3.4-7.7 8.8-10.5 12-7 8.3-14.7 16.8-16.1 18-.7.5-4 4.4-7.5 8.5-3.4 4.1-9.6 11.2-13.7 15.8-4.2 4.6-8.6 9.7-9.9 11.4-1.3 1.8-2.7 3.4-3.1 3.7-.5.3-3 3-5.5 5.8-4.2 4.8-4.6 5.7-4.4 10l.2 4.8 56 .3c30.8.1 57 0 58.3-.3 2.1-.5 2.2-1 2.2-9.5 0-5.1-.4-9.2-1-9.5-.6-.4-17.8-.8-38.3-.8-35.9-.2-37.2-.3-37.5-2.1-.2-1.1.2-2.4 1-3 .8-.6 5.6-5.9 10.8-11.9 5.2-5.9 12.2-13.8 15.5-17.6 3.3-3.7 9-10.1 12.6-14.2 25.4-28.4 28.5-32.5 32.3-41.8 8.9-22 3.7-47.6-13.2-65.4-4.3-4.5-15.3-11.9-20.2-13.6-13-4.6-27.6-5.4-38.7-2.1zM791.5 708.4c-2.7.7-8.6 2.1-13 3-30.1 6.5-38.4 8.6-65.5 16.7-18.8 5.6-34.4 11.5-36.2 13.6-.9 1.1-.9 2.3.1 5.1 4.9 13.8 21.7 46.4 36.5 70.5 3.6 6 6.6 11.1 6.6 11.4 0 .3 1.4 2.2 3 4.3 1.7 2.1 3 4.2 3.1 4.6.1 1.5 9.3 14.7 10.5 15.1 2 .7 30.1-57.9 42.4-88.2 8.1-19.9 12-30.2 12-31.4 0-.6.4-1.9 1-2.9 1.6-2.8 8-20.3 8-21.8 0-1.7-1.8-1.7-8.5 0zm-39.7 36.1c.3.3 0 1.5-.6 2.8-3.1 6.1-12.3 27.2-15.2 34.7-1.8 4.7-4.1 9.4-5.1 10.4-1.7 1.9-1.9 1.8-7-4-7.2-8-38.8-39.3-41.6-41.1-5.7-3.7-3.6-4 33.4-3.6 19.6.2 35.9.5 36.1.8z" />
    </g>,
  ],
});
