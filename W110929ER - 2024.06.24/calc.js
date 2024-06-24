const args = process.argv.slice(2);

console.log(args.reduce((prev, curr) => prev + Number(curr), 0));
