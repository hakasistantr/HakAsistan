// ===============================
// HAKASİSTAN - KİRA MODÜLÜ
// ===============================

const KiraModulu = {

  kontrol(metin) {

    metin = metin.toLowerCase();

    return (
      metin.includes("kira") ||
      metin.includes("kiracı") ||
      metin.includes("ev sahibi") ||
      metin.includes("depozito") ||
      metin.includes("tahliye") ||
      metin.includes("kontrat") ||
      metin.includes("sözleşme")
    );

  },

  analiz() {

    return `
    <h2>🏠 Kira Hukuku Analizi</h2>

    <p>
    Yazdığınız konu kira hukukuyla ilgili görünüyor.
    </p>

    <h3>İlk Yapılması Gerekenler</h3>

    <ul>
      <li>Kira sözleşmesini saklayın.</li>
      <li>Dekontları hazırlayın.</li>
      <li>Mesaj kayıtlarını saklayın.</li>
      <li>Fotoğraf varsa ekleyin.</li>
    </ul>

    <h3>HakAsistan Önerisi</h3>

    <p>
    Belgeler incelendikten sonra hukuki yol haritası oluşturulabilir.
    </p>
    `;

  }

};
