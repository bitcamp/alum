/** Origin is string - either "index" or "join" */
async function redir(origin, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Origin", "https://bit.camp");

  var raw = JSON.stringify({ origin: origin, password: password });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const resp = await fetch(
    "https://fcuouabkea.execute-api.us-east-1.amazonaws.com/default/alumRedir",
    requestOptions
  );

  const text = await resp.text();
  try {
    new URL(text);
    window.location.replace(text);
  } catch (_) {}
}
