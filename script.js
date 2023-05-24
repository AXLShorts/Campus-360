document.getElementById("next1").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/e533781537b64b9fa64fb70c2423ad05?utm_campaign=embed&utm_source=other&heading=323.13&pitch=2.74&field-of-view=75&size=medium&display-plan=true"
  );
};

document.getElementById("next2").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/076bf5bb8cff4eba9fef4988b1f1d03e?utm_campaign=embed&utm_source=other&heading=314.2&pitch=-5.08&field-of-view=75&size=medium&display-plan=true"
  );
};

document.getElementById("next3").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/6c588a40a2a348d4a80e6df5014b873c?utm_campaign=embed&utm_source=other&heading=-9.78&pitch=6.42&field-of-view=50.85&size=medium&display-plan=true"
    //replace this with image for the fourth accordion
  );
};

document.getElementById("prev1").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/6c588a40a2a348d4a80e6df5014b873c?utm_campaign=embed&utm_source=other&heading=-9.78&pitch=6.42&field-of-view=50.85&size=medium&display-plan=true"
  );
};

document.getElementById("prev2").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/e533781537b64b9fa64fb70c2423ad05?utm_campaign=embed&utm_source=other&heading=323.13&pitch=2.74&field-of-view=75&size=medium&display-plan=true"
  );
};

document.getElementById("prev3").onclick = function () {
  changeIframe(
    "iframe-con",
    "https://momento360.com/e/u/076bf5bb8cff4eba9fef4988b1f1d03e?utm_campaign=embed&utm_source=other&heading=314.2&pitch=-5.08&field-of-view=75&size=medium&display-plan=true"
  );
};

function changeIframe(iframeId, newSrc) {
  var iframe = document.createElement("iframe");
  iframe.src = newSrc;
  iframe.width = "700vw";
  iframe.height = "500vh";
  document.getElementById(iframeId).innerHTML = "";
  document.getElementById(iframeId).appendChild(iframe);
}
