const fetch = require ('node-fetch')
const uploadImage = require ('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .toanime'
m.reply(wait)

let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/toanime?url=${url}&apikey=kyuu`)).buffer()
await conn.sendFile(m.chat, hasil, 'Maaf Jika Hasilnya Tidak Sesusai Keinginan 🙏☺', global.wm, m)
}

handler.help = ['toanime', 'jadianime3']
handler.tags = ['anime', 'premium', 'ai']
handler.command = /^(toanime|jadianime3)$/i
handler.premium = true

module.exports = handler