function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
}
async function waitAndLog(milliseconds) {
    await delay(milliseconds);
    console.log("Done!");
}
  
waitAndLog(2000); 