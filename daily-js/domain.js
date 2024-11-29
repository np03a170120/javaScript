function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

console.log(domainName("https://www.nb46ntsl4uj3n3gdmom.tv/error"));
