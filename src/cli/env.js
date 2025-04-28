const parseEnv = () => {
  const ArrayOfFoundPairs = [];
  const KEY = "RSS_";

  Object.keys(process.env).forEach((value) => {
    if (value.startsWith(KEY))
      ArrayOfFoundPairs.push(`${value}=${process.env[value]}`);
  });

  console.log(ArrayOfFoundPairs.join("; "));
};
parseEnv();
