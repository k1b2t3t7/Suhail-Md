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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_43_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImozczQ1N2xsWi94UnRPY1dsZE1KODM3VWhwQnpaa1VraWkrQUs3bWhoeDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2OTQ4MzMzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQxMDE2NDI3NzcyODcyN0NDNEI3OUMyNDhGOTFEQ0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjI3ODA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2OTQ4MzMzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUFBQ0Y4MkUxRjA2QkI5MzNCMjBGRDc4MjI3RUIwRDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjI3ODA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRTRzhaWE1xUlZpZVZmQ3BFaVZia0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWI3OGE2ZTUtZGJlMC00N2QxLThkZmEtNzFkNzRmMmE4N2FkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDE2NyxcbiAgICAgIDU3LFxuICAgICAgMCxcbiAgICAgIDIyNSxcbiAgICAgIDYsXG4gICAgICAyMjUsXG4gICAgICAyMzAsXG4gICAgICAxNDMsXG4gICAgICAxMzgsXG4gICAgICAyMDgsXG4gICAgICAyMTksXG4gICAgICAyMDcsXG4gICAgICA1MSxcbiAgICAgIDE1MSxcbiAgICAgIDE3NyxcbiAgICAgIDIxOSxcbiAgICAgIDExOCxcbiAgICAgIDk1LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE0NSxcbiAgICAgIDE5LFxuICAgICAgMTA0LFxuICAgICAgMjAwLFxuICAgICAgMTU5LFxuICAgICAgMTIsXG4gICAgICAyMjAsXG4gICAgICAyMjAsXG4gICAgICAxODYsXG4gICAgICAxNDcsXG4gICAgICAyMDEsXG4gICAgICAyMSxcbiAgICAgIDIzMSxcbiAgICAgIDE2MyxcbiAgICAgIDEwMSxcbiAgICAgIDIxMyxcbiAgICAgIDIzLFxuICAgICAgMjMzLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJYQlk2R0VTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5NDgzMzMwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBTkdFTElDIFNIT1BcIixcbiAgICBcImxpZFwiOiBcIjI3NzQ2MDU5MTYxNzY0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzcxK3NRR0VOYnR0TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwc0l3ZkQrNHdWYldZNjNpSGU0dmtjaWVTR3lGTHhCNFdCbzVhaWNlcFI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJMSmJvaWZyL0RuQnJLQjhiSG16R3NWbXZPNEtadk9xQUJYUG9CTmxURXBjZXZYQ0NKNExNWUhIeGNuZm9nY2RESFZRSTEvdXh3QmUxamhUelFmM0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0zMGdNYm1rR2Jaa002UW1iUjFxMUdGZWJFcWdQMXJSdWRwVnBFQUtyQzlTc0pFUFNZRWo5MkVzYlpaVS9aSFloUVFJRGlYa3FmQUNuenpJaWZMZ0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjk0ODMzMzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYyNzgwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk4b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSThvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNHVKUG84TDE4cEJjWWx1L3V4SnBBaTNoaDJTZy9jeWg5OWRXWVJackZhRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU1MjMyOTQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2Mjc4MDYzMjBcIn0iCn0="  // PUT your SESSION_ID 


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
