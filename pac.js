function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "heather.sh")) {
return "PROXY 8.8.8.8:53";
}
else {
return "DIRECT";
}
}
