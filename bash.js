// console.log(Object.keys(process));

// // Output a prompt
// process.stdout.write('type here > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\ntype here > ');

// });

// // console.log(process.argv);
// console.log(process.cwd());

// Output a prompt
process.stdout.write('type here > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if(cmd === "pwd"){
    process.stdout.write(`You typed: ${process.cwd()}`);
  } else if (cmd === "date"){
    let date = new Date();
    process.stdout.write(`You typed: ${date.toString()}`);
  }

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\ntype here > ');

});


