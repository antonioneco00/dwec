var select = document.querySelector('#select');
var ciudad;
var url;
var xml;

select.addEventListener('change', (event) => {
    ciudad = event.target.value;
    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + 
    '&appid=9e92d62795b5b3a4d87bc933e085bce0&mode=xml&lang=es&units=metric';

    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    function respuestaHTTP(aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200) {
                xml = req.responseXML;
                console.log(xml);

                var city = xml.querySelector('city').getAttribute('name');
                var temperature = xml.querySelector('temperature').getAttribute('value');
                var humidity = xml.querySelector('humidity').getAttribute('value');
                var wind = xml.querySelector('wind speed').getAttribute('value');
                var weather = xml.querySelector('weather').getAttribute('value');
                var precipitation = xml.querySelector('precipitation').getAttribute('mode');

                document.querySelector('#ciudad').innerHTML = city;
                document.querySelector('#temperatura').innerHTML = temperature + 'ºC';
                document.querySelector('#humedad').innerHTML = humidity + '%';
                document.querySelector('#viento').innerHTML = wind + 'm/s';
                document.querySelector('#tiempo').innerHTML = weather;
                document.querySelector('#precipitaciones').innerHTML = precipitation;

                document.querySelector('table').style.display = 'table';
            } else {
                console.log("Peticion erronea");
            }
        }
    };

    req.onreadystatechange = respuestaHTTP;
    req.send(null);
});