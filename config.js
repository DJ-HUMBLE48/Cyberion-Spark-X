const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233544937902";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233544937902";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_50_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2VRRmhwMktQdnFkQzFUcmlMRHJvNkxQcjM1VzI0Y3FkUzcvR2x4VnFpYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVI1TVdKaEFUYmFVVFdEbkpTNTZsZ1wiLFxuICBcInBob25lSWRcIjogXCIyNjFmMDcwZi1lNmMxLTRkZmUtYjFlNy0zZGM4YmQ4YjdjMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjIsXG4gICAgICAxMzQsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICA2MixcbiAgICAgIDk2LFxuICAgICAgMTc4LFxuICAgICAgMTc1LFxuICAgICAgNTEsXG4gICAgICAxMixcbiAgICAgIDQ5LFxuICAgICAgOCxcbiAgICAgIDEwLFxuICAgICAgMTMyLFxuICAgICAgMTY0LFxuICAgICAgMTI1LFxuICAgICAgMixcbiAgICAgIDIyNixcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyMixcbiAgICAgIDQyLFxuICAgICAgMTk4LFxuICAgICAgMTQzLFxuICAgICAgMTg0LFxuICAgICAgOTksXG4gICAgICAxMzQsXG4gICAgICAxNzgsXG4gICAgICAyNTMsXG4gICAgICAyMDEsXG4gICAgICA1NSxcbiAgICAgIDI0NixcbiAgICAgIDIxMixcbiAgICAgIDkxLFxuICAgICAgMjM0LFxuICAgICAgNyxcbiAgICAgIDI0NSxcbiAgICAgIDE0OCxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTkRaUkZTMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQ0OTM3OTAyOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjYyODAwMzQ1NTEwMToyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdmVzK0lFRUlPQjRyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZKQjlTUDVtQlR2RXNOdmllUkxJNjdQS1ZTYTNrMWh5d3hFN0s2enAxR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWU5LNCtFNXNEajFBRTIrTDZwR1E5YUZYM3Rnd3ZvLzBzemZ3T0J5OVlWZHFmSFlZNk9OKzg0MElHek15NXNjK1VGU1puZWM1bTVneEx3eWdtY2FORGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2ozTVVYWmtrNHRWcVRldGd6aHJBaFpTelBIL0owd1JnZVhzZEJCbk1UVkpvczNjakhCRGhIZDVqTVF1ZVFiVEl4OEpuTEJqQjBRd2xMUm1Sb1B4QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ0OTM3OTAyOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NTkwMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5bi5qc29uIjogIntcImtleURhdGFcIjpcInoxaXY2dGtaQ2Q0UjJ5Qi9meVJNRkxXYU9pMTBINUVZUnF0Y1EvenhqWDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDExMDM3NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
