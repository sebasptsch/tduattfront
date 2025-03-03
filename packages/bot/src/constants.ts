/** Prod */
export const ROLES =
  process.env.NODE_ENV === "production"
    ? {
        EVERYONE: "605683682493333507",
        MENTOR: "605687041228800030",
        OUTREACH: "607481539273555978",
        SOCIAL: "607512985136529418",
        STUDENT: "605687349111685130",
        PARENT: "605687884179177492",
      }
    : {
        EVERYONE: "997106706616176690",
        MENTOR: "1309309808767401985",
        OUTREACH: "1309309854661345350",
        SOCIAL: "1309309886693244978",
        STUDENT: "1309309924949360660",
        PARENT: "1309309953114243114",
      };

/** Testing */
// export enum ROLES {
//   MENTOR = '997106706616176690',
// }
