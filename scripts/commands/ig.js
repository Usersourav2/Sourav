/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ღ••\n– নারী তুমি অভিনয়ের মঞ্চ কাপানো নৃত্য শিল্পী.!!🤸‍♂️\n– আর আমি ভিড়ের মাঝে হারিয়ে যাওয়া এক দর্শক মাত্র.!!🖤🌻\n۵",
             "-!\n__যন্ত্রণা কাকে বলে সিগারেট পোড়া মন জানে!!” দূরত্ব বেড়েছে তবু ভালোবাসা আজও টানে☺️🌻\n𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈💙🌸\n-!",
             "- অবহেলা বোঝার জন্য ভাষার প্রয়োজন হয় না!!🌸\n\n- ব্যবহার টাই যথেষ্ট!🥀💔🤍  𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈",
             "- সম্পর্কের মাঝে যদি জেদ চলে আসে!!\n _____🤗🥀 - তখন জিতে যায় দুই জনেই শুধু হেরে যায় সম্পর্ক টা__🌺🥰\n  __━ 𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈😎।।",
             "┏━━━━ 💔 ━━━━┓\n 🖤🤍বিখ্যাত হওয়ার চেয়ে 🤍🥰\n 🖤💚 বিশ্বস্ত হওয়া উত্তম 💗🥰\n┗━━━━ 💔 ━━━━┛",
             "ღ࿐– ছুয়ে দেখার আকুলতা যদি প্রেম হয়!!,😇\n🖤তবে না ছুয়ে না দেখেও অনুভব করাটা ভালোবাসা!🤍💚☺️\n– 𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈●───༊༆",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━IAM HAPPY 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে কোনো মেয়ের প্রতি নয় নিজের প্রতি!!💔-||-🖤🌸✨\n•___𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈___•",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂💚🥀\n♡_༎মাটির নিচে༎_♡❤\n𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈",
             "•\n\nতাকে পাওয়ার তীব্র ইচ্ছা নিয়েও!! •🥰😊\nতাকে ছেড়ে দিয়েছি!!😅•❤️\n𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈🌸❤️",
             "🥀😒কেউ পছন্দ না করলে,,,,\n        কি যায় আসে,,🙂\n                😇ঈশ্বর তো,,\n        পছন্দ করেই বানিয়েছে,,♥️🥀\n         🥰  𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈😎",
             "🌼 এত অহংকার করে লাভ নেই! 🌺 \n  মৃত্যুটা নিশ্চিত,, শুধু সময়টা\n   অ'নিশ্চিত।🖤 𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈 ",
             "_🌻••ছিঁড়ে ফেলুন অতীতের\nসকল পাপের\n                 অধ্যায় ।\n_ফিরে আসুন ঈশ্বরে ভালোবাসায়••🖤🥀",
             "_বুকে হাজারো কষ্ট নিয়ে\n                  ভালোবাসি বলাটা••!☺️\n_ভালোবাসার মানুষটির প্রতি অগাধ বিশ্বাসের নমুনা❤️🥀",
             "_সত্য বলে আঘাত দিও•••!🤗\n\n_কিন্তু মিথ্যা বলে সুখ দিও না••!🥰 𝐂𝐑𝐄𝐀𝐓𝐎𝐑➭ 𝐒𝐎𝐔𝐑𝐀𝐕 𝐕𝐀𝐈  "
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/qcsklmO.jpeg",
  "https://i.imgur.com/3H69WWZ.jpeg",
"https://i.imgur.com/zSye2hY.jpeg",
"https://i.imgur.com/Z9WRb2M.jpeg",
"https://i.imgur.com/ye770hI.jpeg",
"https://i.imgur.com/SY4yaYq.jpeg",
"https://i.imgur.com/vgiFYqt.jpeg",
"https://i.imgur.com/O52qZIW.jpeg",
"https://i.imgur.com/s0WvgTV.jpeg",
"https://i.imgur.com/lX7O1XB.jpeg",
"https://i.imgur.com/II3Unmu.jpeg",
"https://i.imgur.com/LKeHaV9.jpeg",
"https://i.imgur.com/BxV7nrM.jpeg",
"https://i.imgur.com/7jmsYbV.jpeg",
"https://i.imgur.com/aQOtbgI.jpeg",
"https://i.imgur.com/dRMbind.jpeg",
"https://i.imgur.com/L50upD2.jpeg",
"https://i.imgur.com/RSKF5wv.jpeg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
