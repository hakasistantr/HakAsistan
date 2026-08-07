function analizEt() {

const metin = document.getElementById("sorun").value.toLowerCase();

let sonuc = "";

if(
metin.includes("kira") ||
metin.includes("ev sahibi") ||
metin.includes("kiracı") ||
metin.includes("depozito")
){

sonuc = kiraAnalizi(metin);

}
else if(
metin.includes("iş") ||
metin.includes("maaş") ||
metin.includes("tazminat") ||
metin.includes("sgk")
){

sonuc = isAnalizi(metin);

}
else if(
metin.includes("market") ||
metin.includes("ürün") ||
metin.includes("fiş") ||
metin.includes("ayıplı")
){

sonuc = marketAnalizi(metin);

}
else if(
metin.includes("banka") ||
metin.includes("kredi") ||
metin.includes("hesap") ||
metin.includes("bloke")
){

sonuc = bankaAnalizi(metin);

}
else if(
metin.includes("trafik") ||
metin.includes("araba") ||
metin.includes("araç") ||
metin.includes("park")
){

sonuc = trafikAnalizi(metin);

}
else if(
metin.includes("aile") ||
metin.includes("boşanma") ||
metin.includes("velayet")
){

sonuc = aileAnalizi(metin);

}
else{

sonuc = "<h2>HakAsistan</h2><p>Bu konu için analiz hazırlanıyor.</p>";

}

document.getElementById("sonuc").innerHTML = sonuc;

}
