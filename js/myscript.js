function transferir()
{
    var x = document.getElementById('texto').textContent 
    document.getElementById('copia').innerHTML = '*Cópia: ' + x 
}

function ligaLampada()
{
    document.getElementById('lampada').src = "./img/pic_bulbon.gif"
}

function desligaLampada()
{
    document.getElementById('lampada').src = "./img/pic_bulboff.gif"
}

function aumentarFonte()
{
    document.getElementById('parestilo').style.fontSize = '50px'
}

function mudarCor()
{
    document.getElementById('parestilo').style.color = '#f11'
}

function mudarAlinhamento()
{
    document.getElementById('parestilo').style.textAlign = 'center'
}