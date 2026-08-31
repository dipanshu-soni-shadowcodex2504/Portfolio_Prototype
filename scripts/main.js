/**
 * ============================================================================
 * COMPANY-GRADE DEVELOPER PORTFOLIO CONTROLLER
 * Clean, lightweight, modular, and high-performance.
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.portfolioData || {};

  // 1. Theme Management (Light / Dark)
  initThemeToggle();

  // 2. Render Hero & Profile
  renderHero(data.profile, data.highlights);

  // 3. Render Featured Projects
  renderProjects(data.projects);

  // 4. Render Technical Skills
  renderSkills(data.skills);

  // 5. Render Certifications with Photos & Lightbox
  renderCertifications(data.certifications);

  // 6. Render Education (Placed in last section before Contact)
  renderEducation(data.education);

  // 7. Render Contact Info & Handlers
  renderContact(data.profile);

  // 8. Navigation Active State on Scroll
  initScrollSpy();

  // 9. Setup Certificate Modal Lightbox
  initCertModal(data.certifications);
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem("site_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener("click", () => {
    const active = document.documentElement.getAttribute("data-theme");
    const next = active === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("site_theme", next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector("i");
    if (icon) {
      icon.className = theme === "light" ? "fas fa-sun" : "fas fa-moon";
    }
  }
}

/* --------------------------------------------------------------------------
   2. Render Hero & Profile
   -------------------------------------------------------------------------- */
function renderHero(profile = {}, highlights = []) {
  if (!profile) return;

  // Name & Brand
  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = profile.name;

  const avatarName = document.getElementById("avatar-name");
  if (avatarName) avatarName.textContent = profile.name;

  const brandText = document.getElementById("nav-brand-text");
  if (brandText) brandText.textContent = profile.brand || profile.name;

  const roleText = document.getElementById("hero-role");
  if (roleText && profile.title) roleText.textContent = `> ${profile.title}`;

  const bioText = document.getElementById("hero-bio");
  if (bioText) bioText.textContent = profile.bio;

  const statusText = document.getElementById("hero-status-text");
  if (statusText && profile.status) statusText.textContent = profile.status.badgeText;

  const avatarImg = document.getElementById("hero-avatar-img");
  if (avatarImg && profile.avatar) avatarImg.src = profile.avatar;

  const avatarLoc = document.getElementById("avatar-loc");
  if (avatarLoc && profile.location) {
    avatarLoc.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${profile.location}`;
  }

  // Social Buttons
  const socialContainer = document.getElementById("hero-social-links");
  if (socialContainer && profile.socialLinks) {
    const s = profile.socialLinks;
    socialContainer.innerHTML = `
      ${s.github ? `<a href="${s.github}" target="_blank" class="social-link-btn" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ""}
      ${s.linkedin ? `<a href="${s.linkedin}" target="_blank" class="social-link-btn" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>` : ""}
      ${s.email ? `<a href="${s.email}" class="social-link-btn" title="Email" aria-label="Email"><i class="fas fa-envelope"></i></a>` : ""}
      ${s.phone ? `<a href="${s.phone}" class="social-link-btn" title="Phone" aria-label="Phone"><i class="fas fa-phone"></i></a>` : ""}
    `;
  }

  // Highlights Strip
  const metricsStrip = document.getElementById("metrics-strip");
  if (metricsStrip && highlights.length > 0) {
    metricsStrip.innerHTML = highlights
      .map(
        (h) => `
        <div class="metric-item">
          <span class="metric-value">${h.number}</span>
          <span class="metric-label">${h.label}</span>
        </div>
      `
      )
      .join("");
  }
}

/* --------------------------------------------------------------------------
   3. Render Featured Projects
   -------------------------------------------------------------------------- */
function renderProjects(projects = []) {
  const container = document.getElementById("projects-grid");
  if (!container || !projects) return;

  container.innerHTML = projects
    .map(
      (p) => `
      <div class="card project-card">
        <div class="project-top">
          <div class="project-category">${p.category} &bull; ${p.period}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="tech-pills">
            ${p.tags.map((t) => `<span class="pill">${t}</span>`).join("")}
          </div>
        </div>
        <div class="project-meta">
          <div class="project-links">
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub Source</a>` : ""}
          </div>
          <span class="text-muted" style="font-size: 0.78rem;">Verified</span>
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   4. Render Technical Skills
   -------------------------------------------------------------------------- */
function renderSkills(skills = []) {
  const container = document.getElementById("skills-grid");
  if (!container || !skills) return;

  container.innerHTML = skills
    .map(
      (cat) => `
      <div class="card">
        <div class="skill-group-title">
          <i class="${cat.icon}"></i>
          <span>${cat.category}</span>
        </div>
        <div class="skill-tags">
          ${cat.items.map((s) => `<span class="skill-tag">${s.name}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   5. Render Certifications with Photos
   -------------------------------------------------------------------------- */
function renderCertifications(certs = []) {
  const container = document.getElementById("certs-grid");
  if (!container || !certs) return;

  container.innerHTML = certs
    .map((c) => {
      const hasImage = c.image && c.image.length > 0;
      return `
      <div class="cert-card" data-cert-id="${c.id}">
        <div class="cert-preview-wrap" data-cert-id="${c.id}">
          ${
            hasImage
              ? `<img src="${c.image}" alt="${c.title}" class="cert-preview-img" loading="lazy">
                 <div class="cert-zoom-overlay"><i class="fas fa-search-plus"></i></div>`
              : `<div class="cert-placeholder-banner"><i class="${c.icon}"></i></div>`
          }
        </div>
        <div class="cert-body">
          <div>
            <h3 class="cert-title">${c.title}</h3>
            <p class="cert-issuer">${c.issuer} &bull; ${c.issueDate}</p>
          </div>
          <div class="cert-footer">
            ${
              hasImage
                ? `<button class="btn btn-secondary btn-sm view-cert-btn" data-cert-id="${c.id}">
                    <i class="fas fa-eye"></i> View Certificate
                   </button>`
                : `<span class="pill" style="font-size: 0.75rem;">Verified</span>`
            }
            ${
              c.verifyUrl && c.verifyUrl !== "#"
                ? `<a href="${c.verifyUrl}" target="_blank" class="project-link" style="font-size: 0.8rem;">
                    Verify <i class="fas fa-external-link-alt" style="font-size: 0.7rem;"></i>
                   </a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   6. Render Education (Final Section)
   -------------------------------------------------------------------------- */
function renderEducation(education = []) {
  const container = document.getElementById("education-list");
  if (!container || !education) return;

  container.innerHTML = education
    .map(
      (edu) => `
      <div class="edu-card">
        <div class="edu-header">
          <div>
            <h3 class="edu-degree">${edu.degree}</h3>
            <div class="edu-inst">${edu.institution} &bull; ${edu.location}</div>
          </div>
          <div style="text-align: right;">
            <span class="edu-score-badge">${edu.score}</span>
            <div class="text-muted" style="font-size: 0.8rem; margin-top: 0.3rem; font-family: var(--font-mono);">${edu.period}</div>
          </div>
        </div>
        <p class="text-secondary" style="font-size: 0.9rem;">${edu.description}</p>
        ${
          edu.highlights && edu.highlights.length > 0
            ? `<ul class="edu-bullets">
                ${edu.highlights.map((h) => `<li>${h}</li>`).join("")}
               </ul>`
            : ""
        }
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   7. Certificate Lightbox Modal
   -------------------------------------------------------------------------- */
function initCertModal(certs = []) {
  const modalOverlay = document.getElementById("cert-modal-overlay");
  const modalClose = document.getElementById("cert-modal-close");
  const modalImg = document.getElementById("cert-modal-img");
  const modalTitle = document.getElementById("cert-modal-title");
  const modalIssuer = document.getElementById("cert-modal-issuer");
  const modalVerify = document.getElementById("cert-modal-verify-btn");

  if (!modalOverlay) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-id]");
    if (trigger) {
      const certId = trigger.getAttribute("data-cert-id");
      const cert = certs.find((c) => c.id === certId);
      if (cert && cert.image) {
        modalImg.src = cert.image;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = `${cert.issuer} • Issued: ${cert.issueDate}`;
        if (cert.verifyUrl && cert.verifyUrl !== "#") {
          modalVerify.href = cert.verifyUrl;
          modalVerify.style.display = "inline-flex";
        } else {
          modalVerify.style.display = "none";
        }
        modalOverlay.classList.add("show");
      }
    }
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => modalOverlay.classList.remove("show"));
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("show");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalOverlay.classList.remove("show");
  });
}

/* --------------------------------------------------------------------------
   8. Render Contact & Handlers
   -------------------------------------------------------------------------- */
function renderContact(profile = {}) {
  const emailLink = document.getElementById("contact-email-link");
  const phoneLink = document.getElementById("contact-phone-link");
  const locText = document.getElementById("contact-location-text");

  if (emailLink && profile.email) {
    emailLink.textContent = profile.email;
    emailLink.href = `mailto:${profile.email}`;
  }
  if (phoneLink && profile.phone) {
    phoneLink.textContent = profile.phone;
    phoneLink.href = `tel:${profile.phone.replace(/[^0-9+]/g, "")}`;
  }
  if (locText && profile.location) {
    locText.textContent = profile.location;
  }

  // Copy Email Button in Hero
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn && profile.email) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(profile.email).then(() => {
        showToast("Email copied to clipboard!");
        const label = document.getElementById("copy-btn-label");
        if (label) {
          label.textContent = "Copied!";
          setTimeout(() => (label.textContent = "Copy Email"), 2000);
        }
      });
    });
  }

  // Contact Form Submission
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("user-name").value.trim();
      const email = document.getElementById("user-email").value.trim();
      const msg = document.getElementById("user-msg").value.trim();

      if (!name || !email || !msg) {
        showToast("Please fill in all fields before sending.");
        return;
      }

      showToast(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   9. Navigation Active State on Scroll
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    document.querySelectorAll("section[id]").forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast-box");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}
