/**
 * StudyZone - Platform Belajar Digital Interaktif
 * Main JavaScript Application
 */

// ============================================================================
// 1. DATA REPOSITORY: Mascots, Materi, Kuis, & Default Tasks
// ============================================================================

const MASCOTS = {
  koko: {
    id: 'koko',
    name: 'Eniza Octaviani',
    shortName: 'Eniza',
    title: 'Penasihat Bijak & Analitis',
    emoji: '🦉',
    color: '#6366f1',
    perk: 'Buff: +20% Fokus & Analisis',
    quotes: {
      welcome: "Halo! Aku Koko 🦉. Yuk selesaikan 1 target belajar kita hari ini! Kamu pasti bisa!",
      idle: "Fokus adalah kunci keberhasilan. Mau baca ringkasan atau coba kuis?",
      quizCorrect: "Analisis yang sangat tajam! Jawabanmu tepat sekali! 🎯",
      quizWrong: "Jangan berkecil hati. Dari kesalahan inilah pemahamanmu semakin kuat! 💡",
      taskDone: "Satu langkah lebih dekat menuju impianmu! Kerja bagus! 🎉",
      pomodoroStart: "Mode fokus aktif. Singkirkan distraksi, 25 menit ini milikmu! ⏱️",
      pomodoroFinish: "Sesi fokus selesai! Istirahatkan matamu sejenak yuk. 🍵",
      cheer: "Aku selalu mendukung setiap usaha belajarmu!"
    },
    svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="owl-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6366F1"/>
          <stop offset="100%" stop-color="#4338CA"/>
        </linearGradient>
      </defs>
      <!-- Ears / Tuft -->
      <polygon points="25,28 35,8 45,28" fill="#4338CA"/>
      <polygon points="55,28 65,8 75,28" fill="#4338CA"/>
      <!-- Body -->
      <ellipse cx="50" cy="56" rx="36" ry="38" fill="url(#owl-body)"/>
      <!-- Belly -->
      <ellipse cx="50" cy="64" rx="24" ry="24" fill="#EEF2FF"/>
      <!-- Feathers pattern on belly -->
      <path d="M42,54 Q50,60 58,54 M40,64 Q50,70 60,64 M42,74 Q50,80 58,74" stroke="#818CF8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Big Eyes Outer -->
      <circle cx="37" cy="40" r="14" fill="#FFFFFF"/>
      <circle cx="63" cy="40" r="14" fill="#FFFFFF"/>
      <!-- Eyes Iris -->
      <circle cx="37" cy="40" r="7" fill="#1E1B4B"/>
      <circle cx="63" cy="40" r="7" fill="#1E1B4B"/>
      <!-- Eye Sparkle -->
      <circle cx="39" cy="38" r="2.5" fill="#FFFFFF"/>
      <circle cx="65" cy="38" r="2.5" fill="#FFFFFF"/>
      <!-- Glasses -->
      <circle cx="37" cy="40" r="14" stroke="#F59E0B" stroke-width="3" fill="none"/>
      <circle cx="63" cy="40" r="14" stroke="#F59E0B" stroke-width="3" fill="none"/>
      <line x1="51" y1="40" x2="49" y2="40" stroke="#F59E0B" stroke-width="3"/>
      <!-- Beak -->
      <polygon points="46,47 54,47 50,56" fill="#F59E0B"/>
      <!-- Feet -->
      <ellipse cx="40" cy="94" rx="6" ry="3" fill="#F59E0B"/>
      <ellipse cx="60" cy="94" rx="6" ry="3" fill="#F59E0B"/>
    </svg>`
  },

  foxy: {
    id: 'foxy',
    name: 'Foxy Si Rubah Ceria',
    shortName: 'Foxy',
    title: 'Energik & Semangat Juara',
    emoji: '🦊',
    color: '#f97316',
    perk: 'Buff: +25% Skor & Combo Streak Kuis',
    quotes: {
      welcome: "Yooo! Foxy di sini! 🦊 Siap melesat raih skor tertinggi hari ini?! Gasss!",
      idle: "Ayo gerak! Jangan rebahan terus, 1 kuis kilat cuma 2 menit lho!",
      quizCorrect: "BOOM! Keren parah! Lanjutkan combomu sampai mentok! 🔥⚡",
      quizWrong: "Eits hampir bener! Tetap santai dan hajar soal berikutnya! 🚀",
      taskDone: "YEEES! 1 tugas kelar! Kamu makin tak terbendung! 🏆",
      pomodoroStart: "Waktunya sprint belajar! Konsentrasi penuh, gaspol! ⚡",
      pomodoroFinish: "Mantap jiwa! Waktunya joget kemenangan dan minum air! 🧃",
      cheer: "Kamu punya potensi tanpa batas! Jangan kasih kendor!"
    },
    svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="fox-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FB923C"/>
          <stop offset="100%" stop-color="#EA580C"/>
        </linearGradient>
      </defs>
      <!-- Ears Outer -->
      <polygon points="18,36 28,8 46,28" fill="#C2410C"/>
      <polygon points="82,36 72,8 54,28" fill="#C2410C"/>
      <!-- Ears Inner -->
      <polygon points="23,32 30,14 42,28" fill="#FFF7ED"/>
      <polygon points="77,32 70,14 58,28" fill="#FFF7ED"/>
      <!-- Head Base -->
      <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#fox-body)"/>
      <!-- Cheeks White Fur -->
      <path d="M16,56 Q30,76 50,78 Q70,76 84,56 Q74,70 50,78 Q26,70 16,56 Z" fill="#FFFFFF"/>
      <polygon points="26,52 50,80 74,52" fill="#FFFFFF"/>
      <!-- Eyes (Excited/Happy) -->
      <path d="M30,46 Q38,38 44,46" stroke="#1E293B" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M56,46 Q62,38 70,46" stroke="#1E293B" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- Nose -->
      <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="#1E293B"/>
      <!-- Smile -->
      <path d="M45,67 Q50,73 55,67" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Cheek Blush -->
      <circle cx="28" cy="56" r="4.5" fill="#F43F5E" opacity="0.6"/>
      <circle cx="72" cy="56" r="4.5" fill="#F43F5E" opacity="0.6"/>
      <!-- Lightning Spark on Head -->
      <polygon points="50,22 53,30 48,32 52,40 45,34 49,32" fill="#FDE047"/>
    </svg>`
  },

  mimi: {
    id: 'mimi',
    name: 'Mimi Si Kucing Santai',
    shortName: 'Mimi',
    title: 'Estetik & Anti-Stress',
    emoji: '🐱',
    color: '#ec4899',
    perk: 'Buff: +15% Ketenangan & Pemahaman Konsep',
    quotes: {
      welcome: "Purrr~ Halo! Mimi temenin kamu belajar yaa 🐱. Belajar santai tapi pasti nyangkut di otak!",
      idle: "Tarik napas dulu... jangan dipaksakan kalau lelah, baca 1 kartu materi yuk.",
      quizCorrect: "Waaah pinter banget! Meong bangga sama kamu! 🌸✨",
      quizWrong: "Gapapa sayang, peluk virtual dulu! Nanti kita review bareng ya. 🐾",
      taskDone: "Selesaaai! Coret satu tugas rasanya lega banget kan? 🍵",
      pomodoroStart: "Lofi music on, mari menyerap ilmu dengan damai. 🎧",
      pomodoroFinish: "Waktunya stretching! Regangkan tangan dan punggungmu ya. 🐾",
      cheer: "Kamu itu luar biasa, nikmati proses belajarmu ya!"
    },
    svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="cat-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#F472B6"/>
          <stop offset="100%" stop-color="#DB2777"/>
        </linearGradient>
      </defs>
      <!-- Ears Outer -->
      <polygon points="20,40 25,12 45,30" fill="#DB2777"/>
      <polygon points="80,40 75,12 55,30" fill="#DB2777"/>
      <!-- Ears Inner -->
      <polygon points="24,36 28,18 42,28" fill="#FCE7F3"/>
      <polygon points="76,36 72,18 58,28" fill="#FCE7F3"/>
      <!-- Head -->
      <ellipse cx="50" cy="54" rx="35" ry="30" fill="url(#cat-body)"/>
      <!-- Eyes (Cute big anime eyes) -->
      <ellipse cx="36" cy="48" rx="8" ry="10" fill="#1E293B"/>
      <ellipse cx="64" cy="48" rx="8" ry="10" fill="#1E293B"/>
      <circle cx="34" cy="44" r="3.5" fill="#FFFFFF"/>
      <circle cx="62" cy="44" r="3.5" fill="#FFFFFF"/>
      <circle cx="38" cy="52" r="1.5" fill="#FFFFFF"/>
      <circle cx="66" cy="52" r="1.5" fill="#FFFFFF"/>
      <!-- Nose & Mouth -->
      <polygon points="48,58 52,58 50,61" fill="#FDF2F8"/>
      <path d="M44,63 Q50,67 50,62 Q50,67 56,63" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="22" y1="56" x2="10" y2="54" stroke="#FCE7F3" stroke-width="2" stroke-linecap="round"/>
      <line x1="22" y1="62" x2="12" y2="65" stroke="#FCE7F3" stroke-width="2" stroke-linecap="round"/>
      <line x1="78" y1="56" x2="90" y2="54" stroke="#FCE7F3" stroke-width="2" stroke-linecap="round"/>
      <line x1="78" y1="62" x2="88" y2="65" stroke="#FCE7F3" stroke-width="2" stroke-linecap="round"/>
      <!-- Flower on head -->
      <circle cx="30" cy="24" r="5" fill="#FDE047"/>
      <circle cx="30" cy="24" r="2" fill="#F97316"/>
    </svg>`
  },

  byte: {
    id: 'byte',
    name: 'Byte Si Cyber Bot',
    shortName: 'Byte',
    title: 'Futuristik & Super Efisien',
    emoji: '🤖',
    color: '#06b6d4',
    perk: 'Buff: +20% Kecepatan Tugas & Logika',
    quotes: {
      welcome: "BEEP-BOOP! Sistem belajar StudyZone terinisialisasi 100%! Halo User, mari optimalkan belajarmu!",
      idle: "Kapasitas RAM otakmu sedang prima. Eksekusi tugas berikutnya untuk hasil maksimal!",
      quizCorrect: "LOGIKA TINGKAT TINGGI! Perhitunganmu akurat 100%! 💾⚡",
      quizWrong: "Algoritma jawaban mengalami anomali. Mari analisis logikanya kembali! 🔧",
      taskDone: "STATUS: TASK COMPLETED. Efisiensi belajarmu meningkat drastis! 🚀",
      pomodoroStart: "Mengaktifkan protokol Deep Work. Semua gangguan diblokir! 🔒",
      pomodoroFinish: "Siklus pemrosesan 25 menit selesai. Suhu sistem optimal, istirahat sejenak! 🔋",
      cheer: "Kamu adalah arsitek masa depanmu sendiri. Keep coding your dream!"
    },
    svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="bot-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#0891B2"/>
        </linearGradient>
      </defs>
      <!-- Antenna -->
      <line x1="50" y1="18" x2="50" y2="8" stroke="#0891B2" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="7" r="5" fill="#F59E0B"/>
      <!-- Head -->
      <rect x="20" y="20" width="60" height="52" rx="14" fill="url(#bot-body)"/>
      <!-- Screen Visor -->
      <rect x="26" y="28" width="48" height="34" rx="8" fill="#0F172A"/>
      <!-- Digital Eyes -->
      <rect x="33" y="38" width="12" height="12" rx="3" fill="#22D3EE"/>
      <rect x="55" y="38" width="12" height="12" rx="3" fill="#22D3EE"/>
      <circle cx="37" cy="42" r="2" fill="#FFFFFF"/>
      <circle cx="59" cy="42" r="2" fill="#FFFFFF"/>
      <!-- Pulse Smile -->
      <path d="M40,54 Q50,60 60,54" stroke="#22D3EE" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Side Bolts / Ears -->
      <rect x="15" y="40" width="6" height="12" rx="2" fill="#64748B"/>
      <rect x="79" y="40" width="6" height="12" rx="2" fill="#64748B"/>
      <!-- Body Neck Preview -->
      <rect x="42" y="72" width="16" height="8" fill="#475569"/>
      <path d="M26,80 L74,80 L68,95 L32,95 Z" fill="#0891B2"/>
    </svg>`
  }
};

const STUDY_MATERIALS = [
  {
    id: 'mat-1',
    subject: 'matematika',
    subjectLabel: '📐 Matematika',
    title: 'Trigonometri & Sudut Istimewa',
    readTime: '4 mnt',
    bullets: [
      'Sinus, Cosinus, dan Tangen menyatakan perbandingan sisi pada segitiga siku-siku (Demi, Sami, Desa).',
      'Sudut Istimewa penting: 0°, 30°, 45°, 60°, dan 90° memiliki nilai eksak mudah diingat.',
      'Trik Jari Tangan: Gunakan 5 jari untuk menghitung sin & cos dengan akar kuadrat n dibagi 2.'
    ],
    formula: 'sin θ = depan/miring | cos θ = samping/miring | tan θ = depan/samping',
    content: `
      <h4>1. Konsep Dasar Segitiga Siku-Siku</h4>
      <p>Trigonometri mempelajari hubungan antara sudut dan panjang sisi segitiga. Pada segitiga siku-siku dengan salah satu sudut lancip θ:</p>
      <ul>
        <li><strong>Sinus (sin):</strong> Sisi Depan / Sisi Miring (<em>Demi</em>)</li>
        <li><strong>Cosinus (cos):</strong> Sisi Samping / Sisi Miring (<em>Sami</em>)</li>
        <li><strong>Tangen (tan):</strong> Sisi Depan / Sisi Samping (<em>Desa</em>)</li>
      </ul>
      <h4>2. Tabel Sudut Istimewa Kuadran I</h4>
      <p>Hafalkan pola sederhana ini:</p>
      <ul>
        <li><strong>sin 0° = 0</strong>, sin 30° = 1/2, sin 45° = 1/2√2, sin 60° = 1/2√3, sin 90° = 1</li>
        <li><strong>cos (kebalikan sin):</strong> cos 0° = 1, cos 30° = 1/2√3, cos 45° = 1/2√2, cos 60° = 1/2, cos 90° = 0</li>
        <li><strong>tan θ = sin θ / cos θ</strong></li>
      </ul>
      <h4>3. Latihan & Contoh Soal</h4>
      <p><strong>Soal:</strong> Sebuah tangga sepanjang 10 meter bersandar pada dinding dan membentuk sudut 60° dengan tanah. Berapakah tinggi dinding yang dicapai tangga?</p>
      <p><strong>Pembahasan:</strong> Gunakan sin 60° = tinggi / panjang tangga ➔ √3/2 = tinggi / 10 ➔ tinggi = 10 * (√3/2) = <strong>5√3 meter (sekitar 8.66 m)</strong>.</p>
    `
  },
  {
    id: 'fis-1',
    subject: 'fisika',
    subjectLabel: '⚡ Fisika',
    title: 'Hukum Gerak Newton (I, II, & III)',
    readTime: '5 mnt',
    bullets: [
      'Hukum I (Inersia): Benda cenderung mempertahankan keadaan diam atau gerak lurus beraturannya (∑F = 0).',
      'Hukum II (Percepatan): Percepatan berbanding lurus dengan gaya dan berbanding terbalik dengan massa (∑F = m · a).',
      'Hukum III (Aksi-Reaksi): Setiap gaya aksi memicu gaya reaksi yang sama besar namun berlawanan arah.'
    ],
    formula: '∑F = 0 (Hk. I) | ∑F = m · a (Hk. II) | F_aksi = -F_reaksi (Hk. III)',
    content: `
      <h4>1. Hukum I Newton (Kelembaman / Inersia)</h4>
      <p>Benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan akan tetap bergerak lurus beraturan jika resultan gaya yang bekerja sama dengan nol.</p>
      <p><em>Contoh nyata:</em> Tubuh kita terdorong ke depan saat bus yang sedang melaju tiba-tiba direm mendadak.</p>
      <h4>2. Hukum II Newton</h4>
      <p>Jika ada resultan gaya pada benda, benda akan mengalami percepatan yang sebanding dengan gaya total dan berbanding terbalik dengan massa benda:</p>
      <p><strong>F = m · a</strong> (F = Gaya dalam Newton, m = massa dalam kg, a = percepatan dalam m/s²)</p>
      <h4>3. Hukum III Newton (Aksi - Reaksi)</h4>
      <p>Gaya selalu muncul berpasangan. Jika kamu mendorong dinding dengan gaya 50 N, dinding juga mendorong tanganmu dengan gaya 50 N berlawanan arah. Pasangan aksi-reaksi bekerja pada <strong>dua benda berbeda</strong> sehingga tidak saling meniadakan.</p>
    `
  },
  {
    id: 'bio-1',
    subject: 'biologi',
    subjectLabel: '🧬 Biologi',
    title: 'Struktur Sel & Organel Utama',
    readTime: '4 mnt',
    bullets: [
      'Sel adalah unit fungsional dan struktural terkecil dari seluruh makhluk hidup.',
      'Mitokondria dijuluki "The Powerhouse of the Cell" karena memproduksi ATP lewat respirasi sel.',
      'Perbedaan Sel Tumbuhan & Hewan: Tumbuhan memiliki dinding sel, kloroplas, dan vakuola raksasa.'
    ],
    formula: 'Respirasi Sel: Glukosa + O2 ➔ CO2 + H2O + ATP (Energi)',
    content: `
      <h4>1. Inti Sel (Nukleus)</h4>
      <p>Pusat kendali seluruh aktivitas sel yang menyimpan materi genetik berupa DNA/kromosom.</p>
      <h4>2. Mitokondria & Ribosom</h4>
      <ul>
        <li><strong>Mitokondria:</strong> Organel bermembran ganda tempat respirasi seluler dan pembentukan ATP.</li>
        <li><strong>Ribosom:</strong> Tempat sintesis protein berdasarkan kode genetik mRNA.</li>
      </ul>
      <h4>3. Kloroplas (Khusus Sel Tumbuhan)</h4>
      <p>Mengandung pigmen klorofil yang menyerap cahaya matahari untuk fotosintesis menghasilkan glukosa dan oksigen.</p>
    `
  },
  {
    id: 'ing-1',
    subject: 'inggris',
    subjectLabel: '🌍 Bahasa Inggris',
    title: 'Mastering Past Simple vs Present Perfect',
    readTime: '4 mnt',
    bullets: [
      'Past Simple dipakai jika waktu kejadian di masa lampau sudah selesai dan spesifik (yesterday, last year, in 2020).',
      'Present Perfect (have/has + V3) dipakai jika waktu tidak disebutkan atau efek kejadian masih terasa sekarang.',
      'Signal words: Past Simple (ago, yesterday, last week); Present Perfect (already, yet, since, ever).'
    ],
    formula: 'Past Simple: S + V2 | Present Perfect: S + have/has + V3',
    content: `
      <h4>1. Kapan Menggunakan Simple Past?</h4>
      <p>Gunakan Past Simple saat tindakan selesai sepenuhnya di masa lalu pada waktu tertentu yang jelas:</p>
      <p><em>Contoh:</em> "I <strong>visited</strong> Bali last summer." (Ada penanda waktu 'last summer').</p>
      <h4>2. Kapan Menggunakan Present Perfect?</h4>
      <p>Gunakan Present Perfect ketika menghubungkan masa lalu dengan masa kini (pengalaman hidup, kejadian baru saja terjadi):</p>
      <p><em>Contoh:</em> "I <strong>have visited</strong> Bali three times." (Fokus pada pengalaman hidup sampai saat ini).</p>
      <p><em>Contoh kedua:</em> "She <strong>has lost</strong> her keys." (Efeknya: sampai sekarang dia belum bisa masuk rumah).</p>
    `
  },
  {
    id: 'cod-1',
    subject: 'coding',
    subjectLabel: '💻 Coding & AI',
    title: 'Logika Algoritma & Percabangan If-Else',
    readTime: '5 mnt',
    bullets: [
      'Algoritma adalah serangkaian langkah logis yang terdefinisi untuk menyelesaikan masalah.',
      'Percabangan (Conditionals): Menentukan alur program berdasarkan kebenaran kondisi (True/False).',
      'Perulangan (Loops): Membantu mengeksekusi instruksi berulang kali tanpa menulis kode berulang.'
    ],
    formula: 'if (kondisi == true) { lakukanA() } else { lakukanB() }',
    content: `
      <h4>1. Apa itu Logika Algoritma?</h4>
      <p>Komputer berpikir secara kaku dan terstruktur. Algoritma harus memiliki kondisi awal, langkah-langkah yang jelas tanpa ambigu, dan kondisi akhir.</p>
      <h4>2. Struktur Percabangan (Decision Making)</h4>
      <pre style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;"><code>
let skor = 85;
if (skor >= 90) {
  console.log("Grade: A - Sempurna!");
} else if (skor >= 75) {
  console.log("Grade: B - Kerja Bagus!");
} else {
  console.log("Grade: C - Perlu Belajar Lagi.");
}
      </code></pre>
      <h4>3. Konsep Dasar AI & Machine Learning</h4>
      <p>Jika program tradisional membutuhkan aturan manual yang ditulis programmer, Machine Learning justru membiarkan komputer mempelajari pola dari ribuan contoh data untuk menghasilkan aturan sendiri.</p>
    `
  },
  {
    id: 'mat-2',
    subject: 'matematika',
    subjectLabel: '📐 Matematika',
    title: 'Teorema Pythagoras & Triple Siku-Siku',
    readTime: '3 mnt',
    bullets: [
      'Kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi siku-sikunya.',
      'Triple Pythagoras Populer: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17).',
      'Dapat digunakan untuk mengukur jarak dua titik pada bidang kartesius.'
    ],
    formula: 'a² + b² = c² (c = sisi miring / hipotenusa)',
    content: `
      <h4>1. Rumus Utama</h4>
      <p>Pada setiap segitiga siku-siku dengan sisi penyiku a dan b, serta sisi terpanjang (sisi miring) c:</p>
      <p><strong>c² = a² + b²  ➔  c = √(a² + b²)</strong></p>
      <h4>2. Triple Pythagoras yang Sering Keluar Ujian</h4>
      <ul>
        <li>3, 4, 5 (dan kelipatannya: 6, 8, 10)</li>
        <li>5, 12, 13 (dan kelipatannya: 10, 24, 26)</li>
        <li>7, 24, 25</li>
        <li>8, 15, 17</li>
      </ul>
      <p>Menghafal kelipatan ini akan menghemat waktumu hingga 70% saat ujian!</p>
    `
  }
];

const FLASHCARDS = [
  {
    subject: 'Matematika',
    question: 'Berapakah nilai dari sin 30° dan cos 60°?',
    answer: 'Keduanya bernilai 1/2 (0.5). Dalam segitiga istimewa 30°-60°-90°, perbandingan sisinya adalah 1 : √3 : 2.'
  },
  {
    subject: 'Fisika',
    question: 'Jika massa benda 4 kg dan didorong dengan percepatan 3 m/s², berapa gaya yang bekerja?',
    answer: 'Gaya F = m × a = 4 kg × 3 m/s² = 12 Newton (N).'
  },
  {
    subject: 'Biologi',
    question: 'Organel sel apakah yang dijuluki "The Powerhouse of the Cell"?',
    answer: 'Mitokondria, karena organel ini adalah tempat utama pembentukan energi sel berupa molekul ATP.'
  },
  {
    subject: 'Bahasa Inggris',
    question: 'Ubahlah kalimat ini ke bentuk Past Simple: "She goes to the library."',
    answer: '"She WENT to the library." Kata kerja "go" adalah irregular verb dengan bentuk lampau "went".'
  },
  {
    subject: 'Coding',
    question: 'Apa perbedaan mendasar antara "=" dan "==" pada bahasa pemrograman?',
    answer: '"=" adalah operator penugasan (assignment, memasukkan nilai ke variabel), sedangkan "==" adalah perbandingan untuk menguji kesamaan dua nilai.'
  },
  {
    subject: 'Fisika',
    question: 'Apakah gaya aksi dan reaksi pada Hukum III Newton saling meniadakan?',
    answer: 'TIDAK saling meniadakan, karena gaya aksi dan reaksi bekerja pada dua objek / benda yang BERBEDA.'
  }
];

const QUIZ_QUESTIONS = {
  matematika: [
    {
      q: "Berapakah nilai dari cos 0°?",
      options: ["0", "1/2", "1", "√3"],
      correct: 2,
      exp: "Berdasarkan tabel sudut istimewa kuadran I, nilai cos 0° adalah 1, sedangkan sin 0° adalah 0."
    },
    {
      q: "Sebuah segitiga siku-siku memiliki sisi penyiku 6 cm dan 8 cm. Berapakah panjang sisi miringnya?",
      options: ["9 cm", "10 cm", "12 cm", "14 cm"],
      correct: 1,
      exp: "Gunakan Teorema Pythagoras: c² = 6² + 8² = 36 + 64 = 100 ➔ c = √100 = 10 cm (kelipatan triple 3-4-5)."
    },
    {
      q: "Jika f(x) = 2x² - 3x + 5, berapakah nilai f(3)?",
      options: ["14", "12", "16", "18"],
      correct: 0,
      exp: "f(3) = 2(3)² - 3(3) + 5 = 2(9) - 9 + 5 = 18 - 9 + 5 = 14."
    },
    {
      q: "Berapakah nilai dari sin 45°?",
      options: ["1/2", "1/2√2", "1/2√3", "1"],
      correct: 1,
      exp: "Pada sudut 45°, panjang sisi depan dan samping segitiga siku-siku sama besar sehingga sin 45° = 1/2√2."
    },
    {
      q: "Jika 3x + 7 = 22, maka berapakah nilai dari 2x?",
      options: ["5", "10", "15", "8"],
      correct: 1,
      exp: "3x = 22 - 7 ➔ 3x = 15 ➔ x = 5. Nilai 2x = 2(5) = 10."
    }
  ],
  fisika: [
    {
      q: "Hukum gerak Newton yang menyatakan bahwa resultan gaya sama dengan nol menyebabkan benda mempertahankan keadaannya adalah...",
      options: ["Hukum Gravitasi", "Hukum I Newton", "Hukum II Newton", "Hukum III Newton"],
      correct: 1,
      exp: "Hukum I Newton (Inersia/Kelembaman): ∑F = 0 menandakan benda diam tetap diam, atau benda bergerak tetap bergerak lurus beraturan."
    },
    {
      q: "Sebuah balok bermassa 5 kg diberi percepatan sebesar 4 m/s². Gaya total yang bekerja pada balok adalah...",
      options: ["1 Newton", "9 Newton", "20 Newton", "25 Newton"],
      correct: 2,
      exp: "Sesuai Hukum II Newton: F = m · a = 5 kg · 4 m/s² = 20 Newton."
    },
    {
      q: "Peristiwa roket meluncur ke atas akibat semburan gas bertekanan tinggi ke arah bawah merupakan bukti nyata dari...",
      options: ["Hukum III Newton (Aksi-Reaksi)", "Hukum I Newton", "Gaya Gesek Statis", "Efek Doppler"],
      correct: 0,
      exp: "Gas menyembur ke bawah (aksi), dan sebagai reaksinya roket terdorong ke atas dengan gaya yang sama besar (reaksi)."
    },
    {
      q: "Energi yang dimiliki benda karena kedudukannya terhadap permukaan bumi disebut...",
      options: ["Energi Kinetik", "Energi Potensial Gravitasi", "Energi Panas", "Energi Kimia"],
      correct: 1,
      exp: "Energi Potensial (Ep = m · g · h) ditentukan oleh ketinggian h dari acuan permukaan bumi."
    },
    {
      q: "Satuan gaya dalam Sistem Internasional (SI) adalah...",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correct: 2,
      exp: "Satuan SI untuk gaya adalah Newton (N), setara dengan kg·m/s²."
    }
  ],
  inggris: [
    {
      q: "Which sentence is grammatically correct in Simple Past tense?",
      options: [
        "She has gone to school yesterday.",
        "She goes to school yesterday.",
        "She went to school yesterday.",
        "She going to school yesterday."
      ],
      correct: 2,
      exp: "Karena ada keterangan waktu lampau spesifik 'yesterday', gunakan kata kerja bentuk lampau (V2) yaitu 'went'."
    },
    {
      q: "Choose the correct form: 'I have known him ______ 2018.'",
      options: ["for", "since", "during", "already"],
      correct: 1,
      exp: "'Since' digunakan untuk menandakan titik awal waktu tertentu di masa lalu (sejak tahun 2018)."
    },
    {
      q: "What is the synonym of the word 'AMBITIOUS'?",
      options: ["Lazy", "Determined", "Careless", "Timid"],
      correct: 1,
      exp: "'Ambitious' berarti memiliki tekad dan keinginan kuat untuk sukses, sinonimnya adalah 'Determined'."
    },
    {
      q: "'If it rains tomorrow, we ______ the picnic.'",
      options: ["cancel", "would cancel", "will cancel", "canceled"],
      correct: 2,
      exp: "Ini adalah First Conditional (kejadian mungkin terjadi di masa depan): If + Simple Present, S + will + V1."
    },
    {
      q: "Which word is an irregular verb?",
      options: ["Walk", "Write", "Play", "Clean"],
      correct: 1,
      exp: "'Write' adalah irregular verb (write - wrote - written). Sisanya adalah regular verb yang hanya ditambah -ed."
    }
  ],
  coding: [
    {
      q: "Manakah struktur percabangan dasar dalam pemrograman untuk mengambil keputusan?",
      options: ["for ... of", "if ... else", "while ... loop", "class ... constructor"],
      correct: 1,
      exp: "Pernyataan 'if ... else' mengevaluasi kondisi boolean (true/false) untuk menentukan percabangan alur program."
    },
    {
      q: "Dalam array [\"Apel\", \"Jeruk\", \"Mangga\"], elemen index ke-0 adalah...",
      options: ["Apel", "Jeruk", "Mangga", "undefined"],
      correct: 0,
      exp: "Mayoritas bahasa pemrograman modern menggunakan 0-indexed array, sehingga indeks ke-0 merujuk pada elemen pertama ('Apel')."
    },
    {
      q: "Apa kepanjangan dari AI dalam dunia teknologi?",
      options: [
        "Automated Internet",
        "Artificial Intelligence",
        "Advanced Integration",
        "Applied Informatics"
      ],
      correct: 1,
      exp: "AI adalah singkatan dari Artificial Intelligence (Kecerdasan Buatan)."
    },
    {
      q: "Fungsi perulangan (loop) seperti 'for' dan 'while' digunakan untuk...",
      options: [
        "Menghapus variabel dari memori",
        "Mengeksekusi blok kode berulang kali",
        "Mengganti font tampilan website",
        "Mematikan komputer otomatis"
      ],
      correct: 1,
      exp: "Loop digunakan agar programmer tidak perlu menuliskan kode berulang-ulang untuk tugas repetitif."
    },
    {
      q: "Manakah tipe data untuk nilai logika True atau False?",
      options: ["String", "Integer", "Boolean", "Float"],
      correct: 2,
      exp: "Tipe data Boolean hanya memiliki dua kemungkinan nilai: true atau false."
    }
  ]
};

// ============================================================================
// 2. AUDIO SYNTHESIZER (Web Audio API - 100% Offline & Pure JS)
// ============================================================================

class WebAudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.activeAmbientNodes = [];
    this.ambientType = null;
    this.ambientGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, delay = 0, vol = 0.15) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration);
  }

  playCorrect() {
    // Joyful melodic triad
    this.playTone(523.25, 'sine', 0.2, 0, 0.2); // C5
    this.playTone(659.25, 'sine', 0.25, 0.08, 0.25); // E5
    this.playTone(783.99, 'sine', 0.4, 0.16, 0.25); // G5
  }

  playWrong() {
    // Subtle low buzz
    this.playTone(220, 'triangle', 0.25, 0, 0.2);
    this.playTone(180, 'triangle', 0.35, 0.15, 0.2);
  }

  playTaskChime() {
    // Sparkling completion chime
    this.playTone(440, 'sine', 0.15, 0, 0.15);
    this.playTone(554.37, 'sine', 0.18, 0.08, 0.2);
    this.playTone(659.25, 'sine', 0.22, 0.16, 0.2);
    this.playTone(880, 'sine', 0.5, 0.24, 0.25);
  }

  playClick() {
    this.playTone(800, 'sine', 0.04, 0, 0.05);
  }

  // Synthesize Ambient Focus Lo-Fi Background Sounds
  startAmbient(type, volume = 0.4) {
    this.stopAmbient();
    this.init();
    if (!this.ctx) return;

    this.ambientType = type;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(volume * 0.5, this.ctx.currentTime);
    masterGain.connect(this.ctx.destination);
    this.ambientGain = masterGain;

    if (type === 'rain' || type === 'whitenoise' || type === 'waves') {
      // Create white noise buffer
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      if (type === 'rain') {
        // Low pass filter for soft rain
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(900, this.ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
      } else if (type === 'waves') {
        // Modulated filter for ocean waves
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, this.ctx.currentTime);
        filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

        // LFO for slow undulating wave swell
        const lfo = this.ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 8 second cycle
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(300, this.ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        this.activeAmbientNodes.push(lfo);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
      } else {
        // White noise
        whiteNoise.connect(masterGain);
      }

      whiteNoise.start();
      this.activeAmbientNodes.push(whiteNoise);
    } else if (type === 'binaural') {
      // 10 Hz Alpha wave binaural generator (200Hz Left, 210Hz Right)
      const oscL = this.ctx.createOscillator();
      const oscR = this.ctx.createOscillator();
      const merger = this.ctx.createChannelMerger(2);

      oscL.type = 'sine';
      oscL.frequency.setValueAtTime(200, this.ctx.currentTime);

      oscR.type = 'sine';
      oscR.frequency.setValueAtTime(210, this.ctx.currentTime);

      oscL.connect(merger, 0, 0);
      oscR.connect(merger, 0, 1);
      merger.connect(masterGain);

      oscL.start();
      oscR.start();
      this.activeAmbientNodes.push(oscL, oscR);
    }
  }

  setAmbientVolume(vol) {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(vol * 0.5, this.ctx.currentTime);
    }
  }

  stopAmbient() {
    this.activeAmbientNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {
        // Ignored
      }
    });
    this.activeAmbientNodes = [];
    this.ambientType = null;
    this.ambientGain = null;
  }
}

// ============================================================================
// 3. MAIN APPLICATION CONTROLLER
// ============================================================================

const StudyApp = {
  // State
  state: {
    activeTab: 'dashboard',
    activeMascot: 'koko',
    theme: 'dark',
    userXp: 1240,
    streak: 5,
    userLevel: 3,
    soundEnabled: true,
    selfActivity: 'Mengerjakan Latihan Soal StudyZone',
    selfMotto: 'Konsisten 20 menit sehari menghasilkan masa depan cerah!',

    // Tasks
    tasks: [],

    // Flashcards
    currentFcIndex: 0,
    fcFlipped: false,

    // Quiz
    quizActive: false,
    quizSubject: null,
    quizCurrentQIdx: 0,
    quizScore: 0,
    quizStreakCount: 0,
    quizTimerSeconds: 15,
    quizTimerInterval: null,
    quizCorrectCount: 0,
    quizAnswerLocked: false,

    // Pomodoro
    pomoMode: 1500, // 25 mins
    pomoRemaining: 1500,
    pomoRunning: false,
    pomoInterval: null,
    pomoRound: 1,
    pomoTargetText: 'Membaca Rangkuman & Latihan Kuis'
  },

  audio: new WebAudioSynth(),

  // Initialization
  init() {
    this.loadState();
    this.setupEventListeners();
    this.renderHeaderAndMascot();
    this.renderMateriGrid('all');
    this.renderTasks();
    this.renderFlashcard();
    this.renderMascotModalGrid();
    this.updateStats();

    // Show companion welcome dialog
    this.showMascotBubble(MASCOTS[this.state.activeMascot].quotes.welcome, 6000);
  },

  // Load from LocalStorage
  loadState() {
    const savedMascot = localStorage.getItem('sz_mascot');
    if (savedMascot && MASCOTS[savedMascot]) this.state.activeMascot = savedMascot;

    const savedTheme = localStorage.getItem('sz_theme');
    if (savedTheme) {
      this.state.theme = savedTheme;
      document.body.className = savedTheme === 'light' ? 'theme-light' : 'theme-dark';
    }

    const savedXp = localStorage.getItem('sz_xp');
    if (savedXp) this.state.userXp = parseInt(savedXp, 10);

    const savedTasks = localStorage.getItem('sz_tasks');
    if (savedTasks) {
      try {
        this.state.tasks = JSON.parse(savedTasks);
      } catch (e) {
        this.setDefaultTasks();
      }
    } else {
      this.setDefaultTasks();
    }
  },

  setDefaultTasks() {
    this.state.tasks = [
      {
        id: 't-1',
        title: 'Membaca Rumus Cepat Trigonometri',
        subject: 'Matematika',
        priority: 'tinggi',
        dueDate: 'Hari Ini',
        dueTime: '20:00',
        notes: 'Hafalkan sudut istimewa kuadran I dan trik jari tangan.',
        completed: false
      },
      {
        id: 't-2',
        title: 'Review 3 Hukum Gerak Newton',
        subject: 'Fisika',
        priority: 'sedang',
        dueDate: 'Besok',
        dueTime: '16:00',
        notes: 'Pahami pasangan aksi-reaksi tidak saling meniadakan.',
        completed: false
      },
      {
        id: 't-3',
        title: 'Latihan 5 Soal English Past Simple',
        subject: 'B. Inggris',
        priority: 'rendah',
        dueDate: '2 hari lagi',
        dueTime: '19:00',
        notes: 'Perhatikan perbedaan irregular verb vs regular verb.',
        completed: true
      }
    ];
    this.saveTasks();
  },

  saveTasks() {
    localStorage.setItem('sz_tasks', JSON.stringify(this.state.tasks));
  },

  saveState() {
    localStorage.setItem('sz_mascot', this.state.activeMascot);
    localStorage.setItem('sz_theme', this.state.theme);
    localStorage.setItem('sz_xp', this.state.userXp);
  },

  // Setup UI Event Listeners
  setupEventListeners() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    themeBtn.addEventListener('click', () => {
      this.toggleTheme();
    });

    // Sound Toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    soundBtn.addEventListener('click', () => {
      this.state.soundEnabled = !this.state.soundEnabled;
      this.audio.enabled = this.state.soundEnabled;
      document.getElementById('soundIcon').textContent = this.state.soundEnabled ? '🔊' : '🔇';
      this.showToast(this.state.soundEnabled ? 'Suara Diaktifkan' : 'Suara Dimatikan');
    });

    // Mascot triggers
    document.getElementById('openMascotModalBtn').addEventListener('click', () => {
      this.openModal('mascotModal');
    });
    document.getElementById('mascotSwitchQuickBtn').addEventListener('click', () => {
      this.openModal('mascotModal');
    });
    document.getElementById('btnOpenCharacterRoster').addEventListener('click', () => {
      this.openModal('mascotModal');
    });

    // Mascot Interactive Hero click
    document.getElementById('mascotFigureContainer').addEventListener('click', () => {
      this.audio.playTone(587.33, 'sine', 0.15, 0, 0.15);
      const mascot = MASCOTS[this.state.activeMascot];
      const randomQuotes = [mascot.quotes.cheer, mascot.quotes.idle, "Senang bisa belajar bersamamu! ❤️"];
      const q = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
      this.showMascotBubble(q, 4000);
    });

    // Floating mascot click
    document.getElementById('floatingCompanion').addEventListener('click', () => {
      this.audio.playTone(659.25, 'sine', 0.15, 0, 0.15);
      const mascot = MASCOTS[this.state.activeMascot];
      this.showMascotBubble(mascot.quotes.cheer, 4000);
    });

    // Hero buttons
    document.getElementById('heroStartStudyBtn').addEventListener('click', () => {
      this.switchTab('ruang-fokus');
    });
    document.getElementById('heroQuickQuizBtn').addEventListener('click', () => {
      this.switchTab('kuis');
      this.startQuizSubject('matematika');
    });

    // Dashboard quick task
    document.getElementById('quickTaskBtn').addEventListener('click', () => {
      this.handleQuickAddTask();
    });
    document.getElementById('quickTaskInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleQuickAddTask();
    });
    document.getElementById('dashViewAllTasks').addEventListener('click', () => {
      this.switchTab('jadwal');
    });

    // Materi Search & Filters
    document.getElementById('searchMateriInput').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      this.filterMateriBySearch(q);
    });

    const subjectPills = document.querySelectorAll('#materiFilterPills .pill-btn');
    subjectPills.forEach(pill => {
      pill.addEventListener('click', () => {
        subjectPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const subject = pill.getAttribute('data-subject');
        this.renderMateriGrid(subject);
      });
    });

    // Materi Mode Switch (Cards vs Flashcards)
    document.getElementById('modeCardView').addEventListener('click', () => {
      document.getElementById('modeCardView').classList.add('active');
      document.getElementById('modeFlashcardView').classList.remove('active');
      document.getElementById('materiGrid').style.display = 'grid';
      document.getElementById('flashcardsView').style.display = 'none';
    });
    document.getElementById('modeFlashcardView').addEventListener('click', () => {
      document.getElementById('modeFlashcardView').classList.add('active');
      document.getElementById('modeCardView').classList.remove('active');
      document.getElementById('materiGrid').style.display = 'none';
      document.getElementById('flashcardsView').style.display = 'block';
    });

    // Flashcard Interactions
    const flashcardEl = document.getElementById('activeFlashcard');
    flashcardEl.addEventListener('click', (e) => {
      // Don't flip if clicking action buttons inside
      if (e.target.closest('.btn-chip')) return;
      this.state.fcFlipped = !this.state.fcFlipped;
      flashcardEl.classList.toggle('flipped', this.state.fcFlipped);
      this.audio.playClick();
    });

    document.getElementById('fcNextBtn').addEventListener('click', () => {
      this.state.currentFcIndex = (this.state.currentFcIndex + 1) % FLASHCARDS.length;
      this.state.fcFlipped = false;
      this.renderFlashcard();
    });
    document.getElementById('fcPrevBtn').addEventListener('click', () => {
      this.state.currentFcIndex = (this.state.currentFcIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
      this.state.fcFlipped = false;
      this.renderFlashcard();
    });
    document.getElementById('fcMarkEasy').addEventListener('click', () => {
      this.addXp(5);
      this.showToast('Hebat! +5 XP untuk kartu ini');
      this.audio.playTone(880, 'sine', 0.1, 0, 0.15);
      // Next card
      this.state.currentFcIndex = (this.state.currentFcIndex + 1) % FLASHCARDS.length;
      this.state.fcFlipped = false;
      this.renderFlashcard();
    });
    document.getElementById('fcMarkHard').addEventListener('click', () => {
      this.showToast('Kartu disimpan untuk pengulangan');
      this.state.currentFcIndex = (this.state.currentFcIndex + 1) % FLASHCARDS.length;
      this.state.fcFlipped = false;
      this.renderFlashcard();
    });

    // Task Planner
    document.getElementById('openNewTaskModalBtn').addEventListener('click', () => {
      this.openModal('taskModal');
    });
    document.getElementById('newTaskForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleCreateTask();
    });

    const taskTabs = document.querySelectorAll('.task-tab-btn');
    taskTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        taskTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderTasks(btn.getAttribute('data-filter'));
      });
    });

    document.getElementById('taskPrioritySort').addEventListener('change', () => {
      this.renderTasks();
    });
    document.getElementById('btnJumpToPomodoro').addEventListener('click', () => {
      this.switchTab('ruang-fokus');
    });

    // Pomodoro Controls
    const pomoModeBtns = document.querySelectorAll('.pomo-mode-btn');
    pomoModeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pomoModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const time = parseInt(btn.getAttribute('data-time'), 10);
        const label = btn.getAttribute('data-label');
        this.setPomodoroMode(time, label);
      });
    });

    document.getElementById('pomoStartBtn').addEventListener('click', () => {
      this.togglePomodoro();
    });
    document.getElementById('pomoResetBtn').addEventListener('click', () => {
      this.resetPomodoro();
    });
    document.getElementById('pomoChangeTargetBtn').addEventListener('click', () => {
      const newTarget = prompt('Tulis target fokus sesi ini:', this.state.pomoTargetText);
      if (newTarget && newTarget.trim()) {
        this.state.pomoTargetText = newTarget.trim();
        document.getElementById('pomoCurrentTarget').textContent = this.state.pomoTargetText;
      }
    });

    // Ambient Sound Buttons
    const ambBtns = document.querySelectorAll('.ambient-btn');
    ambBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const soundType = btn.getAttribute('data-sound');
        const isActive = btn.classList.contains('active');

        // Reset other buttons
        ambBtns.forEach(b => {
          b.classList.remove('active');
          b.querySelector('.amb-status').textContent = 'Mati';
        });

        if (!isActive) {
          btn.classList.add('active');
          btn.querySelector('.amb-status').textContent = 'Memutar';
          const vol = parseInt(document.getElementById('ambientVolSlider').value, 10) / 100;
          this.audio.startAmbient(soundType, vol);
          this.showToast(`Memutar Suara: ${btn.querySelector('.amb-name').textContent}`);
        } else {
          this.audio.stopAmbient();
          this.showToast('Suara latar dimatikan');
        }
      });
    });

    document.getElementById('ambientVolSlider').addEventListener('input', (e) => {
      const vol = parseInt(e.target.value, 10) / 100;
      this.audio.setAmbientVolume(vol);
    });

    // Study Lounge & Friends
    document.getElementById('btnSendGroupCheer').addEventListener('click', (e) => {
      this.launchCheerParticles(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, '🎉');
      this.addXp(10);
      this.showToast('Reaksi Semangat Terkirim ke Semua Teman! +10 XP');
      this.audio.playTaskChime();
    });

    document.getElementById('loungeChatForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSendChatMessage();
    });

    document.getElementById('btnEditStatusQuote').addEventListener('click', () => {
      document.getElementById('inputSelfActivity').value = this.state.selfActivity;
      document.getElementById('inputSelfMotto').value = this.state.selfMotto;
      this.openModal('userStatusModal');
    });

    document.getElementById('userStatusForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.state.selfActivity = document.getElementById('inputSelfActivity').value || 'Aktif belajar';
      this.state.selfMotto = document.getElementById('inputSelfMotto').value || 'Semangat!';
      document.getElementById('selfDeskStatus').textContent = this.state.selfActivity;
      document.getElementById('selfDeskQuote').textContent = `"${this.state.selfMotto}"`;
      this.closeModal('userStatusModal');
      this.showToast('Status belajar diperbarui!');
    });

    // Quiz Controls
    document.getElementById('quizNextBtn').addEventListener('click', () => {
      this.goToNextQuizQuestion();
    });
    document.getElementById('btnRestartQuiz').addEventListener('click', () => {
      this.startQuizSubject(this.state.quizSubject || 'matematika');
    });
    document.getElementById('btnBackToLobby').addEventListener('click', () => {
      this.exitQuizToLobby();
    });

    // Material Modal Practice Quiz Button
    document.getElementById('modalMatPracticeQuizBtn').addEventListener('click', () => {
      this.closeModal('materialModal');
      this.switchTab('kuis');
      this.startQuizSubject('matematika');
    });
  },

  // Navigation
  switchTab(tabId) {
    this.state.activeTab = tabId;
    this.audio.playClick();

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    // Update active tab pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `pane-${tabId}`);
    });

    // Mascot reaction upon switching tabs
    const mascot = MASCOTS[this.state.activeMascot];
    if (tabId === 'kuis') {
      this.showMascotBubble(`Ayo ${mascot.shortName} dukung kamu! Pilih topik kuis dan raih skor 100! ⚡`, 4000);
    } else if (tabId === 'jadwal') {
      this.showMascotBubble(`Manajemen waktu yang rapi bikin belajarmu bebas stres! 📅`, 4000);
    } else if (tabId === 'ruang-fokus') {
      this.showMascotBubble(mascot.quotes.pomodoroStart, 4000);
    } else if (tabId === 'teman') {
      this.showMascotBubble(`Belajar bareng teman bikin semangat berlipat ganda! 👥`, 4000);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    document.body.className = this.state.theme === 'light' ? 'theme-light' : 'theme-dark';
    document.getElementById('themeIcon').textContent = this.state.theme === 'light' ? '☀️' : '🌙';
    this.saveState();
  },

  // Mascots & Companion Rendering
  renderHeaderAndMascot() {
    const mascot = MASCOTS[this.state.activeMascot];

    // Mini circle in header
    document.getElementById('mascotMiniHead').textContent = mascot.emoji;

    // Hero mascot
    document.getElementById('mascotDialogue').textContent = `"${mascot.quotes.welcome}"`;
    document.getElementById('mascotNameBadge').textContent = mascot.name;
    document.getElementById('mascotPerkBadge').textContent = mascot.perk;
    document.getElementById('mascotFigureContainer').innerHTML = mascot.svg;

    // Floating companion
    document.getElementById('floatingMascotSvg').innerHTML = mascot.svg;

    // Focus room companion
    document.getElementById('focusCompanionFigure').innerHTML = mascot.svg;
    document.getElementById('focusCompTitle').textContent = `${mascot.shortName} Menemanimu`;
    document.getElementById('focusCompQuote').textContent = `"${mascot.quotes.idle}"`;

    // Self desk mascot tag in Lounge
    document.getElementById('selfDeskMascotTag').textContent = `${mascot.emoji} ${mascot.shortName}`;

    // Hall of fame teaser
    document.getElementById('hofUserSub').textContent = `Sahabat: ${mascot.shortName} • Peringkat 3`;
    document.getElementById('hofUserScore').textContent = `${this.state.userXp.toLocaleString()} XP`;

    // User XP & Level display
    this.updateUserStatsDisplay();
  },

  selectMascot(mascotId) {
    if (!MASCOTS[mascotId]) return;
    this.state.activeMascot = mascotId;
    this.saveState();
    this.renderHeaderAndMascot();
    this.renderMascotModalGrid();

    // Confetti and audio
    this.audio.playTaskChime();
    this.showToast(`Sahabat Belajar Berhasil Dipilih: ${MASCOTS[mascotId].name}!`);
    this.showMascotBubble(MASCOTS[mascotId].quotes.welcome, 5000);

    // Update mini mascot cards active state in Lounge
    document.querySelectorAll('.mini-m-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('onclick').includes(mascotId));
    });
  },

  renderMascotModalGrid() {
    const container = document.getElementById('mascotsSelectionGrid');
    if (!container) return;

    let html = '';
    Object.keys(MASCOTS).forEach(id => {
      const m = MASCOTS[id];
      const isSelected = this.state.activeMascot === id;
      html += `
        <div class="mascot-select-card ${isSelected ? 'active' : ''}" onclick="StudyApp.selectMascot('${id}')">
          <div class="m-select-avatar">${m.svg}</div>
          <div class="m-select-title">${m.name}</div>
          <div class="m-select-perk">${m.perk}</div>
          <p class="m-select-desc">"${m.quotes.welcome}"</p>
          ${isSelected ? '<span class="badge-subtle" style="margin-top: 10px; background: var(--primary); color: #fff;">Sedang Digunakan</span>' : ''}
        </div>
      `;
    });
    container.innerHTML = html;
  },

  showMascotBubble(text, duration = 4000) {
    const heroBubble = document.getElementById('mascotDialogue');
    if (heroBubble) {
      heroBubble.textContent = `"${text}"`;
    }

    const floatBubble = document.getElementById('floatingBubble');
    if (floatBubble) {
      floatBubble.textContent = `"${text}"`;
      floatBubble.classList.add('show');
      if (this.floatBubbleTimeout) clearTimeout(this.floatBubbleTimeout);
      this.floatBubbleTimeout = setTimeout(() => {
        floatBubble.classList.remove('show');
      }, duration);
    }
  },

  // Material & Summary Cards
  renderMateriGrid(filterSubject = 'all') {
    const container = document.getElementById('materiGrid');
    if (!container) return;

    const filtered = filterSubject === 'all'
      ? STUDY_MATERIALS
      : STUDY_MATERIALS.filter(m => m.subject === filterSubject);

    document.getElementById('materiCountInfo').textContent = `Menampilkan ${filtered.length} materi ringkasan pilihan`;

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Tidak ada materi yang sesuai dengan filter.</div>`;
      return;
    }

    let html = '';
    filtered.forEach(mat => {
      html += `
        <div class="material-card" data-subject="${mat.subject}">
          <div class="mat-card-header">
            <span class="mat-subject-chip rec-badge ${mat.subject === 'matematika' ? 'math' : 'science'}">${mat.subjectLabel}</span>
            <span class="badge-subtle">⏱️ ${mat.readTime}</span>
          </div>
          <h3 class="mat-title">${mat.title}</h3>
          <ul class="mat-summary-bullets">
            ${mat.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <div class="mat-formula-box">${mat.formula}</div>
          <div class="mat-card-actions">
            <button class="btn btn-sm btn-outline" onclick="StudyApp.openMaterial('${mat.id}')">Baca Selengkapnya ➔</button>
            <button class="btn btn-sm btn-primary" onclick="StudyApp.testMaterialInQuiz('${mat.subject}')">Kuis Topik Ini ⚡</button>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  filterMateriBySearch(query) {
    const cards = document.querySelectorAll('#materiGrid .material-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  },

  openMaterial(materialId) {
    const mat = STUDY_MATERIALS.find(m => m.id === materialId);
    if (!mat) return;

    document.getElementById('modalMatSubject').textContent = mat.subjectLabel;
    document.getElementById('modalMatTitle').textContent = mat.title;
    document.getElementById('modalMatBody').innerHTML = `
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
        <strong>Formula / Poin Inti:</strong> <code>${mat.formula}</code>
      </div>
      ${mat.content}
    `;

    document.getElementById('modalMatPracticeQuizBtn').onclick = () => {
      this.closeModal('materialModal');
      this.switchTab('kuis');
      this.startQuizSubject(mat.subject);
    };

    this.openModal('materialModal');
  },

  testMaterialInQuiz(subject) {
    this.switchTab('kuis');
    this.startQuizSubject(subject);
  },

  // Flashcards
  renderFlashcard() {
    const fc = FLASHCARDS[this.state.currentFcIndex];
    if (!fc) return;

    document.getElementById('fcSubject').textContent = fc.subject;
    document.getElementById('fcQuestion').textContent = fc.question;
    document.getElementById('fcAnswer').textContent = fc.answer;
    document.getElementById('fcCounter').textContent = `${this.state.currentFcIndex + 1} / ${FLASHCARDS.length}`;

    const cardEl = document.getElementById('activeFlashcard');
    cardEl.classList.toggle('flipped', this.state.fcFlipped);
  },

  // ==========================================================================
  // QUIZ ENGINE
  // ==========================================================================

  startQuizSubject(subjectKey) {
    // Fallback if subject has no dedicated list
    const questions = QUIZ_QUESTIONS[subjectKey] || QUIZ_QUESTIONS.matematika;

    this.state.quizSubject = subjectKey;
    this.state.quizCurrentQIdx = 0;
    this.state.quizScore = 0;
    this.state.quizStreakCount = 0;
    this.state.quizCorrectCount = 0;
    this.state.quizActive = true;

    document.getElementById('quizLobby').style.display = 'none';
    document.getElementById('quizResultView').style.display = 'none';
    document.getElementById('quizGameplay').style.display = 'block';

    const mascot = MASCOTS[this.state.activeMascot];
    document.getElementById('quizMascotMini').textContent = mascot.emoji;

    this.loadQuizQuestion();
  },

  loadQuizQuestion() {
    const questions = QUIZ_QUESTIONS[this.state.quizSubject] || QUIZ_QUESTIONS.matematika;
    const qData = questions[this.state.quizCurrentQIdx];
    this.state.quizAnswerLocked = false;

    // Reset UI
    document.getElementById('quizExplanationBox').style.display = 'none';
    document.getElementById('quizCurrentQ').textContent = (this.state.quizCurrentQIdx + 1);
    document.getElementById('quizTotalQ').textContent = questions.length;
    document.getElementById('quizSubjectChip').textContent = this.formatSubjectName(this.state.quizSubject);
    document.getElementById('quizQuestionText').textContent = qData.q;

    // Progress bar
    const progressPct = ((this.state.quizCurrentQIdx + 1) / questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${progressPct}%`;

    // Render options
    const grid = document.getElementById('quizOptionsGrid');
    const letters = ['A', 'B', 'C', 'D'];
    grid.innerHTML = qData.options.map((opt, i) => `
      <button class="quiz-opt-btn" onclick="StudyApp.handleAnswerSelection(${i})">
        <span class="opt-prefix">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    // Mascot commentary
    const mascot = MASCOTS[this.state.activeMascot];
    document.getElementById('quizMascotComment').textContent = `"${mascot.quotes.idle}"`;

    // Start 15s Timer
    this.startQuizTimer();
  },

  startQuizTimer() {
    clearInterval(this.state.quizTimerInterval);
    this.state.quizTimerSeconds = 15;
    document.getElementById('quizTimerText').textContent = '15';
    document.getElementById('quizTimerPill').style.borderColor = 'rgba(239, 68, 68, 0.3)';

    this.state.quizTimerInterval = setInterval(() => {
      this.state.quizTimerSeconds--;
      document.getElementById('quizTimerText').textContent = this.state.quizTimerSeconds;

      if (this.state.quizTimerSeconds <= 5) {
        this.audio.playTone(900, 'sine', 0.05, 0, 0.05); // Warning tick
        document.getElementById('quizTimerPill').style.borderColor = '#ef4444';
      }

      if (this.state.quizTimerSeconds <= 0) {
        clearInterval(this.state.quizTimerInterval);
        this.handleTimeOut();
      }
    }, 1000);
  },

  handleAnswerSelection(selectedIndex) {
    if (this.state.quizAnswerLocked) return;
    this.state.quizAnswerLocked = true;
    clearInterval(this.state.quizTimerInterval);

    const questions = QUIZ_QUESTIONS[this.state.quizSubject];
    const qData = questions[this.state.quizCurrentQIdx];
    const buttons = document.querySelectorAll('.quiz-opt-btn');

    // Disable all options
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === qData.correct) {
        btn.classList.add('correct');
      }
    });

    const isCorrect = (selectedIndex === qData.correct);
    const mascot = MASCOTS[this.state.activeMascot];

    if (isCorrect) {
      buttons[selectedIndex].classList.add('correct');
      this.audio.playCorrect();
      this.state.quizCorrectCount++;
      this.state.quizStreakCount++;

      // Score calculation with streak combo
      const multiplier = 1 + (this.state.quizStreakCount - 1) * 0.25;
      const points = Math.round(100 * multiplier);
      this.state.quizScore += points;

      document.getElementById('quizComboBadge').textContent = `Streak x${this.state.quizStreakCount}`;
      document.getElementById('quizCurrentScore').textContent = this.state.quizScore;
      document.getElementById('quizMascotComment').textContent = `"${mascot.quotes.quizCorrect}"`;

      // Visual particle cheer
      this.launchCheerParticles(window.innerWidth / 2, window.innerHeight / 2, '✨');
    } else {
      if (selectedIndex !== -1) {
        buttons[selectedIndex].classList.add('wrong');
      }
      this.audio.playWrong();
      this.state.quizStreakCount = 0;
      document.getElementById('quizComboBadge').textContent = 'Streak x1';
      document.getElementById('quizMascotComment').textContent = `"${mascot.quotes.quizWrong}"`;
    }

    // Show Explanation
    document.getElementById('quizExpBody').textContent = qData.exp;
    document.getElementById('quizExplanationBox').style.display = 'block';
  },

  handleTimeOut() {
    this.handleAnswerSelection(-1); // -1 marks as unanswered/timed out
    this.showToast('Waktu habis untuk soal ini!');
  },

  goToNextQuizQuestion() {
    const questions = QUIZ_QUESTIONS[this.state.quizSubject];
    this.state.quizCurrentQIdx++;

    if (this.state.quizCurrentQIdx < questions.length) {
      this.loadQuizQuestion();
    } else {
      this.finishQuiz();
    }
  },

  finishQuiz() {
    clearInterval(this.state.quizTimerInterval);
    document.getElementById('quizGameplay').style.display = 'none';
    document.getElementById('quizResultView').style.display = 'block';

    const questions = QUIZ_QUESTIONS[this.state.quizSubject];
    const totalQ = questions.length;
    const accuracy = Math.round((this.state.quizCorrectCount / totalQ) * 100);
    const xpGained = this.state.quizScore + (this.state.quizCorrectCount * 20);

    // Update state
    this.addXp(xpGained);

    // Results UI
    document.getElementById('resultFinalScore').textContent = this.state.quizScore;
    document.getElementById('resultCorrectCount').textContent = `${this.state.quizCorrectCount} / ${totalQ}`;
    document.getElementById('resultXpEarned').textContent = `+${xpGained} XP`;
    document.getElementById('resultAccuracy').textContent = `${accuracy}%`;

    const mascot = MASCOTS[this.state.activeMascot];
    document.getElementById('resultCompAvatar').textContent = mascot.emoji;
    document.getElementById('resultCompText').textContent = `"${mascot.name}: ${
      accuracy >= 80 ? 'Luar biasa sekali! Kemampuan analisis dan ketepatanmu sangat mengagumkan!' :
      accuracy >= 60 ? 'Hasil yang sangat solid! Sedikit review lagi di tab Materi dan kamu akan sempurna!' :
      'Terus semangat! Setiap kesalahan adalah batu loncatan menuju kepintaran!'
    }"`;

    // Confetti celebration if passed
    if (accuracy >= 60 && window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      this.audio.playTaskChime();
    }

    this.updateStats();
  },

  exitQuizToLobby() {
    clearInterval(this.state.quizTimerInterval);
    document.getElementById('quizGameplay').style.display = 'none';
    document.getElementById('quizResultView').style.display = 'none';
    document.getElementById('quizLobby').style.display = 'block';
  },

  formatSubjectName(key) {
    const map = {
      matematika: '📐 Matematika Kilat',
      fisika: '⚡ Tantangan Fisika',
      inggris: '🌍 English Master',
      coding: '💻 Coding & Logika'
    };
    return map[key] || 'Pengetahuan Umum';
  },

  // ==========================================================================
  // TASK PLANNER & SCHEDULE
  // ==========================================================================

  renderTasks(filter = 'all') {
    const container = document.getElementById('taskListContainer');
    const quickContainer = document.getElementById('dashQuickTasks');

    let filtered = [...this.state.tasks];
    if (filter === 'pending') filtered = filtered.filter(t => !t.completed);
    if (filter === 'completed') filtered = filtered.filter(t => t.completed);

    // Sort
    const sortVal = document.getElementById('taskPrioritySort') ? document.getElementById('taskPrioritySort').value : 'deadline';
    if (sortVal === 'priority') {
      const pWeights = { tinggi: 3, sedang: 2, rendah: 1 };
      filtered.sort((a, b) => pWeights[b.priority] - pWeights[a.priority]);
    }

    // Update counts
    const pendingCount = this.state.tasks.filter(t => !t.completed).length;
    const completedCount = this.state.tasks.filter(t => t.completed).length;

    if (document.getElementById('countAllTasks')) document.getElementById('countAllTasks').textContent = this.state.tasks.length;
    if (document.getElementById('countPendingTasks')) document.getElementById('countPendingTasks').textContent = pendingCount;
    if (document.getElementById('countDoneTasks')) document.getElementById('countDoneTasks').textContent = completedCount;
    if (document.getElementById('taskPendingBadge')) document.getElementById('taskPendingBadge').textContent = pendingCount;

    // Render Full List in Tab 4
    if (container) {
      if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 30px; color: var(--text-muted);">Tidak ada tugas di kategori ini. Santai sejenak! ☕</div>`;
      } else {
        container.innerHTML = filtered.map(task => `
          <div class="task-item-card ${task.completed ? 'done' : ''}" id="taskCard-${task.id}">
            <input type="checkbox" class="task-checkbox-lg" ${task.completed ? 'checked' : ''} onchange="StudyApp.toggleTask('${task.id}')">
            <div class="task-body">
              <div class="task-headline">
                <span class="task-name">${task.title}</span>
                <span class="priority-tag ${task.priority}">${task.priority.toUpperCase()}</span>
              </div>
              <div class="task-meta-row">
                <span>📚 ${task.subject}</span>
                <span>⏰ Batas: ${task.dueDate} ${task.dueTime ? `(${task.dueTime})` : ''}</span>
              </div>
              ${task.notes ? `<div class="task-notes">📝 ${task.notes}</div>` : ''}
            </div>
            <button class="task-delete-btn" onclick="StudyApp.deleteTask('${task.id}')" title="Hapus Tugas">🗑️</button>
          </div>
        `).join('');
      }
    }

    // Render Quick List in Dashboard
    if (quickContainer) {
      const topTasks = this.state.tasks.filter(t => !t.completed).slice(0, 3);
      if (topTasks.length === 0) {
        quickContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem; padding: 10px;">Semua tugas terdekat sudah tuntas! 🎉</div>`;
      } else {
        quickContainer.innerHTML = topTasks.map(task => `
          <div class="quick-task-item">
            <input type="checkbox" class="task-checkbox" onchange="StudyApp.toggleTask('${task.id}')">
            <div class="task-info-block">
              <div class="task-title-text">${task.title}</div>
              <div class="task-due-badge">⏳ ${task.dueDate} • ${task.subject}</div>
            </div>
          </div>
        `).join('');
      }
    }
  },

  toggleTask(taskId) {
    const task = this.state.tasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    this.saveTasks();
    this.renderTasks();

    if (task.completed) {
      this.audio.playTaskChime();
      this.addXp(25);
      this.showToast('Tugas Selesai! +25 XP');

      // Mascot reaction
      const mascot = MASCOTS[this.state.activeMascot];
      this.showMascotBubble(mascot.quotes.taskDone, 4000);

      // Confetti
      if (window.confetti) {
        window.confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }
  },

  deleteTask(taskId) {
    this.state.tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
    this.renderTasks();
    this.showToast('Tugas dihapus');
  },

  handleCreateTask() {
    const title = document.getElementById('taskTitleInput').value.trim();
    if (!title) return;

    const subject = document.getElementById('taskSubjectSelect').value;
    const priority = document.getElementById('taskPrioritySelect').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const dueTime = document.getElementById('taskDueTime').value;
    const notes = document.getElementById('taskNotesInput').value.trim();

    const newTask = {
      id: 't-' + Date.now(),
      title,
      subject,
      priority,
      dueDate: dueDate || 'Hari Ini',
      dueTime,
      notes,
      completed: false
    };

    this.state.tasks.unshift(newTask);
    this.saveTasks();
    this.renderTasks();
    this.closeModal('taskModal');
    document.getElementById('newTaskForm').reset();
    this.showToast('Pengingat tugas baru berhasil ditambahkan!');
    this.audio.playClick();
  },

  handleQuickAddTask() {
    const input = document.getElementById('quickTaskInput');
    const title = input.value.trim();
    if (!title) return;

    const newTask = {
      id: 't-' + Date.now(),
      title,
      subject: 'Umum',
      priority: 'sedang',
      dueDate: 'Hari Ini',
      dueTime: '20:00',
      notes: '',
      completed: false
    };

    this.state.tasks.unshift(newTask);
    this.saveTasks();
    this.renderTasks();
    input.value = '';
    this.showToast('Target cepat ditambahkan!');
    this.audio.playClick();
  },

  // ==========================================================================
  // POMODORO FOCUS ROOM
  // ==========================================================================

  setPomodoroMode(seconds, label) {
    this.resetPomodoro();
    this.state.pomoMode = seconds;
    this.state.pomoRemaining = seconds;
    document.getElementById('pomoStateLabel').textContent = label;
    this.updatePomodoroDisplay();
  },

  togglePomodoro() {
    if (this.state.pomoRunning) {
      // Pause
      clearInterval(this.state.pomoInterval);
      this.state.pomoRunning = false;
      document.getElementById('pomoStartIcon').textContent = '▶ Lanjutkan Fokus';
    } else {
      // Start
      this.state.pomoRunning = true;
      document.getElementById('pomoStartIcon').textContent = '⏸ Jeda Waktu';
      this.audio.init();

      const mascot = MASCOTS[this.state.activeMascot];
      this.showMascotBubble(mascot.quotes.pomodoroStart, 4000);

      this.state.pomoInterval = setInterval(() => {
        this.state.pomoRemaining--;
        this.updatePomodoroDisplay();

        if (this.state.pomoRemaining <= 0) {
          clearInterval(this.state.pomoInterval);
          this.state.pomoRunning = false;
          this.handlePomodoroCompleted();
        }
      }, 1000);
    }
  },

  resetPomodoro() {
    clearInterval(this.state.pomoInterval);
    this.state.pomoRunning = false;
    this.state.pomoRemaining = this.state.pomoMode;
    document.getElementById('pomoStartIcon').textContent = '▶ Mulai Fokus';
    this.updatePomodoroDisplay();
  },

  updatePomodoroDisplay() {
    const minutes = Math.floor(this.state.pomoRemaining / 60);
    const seconds = this.state.pomoRemaining % 60;
    const str = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('pomoCountdown').textContent = str;

    // SVG Progress ring
    const total = this.state.pomoMode;
    const circumference = 2 * Math.PI * 120; // r=120 => 753.98
    const offset = circumference - (this.state.pomoRemaining / total) * circumference;
    const circle = document.getElementById('pomoCircle');
    if (circle) circle.style.strokeDashoffset = offset;
  },

  handlePomodoroCompleted() {
    this.audio.playTaskChime();
    this.addXp(50);
    this.showToast('Sesi Fokus Selesai! Kerja Luar Biasa! +50 XP');

    const mascot = MASCOTS[this.state.activeMascot];
    this.showMascotBubble(mascot.quotes.pomodoroFinish, 6000);

    if (window.confetti) {
      window.confetti({ particleCount: 70, spread: 70 });
    }

    this.state.pomoRound = (this.state.pomoRound % 4) + 1;
    document.getElementById('pomoRoundLabel').textContent = `Sesi #${this.state.pomoRound} / 4`;
    this.resetPomodoro();
  },

  // ==========================================================================
  // STUDY LOUNGE & COMMUNITY
  // ==========================================================================

  cheerFriend(friendName, emoji) {
    this.launchCheerParticles(window.innerWidth / 2, window.innerHeight / 2, emoji);
    this.audio.playTone(700, 'sine', 0.12, 0, 0.1);
    this.addXp(5);
    this.showToast(`Kirim ${emoji} untuk ${friendName}! +5 XP`);
  },

  handleSendChatMessage() {
    const input = document.getElementById('loungeChatInput');
    const msg = input.value.trim();
    if (!msg) return;

    const chatContainer = document.getElementById('loungeChatMessages');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append user message
    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chat-msg self';
    userMsgEl.innerHTML = `
      <div class="msg-bubble">${this.escapeHtml(msg)}</div>
      <div class="msg-time">${timeStr}</div>
    `;
    chatContainer.appendChild(userMsgEl);
    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    this.audio.playClick();
    this.addXp(2);

    // Mascot or friend automated reply after 1.5s
    setTimeout(() => {
      const mascot = MASCOTS[this.state.activeMascot];
      const botMsgEl = document.createElement('div');
      botMsgEl.className = 'chat-msg mascot-bot';

      const replies = [
        `"Keren banget insight-nya! Terus semangat ya kawan-kawan!"`,
        `"Fokus adalah kekuatan super kita hari ini!"`,
        `"Pesan yang sangat memotivasi! Ayo selesaikan target berikutnya!"`
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      botMsgEl.innerHTML = `
        <div class="msg-sender">${mascot.name} ${mascot.emoji} <span class="bot-badge">Maskot</span></div>
        <div class="msg-bubble">${randomReply}</div>
        <div class="msg-time">${timeStr}</div>
      `;
      chatContainer.appendChild(botMsgEl);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1200);
  },

  // ==========================================================================
  // HELPERS, XP, & PARTICLES
  // ==========================================================================

  addXp(amount) {
    this.state.userXp += amount;
    this.state.userLevel = Math.floor(this.state.userXp / 400) + 1;
    this.saveState();
    this.updateUserStatsDisplay();
  },

  updateUserStatsDisplay() {
    const xpDisp = document.getElementById('userXpDisplay');
    const lvDisp = document.getElementById('userLevelTag');
    if (xpDisp) xpDisp.textContent = `${this.state.userXp.toLocaleString()} XP`;
    if (lvDisp) lvDisp.textContent = `Lv. ${this.state.userLevel}`;
  },

  updateStats() {
    this.updateUserStatsDisplay();
    if (document.getElementById('statMateriRead')) {
      document.getElementById('statMateriRead').textContent = '8';
      document.getElementById('statQuizFinished').textContent = '14';
      document.getElementById('statTasksCompleted').textContent = this.state.tasks.filter(t => t.completed).length + 15;
    }
  },

  launchCheerParticles(x, y, emoji = '⭐') {
    for (let i = 0; i < 4; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-cheer-particle';
      particle.textContent = emoji;
      const offsetX = (Math.random() - 0.5) * 80;
      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1400);
    }
  },

  showToast(text) {
    const toast = document.getElementById('audioToast');
    if (!toast) return;
    toast.textContent = text;
    toast.style.display = 'block';
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.style.display = 'none';
    }, 2500);
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
  },

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }
};

// Auto-run on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  StudyApp.init();
});
