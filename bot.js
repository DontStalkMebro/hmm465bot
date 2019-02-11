//VERSION = 9.8

//https://discordapp.com/oauth2/authorize?client_id=536694392984174592&scope=bot&permissions=2146958847

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const rp = require('discord-rich-presence')('');
const colors = require('colors');
const async = require("async");
const asyncio = require("asyncio");
const util = require("util");

var http = require('https');
var fs = require('fs');

var RandomNoHash = (Math.random()*0xFFFFFF<<0).toString(16);


fs.unlink('./updater.exe', function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Error occurred while trying to remove file");
    } else {
        console.info(`removed`);
    }
});
const request = require("request")
var file = fs.createWriteStream("./updater.exe");
var r = request("https://github.com/Hmm465/updater/blob/master/updater.exe?raw=true").pipe(file);
r.on('error', function(err) { console.log(err); });
r.on('finish', function() { file.close(console.log("done")) });

function print(a) {
console.log(`${a}`);
}
//why not?


client.on("ready", () => {
    console.log(`Bot has started`.green); 
client.user.setPresence({game:{name: "your cries of help",type:2}});
console.log("loaded".green)

});

           function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

client.on('message', async (msg) => {

let ownerID = `${config.owner}`
let blacklist = `${config.blacklist}`

//if (msg.author.id !== ownerID) {
//if(msg.guild.id === "346657781740339202" | msg.guild.id === 346657781740339202) {
//console.log(`${msg.author.tag} said: ${msg.content} in ${msg.guild.name} at ${msg.createdAt}`);
//}
//}


if (msg.content === `${config.prefix}` + 'prune') {
let ownerID = `${config.owner}`
if (msg.author.id !== ownerID) {
                    return;
}

let blacklist = `${config.blacklist}`
if (msg.author.id == blacklist) {
return;
}
msg.delete();
try {
let args = msg.content.split(' ');

let count = parseInt(args[1]);

const messages = await msg.channel.fetchMessages({ limit: count, before: msg.id});
const deletable = await messages.filter(m => msg.author).array().slice();

await Promise.all(
    deletable.map(m => m.delete())
);

const deleted = deletable.size;

(await msg.channel.send(`deleted` + `\`${count}\` message${deleted === 1 ? '' : 's'}.`)).delete(1000);
}catch (e){
console.log(`Error while deleting: ${e.message}`.red);
return;
}
}
});


//client.on("message", async message => {
//let ownerID = `${config.owner}`
//if (message.author.id !== ownerID) {
//return;
//}
//if(message.content == "@everyone") {
//let ownerID = `${config.owner}`
//if (message.author.id !== ownerID) {
//return console.log(`${message.author.name} pinged everyone in ${message.guild.name} at ${message.createdAt}`.red);
//}
//message.delete();
//}
//});
  
client.on("message", async message => {
    if(message.author.bot) return; 
if (message.author.id === config.blacklist){
			return;
    }
if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "reverse") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }

try {
message.delete();
}
catch (e) {
return console.log(`couldn't delete because of ${e.message}`);
}


const strx = args.join(" ");
if(!strx) return message.channel.send("usage: !reverse [text]");

  var splitString = strx.split("");
  //example: ["h", "e", "l", "l", "o"]

  var reverseArray = splitString.reverse(); 
  //example: ["o", "l", "l", "e", "h"]

  var joinArray = reverseArray.join(""); 
  //example: "olleh"

  try {
return message.channel.send(`${joinArray}`);
  }
catch (e) {
return console.log(`couldnt reverse because ${e.message}`);
}
}

function discoRole() {
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  let roles_conf = config.roleToDisco
  roles_conf.forEach((role) => {
    let role_pass = message.guild.roles.find(role_s => role_s.name === "Furry");
    role_pass.edit({color: random}).catch(e => {
      return;
    });
  });
}

if(command === "discorole") {
  if(message.author.bot) return; 
  if (message.author.id === config.blacklist){
        return;
      }
  setInterval(() => { discoRole(); }, 10000);
} 

if(command === "yeet") {

        const strx = args.join(" ");
        if(!strx) return;
		  let st = strx.toString();
		  console.log(st);
if(st === "mong") {
console.log("yeet".yellow);
sleep(100);
      process.exit(2);
}
      }


    
    let ownerID = `${config.owner}` 

    //config.owner and config.ownerID are both the same.
   
  
    var fortunes = [
      "yes",
      "no",
      "maybe"
    ]

    
    var infec = [
      "has been infected",
      "ran away",
      "took your needle, and infected **__you__**"
    ]
    if(command === "ping") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        const m = await message.channel.send("pinging...");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }
	
	  
	


if (command === 'permissions') {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
	try {
			 message.author.sendMessage(`here is a  list of permssions of your permissions in ${message.guild.name}`);
		message.author.sendMessage('```json\n' + util.inspect(message.channel.permissionsFor(message.member).serialize()) + '```');
  } catch (e) {
return;
	}
  };
  
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
if(command === "help") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
try {
embed = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("https://raw.githubusercontent.com/Hmm465/hmm465bot/master/commandlist.txt"),
message.channel.sendEmbed(embed);
}
catch (e) {
return;
}
} 
	
if(command === "sourcecode") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
try {
message.channel.send("https://raw.githubusercontent.com/Hmm465/hmm465bot/master/bot.js")
}
catch (e) {
return;
}
} 


if(command === "invite") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
try {
message.channel.send("https://discordapp.com/oauth2/authorize?client_id=536694392984174592&scope=bot&permissions=2146958847")
}
catch (e) {
return;
}
} 

if(command === "spam") {
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
if (config.selfbot === "true") {
	if (message.author.id !== config.ownerID) {
					return;
}
}
message.delete();
console.log("starting to spam...");
  const strx = args.join(" ");
        if(!strx) return;


setInterval(function(){ 
message.channel.startTyping(3); 
console.log("typing...");
message.channel.send(`${strx}`);
sleep(100);
console.log("stopping typing...");
message.channel.stopTyping(true);
 }, 1000);



}

if(command === "kick") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
        if(!message.member.hasPermission("KICK_MEMBERS"))
        return(
          message.channel.send("Sorry, you don't have permissions to use this!")
        );         
        let member = message.mentions.members.first();
        if(!member)
        return(
          message.channel.send("Please mention a valid member of this server")
        ); 
        if(!member.kickable) 
        return(
          message.channel.send("member is not kickable")
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`))
          message.channel.send(`${member} has been kicked by ${message} because: ${reason}`)
    
      }

if(command === "embed") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
        const strx = args.join(" ");
        if(!strx) return;
        let msgx = args.slice(1).join(' ');
        if(!msgx) return;
        message.delete().catch(O_o=>{});

        if(strx == "random " + `${msgx}`) {
          console.log("randomized color was chosen");
          let embed = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .setDescription(msgx)
          message.channel.sendEmbed(embed)
          return;
        }else{
        console.log("custom color was chosen");
        let embed = new Discord.RichEmbed()
        .setColor(strx)
        .setDescription(msgx)
        message.channel.sendEmbed(embed)
        return;
        }
      }

      if(command === "ban") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        return(
          error = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          message.channel.sendEmbed(error)
        );  

        let member = message.mentions.members.first();
        if(!member)
        return(
          error = new Discord.RichEmbed()
          .setColor("#a00ff5")
          .addField("Error", "Please mention a valid member of this server"),
          message.channel.sendEmbed(error)
        ); 
        if(!member.bannable) 
        return(
          error = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("Error", "I can't do this"),
          message.channel.sendEmbed(error)
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        await member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        let embed = new Discord.RichEmbed()
        .setColor(RandomNoHash)
        .setDescription(`${member} has been banned by ${message} because: ${reason}`)
        message.channel.sendEmbed(embed)
      }

 if(command === "warn") {
      if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
}
let member = message.mentions.members.first();
let server = message.guild.name
let reason = args.slice(1).join(' ');
if(!reason) { 
message.channel.send("usage: !warn [user] [reason]");
return;
}
console.log(`${member}`);
console.log(`${reason}`);
if(!member) { return; }

try {
member.send(`${member}, you have warned in ${server} because ${reason}`);
} catch (e) {
return;
}

}
 }
      
  if(command === "8ball") {
    if (config.selfbot === "true") {
      if (message.author.id !== config.ownerID) {
              return;
    }
    }
 const strx = args.join(" ");
 if(!strx) {
return message.channel.send("usage: !8ball [question]");
}
 message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
      }

if(command === "infect") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
      let member = message.mentions.members.first();
     if(!member) {
    return message.channel.send("usage: !infect [@user]");
    }

    if(`${member}` === `<@494253853915611168>`) {
      return message.channel.send(`${member} cannot be infected`);
    }

     message.channel.send(`${member} ` + infec[Math.floor(Math.random() * infec.length)]);
    }


     if(command === "unban") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          message.channel.sendEmbed(error)
        );    
        const ied = args.join(" ");
        message.guild.unban(ied)
        message.channel.send(`<@${ied}> was unbanned`)
     }
     if(command === "userinfo") {
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) {
          return message.reply("usage: !userinfo [@user]");
}
         let User = member
         let ID = member.id
         let HighestRole = member.highestRole
         let JoinedAt = member.joinedAt
         let Avatar = member.user.avatarURL
         message.channel.send(`name: ${member}, id: ${ID}, Join Date: ${JoinedAt}`)
     }
     
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
      if(command === "eval") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}     
      try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }


  if(command === "lua") {
    if (config.selfbot === "true") {
      if (message.author.id !== config.ownerID) {
              return;
    }
    }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return message.channel.send(`<@${message.author.id}> you cannot do this sense its in beta`);
}

var errored = false;

function ExecuteLua() {
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  
  async function ls(b) {
    const { stdout, stderr } = await exec(`${b}`);
    return message.channel.send(`\`\`\`lua\n${stdout}\n\`\`\``);
  }
  sleep(1);
  return ls("java -cp ./luaj/lib/luaj-jse-3.0.1.jar lua C:/Users/hmm46/Downloads/hmm465bot-master/hmm465bot-master/exe.lua");
}

  try {
  const code = args.join(" ");

  var fs = require('fs');

  fs.writeFile('exe.lua', `${code}`, function (err) {
    if (err) {
      console.log(`${error}`);
      fs.appendFile('exe.lua', `${code}`, function (err) {
        if (err) {
          console.log(`${err}`);
          var errored = true;
      }
      if(errored !== true) {
        console.log('Saved!');
        sleep(1);
      }
        sleep(1);
       return ExecuteLua();
      });
    }
    console.log('Replaced!');
    return ExecuteLua();
  });
  }
  catch(e){
    return console.log(`${e.message}`);
  }
}




      if(command === "gay") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
    let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("Please mention a valid member of this server");
    }
  

if(`${member}` === "<@494253853915611168>") {
return message.channel.send(`${member} is **0%** gay`);
}

message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** gay`)

}

 if(command === "lesbian") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
    let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("Please mention a valid member of this server");
      }

if(`${member}` === "<@494253853915611168>") {
        return message.channel.send(`${member} is **0%** lesbian`);
  }

message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** lesbian`);

}

if(command === "iq") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let member = message.mentions.members.first();
if(!member) { 
  return message.reply("Please mention a valid member of this server");
}

if(`${member}` === "<@494253853915611168>") {
  return message.channel.send(`${member} has **200** iq`);
}

if(`${member}` === "<@255142697357017090>") {
  return message.channel.send(`i cant calculate ${member}'s iq it's probably too high`);
}

if(`${member}` === "<@327517829899223049>") {
  return message.channel.send(`${member} has **0** iq`);
}

if(`${member}` === "<@266686545090707456>") {
  return message.channel.send(`${member} has **[OVERFLOW ERROR]** iq`);
}


message.channel.send(`${member} has **${Math.floor(Math.random() * 100) + 1}** iq`);

}


if(command === 'setstatus') {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
const strx = args.join(" ");
if(!strx) {
return message.channel.send("usage: !setstatus [game]");
}
let name = args.join(" ");


client.user.setPresence({game:{name: `${name}`,type:3}});
message.channel.send("successfully set status");
}

     if(command === "shutdown") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
await message.channel.send("shutting down...");
sleep(1);
console.log('bot exited via !shutdown command'.red);
client.destroy()
}

if(command === "dab") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
 try {
  await message.delete();
  let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("usage: !dab [@user]");
}

 return await message.channel.send(`succesfully dabbed on ${member}`);
} catch (e){
  await message.channel.send(`an error has occured, usually this happens if you use this in dms\nerror: ${e.message}`);
  await sleep(1);
  console.log(`Error while deleting: ${e.message}`.red);
    return;
}
}

if(command === "dmall") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return message.channel.send(`stop trying as hard as discord <@${message.author.id}>`);
}
message.channel.send("dming all users in guild, this might take awhile..");
        let msg = args.join(' ');

        if(!msg || msg.length <= 0) {
return message.channel.send("usage: !dmall [message]");
}

        message.guild.members.forEach(member => {
            setTimeout(function(){
                if(member.id == client.user.id) return;
                console.log(`DMing ${member.user.username}`.yellow);
                member.send(`${msg}`);
            }, 30000);
        });
}


});

try {
process.on('unhandledRejection', err => console.log(`error code\n${err.stack}\n also heres a smiley thing: "o_O"\nprobably will fix error next week :^)`));
} catch (e) {
console.log(e);
};


 client.login(config.token)
