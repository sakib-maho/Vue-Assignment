function loadData() {
    document.body.style.backgroundColor = '#85b9dd';
    document.getElementById("spinner").style.display = 'block';
    document.getElementById("spinner1").style.display = 'block';
    // spinner1.removeAttribute('hidden');
    fetch('https://api.sharetrip.net/api/v1/flight/search?tripType=Return&adult=1&child=0&infant=0&class=Economy&origin=DAC&destination=DXB&depart=2021-12-25&depart=2021-12-30')
        .then(response => response.json())
        .then(data => {
            document.getElementById("spinner").style.display = 'none';
            document.getElementById("spinner1").style.display = 'none';
            document.body.style.backgroundColor = "white";
            console.log(data)
        });
}