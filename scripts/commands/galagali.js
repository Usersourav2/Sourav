const fs = require("fs");
module.exports.config = {
	name: "sad096",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("chudanir put") ||
	   react.includes("Xuda") ||
	   react.includes("গালিবাজ") ||
	   react.includes("bessa") || 
react.includes("খানকি মাগি") || 
react.includes("চুদানি") ||
react.includes("চুদা") ||
react.includes("chuda") ||
react.includes("ভুদা") || 
react.includes("vuda") || 
react.includes("gali") ||
react.includes("মাগীর পোলা") ||
react.includes("তুর মারে চুদী") || 
react.includes("khanki") ||
react.includes("মাদারি") ||
react.includes("chud") || 
react.includes("chuda") || 
react.includes("বোকাচোদা") ||
react.includes("নটির পোলা") ||
react.includes("cudi") ||
react.includes("magi") ||
react.includes("noti") || 
react.includes("নটি") ||
react.includes("মাগি") ||
react.includes("মাদারচোদ") ||
react.includes("গুদ") ||
react.includes("চুদা") ||
react.includes("চুদি") || 
react.includes("machuda") ||
react.includes("চনু") ||
react.includes("bal") ||
react.includes("খাংকির পোলা") ||
react.includes("খানকি মাগি") ||
react.includes("মাচুদা") || 
react.includes("sex") || 
react.includes("sexy") || 
react.includes("tor mare chudi") ||
react.includes("বাল") || 
react.includes("heda") || 
react.includes("হেডা")) {
		var msg = {
				body: "এখানে গালাগালি করবি না সৌরভ ভাই কে ডাক দিমু কিন্তু-!!😤👊🔪"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
