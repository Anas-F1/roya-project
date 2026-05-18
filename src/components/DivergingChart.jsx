import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import rawData from "../assets/data/activities.json"; // نقطتان فقط تعود بك لمجلد src
const DivergingChart = () => {
  const svgRef = useRef();
  const [metric, setMetric] = useState("absolute");

  useEffect(() => {
    if (!rawData) return;

    // 1. تحضير البيانات
    let data = rawData
      .map((d) => {
        const v25 = Number(String(d.v2025).replace(/,/g, "")) || 0;
        const v26 = Number(String(d.v2026).replace(/,/g, "")) || 0;
        const val = v26 - v25;

        const displayName =
          d.section === "(blank)" ? "أنشطة مستحدثة/غير مصنفة" : d.section;

        return {
          name: displayName,
          value:
            metric === "absolute"
              ? val
              : v25 !== 0
                ? val / v25
                : v26 > 0
                  ? 1
                  : 0,
        };
      })
      .filter((d) => d.name);

    data.sort((a, b) => a.value - b.value);

    // 2. الأبعاد
    const barHeight = 25;
    const marginTop = 50;
    const marginRight = 100;
    const marginBottom = 10;
    const marginLeft = 100;
    const width = 1100;
    const height =
      Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

    // 3. المقاييس
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.value))
      .rangeRound([marginLeft, width - marginRight]);

    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .rangeRound([marginTop, height - marginBottom])
      .padding(0.1);

    // 4. التنسيقات
    const format = d3.format(metric === "absolute" ? "+,d" : "+.1%");
    const tickFormat =
      metric === "absolute" ? d3.formatPrefix("+.1", 1e3) : d3.format("+.0%");

    // 5. إنشاء الـ SVG
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("viewBox", [0, 0, width, height])
      .style("font-family", "'Tajawal', sans-serif")
      .attr("style", "max-width: 100%; height: auto; direction: ltr;");

    // --- إضافة خط المحور الرأسي هنا (ليكون خلف الأشرطة) ---
    svg
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y1", marginTop)
      .attr("y2", height - marginBottom)
      .attr("stroke", "#000") // الخط الأسود
      .attr("stroke-width", 1.5);

    // 6. إضافة الأشرطة (Bars)
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("fill", (d) =>
        d.value > 0 ? d3.schemeRdBu[3][2] : d3.schemeRdBu[3][0],
      )
      .attr("x", (d) => x(Math.min(d.value, 0)))
      .attr("y", (d) => y(d.name))
      .attr("width", (d) => Math.abs(x(d.value) - x(0)))
      .attr("height", y.bandwidth());

    // 7. إضافة القيم الرقمية (Value Labels)
    svg
      .append("g")
      .attr("font-size", 13)
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("text-anchor", (d) => (d.value < 0 ? "end" : "start"))
      .attr("x", (d) => x(d.value) + Math.sign(d.value) * 4)
      .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text((d) => format(d.value));

    // 8. المحور العلوي (Top Axis)
    svg
      .append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(
        d3
          .axisTop(x)
          .ticks(width / 80)
          .tickFormat(tickFormat),
      )
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("y2", height - marginTop - marginBottom)
          .attr("stroke-opacity", 0.1),
      )
      .call((g) => g.select(".domain").remove());

    // 9. المحور الرأسي (الأسماء)
    const maxLabelWidth = 700;

    svg
      .append("g")
      .selectAll("foreignObject")
      .data(data)
      .join("foreignObject")
      .attr("x", (d) => (d.value < 0 ? x(0) + 8 : x(0) - maxLabelWidth - 8))
      .attr("y", (d) => y(d.name))
      .attr("width", maxLabelWidth)
      .attr("height", y.bandwidth())
      .append("xhtml:div")
      .style("display", "flex")
      .style("height", "100%")
      .style("width", "100%")
      .style("justify-content", (d) =>
        d.value < 0 ? "flex-start" : "flex-end",
      )
      .style("align-items", "center")
      .append("xhtml:span")
      .style("font-family", "'Tajawal', sans-serif")
      .style("font-size", "13px")
      .style("font-weight", "500")
      .style("white-space", "nowrap")
      .style("direction", "rtl")
      .style("background", "transparent")
      .html((d) => d.name);
  }, [metric]);

  return (
    <div style={{ direction: "rtl", width: "100%", margin: "0 auto" }}>
      {/* أزرار التبديل بقيت كما هي بدون تغيير */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#f1f5f9",
            padding: "4px",
            borderRadius: "10px",
            width: "fit-content",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          <button
            onClick={() => setMetric("absolute")}
            style={{
              padding: "8px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "'Tajawal', sans-serif",
              fontSize: "14px",
              fontWeight: "bold",
              transition: "all 0.2s ease",
              backgroundColor: metric === "absolute" ? "#fff" : "transparent",
              color: metric === "absolute" ? "#0f172a" : "#64748b",
              boxShadow:
                metric === "absolute" ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
            }}
          >
            الفرق المطلق
          </button>
          <button
            onClick={() => setMetric("relative")}
            style={{
              padding: "8px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "'Tajawal', sans-serif",
              fontWeight: "bold",
              transition: "all 0.2s ease",
              backgroundColor: metric === "relative" ? "#fff" : "transparent",
              color: metric === "relative" ? "#0f172a" : "#64748b",
              boxShadow:
                metric === "relative" ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
            }}
          >
            الفرق النسبي
          </button>
        </div>
      </div>

      {/* كارت الشارت النظيف الداخلي */}
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
          border: "1px solid #e2e8f0",
        }}
      >
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default DivergingChart;
