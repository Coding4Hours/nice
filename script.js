function blobbypass() {
  if (!window.PaymentRequest) return alert("It cannot be used because it does not support Payment Request API");
  ((function(){ var a,b,c;c="https://clever.com/oauth/district-picker?channel=clever&client_id=4c63c1cf623dce82caac&confirmed=true&redirect_uri=https%3A%2F%2Fclever.com%2Fin%2Fauth_callback&response_type=code&state=34436d7c76f9f04e69d6cf9724b0037eb53371311daa396d321786f53cef6622", b=document.createElement("iframe"), b.setAttribute("src",c),b.setAttribute("id","rusic-modal"), b.setAttribute("style","position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999999999; background-color: #fff; border: none;"), a=document.getElementsByTagName("body")[0], a.appendChild(b)})).call(this)
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
