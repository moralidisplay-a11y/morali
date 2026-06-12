/* ============================================================
   MORALI — פונקציית שרת למתכנן החנויות החכם
   רצה ב-Vercel. המפתח נשמר במשתנה סביבה ANTHROPIC_API_KEY
   ולעולם לא נחשף לגולשים.
============================================================ */

/* ---------- הקטלוג של MORALI ----------
   כשמעדכנים מוצרים — מעדכנים כאן בלבד.
   המחירים מחושבים בשרת מהרשימה הזו (לא ע"י ה-AI). */
const CATALOG = [
  { id: "rail-double-black", name: "סטנד תלייה כפול שחור", cat: "מערכות תלייה", price: 750, w: 1.2, d: 0.6, fit: ["fashion"] },
  { id: "rail-wall-black", name: "רלס קיר שחור", cat: "מערכות תלייה", price: 490, w: 1.5, d: 0.35, fit: ["fashion", "cosmetics"] },
  { id: "rail-boutique-gold", name: "רלס בוטיק זהב", cat: "מערכות תלייה", price: 690, w: 1.3, d: 0.5, fit: ["fashion"] },
  { id: "mannequin-male-black", name: "בובת ראווה גבר שחורה", cat: "בובות ראווה", price: 890, w: 0.6, d: 0.6, fit: ["fashion"] },
  { id: "mannequin-female-black", name: "בובת ראווה אישה שחורה", cat: "בובות ראווה", price: 890, w: 0.6, d: 0.6, fit: ["fashion"] },
  { id: "shelf-wood-oak", name: "מדף עץ דקורטיבי אלון", cat: "מידוף", price: 690, w: 1.2, d: 0.4, fit: ["flowers", "cosmetics", "kiosk", "fashion"] },
  { id: "shelf-metal-white-5", name: "מידוף מתכת לבן 5 מדפים", cat: "מידוף", price: 1290, w: 1.0, d: 0.45, fit: ["pharm", "kiosk", "market", "flowers"] },
  { id: "gondola-center", name: "גונדולה מרכזית דו־צדדית", cat: "מידוף", price: 1890, w: 1.25, d: 0.9, fit: ["pharm", "market", "kiosk"] },
  { id: "counter-display-led", name: "דלפק תצוגה מרכזי מואר", cat: "דלפקים", price: 2190, w: 1.8, d: 0.7, fit: ["fashion", "cosmetics", "pharm", "flowers"] },
  { id: "stand-promo-modular", name: "מערכת מבצעים מודולרית", cat: "סטנדים", price: 490, w: 0.8, d: 0.8, fit: ["pharm", "kiosk", "market"] },
  { id: "stand-tiered-flowers", name: "סטנד מדורג לתצוגת פרחים", cat: "סטנדים", price: 840, w: 1.2, d: 0.8, fit: ["flowers"] },
  { id: "wall-glass-lit", name: "קיר תצוגה מואר עם מדפי זכוכית", cat: "קירות תצוגה", price: 2450, w: 2.0, d: 0.4, fit: ["cosmetics", "pharm"] },
  { id: "slatwall-panel", name: "קיר מחורץ + 20 אביזרים", cat: "קירות מחורצים", price: 1150, w: 2.4, d: 0.1, fit: ["fashion", "kiosk", "pharm"] },
  { id: "basket-cart-set", name: "סט 20 סלסלות + מעמד", cat: "סלסלות ועגלות", price: 980, w: 0.6, d: 0.6, fit: ["market", "pharm", "kiosk"] },
];

const BIZ_LABELS = {
  fashion: "חנות בגדים", flowers: "חנות פרחים", cosmetics: "קוסמטיקה",
  pharm: "פארם", kiosk: "קיוסק", market: "סופרמרקט",
};

const BUDGET_LABELS = {
  low: "עד 10,000 ₪", mid: "10,000–25,000 ₪", high: "25,000–60,000 ₪", open: "גמיש",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "missing_key", message: "חסר מפתח API בהגדרות השרת (ANTHROPIC_API_KEY)" });
  }

  try {
    const { biz, area, needs = [], budget, photoB64, photoType } = req.body || {};

    // ולידציה בסיסית
    const areaNum = Math.min(Math.max(parseInt(area, 10) || 50, 10), 2000);
    if (!BIZ_LABELS[biz] || !BUDGET_LABELS[budget]) {
      return res.status(400).json({ error: "bad_input" });
    }

    const storeW = Math.round(Math.sqrt(areaNum * 1.6) * 10) / 10;
    const storeD = Math.round((areaNum / storeW) * 10) / 10;

    const catalogText = CATALOG.map(
      (p) => `- id:"${p.id}" | ${p.name} | ${p.cat} | ${p.price}₪ | ${p.w}x${p.d} מ' | מתאים ל: ${p.fit.join(",")}`
    ).join("\n");

    const content = [];
    if (photoB64 && photoType && /^image\/(jpeg|png|webp)$/.test(photoType)) {
      content.push({ type: "image", source: { type: "base64", media_type: photoType, data: photoB64 } });
    }
    const hasPhoto = content.length > 0;

    content.push({
      type: "text",
      text: `אתה מתכנן חנויות מומחה בחברת MORALI (מתקני תצוגה ועיצוב לחנויות).
${hasPhoto ? "מצורפת תמונה של קיר/חלל בחנות של הלקוח — נתח אותה: מה רואים, מה הפוטנציאל, מה מומלץ למקם שם." : ""}

נתוני הלקוח:
- תחום העסק: ${BIZ_LABELS[biz]}
- שטח: ${areaNum} מ"ר (הנח חלל מלבני ${storeW}x${storeD} מטר, כניסה במרכז הקיר התחתון y=${storeD})
- צרכים שציין: ${Array.isArray(needs) && needs.length ? needs.join(", ") : "לא צוין — המלץ אתה"}
- תקציב: ${BUDGET_LABELS[budget]}

הקטלוג של MORALI (בחר אך ורק מתוכו, השתמש ב-id המדויק):
${catalogText}

החזר אך ורק JSON תקין (בלי markdown, בלי טקסט נוסף) במבנה:
{
  "wallAnalysis": "${hasPhoto ? "ניתוח התמונה ב-2-3 משפטים בעברית" : ""}",
  "style": "שם סגנון עיצובי קצר",
  "concept": "משפט קונספט אחד",
  "products": [{"catalogId":"...","qty":2,"reason":"נימוק קצר"}],
  "layout": [{"catalogId":"...","x":0.5,"y":1.0,"w":1.2,"d":0.6,"label":"תווית קצרה","rotate":0}],
  "path": [{"x":${storeW / 2},"y":${storeD}},{"x":1,"y":2}],
  "tips": ["טיפ מקצועי 1","טיפ 2","טיפ 3"]
}

כללים:
- x,y במטרים מהפינה השמאלית-עליונה. כל פריט בתוך ${storeW}x${storeD} בלי חפיפות, מעברים של 90 ס"מ לפחות.
- פריטי קיר (רלס קיר, קיר מחורץ, קיר תצוגה) צמודים לקירות.
- layout כולל מופע לכל יחידה (אם qty=3 — שלושה פריטים ב-layout).
- סה"כ המחיר מתאים לתקציב.
- path: מסלול לקוח מהכניסה, 4-6 נקודות.
- הכל בעברית.`,
    });

    const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1500,
        messages: [{ role: "user", content }],
      }),
    });

    if (!apiRes.ok) {
      const errBody = await apiRes.text();
      console.error("Anthropic API error:", apiRes.status, errBody);
      return res.status(502).json({ error: "ai_error", message: "שירות התכנון לא זמין כרגע. נסו שוב בעוד רגע." });
    }

    const data = await apiRes.json();
    const text = (data.content || []).map((c) => c.text || "").join("");
    const clean = text.replace(/```json|```/g, "").trim();
    const start = clean.indexOf("{");
    const end = clean.lastIndexOf("}");
    const parsed = JSON.parse(clean.slice(start, end + 1));

    /* תמחור בצד השרת — מהקטלוג, לא מה-AI */
    const priced = (parsed.products || [])
      .map((p) => {
        const c = CATALOG.find((x) => x.id === p.catalogId);
        if (!c) return null;
        const qty = Math.min(Math.max(parseInt(p.qty, 10) || 1, 1), 50);
        return { catalogId: c.id, name: c.name, cat: c.cat, qty, reason: p.reason || "", price: c.price, total: c.price * qty };
      })
      .filter(Boolean);
    const grandTotal = priced.reduce((s, p) => s + p.total, 0);

    return res.status(200).json({
      ok: true,
      storeW, storeD,
      style: parsed.style || "",
      concept: parsed.concept || "",
      wallAnalysis: hasPhoto ? parsed.wallAnalysis || "" : "",
      layout: Array.isArray(parsed.layout) ? parsed.layout : [],
      path: Array.isArray(parsed.path) ? parsed.path : [],
      tips: Array.isArray(parsed.tips) ? parsed.tips : [],
      priced, grandTotal,
    });
  } catch (err) {
    console.error("Planner error:", err);
    return res.status(500).json({ error: "server_error", message: "משהו השתבש בתכנון. נסו שוב." });
  }
}
