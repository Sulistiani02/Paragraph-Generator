const paragraph = [
    'JavaScript merupakan bahasa pemrograman populer yang digunakan untuk membuat website interaktif dan dinamis.',
    'Tahukah kamu bahwa JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif',
    'JavaScript dapat meningkatkan fungsionalitas pada halaman web',
    'Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web.',
    'Bicara teknis, JavaScript atau kita singkat menjadi JS merupakan bahasa pemrograman jenis interpreter, sehingga kamu tidak memerlukan compiler untuk menjalankannya.',
    'Sebagai developer zaman now. JavaScript menjadi salah satu bahasa pemrograman yang sangat populer.',
    'Kita bisa buktikan juga bahwa JS itu populer dan menjadi bahasa yang paling banyak digunakan di Github.',
    'Kamu pasti sudah paham tentunya dengan fungsi JavaScript. Selain membuat web jadi lebih dinamis dan interaktif, JS digunakan juga untuk proses logika data.'
  ];
  const item = document.getElementById("items");
  const dataContainer = document.getElementById("data");

  
  function shuffle(array) {
    // Membuat salinan array untuk menghindari perubahan pada array asli
    const shuffledArray = [...array];
    // ... sisa logika fungsi shuffle
    return shuffledArray;
  }
  
  function generate() {
    if (item.value == 0) {
      alert("The value cannot be zero!");
    } else {
      const shuffledParagraphs = shuffle(paragraph);
      let selectedParagraphs;
  
      if (item.value > paragraph.length) {
        // Membatasi jumlah paragraf yang diambil
        selectedParagraphs = shuffledParagraphs.slice(0, paragraph.length);
      } else {
        selectedParagraphs = shuffledParagraphs.slice(0, item.value);
      }
  
      const paragraphHTML = selectedParagraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
      dataContainer.innerHTML = paragraphHTML;
      alert("Paragraphs has been added!");
    }
  }

  //simpan paragraph
    function copyParagraph() {
        const textToCopy = dataContainer.textContent;
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert("Paragraph copied to clipboard!");
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
  }
  
  //bg color changer
  const body = document.body;

  body.addEventListener("click",changeBackgroundColor);

  function changeBackgroundColor(){

    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;

  }

  function getRandomColor(){

    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);

    }
    return color;
  }
  