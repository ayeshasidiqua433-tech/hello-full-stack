const wait = (ms) =>
 new Promise((resolve) => setTimeout(() => resolve("Job done!"), ms));
async function run() {
 try {
 console.log("Start");
 const msg = await wait(1000);
 console.log(msg);
 } catch (err) {
 console.log("Error:", err);
 }
}
run();
