function blobbypass() {
  if (!window.PaymentRequest) return alert("It cannot be used because it does not support Payment Request API");
  var url = prompt('Cloak URL');var frame = document.createElement('iframe'); if(url.includes('https://') || url.includes("http://")) {frame.src = url;}else{frame.src = "https://" + url;} frame.style.position="fixed"; frame.style.top="0%"; frame.style.right="0%"; frame.style.height="800px"; frame.style.width="1400px"; frame.style.zIndex="100000"; document.body.appendChild(frame); var btn= document.createElement("button"); btn.style.position="fixed"; btn.style.top="0%"; btn.style.right="0%"; btn.zIndex="100000"; innerHTML="HIDE"; document.body.appendChild(btn);
  new PaymentRequest(
    [
      {
        supportedMethods: location.origin + "/payment-manifest.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "1", currency: "USD"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = blobbypass;
