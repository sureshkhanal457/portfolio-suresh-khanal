# Suresh Upadhayay — React Portfolio

Final project for the Frontend Development Training ( Personal Portfolio).
Built with **React 18**, **Tailwind CSS 4**, **React Router 6** (`createBrowserRouter`), **Lucide icons** and **Vite**.
No backend; all content is mock data in `src/data/data.js`.

## Features
- 6 pages: Home, About, Skills, Education, Projects, Contact (plus a 404 page)
- One `RootLayout` (Navbar + `<Outlet />` + Footer) shared by all pages
- Project filter buttons (All / React / PHP)
- Contact form with validation and success message
- Responsive on mobile, tablet and desktop (hamburger menu on phones)

## Run locally
```bash
npm install
npm run dev
```
Build for production: `npm run build`

## Folder structure
```
src/
  layouts/     RootLayout.jsx  (Navbar + Outlet + Footer)
  components/  Navbar, Footer, Hero, SectionTitle, SkillCard, EducationCard,
               ProjectCard, ProjectFilter, ContactForm
  pages/       Home, About, Skills, Education, Projects, Contact, NotFound
  data/        data.js (profile, skills, education, projects)
  App.jsx      (createBrowserRouter + RouterProvider)
  main.jsx, index.css
```

## React concepts used
| Concept | Where |
|---|---|
| Props | `SkillCard`, `ProjectCard`, `EducationCard`, `SectionTitle`, `ProjectFilter` |
| useState | `Navbar` (menu), `Projects` (filter), `ContactForm` (values, errors, sent) |
| Event handling | menu toggle, filter click, form change and submit |
| Conditional rendering | mobile menu, error messages, success message, empty project list |
| Lists with `.map()` | `Home`, `Skills`, `Education`, `Projects`, `Navbar` |
| Forms | controlled inputs in `ContactForm.jsx` |
| Router | `createBrowserRouter`, `Outlet`, `Link`, `NavLink` |


