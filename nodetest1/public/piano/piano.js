function kosketinPainettu(kosketinElem)
{
    var valittuNuotti = kosketinElem.getAttribute("id");
     
    soitaNuotti(valittuNuotti);
    if (valittuNuotti == kohdeNuotti) {
        oikein++;
        meniOikein = true;
    } else {
         vaarin++;
         meniOikein = false;
    }
    paivitaTila();
    
    if (meniOikein) {
        paivitaTila();
        setTimeout(function() {
            soitaSeuraavaNuotti();
            paivitaTila();
        },2250);
    }
}

function soitaNuotti(nuotti) {
    console.log('soitetaan nuotti: '+nuotti);
    var tiedosto = "nuotit/Piano.mf."+ nuotti+".wav";
    
    playSoundAudioElem(nuotti);
}

function playSoundAudioElem(nuotti) {
    
    var xaudio = document.getElementById("a"+nuotti);
    xaudio.currentTime = 0;

    xaudio.play();
}


function soitaNuottiEmbed(nuotti) {
    console.log('soitetaan nuotti: '+nuotti);
    var tiedosto = "nuotit/Piano.mf."+ nuotti+".wav";
    
    playSound(tiedosto);
}

function playSoundEmbed(soundfile) {
  document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


function arvoNuotti() {
     var luku = Math.round(Math.random()*12);
     var nuotit = ['C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4'];
     return nuotit[luku];
}

function soitaSeuraavaNuotti() {
    var nuotti = arvoNuotti();
    console.log("arvottu nuotti: "+nuotti);
    soitaNuotti(nuotti);
    kohdeNuotti = nuotti;
}

function toistaKohdeNuotti() {
    soitaNuotti(kohdeNuotti);
}

function aloitaPeli() {
    kohdeNuotti = '';
    valittuNuotti = '';
    oikein = 0;
    vaarin = 0;
    tila = 'peli aloitettu';
    paivitaTila();
    soitaSeuraavaNuotti();
    paivitaTila();
}

function paivitaTila() {
    $("#tila").text(tila);
    $("#kohdeNuotti").text(kohdeNuotti);
    $("#valittuNuotti").text(valittuNuotti);
    $("#oikein").text(oikein);
    $("#vaarin").text(vaarin);
}

function nappienAlustus() {
    $(".kosketinWHITE,.kosketinBLACK").click(function(){
     kosketinPainettu(this);
      });

    $("#toista").click(function(){
          toistaKohdeNuotti();
           });    
 
    $("#nollaa").click(function(){
          aloitaPeli();
           });
    
    $("#tilasto").click(function(){
          tilasto();
           });    
}

// sivun alustus
$(document).ready(function(){
    nappienAlustus();         
});