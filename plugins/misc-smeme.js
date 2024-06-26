import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import moment from "moment-timezone"


let d = new Date(new Date + 3600000)
let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
let locale = "id"
let date = d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })
let time = d.toLocaleTimeString(locale, { hour: "numeric", minute: "numeric", second: "numeric" })
        
        
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, `${global.wm}\n\nSticker Di Buat Pada : ${date}\nPada Jam : ${wib}\n\n${global.packname}`)
    if (stiker) await conn.sendFile(m.chat, stiker, '', packname, m, '', { asSticker: 1 })
}
handler.help = ['smeme <teks atas>|<teks bawah>']
handler.tags = ['tools']
handler.command = /^(smeme)$/i

handler.limit = false

export default handler
