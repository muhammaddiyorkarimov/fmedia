import React from "react";
import "./News.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import ArticleCard from "../../components/DetailedNews/ArticleCard";

function News() {
  const newsData = [
    {
      image: "/images/image1.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi",
    },
    {
      image: "/images/image2.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image3.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image1.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi",
    },
    {
      image: "/images/image2.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image3.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image1.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi",
    },
    {
      image: "/images/image2.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image3.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image1.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi",
    },
    {
      image: "/images/image2.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
    {
      image: "/images/image3.png",
      date: "11 sentyabr 2024",
      headline:
        "Prezident Mirziyoyev qashshoqlikdan farovonlik sari dasturi orqali qashshoqlikni kamaytirish bo'yicha milliy harakatni boshladi​",
    },
  ];

  const articleData = {
    image: "/images/article-image.png",
    imageTitle: "Zo‘ravon Biznesmen",
    date: "11 sentyabr 2024",
    headline:
      "Zo‘ravonlik, samosud va qo‘rqitish mashinasi bilan xodimlarni ishlatish qadriyotga aylangan",
    content: `Avvaliga do‘kon rahbari zo‘ravonlikka qarshi, voqeadan esa shokda ekani, aybdorlar jazolanishini aytganida jamoatchilik biroz tingandi. Biroq ketma-ket videolar, hattoki rahbarning o‘zi xodimlarini do‘pposlagani, boshqa ishchilarga tartibga rioya qilmaganlar qanday jazolanishini emin-erkin ko‘rsatib, odamlarni tahqirlagani holatlari ko‘pchilikni qayta g‘azablantirdi.
Bugun O‘zbekistonda mehnat munosabatlarini tartibga soluvchi huquqiy normativ hujjatlar yetarli. Konstitutsiyadan tortib Mehnat kodeksigacha insonning kamsitilishi taqiqlanadi. Lekin Inbazar voqeasi jamiyatda mehnat munosabatlari hech qanday hujjatga asoslanmayotgani, xodimlarni qo‘rquv va shantaj usuli bilan boshqarish yaxshiroq effekt berishiga ishonch kayfiyati hali-hanuz borligini isbotladi.
Yurist Muhammadamin Karimjonovga ko‘ra, bu bezorilik. Voqea jinoyat, sudda ham jinoiy ish ochilishi kerak edi. Inbazar xodimlari esa bugun hattoki birlamchi mehnat huquqlaridan ham foydalana olmaydi. Chunki jamiyatimizda o‘z ishxonasiga qarshi kayfiyatdagilar tamg‘alanadi, zarar xodimning o‘ziga bo‘ladi. Ishchilar o‘z huquqini bila turib, talab qilolmaydigan darajaga kelib qolgan. Jinsiy tajovuzga uchraganlar ham qo‘rquv bilan lom-lim demay, yashashda davom etishga majbur, deydi huquqshunos.
Jamiyatshunos Hamid Sodiqning aytishicha, xodimlarni qo‘rquv bilan ushlab turish, zo‘ravonlikni odat qilib, xodimlarni boshqarish metodi tarixdan bo‘lib kelgan. Bunday rahbarlar zo‘ravonlik qilgan sari hurmatga, muhabbatga loyiq ko‘riladi. O‘zbekistonda do‘pposlash, kaltaklash, tepkilash faqat kichkina tashkilotlarda bo‘lmay, mehnat va karera yo‘lidagi bir qism sifatida saqlanib qolingani – eng katta muammo. Bundan tashqari, Inbazar singari tashkilotlar «HR» boshqaruv bilan o‘zgarmaydi.
Inson huquqlari faoli, «Ezgulik» jamiyati raisi Abdurahmon Tashanov fikricha esa bu davlat boshqaruvidagi kamchiliklar, kemtiklarning bir oqibati xolos.
Huquqshunos Hamid Sodiqning qo‘shimcha qilishicha, islohotlarning borishi, biror bir davlat darajasidagi loyihaga rahbar sifatida kuchishlatar tuzilmalarning belgilanishidan bilish osonki, mentalitetimizda kuch ishlatish natija tomon yetaklashiga ishonch bor. Biroq davlat avvalo legitim kuch ishlatishi kerak. Agar aksi bo‘lsa, siyosiy-iqtisodiy institutlar sachrab ketadi.
Xodimlarni boshqarish bo‘yicha mustaqil ekspert Dildora Tursunova 18 yillik tajribasida bunday holatni uchratmaganini aytadi. Rahbar bu lider degani, u boshqalarga o‘rnak bo‘lishi, ishxonada qadriyatlarni shakllantira olishi kerak. Bu rahbar esa kompaniyasida zo‘ravonlikni qadriyat darajasiga olib chiqqan, deydi u. Tursunovaning qo‘shimcha qilishicha, xodimlar o‘z huquqlarini talab qilishni o‘rganishi kerak.
Faollar fikricha, jamoatchilikning keng muhokamasi, tez reaksiyasi, bunday voqealarga befarq bo‘lmasligi – juda yaxshi. Ammo davlat va rasmiy tashkilotlarning, mehnat munosabatlarini tartibga solish funksiyasiga ega vazirliklarning, Soliq qo‘mitasi, ayniqsa, xodimlar va rahbarlar, tashkilotlar o‘rtasidagi munosabatni tartibga soluvchi kasaba uyushmalarining jimligini tushunib bo‘lmaydi.Avvaliga do‘kon rahbari zo‘ravonlikka qarshi, voqeadan esa shokda ekani, aybdorlar jazolanishini aytganida jamoatchilik biroz tingandi. Biroq ketma-ket videolar, hattoki rahbarning o‘zi xodimlarini do‘pposlagani, boshqa ishchilarga tartibga rioya qilmaganlar qanday jazolanishini emin-erkin ko‘rsatib, odamlarni tahqirlagani holatlari ko‘pchilikni qayta g‘azablantirdi.
Bugun O‘zbekistonda mehnat munosabatlarini tartibga soluvchi huquqiy normativ hujjatlar yetarli. Konstitutsiyadan tortib Mehnat kodeksigacha insonning kamsitilishi taqiqlanadi. Lekin Inbazar voqeasi jamiyatda mehnat munosabatlari hech qanday hujjatga asoslanmayotgani, xodimlarni qo‘rquv va shantaj usuli bilan boshqarish yaxshiroq effekt berishiga ishonch kayfiyati hali-hanuz borligini isbotladi.
Yurist Muhammadamin Karimjonovga ko‘ra, bu bezorilik. Voqea jinoyat, sudda ham jinoiy ish ochilishi kerak edi. Inbazar xodimlari esa bugun hattoki birlamchi mehnat huquqlaridan ham foydalana olmaydi. Chunki jamiyatimizda o‘z ishxonasiga qarshi kayfiyatdagilar tamg‘alanadi, zarar xodimning o‘ziga bo‘ladi. Ishchilar o‘z huquqini bila turib, talab qilolmaydigan darajaga kelib qolgan. Jinsiy tajovuzga uchraganlar ham qo‘rquv bilan lom-lim demay, yashashda davom etishga majbur, deydi huquqshunos.
Jamiyatshunos Hamid Sodiqning aytishicha, xodimlarni qo‘rquv bilan ushlab turish, zo‘ravonlikni odat qilib, xodimlarni boshqarish metodi tarixdan bo‘lib kelgan. Bunday rahbarlar zo‘ravonlik qilgan sari hurmatga, muhabbatga loyiq ko‘riladi. O‘zbekistonda do‘pposlash, kaltaklash, tepkilash faqat kichkina tashkilotlarda bo‘lmay, mehnat va karera yo‘lidagi bir qism sifatida saqlanib qolingani – eng katta muammo. Bundan tashqari, Inbazar singari tashkilotlar «HR» boshqaruv bilan o‘zgarmaydi.
Inson huquqlari faoli, «Ezgulik» jamiyati raisi Abdurahmon Tashanov fikricha esa bu davlat boshqaruvidagi kamchiliklar, kemtiklarning bir oqibati xolos.
Huquqshunos Hamid Sodiqning qo‘shimcha qilishicha, islohotlarning borishi, biror bir davlat darajasidagi loyihaga rahbar sifatida kuchishlatar tuzilmalarning belgilanishidan bilish osonki, mentalitetimizda kuch ishlatish natija tomon yetaklashiga ishonch bor. Biroq davlat avvalo legitim kuch ishlatishi kerak. Agar aksi bo‘lsa, siyosiy-iqtisodiy institutlar sachrab ketadi.Avvaliga do‘kon rahbari zo‘ravonlikka qarshi, voqeadan esa shokda ekani, aybdorlar jazolanishini aytganida jamoatchilik biroz tingandi. Biroq ketma-ket videolar, hattoki rahbarning o‘zi xodimlarini do‘pposlagani, boshqa ishchilarga tartibga rioya qilmaganlar qanday jazolanishini emin-erkin ko‘rsatib, odamlarni tahqirlagani holatlari ko‘pchilikni qayta g‘azablantirdi.
Bugun O‘zbekistonda mehnat munosabatlarini tartibga soluvchi huquqiy normativ hujjatlar yetarli. Konstitutsiyadan tortib Mehnat kodeksigacha insonning kamsitilishi taqiqlanadi. Lekin Inbazar voqeasi jamiyatda mehnat munosabatlari hech qanday hujjatga asoslanmayotgani, xodimlarni qo‘rquv va shantaj usuli bilan boshqarish yaxshiroq effekt berishiga ishonch kayfiyati hali-hanuz borligini isbotladi.
Yurist Muhammadamin Karimjonovga ko‘ra, bu bezorilik. Voqea jinoyat, sudda ham jinoiy ish ochilishi kerak edi. Inbazar xodimlari esa bugun hattoki birlamchi mehnat huquqlaridan ham foydalana olmaydi. Chunki jamiyatimizda o‘z ishxonasiga qarshi kayfiyatdagilar tamg‘alanadi, zarar xodimning o‘ziga bo‘ladi. Ishchilar o‘z huquqini bila turib, talab qilolmaydigan darajaga kelib qolgan. Jinsiy tajovuzga uchraganlar ham qo‘rquv bilan lom-lim demay, yashashda davom etishga majbur, deydi huquqshunos.
Jamiyatshunos Hamid Sodiqning aytishicha, xodimlarni qo‘rquv bilan ushlab turish, zo‘ravonlikni odat qilib, xodimlarni boshqarish metodi tarixdan bo‘lib kelgan. Bunday rahbarlar zo‘ravonlik qilgan sari hurmatga, muhabbatga loyiq ko‘riladi. O‘zbekistonda do‘pposlash, kaltaklash, tepkilash faqat kichkina tashkilotlarda bo‘lmay, mehnat va karera yo‘lidagi bir qism sifatida saqlanib qolingani – eng katta muammo. Bundan tashqari, Inbazar singari tashkilotlar «HR» boshqaruv bilan o‘zgarmaydi.
Inson huquqlari faoli, «Ezgulik» jamiyati raisi Abdurahmon Tashanov fikricha esa bu davlat boshqaruvidagi kamchiliklar, kemtiklarning bir oqibati xolos.
Huquqshunos Hamid Sodiqning qo‘shimcha qilishicha, islohotlarning borishi, biror bir davlat darajasidagi loyihaga rahbar sifatida kuchishlatar tuzilmalarning belgilanishidan bilish osonki, mentalitetimizda kuch ishlatish natija tomon yetaklashiga ishonch bor. Biroq davlat avvalo legitim kuch ishlatishi kerak. Agar aksi bo‘lsa, siyosiy-iqtisodiy institutlar sachrab ketadi.`, // Add full content here.
  };

  return (
    <div className="news-wrapper">
      <ArticleCard data={articleData} />
      <NewsCard data={newsData} />
    </div>
  );
}

export default News;
