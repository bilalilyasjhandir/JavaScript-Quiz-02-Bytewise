function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 1,
          name: "Bilal",
          email: "bilaljhandir007@gmail.com"
        };
        resolve(userData);
      }, 2000);
    });
}
  
fetchUserData()
.then((data) => {
    console.log("User Data:", data);
})
.catch((error) => {
    console.error("Error fetching user data:", error);
});