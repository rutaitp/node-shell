let fs = require("fs");

module.exports = {

  listenUserInput: listenUserInput
};

function pwd() {
  process.stdout.write(`You typed: ${process.cwd()}`);
  process.stdout.write('\ntype here > ');
}

function ls() {
  fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
}

function listenUserInput() {
  let userInput = process.stdout.write('type here > ');

    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline

      if (!cmd){
        return "Enter something!";
      } else if (cmd === 'ls'){
        ls();
      } else if (cmd === "pwd"){
        pwd();
      }
    });
}
