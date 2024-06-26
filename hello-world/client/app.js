async function fetchGreeting() {
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: "{ greeting }" }),
  });
  const body = await response.json();
  console.log("body : ", body);
  return body.data.greeting;
}

fetchGreeting().then((greeting) => {
  const element = document.getElementById("greeting");
  element.textContent = greeting;
  //   document.body.appendChild(element);
});
