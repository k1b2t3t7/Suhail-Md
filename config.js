const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_56_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDc1LFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRCNmpNQnczaFZlSjBtZ09qWHFiUi8rQzZ3WHA2ZnByY2FQVDJHalRLOXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl8zdUV0cUxqUkEyQ3E4YWZLSGxLc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGQxMTdhMGYtZjEzZC00YzVhLTkwOTctZjFkMjJjODg4YzRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDgsXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDE5OSxcbiAgICAgIDIxNSxcbiAgICAgIDg3LFxuICAgICAgNjksXG4gICAgICA2MyxcbiAgICAgIDEyLFxuICAgICAgMjI5LFxuICAgICAgODIsXG4gICAgICAxMzksXG4gICAgICA1MCxcbiAgICAgIDEwOSxcbiAgICAgIDE0NyxcbiAgICAgIDIzMixcbiAgICAgIDExOCxcbiAgICAgIDI0NCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICA3MCxcbiAgICAgIDE1MyxcbiAgICAgIDEwMCxcbiAgICAgIDg5LFxuICAgICAgMjMsXG4gICAgICAxMTEsXG4gICAgICAxNTUsXG4gICAgICAxMDIsXG4gICAgICAxMzksXG4gICAgICA4MyxcbiAgICAgIDc2LFxuICAgICAgNzAsXG4gICAgICAyMzksXG4gICAgICAxNTUsXG4gICAgICA2MSxcbiAgICAgIDY0LFxuICAgICAgMTIzLFxuICAgICAgMjI3LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNIWTdIQ0pQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMzODA0NzA2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBQ0UgU0hPUFwiLFxuICAgIFwibGlkXCI6IFwiMTEzMjQ1ODA1MzgzODI4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9NcU5NREVPaUZsYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNWZRK005aEJ5ZlJZWGFRWC85ejEvZXl6aHh2VlI3MTNRZlJLRVU0VGkwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZZd1hNZGg4aDduQnBXMzZXTFVibWxhQU5kN1dVRnNwand0cWQrVDIrSXZKbjh0K2UzLzFhb2IwMkR3REJFR3R5eWM5Tk85WTlkUFRlNUNwLzh5ZEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFIbTh4bFovNU40dmdVR0RkckdDdUxnaWxFYldONTdPRDVmeDRPeU4yMjhDQlpsS2tWSGNhUWNhL1dQMmQrWFVTQ2pEUnZTVjlyTVkxZ0FmV2sweEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzM4MDQ3MDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxMDY2MDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
