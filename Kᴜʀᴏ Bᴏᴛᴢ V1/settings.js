const chalk = require("chalk")
const fs = require("fs")
require("./lib/vn")

//—————「 Set Nama Bot & Own 」—————//
global.botname = "Kuro Botz"
global.ownername = 'Zann'
global.ownerNumber = ["6285607265790@s.whatsapp.net"]
global.creator = "6285607265790@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//—————「 Setting Owner 」—————//
global.owner = ['6285607265790']
global.ownernomer = "6285607265790"
global.ownername = "Zann"
global.ownernumber = '6285607265790'

//—————「 Link Url 」—————//
global.wagc = "https://chat.whatsapp.com/DsFxuDcdJEX7041vN9t6Qd"

//—————「 Set Wm 」—————//
global.wm = "Kuro Servamp"
global.packname = "Cʀᴇᴀᴛᴇᴅ Bʏ"
global.author = "Kᴜʀᴏ Bᴏᴛᴢ"

//—————「 Set Image 」—————//
global.thum = fs.readFileSync("./Media/theme/thumb.jpg")
global.thumb = fs.readFileSync("./Media/theme/thumb.jpg")

//—————「 Set Message 」—————//
global.mess = {
success: 'Done',
admin: 'Fitur Khusus Admin Grup!!!',
botAdmin: 'Jadikan Bot Admin Terlebih Dahulu!!!',
owner: 'Maaf Kak Ini Fitur Khusus Owner!!!',
group: 'Hanya Bisa Di Gunakan, Di Dalam Grup!!!',
private: 'Hanya Bisa Di Gunakan, Di Dalam Chat Pribadi!!!',
bot: 'Bot Number User Special Features!!!',
wait: 'Sedang Di Proses, Mohon Tunggu',
linkm: 'Mana linknya?',
nsfw: 'fitur Nsfw Belum Diaktifkan!!!',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})