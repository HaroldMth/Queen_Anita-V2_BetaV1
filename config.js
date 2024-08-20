//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://hans_user:Rk2EzDcX5UCkkpB3VKfu17BRZAVv9aPg@dpg-cr1s80jtq21c73d3gi70-a.oregon-postgres.render.com/hans";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237696900612";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0IxS20rOGkxRlNDdjh6elNwQzU4WWxwLzdKZGV0TklOYXhEbTlPRS8wbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickJhbDMrVHF2OUQzQlJERkQwNG5vV3NKMFNLdTBMM2ZvOUZoN3dSZk5Gaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRkhYK05JVGdBOEdCT0RINFNjd3ZYWTlhRjJFR25ZeU9nSThKa0NkS2xnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvUHpIRDFIZkQ5cFVUc1haTmF5ZjNTYmhRUUw3VmpjTUhnbFZ4UTVZMGl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMR2trUm14RnFTekRMQ2NsWHpDcEcwKy9IYmxjY2p2TDFYR2tDaWpBa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF5dldZMmxrK1hFVU5OWUJPSDNIWDRRd3hTNHMxSmxmNUEwSXk4MHFRR1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdkMlNjUEg1bnJsTVJVZDlrU0grWmJOc3NmdEZ2ZktqQ0JMN3BTajZHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzFzOVlOYTNWRlcrcGpta1ZWek9EdU44bVZ0Q0xnS3JZYzVjc3NKQXF5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR5NlVOK25RMTB4WkFBelRQZXRlUVBrd3RUTDVCa284YmxCSWpIaHlZWm1BOXY0NXFES0pjOWw0TUNoRElMR3FQbFFmQWppVlgwMmRhVG5kLzduNkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJrVS9vSWtTUlBmQUNuV0RON1NBZzQrMU1BMzFmbHROV3hiYTI2SHdXV040PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtYW81RGtSN1E3R0VlclMtaUNld193IiwicGhvbmVJZCI6IjYwYzFkN2M2LTJlYWUtNDc3Zi1iZTlhLTI2MDZjNGIyMGE0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRGwyVFh3a04yOWhrUmgvaTlHc0Q2Rkd4YjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhjSUZjdVFadDlvelZ3Um8wM0M5NkppYnNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjU2TkVGVkZLIiwibWUiOnsiaWQiOiIyMzc2OTY5MDA2MTI6MzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zt/CdmorwnZqX8J2anCDwnZqD8J2ajvCdmozwnZqRIOKAoCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhDaWVzQ0VQU2VqYllHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRURrSDFvc0lpdmJzN1ljVGtvVG42RkI0WGNLRmFldlZxVEJ2M0JCdGpVST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUHJ2NVk2U2F2TnBKamcyRVR3NVF3TXQwNEp6bVpxb0pIUWFXVDlxcklJeXlneC85Z1k4NDMwb2p3cDNYZmpTbTgycDVaek04Q2NDVnBIYVM3MVZ2Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ilc5QVN2ZjR2R3UyYnd1a1Q2WVI1d2JIZXhHeFVXMHFrUW9icEtMNTBFOHd6RG5wU3hZVlVEaXpUN0FqbDZWZXo4RWc0dWxycFUxZDdZd0NBZU9nU0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk2OTAwNjEyOjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJBNUI5YUxDSXIyN08ySEU1S0U1K2hRZUYzQ2hXbnIxYWt3Yjl3UWJZMUMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwNzU5MDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlRNIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
