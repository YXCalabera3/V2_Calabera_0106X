let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://imgur.com/ZrOq4nc.jpg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
βοΈHola π ya hay una soluciΓ³n para los botones  para termuxπ*
βββββΧβΧβΧβΧβββ
βγπ±Si usas mi bot o mi bot editado pues usar mi archivo de mi bot de la carpeta de node_modulesβοΈ*
βββββΧβΧβΧβΧβββ
βγβοΈSi quieres que te funcione en otro bot usa mi carpeta de mi bot de node_modulesπ*
βββββΧβΧβΧβΧβββ
βγNΓMERO DEL CREADOR γ
ββhttp://wa.me/51926328073
βββββΧβΧβΧβΧβββ
βγππ΄ππΌππγ
ββhttps://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
βββββΧβΧβΧβΧβββ
βγπ²πΎπΌπ°π½π³πΎπ ππ΄ππΌππγ
ββpkg update && pkg upgrade
ββpkg install git -y
ββpkg install nodejs -y
ββpkg install ffmpeg -y
ββpkg install imagemagick -y
ββtermux-setup-storage
ββcd storage/downloads/nombre
ββnpm install
ββls
ββnpm update
ββnpm start
βββββΧβΧβΧβΧβββ
βγβοΈFunciona bien esto es temporal hasta que salga una nueva versiΓ³n de baileys ya que la versiΓ³n "^4.4.0", aΓΊn no funciona para los botonesπ
βββββΧβΧβΧβΧβββ`
let buttonMessage= {
'document': { url: `http://wa.me/51926328073` },
'mimetype': `application/${document}`,
'fileName': `πππ CHICA π±πΎπ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/51926328073',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/51926328073',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΎπ΅π² CALABERA'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(termux|termux)$/i
export default handler

