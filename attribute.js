['protocol', 'hostname', 'pathname'].forEach(function(a) {
    document.documentElement.setAttribute(a, location[a]);
});
