let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
//  conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(gangbang), [['Next', `/gangbang`]],m)
conn.sendFile(m.chat, pickRandom(gangbang), null, `Nih *${name}*`, m)
}
handler.help = ['gangbang']
handler.tags = ['anime', 'nsfw', 'premium']
handler.command = /^(gangbang)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const gangbang = [

  "https://img2.gelbooru.com/samples/34/45/sample_34459111cb632e38a8c40ee942ddf843.jpg",
    "https://img2.gelbooru.com/images/31/e7/31e7c44931e7448f4181031594182ed9.jpg",
    "https://gelbooru.com/index.php?page=post&s=view&id=5596970&tags=multiple_penises",
    "https://img2.gelbooru.com/samples/13/6b/sample_136bed9dc6974c934f568bee7c441cc5.jpg",
    "https://img2.gelbooru.com/samples/4b/49/sample_4b493bd0e14ddc012799a72c41ebc1ec.jpg",
    "https://img2.gelbooru.com/samples/46/c7/sample_46c7279d81794bc2293fb8dcf1120ac6.jpg",
    "https://img2.gelbooru.com/images/1a/5f/1a5f18396a948fb86108de83967f29cb.jpg",
    "https://img2.gelbooru.com/images/d7/f9/d7f9aceb5c4250f689c5fca077726541.jpg",
    "https://img2.gelbooru.com/samples/a3/07/sample_a307112f00bcc7fa3596ffe2e54b8f42.jpg",
    "https://img2.gelbooru.com/images/62/f6/62f600e5ea118bdf1d1681e1e71bd852.jpg",
    "https://img2.gelbooru.com/images/62/f6/62f600e5ea118bdf1d1681e1e71bd852.jpg",
    "https://img2.gelbooru.com/images/9e/3a/9e3a87763750b8ebbbec5916da579656.jpg",
    "https://img2.gelbooru.com/images/6d/9f/6d9f279b25996efbaddb6416dc8235c6.jpg",
    "https://img2.gelbooru.com/images/c1/8b/c18bc5cb557d2c63662337bcff56db31.jpg",
    "https://img2.gelbooru.com/samples/0f/04/sample_0f04a7ee3ed4ca6885d079aeceeac64c.jpg",
    "https://img2.gelbooru.com/images/68/6f/686fc564acdda2858f0f4a032797ef4d.jpg",
    "https://img2.gelbooru.com/samples/8a/21/sample_8a21fe7e8c5327bf754e1182fd732095.jpg",
    "https://img2.gelbooru.com/samples/b9/66/sample_b9667235ff2c49c75d8cabdb2707785f.jpg",
    "https://img2.gelbooru.com/samples/bd/b3/sample_bdb3c0b983a300b78867aaa9b93f63de.jpg",
    "https://img2.gelbooru.com/samples/e6/ce/sample_e6ceaa105dea5fe9081cb52fdef92513.jpg",
    "https://img2.gelbooru.com/images/37/e8/37e882cbc065a8a1874bc99928cc14ea.jpg",
    "https://img2.gelbooru.com/samples/f1/c5/sample_f1c539235686301e85f943665d88fbdc.jpg",
    "https://img2.gelbooru.com/samples/32/69/sample_326944dacf4e9b71928280f7066aa253.jpg",
    "https://img2.gelbooru.com/samples/6a/0e/sample_6a0e8a07c06dfde5bd1fb5c633bbb59c.jpg",
    "https://img2.gelbooru.com/samples/fc/b8/sample_fcb8850246c8aef78eb4e3708eeaab88.jpg",
    "https://img2.gelbooru.com/samples/9d/4b/sample_9d4bfd4c996be28a7e54c12678a8c5e2.jpg",
    "https://img2.gelbooru.com/samples/e7/6e/sample_e76ee790a06401e7dc6809f3c9c7fc3b.jpg",
    "https://img2.gelbooru.com/samples/15/f7/sample_15f7245377fe7189dd7442990215bfea.jpg",
    "https://img2.gelbooru.com/images/b2/d0/b2d012e396290bdb4a8c11572cefe9bd.png",
    "https://img2.gelbooru.com/images/66/8d/668d9b9c2f30ec0146b53d9fbde021a5.jpg",
    "https://img2.gelbooru.com/images/64/83/64833a1ce79e5dc94f7328354ab0a2d7.jpg",
    "https://img2.gelbooru.com/samples/88/86/sample_8886c84620e6bf410323c83844556025.jpg",
    "https://img2.gelbooru.com/samples/6f/db/sample_6fdb557c345722bbd119a3961328079e.jpg",
    "https://img2.gelbooru.com/samples/17/e2/sample_17e217960c692674d0dc74f879c089af.jpg",
    "https://img2.gelbooru.com/samples/f4/13/sample_f413ad61e0ae6c07e36754781c06e646.jpg",
    "https://img2.gelbooru.com/samples/09/ac/sample_09ac8638fe88834bf6dbabc2ce550aee.jpg",
    "https://img2.gelbooru.com/samples/72/8d/sample_728dc0b49e5f051557ede4f47df9326c.jpg",
    "https://img2.gelbooru.com/images/4d/a1/4da1613bb4bd119e52e08bc38dd85fe0.jpg",
    "https://img2.gelbooru.com/samples/31/dc/sample_31dce5b51052cb58015bfcd645f45c8e.jpg",
    "https://img2.gelbooru.com/samples/f1/98/sample_f198f9f3e2d99eaa1bb034205369f2ae.jpg",
    "https://img2.gelbooru.com/samples/d5/75/sample_d575c6b47af35d91755c3cb6eb423d3f.jpg",
    "https://konachan.com/sample/8f46ff65ee4b208316a0c4bdcc989370/Konachan.com%20-%20317317%20sample.jpg",
    "https://konachan.com/sample/2b26ab530b7c6f015873004040e4ae60/Konachan.com%20-%20317285%20sample.jpg",
    "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770953743255470140/49feaec0-0192-449a-82b7-44b717d9d849.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770969329357160498/GIF_52.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770983088888610826/1c6dc9b8-6e04-45fb-b78f-1aa741e98d2d.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770986448329506846/3360-xWcGyI07i_A.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770986610749603861/3471-9vvJccyONJk.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770987549363535902/16c691dc-bbbc-4c1c-b7e9-d1bc9f4c3d50.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988869780635688/3cfbdf1c-d533-4ba9-ab3d-ca49d2ac0b0a.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770988991394611230/3a7d63407f9f5143517202feea7111fc.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989484657344512/lusciousnet_swimsuit_slave_949905045.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000856518721536/0500-JoBwW6kA3kk.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000963888316456/0503-yDlwnTv6si4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001745924816896/0555-it84pW6ebn4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002263976017940/603-mq77h7AVEfA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002980522655755/0663-d87YM3v4VjE.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016785435688960/1721-Thyo_5A5g9I.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016825914916894/1725-XhHmtbknnmQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771030693425053726/382f3175-dcff-439c-89fb-309ed04d52fd.jpg"
]