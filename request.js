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
    redirect: "follow",
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

function onBlur() {
  document.getElementById("pw-form").classList.remove("active");
}

function onFocus() {
  document.getElementById("pw-form").classList.add("active");
}

function onInput() {
  const val = document.getElementById("pass").value;
  if (val.length > 0) {
    document.getElementById("submit").classList.add("active");
  } else {
    document.getElementById("submit").classList.remove("active");
  }
}

function onKeyPress(e) {
  if (e.keyCode == 13) {
    onSubmit();
  }
}
