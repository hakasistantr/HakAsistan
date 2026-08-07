function kanunGetir(kelime) {

const kanunlar = {
"kira":"Türk Borçlar Kanunu",
"iş":"4857 Sayılı İş Kanunu",
"trafik":"2918 Sayılı Karayolları Trafik Kanunu",
"tüketici":"6502 Sayılı Tüketicinin Korunması Hakkında Kanun",
"aile":"4721 Sayılı Türk Medeni Kanunu"
};

return kanunlar[kelime] || "İlgili kanun bulunamadı.";

}
