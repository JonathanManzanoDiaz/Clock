function showTime() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  h = h <= 9 ? "0" + h : h;
  m = m <= 9 ? "0" + m : m;
  s = s <= 9 ? "0" + s : s;
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " ";
}

setInterval(() => {
  showTime();
}, 1000);
