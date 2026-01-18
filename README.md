# E-Portfolio - Next.js 14

## نظرة عامة

ملف إنجاز إلكتروني لطالب دراسات عليا في تقنيات التعليم، مبني باستخدام Next.js 14 مع دعم كامل للغة العربية (RTL).

## المتطلبات

- Node.js 18.0 أو أحدث
- npm أو yarn

## التثبيت

```bash
# تثبيت الحزم
npm install

# تشغيل السيرفر التطويري
npm run dev

# بناء المشروع للإنتاج
npm run build

# تصدير ملفات ثابتة (Static Export)
npm run export
```

## هيكل المشروع

```
e-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.js          # Layout رئيسي مع RTL
│   ├── page.js            # الصفحة الرئيسية
│   ├── globals.css        # أنماط عامة
│   └── [pages]/           # باقي الصفحات
├── components/            # مكونات React قابلة لإعادة الاستخدام
├── data/                  # ملفات JSON للبيانات
├── public/
│   └── hasoob/           # المجلد الأصلي للملفات
└── package.json
```

## الصفحات المتاحة

1. **الرئيسية** (`/`) - صفحة الترحيب
2. **فيديو تعريفي** (`/intro-video`) - فيديو تقديمي
3. **التفكيرات التأملية** (`/reflections`) - تفكيرات أسبوعية
4. **السيرة الذاتية** (`/cv`) - CV تفاعلي
5. **الفلسفة التربوية** (`/philosophy`) - رؤية تعليمية
6. **طريقة التدريس** (`/teaching-method`) - PBL
7. **WebQuest** (`/webquest`) - مشروع تعليمي
8. **المواقع المفضلة** (`/resources`) - روابط تعليمية
9. **معايير ISTE** (`/iste`) - المعايير العالمية

## مجلد hasoob

يحتوي على جميع الملفات الأصلية للتحميل:

```
public/hasoob/
├── video/intro.mp4
├── reflections/*.docx
├── cv/cv.pdf
├── philosophy/philosophy.docx
├── teaching_method/preferred_method.pdf
├── webquest/teacher_page.pdf & student_page.pdf
└── references/iste.pdf
```

## التقنيات المستخدمة

- **إطار العمل**: Next.js 14 (App Router)
- **اللغة**: JavaScript (ES6+)
- **التنسيق**: CSS Modules + CSS العادي
- **الخط**: Cairo من Google Fonts
- **الدعم**: RTL كامل للعربية

## النشر

راجع ملف `DEPLOYMENT.md` لتعليمات النشر التفصيلية على Hostinger.

## الميزات

✅ تصميم RTL كامل للغة العربية
✅ تصميم أكاديمي نظيف ومحترف
✅ مكونات تفاعلية (Modals, Accordions, Tabs)
✅ تحميل الملفات الأصلية من مجلد hasoob
✅ متوافق مع الأجهزة المحمولة
✅ Static Export جاهز للنشر على Hostinger
