module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100075964867229") {
    var aid = ["100075964867229"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সৌরভ বস এর মন মন ভালো নেই আজকে-!💔🥀", "- বস সৌরভ এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "বস সৌরভ এর একটা প্রিয়র খুব দরকার কারন উনার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে ইনবক্স এ আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো বস সৌরভ এর তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে 😭😭","সৌরভ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া সিংগেল সৌরভ রে একটা GF দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে বস সৌরভ এর ইনবক্স এ যা🙂","মেনশন দিসনা পারলে সৌরভ ভাই কে একটা GF দে😒","Mantion_দিস না বাঁলপাঁক্না সৌরভ প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিল বস সৌরভ🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
