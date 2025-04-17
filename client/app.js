async function Saludar(){
    const respose = await fetch('http://localhost:3000/api/hello')
    const data = await respose.json();
    document.getElementById('saludar').textContent = data.message;
}

async function Despedir(){
    const respose = await fetch('http://localhost:3000/api/GoodBye')
    const data = await respose.json();
    document.getElementById('despedir').textContent = data.message;
}

async function Tiempo(){
    const respose = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=41c24d525dac0eed946d6145c5e582c5&units=metric&lang=es')
    const data = await respose.json();
    document.getElementById('tiempo').textContent = data.visibility;
}