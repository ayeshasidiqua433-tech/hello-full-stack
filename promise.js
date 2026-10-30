const wait = (ms) =>
 new Promise((resolve, reject) => {
 if (ms < 0) {
 reject("Wrong time!");
 } else {
 setTimeout(() => resolve("Job done!"), ms);
 }
 });
wait(-5)
 .then((msg) => console.log(msg))
 .catch((err) => console.log(err));