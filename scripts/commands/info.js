module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐒𝐎𝐔𝐑𝐀𝐕 𝐍𝐀𝐓𝐇😎
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐒𝐎𝐍𝐀𝐓𝐎𝐍𝐈🙏🏻
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐀𝐓𝐊𝐀𝐍𝐈𝐘𝐀, 𝐂𝐇𝐀𝐓𝐓𝐎𝐆𝐑𝐀𝐌😊
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐀𝐓𝐊𝐀𝐍𝐈𝐘𝐀, 𝐂𝐇𝐀𝐓𝐓𝐎𝐆𝐑𝐀𝐌😊
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐀𝐋𝐄👨🏻
𝐀𝐠𝐞           : 18+😁
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐈𝐍𝐆𝐋𝐄🤦🏻‍♂️
𝐖𝐨𝐫𝐤        : 𝐏𝐇𝐀𝐑𝐌𝐀𝐂𝐈𝐒𝐓👨🏻‍⚕️💉🩺
𝐆𝐦𝐚𝐢𝐥       : sourabnath@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801880962478📲
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/.......
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100075964867229`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100075964867229/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
