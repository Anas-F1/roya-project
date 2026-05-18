import React from "react";
import DivergingChart from "../components/DivergingChart";
import "./ReportStyle.css"; // استدعاء ملف التنسيق الجديد الفخم

const EconomicReport = () => {
  return (
    <div className="report-page-container">
      {/* قسم العنوان والمقدمة */}
      <header className="report-header-section">
        <h1 className="report-main-title">
          مقارنة إحصائية للأنشطة الاقتصادية{" "}
          <span className="title-date">(Q1 2025 vs Q1 2026)</span>
        </h1>

        <div className="report-intro-text">
          <p>
            يقدم هذا المخطط مقارنة تحليلية لمدى نمو أو تراجع عدد الأنشطة
            الاقتصادية "بحسب القسم" وفقاً للتصنيف الوطني للأنشطة الاقتصادية
            (ISIC4) بين الربع الأول لعامي 2025 و2026. تم استيراد بيانات عدد
            الأنشطة بحسب رمز النشاط (المستوى الأخير) من منصة البيانات المفتوحة -
            وزارة التجارة، وإعادة تجميعها إلى مستوى أعلى "مستوى القسم" بحسب
            ISIC4. (يمكن الاطلاع على التصنيف من خلال الموقع الرسمي لـ{" "}
            <a
              href="https://www.stats.gov.sa/ar/w/%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%A3%D9%86%D8%B4%D8%B7%D8%A9-%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9?id=2812935"
              target="_blank"
              rel="noopener noreferrer"
              className="stats-link"
            >
              الهيئة العامة للإحصاء
            </a>
            ).
          </p>

          <div className="analysis-card">
            <p className="analysis-title">قراءة في نتائج المخطط:</p>
            <ul className="analysis-list">
              <li>
                <strong>قطاعات النمو القياسي:</strong> يتصدر قطاع "أنشطة التشييد
                المتخصصة" النمو المطلق بزيادة تتجاوز 35 ألف نشاط، كما حقق قطاع
                "صُنع المنتجات الغذائية" قفزة نوعية بنمو تجاوز 148%، مما يشير
                إلى تحول الاستثمار نحو الأنشطة التصنيعية والخدمات اللوجستية.
              </li>
              <li>
                <strong>إعادة الهيكلة وتحديات النمو:</strong> يظهر المخطط
                تراجعاً في عدد الأنشطة التقليدية الكبرى مثل "تجارة التجزئة" و
                "تشييد المباني"، وهو ما قد يشير إلى حالة من التصحيح السوقي أو
                التحول في نماذج الأعمال.
              </li>
              <li>
                <strong>الفرق المطلق مقابل النسبي:</strong> تبرز بعض الأنشطة في
                نموها "المطلق" ولكنها تحقق نمواً "نسبياً" هائلاً (مثل صناعة
                الآلات)، مما يكشف عن قطاعات واعدة بدأت في البروز بقوة في المشهد
                الاقتصادي.
              </li>
              <li>
                <strong>الأنشطة المستحدثة:</strong> تم رصد بند بمسمى "أنشطة
                مستحدثة" بعدد 1,528 نشاطاً؛ ويمثل هذا النطاق أنشطة ظهرت في الربع
                الأول من 2026 ولم يكن لها تصنيف قطاعي مطابق بمستوى (القسم) في
                الربع الأول من 2025.
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* حاوية الشارت */}
      <main className="report-chart-container">
        <DivergingChart />
      </main>

      {/* تذييل الصفحة - المصادر */}
      <footer className="report-footer-meta">
        <div className="sources-text">
          المصادر: وزارة التجارة | الهيئة العامة للإحصاء
        </div>
      </footer>
    </div>
  );
};

export default EconomicReport;
