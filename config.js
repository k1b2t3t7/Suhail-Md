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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwK1EyeHN3cGtra2pXU21UL2hjdzZhSW9lbXNvaW9yU2FYSG1GTjFIbStnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjk0ODMzMzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE0QzM2RDdBQkNBQjE5MTJCRjJEN0UxRjc1MkQzNUY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyNDc4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjk0ODMzMzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwMENCQThGOUQ4RUE4RkQwOTk3QUVGQTgwOTYzQzJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyNDc4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjk0ODMzMzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzMzgwNEZERUJEQTcxMUIxNzhGNzkxM0IzQjgxMDgzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyNDc5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjk0ODMzMzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3QTdDRjYzNTIyMUE1NzE4MTI1OEQzMjU1QTM0OEM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyNDc5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzQmVRX1RTZlNvR3RYd0JId1lMdUVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjY2Y5ODI0LTQwM2MtNDExYS1hOWE4LWVhNTJiYzdiOWQxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDUwLFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICA1OSxcbiAgICAgIDI1NSxcbiAgICAgIDYzLFxuICAgICAgMjU0LFxuICAgICAgNTEsXG4gICAgICAxNDUsXG4gICAgICA0NyxcbiAgICAgIDEzMCxcbiAgICAgIDIxLFxuICAgICAgMjIsXG4gICAgICAyNTMsXG4gICAgICAyMzQsXG4gICAgICAxMzQsXG4gICAgICA2OSxcbiAgICAgIDIxNixcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDk0LFxuICAgICAgNjksXG4gICAgICA3MCxcbiAgICAgIDE0LFxuICAgICAgMixcbiAgICAgIDQyLFxuICAgICAgNzEsXG4gICAgICAxMzYsXG4gICAgICAxMzIsXG4gICAgICA1NCxcbiAgICAgIDQ4LFxuICAgICAgMjEsXG4gICAgICAzMyxcbiAgICAgIDE1NCxcbiAgICAgIDg3LFxuICAgICAgMTAsXG4gICAgICAyNTEsXG4gICAgICAxNTEsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEU05aTDQxMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2OTQ4MzMzMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQU5HRUxJQyBTSE9QXCIsXG4gICAgXCJsaWRcIjogXCIyNzc0NjA1OTE2MTc2NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01pSXVLY0dFSTdXdExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnRnMHpURVJNRE1QMVA1bjBManF2SzdiYm5QS2NaVkxNYmJQbWwwcWJCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhTGNzZ2hReFNVU052RzlFb3lnR1pvZHJFRDdjZW4zZ1V1eUx2c1QxNVhlc1d0cGxCVFVUdVNMMGQ1eGtXeEJ5THZKNUd5YWtXdUV5QVErYVZuL05EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEako1OXF4KzcrRjlGZ3hBYnFTeE9EQ2tQTHlyald6eTgyNWg1TFF0MXdCakpmYXVtaUhGaHFzQmw3VnFUSUp4OVBRWG81bjdzMzlvdDlPZWNBR3BDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5NDgzMzMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MjQ3ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIL2VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgvZS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
