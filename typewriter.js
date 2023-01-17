const sentence = "hello there from lighthouse labs"; 
let interval = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log('\n');
    }}
  , interval);
  interval += 50;
}

