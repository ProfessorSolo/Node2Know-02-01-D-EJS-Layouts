# Node2Know — EJS Layouts

A demonstration of using `express-ejs-layouts` to create consistent page structures.

This demo introduces the concept of a "Master Layout" so that headers, footers, and common assets don't need to be manually included in every single view.

Core concepts:

- Installing and configuring `express-ejs-layouts`
- Creating a default layout (`layouts/full-width.ejs`)
- Defining a secondary layout (`layouts/sidebar.ejs`)
- Overriding the layout for specific routes

Example:

```js
// app.js
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "layouts/full-width");
```

```html
<!-- views/layouts/full-width.ejs -->
<body>
  <%- include("../partials/header") %>
  <main>
    <%- body %>
    <!-- Content injection point -->
  </main>
  <%- include("../partials/footer") %>
</body>
```

## ✅ Prereqs

- **Node.js**
- **npm**

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm run dev
```

---

## 🧪 Try it

### Standard Layout

Open:

- `http://localhost:3000/`

Uses `layouts/full-width.ejs`.

### Sidebar Layout (Override)

Open:

- `http://localhost:3000/dashboard`

Uses `layouts/sidebar.ejs`. This route specifically overrides the default layout:

```js
// routers/indexRouter.js
res.render("dashboard", { layout: "layouts/sidebar" });
```

---

## 📁 Project Structure

```txt
.
├── app.js
├── views/
│   ├── layouts/         # Master layouts
│   │   ├── full-width.ejs
│   │   └── sidebar.ejs
│   ├── partials/        # Reusable components
│   ├── dashboard.ejs    # Content for sidebar layout
│   └── index.ejs        # Content for full-width layout
├── public/
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-02-01-D-EJS-Layouts.git

---

## License

**Node2Know-LEARN-1.0**
