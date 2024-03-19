function blobbypass() {
  if (!window.PaymentRequest) return alert("It cannot be used because it does not support Payment Request API");
  ((function(){ var a,b,c;c="https://www.google.com/webhp?igu=1", b=document.createElement("iframe"), b.setAttribute("src",c),b.setAttribute("id","rusic-modal"), b.setAttribute("style","position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999999999; background-color: #fff; frameBorder="0""), a=document.getElementsByTagName("body")[0], a.appendChild(b)})).call(this)
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
