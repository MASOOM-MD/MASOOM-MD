const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *MASOOM-MD ANIME PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/k5tNS0Z/Manul-Ofc-X.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
