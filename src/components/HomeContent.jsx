import React from "react";
import { BarChart3, Presentation, SearchCode } from "lucide-react";
const HomeContent = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero" id="home">
        <h1 className="title">رؤية للاستشـارات</h1>
        <p className="subtitle">نُحوِّل بياناتك إلى قرارات</p>
        <p className="hero-description">
          نساعد الشركات الصغيرة والمتوسطة على فهم بياناتها، تحسين الأداء، واتخاذ
          قرارات مبنية على أرقام واضحة.
        </p>
        <a href="#contact" className="btn-primary">
          تواصل معنا
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="section-alt">
        <div className="intro-quote">
          <p>
            نحن شركة استشارية متخصصة في علم البيانات والإحصاء، نعمل على تمكين
            الشركات من فهم بياناتها بشكل أعمق، وبناء قرارات أكثر وعيًا اعتمادًا
            على التحليل الدقيق والمنهجي.
          </p>
          <p>
            نمتلك خبرة عملية في التعامل مع البيانات ضمن بيئات عمل مختلفة، ونركّز
            على تحويل البيانات الخام إلى معرفة واضحة يمكن الاعتماد عليها. نولي
            اهتمامًا خاصًا بجودة التحليل، بساطة العرض، وموثوقية النتائج بما يخدم
            أهداف العميل.
          </p>
          <p>
            نلتزم بأعلى معايير سرية وخصوصية البيانات، ونعتبر حماية بيانات
            العملاء أولوية أساسية في جميع مراحل العمل. نعتمد على أدوات وتقنيات
            تحليل حديثة، ونمتلك خبرة في استخدام أدوات التحليل المتقدمة، مما يتيح
            لنا التعامل مع بيانات معقدة وبأحجام مختلفة، وتقديم مخرجات تحليلية
            واضحة وقابلة للتطبيق.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 id="services" className="services-title">
          خدماتنـا
        </h2>{" "}
        <div className="services-grid">
          <div className="service-card">
            <BarChart3 size={45} strokeWidth={1.5} />
            <h3>خدمة التحليل الربع سنوي</h3>
            <p>
              تقارير ربع سنوية تساعدك على متابعة الأداء وفهم أرقامك بشكل واضح.
            </p>
          </div>
          <div className="service-card">
            <Presentation size={45} strokeWidth={1.5} />
            <h3>لوحات متابعة الأداء</h3>
            <p>لوحات معلومات تفاعلية تمكن الإدارة من متابعة المؤشرات بسهولة.</p>
          </div>
          <div className="service-card">
            <SearchCode size={45} strokeWidth={1.5} />
            <h3>حلول تحليلية مخصصة</h3>
            <p>مشاريع مصممة لمعالجة تحديات محددة حسب احتياجات العميل.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
