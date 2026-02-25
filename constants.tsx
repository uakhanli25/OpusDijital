
import React from 'react';
import { 
  Globe, Search, BarChart3, Palette, ShoppingCart, Share2, 
  Zap, Bot, Scale, Stethoscope, Utensils, Hotel, Wrench, Warehouse 
} from 'lucide-react';
import { Service, FAQItem, BlogPost, SectorCard } from './types';

export const HAKKIMIZDA_TEXT = "2021 yılından bu yana, dijital dünyada kaybolan markalara pusula oluyoruz. Opus Dijital olarak vizyonumuz karmaşık teknolojiler değil, somut sonuçlardır. İşletmenizin 'görünmez' olma sorununu kökten çözüyor, sadece bir web sitesi değil; 7/24 çalışan bir satış makinesi inşa ediyoruz. Google'da zirveye yerleşmek, reklam bütçenizi kazanca dönüştürmek ve SekreterAI ile operasyonel yükünüzü sıfırlamak için buradayız. Bizimle çalıştığınızda teknoloji karmaşasını biz yönetiriz, siz sadece büyümenizi izlersiniz.";

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Tasarım & Yazılım',
    description: 'Sadece bir site değil, 7/24 çalışan bir satış makinesi inşa ediyoruz.',
    icon: <Globe />,
    details: `Solution: İşletmenizin dijital dünyadaki yüzünü, sadece görsel bir vitrin olmaktan çıkarıp aktif bir satış kanalına dönüştürüyoruz. Next.js ve modern web teknolojileriyle ışık hızında açılan, mobil uyumlu ve Google dostu mimariler inşa ediyoruz. Her satır kodda dönüşüm oranlarını artıracak psikolojik tetikleyiciler kullanıyoruz.

    Benefit: Ziyaretçileriniz sitenizde kaybolmaz; en kısa yoldan ürününüze veya hizmetinize ulaşır. Hızlı yüklenme süreleri sayesinde "hemen çıkma" oranlarınız düşer ve dönüşüm oranlarınız %150'ye varan artış gösterir. Siteniz her cihazda kusursuz görünür ve güven verir. Google Core Web Vitals skorlarınız daima yeşil bölgede kalarak SEO performansınızı destekler.

    Result: Teslim ettiğimiz her proje, markanızın prestijini artırırken aynı zamanda 7/24 çalışan bir satış personeli gibi görev yapar. Karmaşık kod yapısını ve sunucu yönetimini biz üstleniriz, siz sadece artan trafiğinizi ve satışlarınızı izlersiniz. İşletmenizin büyümesi artık bir tesadüf değil, teknik bir sonuçtur.`
  },
  {
    id: 'seo',
    title: 'SEO (Arama Motoru Optimizasyonu)',
    description: 'Google zirvesinde yerinizi ayırtın, organik trafiği kazanca dönüştürün.',
    icon: <Search />,
    details: `Solution: "Görünmezlik" sorununu, Google'ın 2026 algoritmalarına tam uyumlu teknik SEO, semantik içerik üretimi ve otorite inşası stratejileriyle çözüyoruz. Sadece anahtar kelime değil, kullanıcı niyetini (User Intent) hedefleyen, yapay zeka destekli içerik kümeleri oluşturuyoruz.

    Benefit: Reklam bütçesi harcamadan, Google arama sonuçlarında organik olarak üst sıralara tırmanırsınız. Sizi arayan potansiyel müşteriler, rakipleriniz yerine sizinle karşılaşır ve markanızı sektörün lideri olarak algılar. Uzun vadede en düşük maliyetli ve en yüksek getirili müşteri kazanım kanalı SEO'dur.

    Result: Çalışmalarımız sonucunda organik trafikte %300'e varan sürdürülebilir artış elde ediyoruz. Bir kez zirveye ulaştığınızda, reklam vermeyi bıraksanız dahi müşteri akışınız kesilmez. Markanız bölgenizde veya sektörünüzde otorite olarak tescillenmiş olur, rekabet üstünlüğü kazanırsınız.`
  },
  {
    id: 'ads',
    title: 'Dijital Reklam Yönetimi',
    description: 'Reklam bütçenizi gider değil, yüksek ROI getiren bir yatırıma dönüştürün.',
    icon: <BarChart3 />,
    details: `Solution: Meta ve Google Ads bütçenizi bir gider kalemi olarak değil, ölçülebilir bir yatırım aracı olarak yönetiyoruz. Yapay zeka destekli hedefleme ve dinamik reklam kurgularıyla sadece satın almaya en yakın kitleye odaklanıyoruz. Kreatiflerinizi sürekli A/B testlerine tabi tutarak en iyisini buluyoruz.

    Benefit: Bütçenizin tek bir kuruşu boşa gitmez. Kimin, ne zaman ve hangi reklamla sitenize geldiğini ve ne kadar harcama yaptığını kuruşu kuruşuna bilirsiniz. Düşük maliyetli müşteri kazanımı (CAC) ile karlılığınızı artırırsınız. Yanlış hedefleme kaynaklı bütçe yanmalarını tamamen engelliyoruz.

    Result: ROI (Yatırım Getirisi) odaklı yaklaşımımızla, reklam harcamalarınızın 5 ila 20 katı arasında ciro elde etmenizi sağlıyoruz. Ölçeklenebilir modellerimizle işletmenizi dilediğiniz hızda büyütebilirsiniz. Harcadığınız her kuruş size yeni bir müşteri ve net bir kazanç olarak döner.`
  },
  {
    id: 'brand',
    title: 'Kurumsal Kimlik & Marka',
    description: 'Ruhsuz logolardan fazlası; akılda kalıcı bir marka hikayesi.',
    icon: <Palette />,
    details: `Solution: Markanızı sadece bir logodan ibaret görmüyoruz. Teknolojik, futuristik ve güven veren bir görsel dil ile markanızın ruhunu dijital dünyaya yansıtıyoruz. Indigo-Cyan paletimizin gücünü, tipografi ve grafik standartlarıyla birleştirerek bütünsel bir kimlik klavuzu oluşturuyoruz.

    Benefit: Profesyonel bir görünüm, potansiyel müşterilerinizde saniyeler içinde güven oluşturur. Rakiplerinizin arasından sıyrılır, "sıradan bir işletme" değil, "kurumsal bir güç" olarak algılanırsınız. Güçlü bir kimlik, yüksek fiyatlandırma gücü ve marka sadakati sağlar.

    Result: Marka bilinirliğiniz artarken, müşterilerinizin size duyduğu sadakat güçlenir. Akılda kalıcı tasarımlarımızla, hedef kitleniz markanızı gördüğü her yerde tanır ve güvenle tercih eder. Markanızın piyasa değeri, ilk bakıştaki profesyonelliğinizle katlanır.`
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret Çözümleri',
    description: 'Sınırları aşın, ürünlerinizi tüm dünyaya 7/24 satın.',
    icon: <ShoppingCart />,
    details: `Solution: Sınır tanımayan, yüksek performanslı e-ticaret altyapıları kuruyoruz. Ödeme sistemlerinden kargo entegrasyonuna, stok takibinden pazaryeri senkronizasyonuna (Trendyol, Amazon vb.) kadar tüm süreci uçtan uca dijitalleştiriyoruz. Kullanıcı deneyimini (UX) satışa odaklıyoruz.

    Benefit: Dükkanınız hiç kapanmaz. Uyurken dahi satış yapmaya devam edersiniz. Kullanıcı dostu sepet deneyimiyle "terk edilen sepet" oranlarını minimize ederek mevcut trafiğinizden maksimum kazanç sağlarsınız. Globalleşmek ve farklı döviz birimleriyle satış yapmak artık parmaklarınızın ucunda.

    Result: Global pazarlara açılan, her türlü dövizle satış yapabilen ve yüksek hacimli trafiği kolayca yöneten bir dijital imparatorluk sahibi olursunuz. Teknik darboğazlar tarih olur, siz sadece ürün geliştirme ve operasyona odaklanarak cironuzu katlarsınız.`
  },
  {
    id: 'social',
    title: 'Sosyal Medya Yönetimi',
    description: 'Topluluk oluşturun, etkileşimi artırın ve sadık müşteriler kazanın.',
    icon: <Share2 />,
    details: `Solution: Sosyal medyayı sadece bir vitrin değil, etkileşimli bir satış kanalı olarak kurguluyoruz. Reels ve kısa video içerikleriyle algoritmaları markanız lehine çalıştırıyor, organik erişimi zorluyoruz. Topluluk yönetimi ve kriz iletişimi stratejileriyle markanızı koruyoruz.

    Benefit: Markanız etrafında sadık bir topluluk oluşur. Müşterilerinizle doğrudan bağ kurar, onların geri bildirimlerini anında satış fırsatına dönüştürürsünüz. Marka bilinirliğiniz her geçen gün çığ gibi büyür. Viral potansiyeli yüksek içeriklerle düşük maliyetli erişim sağlarsınız.

    Result: Aktif ve profesyonel bir sosyal medya varlığı, reklam maliyetlerinizi düşürürken organik müşteri kazanımınızı artırır. Markanız yaşayan, nefes alan ve takipçileriyle büyüyen bir fenomene dönüşür. Sosyal medyadaki varlığınız, dijital otoritenizin en büyük kanıtı olur.`
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "72 saatlik web sitesi teslimat garantisi nasıl çalışıyor?",
    answer: "Opus Dijital olarak hızın iş dünyasindeki önemini biliyoruz. 2021 yılından beri geliştirdiğimiz modüler altyapı ve uzman ekibimiz sayesinde, standart kurumsal web sitelerini 72 saat içinde yayına alma garantisi veriyoruz. Süreç şu şekilde işler: İlk 12 saatte içerik ve tasarım taslağı oluşturulur, sonraki 24 saatte geliştirme yapılır, kalan sürede ise testler ve SEO optimizasyonları tamamlanarak yayına geçilir. Müşterilerimizin zaman kaybını önleyerek, dijital varlıklarını en hızlı şekilde satışa hazır hale getiriyoruz. Eğer bu sürede teslimat yapamazsak, domain ve hosting masraflarını biz karşılıyoruz. Bu, işimize olan güvenimizin ve profesyonel disiplinimizin bir göstergesidir."
  },
  {
    question: "SEO çalışmalarında başarı garantisi veriyor musunuz?",
    answer: "Google algoritmaları sürekli değiştiği için kimse 'kesin 1. sıra' sözü veremez, ancak biz somut sonuçlar ve yükseliş garantisi veriyoruz. Bizim metodolojimiz, teknik altyapıdaki tüm hataları sıfırlamak, kullanıcı niyetine odaklı içerikler üretmek ve markanızı bir otorite haline getirmektir. Genellikle 3-6 ay içerisinde hedeflenen anahtar kelimelerde %200'den fazla trafik artışı gözlemliyoruz. Amacımız sadece sıralama değil, bu sıralamanın size satış olarak dönmesidir. Google zirvesindeki yeriniz, bizim başarımızın en büyük kanıtıdır. Şeffaf raporlama sistemimizle her ay nerede olduğunuzu net görürsünüz."
  },
  {
    question: "SekreterAI nasıl kurulur ve teknik detayları nelerdir?",
    answer: "SekreterAI kurulumu son derece basittir ve mevcut altyapınıza zarar vermez. Sistem, bulut tabanlı bir santral yönlendirmesiyle çalışır. Sizden sadece cevaplanmasını istediğiniz soruların ve randevu takviminizin detaylarını alırız. Geri kalan tüm NLP (Doğal Dil İşleme) eğitimini ve ses sentezleme ayarlarını ekibimiz tamamlar. Sistemimiz, %98 doğruluk oranıyla karmaşık insan cümlelerini anlayabilir ve bağlam dışına çıkmadan yanıt verebilir. Kurulum süreci genellikle 24-48 saat sürer ve hemen ardından ilk aramalarınızı karşılamaya başlar. KVKK uyumlu veritabanımızda tüm görüşmeler şifrelenmiş olarak saklanır."
  },
  {
    question: "Reklam bütçemi nasıl en verimli şekilde yönetiyorsunuz?",
    answer: "Dijital reklamcılıkta en büyük hata, reklamı herkese göstermektir. Biz ise reklamlarınızı sadece 'almaya hazır' kitleye gösteriyoruz. Yapay zeka destekli analiz araçlarımızla, rakip reklamlarını, kullanıcı davranışlarını ve pazar trendlerini inceliyoruz. İlk hafta içinde yaptığımız A/B testleriyle hangi reklam metninin ve görselinin en çok tıklama aldığını saptıyoruz. Ardından, bütçenizi en iyi performans veren kanallara kaydırarak ROI (Yatırım Getirisi) oranınızı maksimize ediyoruz. Ortalama olarak müşterilerimizin reklam maliyetlerini %40 oranında düşürürken, dönüşüm oranlarını %120 oranında artırıyoruz."
  },
  {
    question: "Neden diğer ajanslar yerine Opus Dijital'i seçmeliyim?",
    answer: "Opus Dijital, kendisini sadece bir 'hizmet sağlayıcı' olarak değil, markanızın 'büyüme ortağı' olarak konumlandırır. Bizim için başarı, güzel bir tasarım değil, artan satış rakamlarınızdır. 2021 yılından bu yana, teknolojiyi karmaşa yaratmak için değil, çözüm üretmek için kullanıyoruz. Projelerimizde şeffaflık, hız ve somut veriye dayalı stratejiler esastır. Sektördeki 'yaptım oldu' anlayışını yıkarak, lansman sonrası da kesintisiz destek veriyoruz. Bizimle çalıştığınızda teknik detaylarla uğraşmazsınız; biz teknolojiyi yöneteriz, siz sadece büyümenizi izlersiniz."
  },
  {
    question: "SekreterAI personeli işten çıkarmamı mı gerektiriyor?",
    answer: "Hayır, SekreterAI personelinizi işten çıkarmak için değil, onların üzerindeki düşük değerli ve tekrarlayan iş yükünü (randevu almak, adres sormak vb.) almak için tasarlanmıştır. Bu sayede mevcut ekibiniz, daha karmaşık müşteri sorunlarına ve doğrudan satış odaklı görüşmelere odaklanabilir. SekreterAI bir rakip değil, ekibinizin en verimli ve asla uyumayan bir üyesidir. Operasyonel yükü sıfırlayarak işletmenizin kalitesini artırır."
  },
  {
    question: "Web sitesi tesliminden sonra destek veriyor musunuz?",
    answer: "Kesinlikle. Bizim için bir sitenin teslim edilmesi işin sonu değil, büyüme yolculuğunun başlangıcıdır. Opus Dijital olarak tüm projelerimize 1 yıl boyunca ücretsiz teknik destek ve güvenlik güncellemesi sağlıyoruz. Ayrıca aylık performans raporlamalarımızla sitenizin nasıl daha iyi sonuçlar verebileceğini analiz ediyor ve size öneriler sunuyoruz. Her zaman bir telefon uzağınızdayız."
  },
  {
    question: "Sosyal medya yönetimi satışlarımı doğrudan etkiler mi?",
    answer: "Sosyal medya doğrudan bir satış kanalı olabildiği gibi, dolaylı olarak 'güven' unsuru üzerinden tüm kanallarınızı besler. Profesyonelce yönetilen bir Instagram hesabı, web sitenize gelen müşterinin satın alma kararını %70 oranında hızlandırır. Biz sosyal medyayı markanızın 'canlı' ve 'güvenilir' olduğunu kanıtlamak ve topluluk oluşturmak için kullanıyoruz. Doğru stratejiyle sosyal medya, reklam maliyetlerinizi düşüren bir organik motor haline gelir."
  },
  {
    question: "Dijitalleşme süreci pahalı bir yatırım mıdır?",
    answer: "Dijitalleşme bir harcama değil, ölçeklenebilir bir yatırımdır. Doğru yapıldığında, kendini birkaç ay içinde amorti eder. Opus Dijital olarak biz, 'boşa harcanan bütçe' kavramını ortadan kaldırıyoruz. Her bir kuruşun nereye gittiğini ve size ne kadar geri döndüğünü (ROI) ölçümlüyoruz. Dijitalleşmemek, rakiplerinizin gerisinde kalarak pazar payı kaybetmek demektir ki bu çok daha pahalı bir maliyettir."
  },
  {
    question: "Kampanyanızdaki 10.000 TL fiyatı neden bu kadar uygun?",
    answer: "Bu kampanya, Opus Dijital'in 'Her İşletme Dijitalde Olmalı' vizyonunun bir parçasıdır. Kendi geliştirdiğimiz otomasyon araçları ve standartlaştırılmış yüksek kaliteli şablonlarımız sayesinde maliyetleri düşürdük. Amacımız, başlangıç aşamasındaki veya dijitalde yeni olan işletmelere profesyonel bir zemin hazırlamak ve uzun vadeli bir çözüm ortağı olmaktır. Fiyatın uygun olması kaliteden ödün verdiğimiz anlamına değil, süreci optimize ettiğimiz anlamına gelir."
  }
];

export const SECTOR_CARDS: SectorCard[] = [
  {
    title: "Restoranlar",
    painPoint: "Yoğun saatlerde telefonlara cevap verilememesi ve sipariş/rezervasyon kaybı.",
    solution: "SekreterAI aramaları anında yanıtlar, menü hakkında bilgi verir ve doğrudan rezervasyon sistemine kayıt oluşturur. Kayıp çağrıları sıfıra indirerek ciroyu doğrudan artırır."
  },
  {
    title: "Klinikler & Doktorlar",
    painPoint: "Randevu çakışmaları ve mesai dışı gelen acil randevu taleplerinin kaçırılması.",
    solution: "Yapay zeka asistanı, müsaitlik durumunu kontrol ederek 7/24 randevu planlar ve hastalara hatırlatma mesajları gönderir. Hasta memnuniyetini ve operasyonel hızı maksimize eder."
  },
  {
    title: "Teknik Servisler",
    painPoint: "Müşterilerin arıza durumunu tekrar tekrar anlatması ve koordinasyon eksikliği.",
    solution: "Gelen her aramayı sesli kayıt ve metin olarak raporlar, aciliyet durumuna göre ekibi anlık olarak bilgilendirir. Arıza kayıtlarını hatasüz ve hızlı bir şekilde oluşturur."
  },
  {
    title: "Butik Oteller",
    painPoint: "Yüksek komisyonlu platformlara bağımlılık ve doğrudan rezervasyon alamama.",
    solution: "Arayanlara en iyi fiyat garantisini sunarak doğrudan rezervasyona yönlendirir ve otel olanaklarını detaylıca açıklar. Komisyon giderlerini azaltarak karlılığı artırır."
  },
  {
    title: "Avukatlık Büroları",
    painPoint: "Dava yoğunluğu nedeniyle yeni müvekkil adaylarının bekletilmesi ve soğuması.",
    solution: "İlk ön görüşmeyi yaparak konu hakkında temel bilgileri toplar ve avukatın takvimine göre ilk randevuyu set eder. Prestijli bir karşılama deneyimi sunar."
  },
  {
    title: "E-Ticaret Depoları",
    painPoint: "Kargo durumu ve iade süreçleriyle ilgili bitmek bilmeyen telefon trafiği.",
    solution: "Sipariş numarası üzerinden anlık kargo takibi yapar, sıkça sorulan soruları yanıtlayarak müşteri temsilcisi yükünü %80 azaltır. Operasyonel maliyetleri kökten çözer."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2026 Yerel SEO Rehberi: Bölgenizde Dijital Liderliğin Sırları',
    excerpt: 'Google Haritalar\'da ve yerel aramalarda nasıl en üste çıkarsınız? İşte modern algoritmaya göre şekillenmiş tam kapsamlı stratejiler.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
    category: 'SEO',
    content: `Yerel SEO (Local SEO), fiziksel konumu bulunan işletmeler için 2026'nın en kritik büyüme motorudur. Google artık "yakınımdaki" aramalarında sadece en yakın olanı değil, dijital otoritesi en yüksek olanı gösteriyor. 

    Başarılı bir Yerel SEO stratejisi üç temel direğe dayanır: Birincisi, Google İşletme Profilinizin (GBP) kusursuz optimizasyonu. İkincisi, yerel anahtar kelimelerle zenginleştirilmiş, bölgenize özel içerik üretimi. Üçüncüsü ise NLP destekli kullanıcı yorumlarının aktif ve stratejik yönetimi. Opus Dijital olarak, yerel işletmeleri bölgelerinin en çok aranan markaları haline getiriyoruz. Algoritmalar değişse de, yerel güven asla değişmez.`
  },
  {
    id: '2',
    title: 'E-Ticaret Psikolojisi: Ziyaretçiyi Müşteriye Dönüştürmenin 10 Bilimsel Yolu',
    excerpt: 'Renklerin enerjisinden buton yerleşimine, dijital dünyada satın alma kararlarını etkileyen gizli psikolojik faktörler.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'E-Ticaret',
    content: `E-ticarette satış bir tasarım meselesi değil, bir psikoloji meselesidir. Ziyaretçiler sitenize girdiğinde beynin ilkel bölgesi (amigdala) saniyeler içinde "güvenli mi?" ve "faydalı mı?" sorularını yanıtlar. 

    Sosyal kanıt (Social Proof) kullanımı, kıtlık prensibi (Limited Time Offer), renklerin duygu durumuna etkisi ve sürtünmesiz ödeme süreçleri dönüşüm oranlarınızı belirler. Indigo ve Cyan tonlarımızın neden teknolojik güven telkin ettiğini ve kullanıcıyı nasıl aksiyona geçirdiğini verilerle kanıtlıyoruz. Satış yapmak istiyorsanız, müşterinizin beynine hitap etmelisiniz.`
  },
  {
    id: '3',
    title: 'SekreterAI Verimlilik: Personel Maliyetlerini %80 Nasıl Düşürürsünüz?',
    excerpt: 'Yapay zeka asistanlarının operasyonel yük üzerindeki mucizevi etkileri ve geleceğin işletme modeli.',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=800&auto=format&fit=crop',
    category: 'Yapay Zeka',
    content: `İşletme dünyası bir "verimlilik devrimi" yaşıyor. SekreterAI, bu devrimin öncü gücüdür. Geleneksel santral sistemleri sadece yönlendirirken, SekreterAI sorunu çözer. 

    7/24 kesintisiz çalışma, sıfır hata payı ve anlık veri raporlama yetenekleriyle bir insan sekreterin haftalık iş yükünü saatler içinde tamamlar. Personel maliyetlerinizi düşürürken, müşteri karşılama kalitenizi standartlaştırır. Geleceğin işletmeleri insan gücünü yaratıcılığa, yapay zekayı ise operasyona ayırıyor. Siz hala telefon başında mısınız?`
  },
  {
    id: '4',
    title: '2026 Reklam Algoritmaları: Cookie Sonrası Dönemde Kazanma Rehberi',
    excerpt: 'Meta ve Google reklamlarında yeni nesil hedefleme teknikleri ve yapay zeka destekli bütçe yönetimi.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
    category: 'Reklam',
    content: `Dijital reklamcılıkta çerezlerin (cookies) ölümüyle birlikte "ilgi alanına dayalı hedefleme" devri kapandı. Artık "Tahminlemeli Davranış Analizi" devri başladı. 

    2026 reklam stratejilerimizde birinci taraf verilere (First-party data) ve yapay zeka destekli kreatif optimizasyonuna odaklanıyoruz. Reklam bütçenizi artık bir algoritma değil, bir strateji yönetmeli. Meta ve Google'ın yeni nesil reklam modellerini kullanarak rakiplerinizden nasıl daha ucuza müşteri kazanabileceğinizi adım adım açıklıyoruz.`
  },
  {
    id: '5',
    title: 'Neden Yavaş Bir Web Sitesi İşletmenizi Öldürüyor?',
    excerpt: 'Hızın dönüşüm oranları üzerindeki dramatik etkisi ve teknik hızlandırma teknikleri.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Web',
    content: `Sitenizin 2 saniyeden geç açılması, ziyaretçilerinizin %40'ını henüz sitenizi görmeden kaybetmeniz demektir. Google için hız artık sadece bir UX faktörü değil, bir sıralama kriteridir. Core Web Vitals skorlarınızın satışlarınıza olan doğrudan etkisini ve Next.js altyapısının neden zorunlu olduğunu teknik verilerle sunuyoruz.`
  },
  {
    id: '6',
    title: 'Marka Kimliği: Renklerin Satın Alma Kararlarına Etkisi',
    excerpt: 'Indigo ve Cyan birleşimi neden güven verir? Marka paletinizi seçerken nelere dikkat etmelisiniz?',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    category: 'Marka',
    content: `İnsan beyni renkleri yazılardan daha hızlı işler. Marka paletiniz, müşterinize verdiğiniz gizli sözdür. Indigo ve Cyan tonlarımızın neden teknoloji ve şeffaflığı temsil ettiğini, markanızın hikayesine en uygun renkleri nasıl seçeceğinizi bu analizde bulabilirsiniz.`
  },
  {
    id: '7',
    title: '2026\'da İçerik Pazarlaması: Video ve Yapay Zeka Entegrasyonu',
    excerpt: 'Metin tabanlı içerikler ölüyor mu? Yeni nesil içerik stratejileri nasıl olmalı?',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    category: 'Pazarlama',
    content: `İçerik hala kral ama artık video içerikler tahtta. Yapay zeka ile ölçeklenebilir içerik üretimi ve kısa video formatlarının (Shorts, Reels) pazarlama hunisindeki (marketing funnel) kritik yerini 2026 trendleri ışığında inceliyoruz.`
  },
  {
    id: '8',
    title: 'B2B Şirketler İçin LinkedIn Reklam Stratejileri',
    excerpt: 'Profesyonel ağda doğru karar vericilere ulaşmanın ve yüksek kaliteli lead toplamanın yolları.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    category: 'Reklam',
    content: `LinkedIn reklamları pahalıdır ama doğru yapıldığında B2B için en karlı mecradır. Karar vericilere (CEO, Pazarlama Müdürü vb.) ulaşmak için kullanılan karmaşık hedefleme yöntemlerini ve düşük maliyetli lead toplama formüllerini paylaşıyoruz.`
  }
];
