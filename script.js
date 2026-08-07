function analizEt() {
const buton = document.querySelector("button");
buton.innerHTML = "⏳ HAKA Düşünüyor...";
buton.disabled = true;
    const metin = document.getElementById("sorun").value.toLowerCase();

    let sonuc = "";

    if (
        metin.includes("kira") ||
        metin.includes("kiracı") ||
        metin.includes("ev sahibi") ||
        metin.includes("depozito")
    ) {

        sonuc = kiraAnalizi(metin);

    } else if (
        metin.includes("iş") ||
        metin.includes("maaş") ||
        metin.includes("sgk") ||
        metin.includes("tazminat")
    ) {

        sonuc = isAnalizi(metin);

    } else if (
        metin.includes("market") ||
        metin.includes("ürün") ||
        metin.includes("fiş") ||
        metin.includes("ayıplı")
    ) {

        sonuc = marketAnalizi(metin);

    } else if (
        metin.includes("trafik") ||
        metin.includes("araba") ||
        metin.includes("araç") ||
        metin.includes("park")
    ) {

        sonuc = trafikAnalizi(metin);

    } else if (
        metin.includes("aile") ||
        metin.includes("boşanma") ||
        metin.includes("velayet")
    ) {

        sonuc = aileAnalizi(metin);

    } else {

        sonuc = `
        <h2>HakAsistan</h2>
        <p>Bu konu için analiz hazırlanıyor.</p>
        `;

    }

    document.getElementById("sonuc").innerHTML = sonuc;
buton.innerHTML = "⚖️ HAKA ANALİZİNİ BAŞLAT";
buton.disabled = false;
}
