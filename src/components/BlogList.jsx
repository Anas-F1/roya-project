import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"; // استيراد ملف التنسيق الخاص بالمدونة

const BlogList = () => {
  const articles = [
    {
      id: "economic-report",
      title: "تقرير الأنشطة الاقتصادية",
      description:
        "تحليل إحصائي ومقارن للأنشطة الاقتصادية ومعدلات النمو بين الربع الأول من عام 2025 والربع الأول من عام 2026.",
      date: "17 مايو 2026",
      category: "تقارير اقتصادية",
      link: "/blog/economic-report",
    },
    {
      id: "saudi-labor-market",
      title: "تطبيق تفاعلي: هيكلية سوق العمل السعودي",
      description:
        "تجربة بصرية حية وتطبيق ويب تفاعلي يستعرض توزيع 13 مليون عامل في سوق العمل بالمملكة حسب القطاع، الجنس، والجنسية.",
      date: "31 مايو 2026",
      category: "تحليل بيانات تفاعلي",
      link: "/blog/saudi-labor-market", // هذا هو المسار الجديد للتقرير التفاعلي
    },
  ];

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h2>المدونة والتقارير</h2>
      </header>

      <div className="blog-grid">
        {articles.map((article) => (
          /* التعديل السحري هنا: قمنا بلف الكارد بالكامل داخل الـ Link وعمل كلاس مخصص لها */
          <Link to={article.link} key={article.id} className="blog-card-link">
            <article className="blog-card">
              <div className="blog-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
