import { Link } from "react-router-dom";

export const arrayOfPosts = [
  {
    character: "أدولف هتلر",
    time: "1939" + " 1" + " سبتمبر",
    character_pic:
      "https://cdn.britannica.com/57/146057-050-697A470D/Adolf-Hitler.jpg",
    tweet:
      "قواتنا الان تقوم بعملية نوعية في إتجاه دولة بولندا. بولندا قريبا سوف تصبح تحت سقف الأمة الألمانية",
    hashtag: "الحرب_العالمية_الثانية",
    hashtag_link: "ww2",
    character_link: "realAdolfHitler",
  },
  {
    character: "وينستون تشرشل",
    time: "1939" + " 1" + " ماي",
    character_pic:
      "https://cdn.britannica.com/25/171125-050-94459F61/Winston-Churchill.jpg",
    tweet: (
      <div>
        {" "}
        لن نسمح لهتلر بأن يزعزع الإستقرار في أوروبا! تعلن القوات البريطانية
        الحرب الشاملة على هتلر وعلى نظامه النازي ال‍‍ذي لا يهدد أوروبا فقط .. بل
        العلم بأسره{" "}
      </div>
    ),
    hashtag: "الحرب_العالمية_الثانية",
    hashtag_link: "ww2",
    character_link: "Churchill_UK",
  },
  {
    character: "وينستون تشرشل",
    time: "1940" + " 13" + " ماي",
    character_pic:
      "https://cdn.britannica.com/25/171125-050-94459F61/Winston-Churchill.jpg",
    tweet: (
      <div>
        <Link
          to="/realAdolfHitler"
          style={{ color: "blue", textDecoration: "none" }}
        >
          @realAdolfHilter
        </Link>
        <div>
          تسألني ما‍ذا نريد ؟ أجيبك بكلمة واحدة: النصر. النصر مهما كلف الثمن
        </div>
      </div>
    ),
    hashtag: "الحرب_العالمية_الثانية",
    hashtag_link: "ww2",
    character_link: "Churchill_UK",
  },
  {
    character: "فرانكلين دي روزفلت",
    time: "1941" + " 8" + " ديسمبر",
    character_pic:
      "https://ids.si.edu/ids/deliveryService?id=NPG-NPG_64_14Roosevelt-000001",
    tweet:
      "قامت القوات اليابانية قبل قليل بهجوم على القاعدة العسكرية بيرل هاربر. سأتوجه بعد قليل بخطاب إلى الشعب الأمريكي .. الولايات المتحدة ستدخل رسميا هذه الحرب",
    hashtag: "الحرب_العالمية_الثانية",
    hashtag_link: "ww2",
    character_link: "fdr",
  },
  {
    character: "توماس جيفرسون",
    time: "1776" + " 4" + " جويلية",
    character_pic:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/T_Jefferson_by_Charles_Willson_Peale_1791_2.jpg",
    tweet: (
      <div>
        جميع الناس خلقوا سواسية أمام الله. الذي أعطاهم جملة من الحقوق التي لا
        يمكن لأي شخص إنتزاعها منهم, ومن بين ه‍ذه الحقوق: الحق في الحياة, الحق في
        الحرية والحق في البحث عن السعادة
        <br />
      </div>
    ),
    hashtag: "الولايات_المتحدة_الأمريكية",
    hashtag_link: "usa",
    character_link: "jeffersonOfficial",
  },
  {
    character: "حنبعل",
    time: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>قبل الميلاد</div>
        <div style={{ visibility: "hidden" }}>.</div>
        <div>275</div>
      </div>
    ),
    character_pic:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mommsen_p265.jpg",
    tweet: (
      <div>
        جبال الآلب لن تعيق تقدمنا نحو روما. إما أن نجد طريقا, أو أن نصنع واحدا
      </div>
    ),
    hashtag: "قرطاج_ضد_روما",
    hashtag_link: "chartage-vs-rome",
    character_link: "hannibalOfficial",
  },
  {
    character: "حنبعل",
    time: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>قبل الميلاد</div>
        <div style={{ visibility: "hidden" }}>.</div>
        <div>218</div>
      </div>
    ),
    character_pic:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mommsen_p265.jpg",
    tweet: (
      <div>
        الخطة بإختصار
        <br />
        عبور جبال الآلب 📌
        <br />
        الإنتصار على روما 📌
        <br />
        لن أقبل أي أعذار
      </div>
    ),
    hashtag: "قرطاج_ضد_روما",
    hashtag_link: "chartage-vs-rome",
    character_link: "hannibalOfficial",
  },
  {
    character: "حنبعل",
    time: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>قبل الميلاد</div>
        <div style={{ visibility: "hidden" }}>.</div>
        <div>212</div>
      </div>
    ),
    character_pic:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mommsen_p265.jpg",
    tweet: (
      <div>
        إلى أولائك ال‍ذين ينتظرون نتيجة ه‍‍ذه المعركة أقول: لقد إنتصرت قرطاج
        بثلاثين ألف جندي فقط
      </div>
    ),
    hashtag: "قرطاج_ضد_روما",
    hashtag_link: "chartage-vs-rome",
    character_link: "hannibalOfficial",
  },
  {
    character: "كارل ماركس",
    time: "1848" + " 21" + " فيفري",
    character_pic:
      "https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg",
    tweet: "يا عمال العالم إتحدوا",
    hashtag: "البيان_الشيوعي",
    hashtag_link: "communist",
    character_link: "marx",
  },
];
