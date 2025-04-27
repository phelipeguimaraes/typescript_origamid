const link  = document.getElementById("origamid")

if(link instanceof HTMLAnchorElement) {
  link.href.replace('http://', 'https://')
}
