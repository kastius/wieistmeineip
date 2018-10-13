if(ipver4 == 4) {
	document.getElementById('ipv4_ip').innerHTML = ipver4_ip;
	document.getElementById('ipv4_host').innerHTML = ipver4_host;
        document.getElementById('ipv4_country').innerHTML = ipver4_country;
	document.getElementById('ipv4_table').style.display = "table";
}
if(ipver6 == 6) {
	document.getElementById('ipv6_ip').innerHTML = ipver6_ip;
	document.getElementById('ipv6_host').innerHTML = ipver6_host;
        document.getElementById('ipv6_country').innerHTML = ipver4_country;
	document.getElementById('ipv6_table').style.display = "table";
}
