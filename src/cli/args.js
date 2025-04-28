const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsKeyValue = [];

  for (let i = 0; i < args.length; i += 2) {
    argsKeyValue.push(`${args[i].slice(2)} is ${args[i + 1]}`);
  }

  console.log(argsKeyValue.join(", "));
};

parseArgs();
