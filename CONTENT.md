# Content Reference — lforshaw.github.io

This file is a plain-language record of all website content.
**To update the site, edit `index.html` directly.** This file helps you find and replace content quickly without needing to understand HTML.

---

## Hero Section

**Name (H1):** Luke Forshaw

**Subtitle:** Director of Professional Development Services · Ed.D.

**Bio paragraph:**
Luke Forshaw leads the Professional Development Services team at Cooperative Educational Services (CES) in Connecticut. A classroom teacher and educational leader with more than two decades of experience, Luke is a firm believer in the power of adult learning and a champion for continuous improvement on behalf of students and families.

**Hero links:**
- LinkedIn → https://www.linkedin.com/in/lukeforshaw
- Email → forshawl@cestrumbull.org

---

## About Section

Paragraph 1:
Luke Forshaw is proud to lead the Cooperative Educational Services Professional Development team. Prior to this role, Luke served as a classroom teacher and educational leader with experience in both building and district service across Darien Public Schools—a journey that began in 2002 and spanned more than two decades in a single district.

Paragraph 2:
He continues to teach graduate coursework in curriculum & teaching, leadership, and research design as adjunct faculty at the University of Saint Joseph.

Paragraph 3:
Luke holds a BA in Psychology from Trinity College-Hartford and an MA and Ed.D. in Curriculum and Teaching from Teachers College, Columbia University. He is based in Connecticut.

---

## Leadership Experience Section

### Role 1
- **Title:** Director of Professional Development Services
- **Organization:** Cooperative Educational Services (CES) · Connecticut
- **Dates:** 2023–Present
- **Description:** Leading CES's Professional Development Services team, supporting educators and school districts across Connecticut with purposeful, research-grounded professional learning. CES is a Connecticut Regional Educational Service Center serving educators, schools, and districts statewide.

### Role 2
- **Title:** Principal
- **Organization:** Darien Public Schools · Darien, Connecticut
- **Dates:** 2012–2023
- **Description:** Served as building principal for eleven years, providing instructional leadership and overseeing school-wide operations, culture, and improvement planning. Led staff through multiple cycles of curriculum review and professional learning.

### Role 3
- **Title:** Assistant Principal
- **Organization:** Darien Public Schools · Darien, Connecticut
- **Dates:** 2010–2012
- **Description:** Supported school administration and instructional programs, working closely with teachers and department leaders to strengthen curriculum alignment and student support systems.

### Role 4
- **Title:** Technology Integration Specialist
- **Organization:** Darien Public Schools · Darien, Connecticut
- **Dates:** 2006–2010
- **Description:** Designed and implemented technology solutions to enhance teaching and learning across the district, supporting teachers in the purposeful integration of technology into classroom practice.

### Role 5
- **Title:** Classroom Teacher
- **Organization:** Darien Public Schools · Darien, Connecticut
- **Dates:** 2002–2006
- **Description:** Began his career as a classroom teacher, developing a foundation in curriculum, instruction, and the day-to-day work of supporting student learning.

---

## Higher Education & Teaching Section

### Role 1
- **Title:** Adjunct Faculty
- **Organization:** University of Saint Joseph · West Hartford, Connecticut
- **Dates:** 2015–Present
- **Description:** Teaching graduate courses in curriculum & teaching, educational leadership, and research design. Luke brings practitioner expertise to graduate-level study, connecting theory to the realities of school and district leadership.

**Areas of focus (callout box):**
Adult learning theory · Curriculum design & development · Instructional leadership · Educational research design · Professional learning communities

---

## Education Section

### Degree 1
- **Degree:** Ed.D., Curriculum and Teaching
- **Institution:** Teachers College, Columbia University
- **Dates:** 2003–2010
- **Note:** Also earned an MA in Curriculum and Teaching from Teachers College, Columbia University.

### Degree 2
- **Degree:** BA, Psychology & Education
- **Institution:** Trinity College-Hartford
- **Dates:** 1999–2003

---

## Contact Section

**Intro text:**
For professional inquiries, speaking engagements, or collaboration opportunities, please reach out via email or LinkedIn.

**Contact details:**
- Work email: forshawl@cestrumbull.org
- LinkedIn: https://www.linkedin.com/in/lukeforshaw
- Phone: 203-365-8850

> **Privacy note:** To remove the phone number from the public site, delete the `<li>` block containing "203-365-8850" in `index.html`.

---

## Footer

- Text: © [auto year] Luke Forshaw · Connecticut
- Links: LinkedIn, Email

---

## To add a new section (e.g., publications, speaking)

Copy and paste this block into `index.html` between two existing `<section>` elements:

```html
<section class="section" id="publications" aria-labelledby="publications-heading">
  <div class="container">
    <h2 id="publications-heading">Publications</h2>

    <div class="role">
      <div class="role-header">
        <div>
          <h3>Article or Publication Title</h3>
          <p class="org">Publisher / Journal Name</p>
        </div>
        <span class="dates">2024</span>
      </div>
      <p>Brief description of the publication.</p>
    </div>

  </div>
</section>
```

Then add a nav link in the `<ul class="nav-links">`:
```html
<li><a href="#publications">Publications</a></li>
```
