(() => {
    const projects = [
      {
        title: "Master Thesis: Nutrition in Gaming",
        desc: "Survey of 200+ gamers. EDA, clustering (KMeans), PCA, and dashboards summarizing nutrition behavior profiles.",
        img: "assets/images/thesis_pic.png",
        page: "projects/thesis.html"
      },
      {
        title: "SQL Public Library (MySQL)",
        desc: "Relational schema (15+ tables), constraints, borrowing/membership/fines logic, and reporting queries.",
        img: "assets/images/Mysql_pic.png",
        page: "projects/sql-library.html"
      },
      {
        title: "Pneumonia Detection: CNN",
        desc: "ResNet-based classifier on chest X-rays. Training, evaluation, and saved checkpoints with metrics.",
        img: "assets/images/Pneumonia_detection_pic.png",
        page: "projects/pneumonia.html"
      },
      {
        title: "Dataset Pascal VOC 2007: Faster R-CNN",
        desc: "Custom PyTorch dataset, training loop, and evaluation for object detection on Pascal VOC.",
        img: "assets/images/pascal_voc_pic.jpg",
        page: "projects/pascalvoc.html"
      }
    ];

    // Render project cards
    const grid = document.getElementById('repo-grid');
    if (grid) {
      grid.innerHTML = projects.map(p => `
        <article class="card">
          <div class="thumb">
            <img src="${p.img}" alt="${p.title}" loading="lazy" />
          </div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="actions">
            <a class="btn primary" href="${p.page}">View</a>
          </div>
        </article>
      `).join('');
    }

    function toggleMenu(){
      const sb = document.getElementById('sidebar');
      const ov = document.getElementById('overlay');
      const btn = document.getElementById('menuBtn');
      const isOpen = sb.classList.toggle('open');
      ov.classList.toggle('open', isOpen);
      if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    // Expose for inline onclick
    window.toggleMenu = toggleMenu;

    // ESC to close & close when clicking a sidebar link
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('sidebar').classList.contains('open')) toggleMenu();
    });
    document.addEventListener('click', e => {
      if (e.target.closest('#sidebar a')) {
        if (document.getElementById('sidebar').classList.contains('open')) toggleMenu();
      }
    });
  })();
