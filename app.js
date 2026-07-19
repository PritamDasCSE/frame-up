// Mock Database State
const STATE = {
  currentRole: 'learner', // 'learner' | 'educator'
  currentLevel: 1,       // 1, 2, or 3
  xp: 450,               // Current learner XP
  xpRequired: 1000,      // XP needed for next level
  currentView: 'home',   // 'home' | 'dashboard' | 'workspace' | 'jobs' | 'educator'
  
  // Courses Data
  courses: [
    {
      id: 'c1',
      title: 'Cinematic Storytelling & Camera Basics',
      description: 'Master composition, camera movement, and lighting setups to captivate audiences.',
      educator: 'Sarah Jenkins',
      tag: 'Videography',
      xpReward: 350,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80',
      tasks: [
        { id: 'c1-t1', text: 'Analyze 3 classic movie scenes for composition rule of thirds', completed: true },
        { id: 'c1-t2', text: 'Set up an 180-degree shutter speed test shot outdoors', completed: false },
        { id: 'c1-t3', text: 'Shoot a 30-second character intro sequence with 3 different angles', completed: false }
      ]
    },
    {
      id: 'c2',
      title: 'Advanced Color Grading in DaVinci Resolve',
      description: 'Understand LUTs, color spaces, skin-tone matching, and creative color grading workflows.',
      educator: 'Marcus Vance',
      tag: 'Editing',
      xpReward: 400,
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
      tasks: [
        { id: 'c2-t1', text: 'Perform a primary white balance adjustment on Log footage', completed: false },
        { id: 'c2-t2', text: 'Match skin tones on a multi-camera dialogue scene using vector scopes', completed: false },
        { id: 'c2-t3', text: 'Grade a dramatic night scene using keyers and tracking windows', completed: false }
      ]
    },
    {
      id: 'c3',
      title: 'Adobe Premiere Pro Fast-Track Workflows',
      description: 'Techniques to double editing speeds, dynamic nesting, proxy setups, and audio sync hacks.',
      educator: 'Elena Rostova',
      tag: 'Post-Production',
      xpReward: 300,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      tasks: [
        { id: 'c3-t1', text: 'Create custom keyboard shortcut shortcuts for keyboard editing', completed: true },
        { id: 'c3-t2', text: 'Create an automated proxy preset configuration', completed: true },
        { id: 'c3-t3', text: 'Edit and export a 15-second teaser promo within 20 minutes', completed: false }
      ]
    }
  ],

  // Jobs / Brands Database
  jobs: [
    {
      id: 'j1',
      brand: 'Sony',
      logo: 'S',
      title: 'Alpha 7IV Launch Campaign Video Creator',
      desc: 'Looking for a videographer to shoot a 1-minute cinematic teaser showcasing the hybrid shooting capabilities of the new Sony Alpha line. Travel included.',
      budget: '$4,500',
      levelReq: 3,
      tags: ['Videography', 'Commercial'],
      deadline: 'Apply in 4 days'
    },
    {
      id: 'j2',
      brand: 'Gymshark',
      logo: 'G',
      title: 'Short-Form TikTok Video Editor',
      desc: 'Need an editor to cut high-energy, engaging fitness transformations and tips videos for Gymshark main TikTok channel. Must be skilled in fast pacing, captions, and SFX.',
      budget: '$2,500/mo',
      levelReq: 2,
      tags: ['Editing', 'TikTok', 'Remote'],
      deadline: 'Apply in 2 days'
    },
    {
      id: 'j3',
      brand: 'Red Bull',
      logo: 'R',
      title: 'Extreme Mountain Bike Event Cover Reel',
      desc: 'Local coverage needed in Utah for action sports reel. Must be experienced in tracking high-speed subjects, action camera setups, and stabilization tricks.',
      budget: '$3,800',
      levelReq: 3,
      tags: ['Action Sports', 'Videography'],
      deadline: 'Apply in 6 days'
    },
    {
      id: 'j4',
      brand: 'DJI',
      logo: 'D',
      title: 'Avata 2 FPV Drone Footage Sound Design',
      desc: 'Create an immersive audio landscape for a 3-minute FPV flight reel. Needs detailed engine whirs, swooshing air, background soundscapes, and matching beats.',
      budget: '$1,200',
      levelReq: 2,
      tags: ['Sound Design', 'Editing'],
      deadline: 'Apply in 1 week'
    }
  ],

  // Educator Student Review Queue
  submissions: [
    {
      id: 's1',
      studentName: 'Alex River',
      courseTitle: 'Cinematic Storytelling & Camera Basics',
      assignmentText: 'Shot a 3-point lighting setup interview showing shallow depth of field.',
      link: 'https://youtube.com/mock-video-alex',
      status: 'pending',
      xpReward: 350
    },
    {
      id: 's2',
      studentName: 'Jordan Sparks',
      courseTitle: 'Advanced Color Grading in DaVinci Resolve',
      assignmentText: 'Adjusted skin tones to neutral vector line and added custom teal-orange grade.',
      link: 'https://vimeo.com/mock-color-grade-jordan',
      status: 'pending',
      xpReward: 400
    }
  ],

  activeWorkspaceCourseId: 'c1'
};

// DOM Elements
const elements = {
  navLinks: document.querySelectorAll('.nav-link'),
  pageSections: document.querySelectorAll('.page-section'),
  
  // Dynamic header badge values
  headerAvatar: document.getElementById('hdr-avatar'),
  headerLevelBadge: document.getElementById('hdr-level'),
  
  // Learner Sidebar Profile
  sidebarName: document.getElementById('sidebar-name'),
  sidebarLevelName: document.getElementById('sidebar-level-name'),
  sidebarXpBar: document.getElementById('sidebar-xp-bar'),
  sidebarXpText: document.getElementById('sidebar-xp-text'),
  
  // Dashboard Grids
  coursesGrid: document.getElementById('courses-grid'),
  
  // Workspace Dynamic Section
  workspaceTitle: document.getElementById('ws-title'),
  workspaceDesc: document.getElementById('ws-desc'),
  workspaceTasksList: document.getElementById('ws-tasks'),
  workspaceUploadBtn: document.getElementById('ws-upload-btn'),
  videoPlayBtn: document.getElementById('video-play-btn'),
  videoProgress: document.getElementById('video-progress'),
  
  // Job Board
  marketGrid: document.getElementById('market-grid'),
  marketLockedOverlay: document.getElementById('market-locked-overlay'),
  lockLevelIndicator: document.getElementById('lock-level-indicator'),
  
  // Educator View
  gradingQueue: document.getElementById('grading-queue'),
  
  // Modal Elements
  modalBackdrop: document.getElementById('modal-backdrop'),
  modalClose: document.getElementById('modal-close'),
  modalTitle: document.getElementById('modal-title'),
  modalFormContent: document.getElementById('modal-form-content'),
  modalSubmitBtn: document.getElementById('modal-submit-btn'),
  
  // Toast Notifications
  levelUpToast: document.getElementById('level-up-toast'),
  
  // Simulator Panels
  simRoleLearner: document.getElementById('sim-role-learner'),
  simRoleEducator: document.getElementById('sim-role-educator'),
  simLevel1: document.getElementById('sim-level-1'),
  simLevel2: document.getElementById('sim-level-2'),
  simLevel3: document.getElementById('sim-level-3'),
  simAddXp: document.getElementById('sim-add-xp')
};

// Initialize Application
function init() {
  setupEventListeners();
  updateView();
  renderCourses();
  renderJobs();
  renderEducatorQueue();
  updateHeaderAndSidebar();
}

// Navigation / View Router
function navigateTo(viewId) {
  STATE.currentView = viewId;
  updateView();
}

function updateView() {
  // Update nav links active class
  elements.navLinks.forEach(link => {
    if (link.getAttribute('data-view') === STATE.currentView) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Hide all page sections
  elements.pageSections.forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  if (STATE.currentView === 'home') {
    document.getElementById('landing-section').classList.add('active');
  } else if (STATE.currentView === 'dashboard') {
    if (STATE.currentRole === 'learner') {
      document.getElementById('learner-dashboard').classList.add('active');
    } else {
      document.getElementById('educator-dashboard').classList.add('active');
    }
  } else if (STATE.currentView === 'workspace') {
    document.getElementById('learner-workspace').classList.add('active');
    setupWorkspaceCourse();
  } else if (STATE.currentView === 'jobs') {
    document.getElementById('jobs-section').classList.add('active');
    renderJobs();
  } else if (STATE.currentView === 'educator') {
    document.getElementById('educator-dashboard').classList.add('active');
  }
}

// Event Listeners
function setupEventListeners() {
  // Navigation Links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      navigateTo(view);
    });
  });

  // Video Play Button Mock toggle
  let isPlaying = false;
  if (elements.videoPlayBtn) {
    elements.videoPlayBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        elements.videoPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        elements.videoPlayBtn.style.boxShadow = '0 0 40px var(--color-secondary)';
        elements.videoPlayBtn.style.background = 'var(--color-secondary)';
        // Animate progression bar
        elements.videoProgress.style.transition = 'width 10s linear';
        elements.videoProgress.style.width = '100%';
      } else {
        elements.videoPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        elements.videoPlayBtn.style.boxShadow = '0 0 30px var(--color-primary)';
        elements.videoPlayBtn.style.background = 'var(--color-primary)';
        elements.videoProgress.style.transition = 'none';
        elements.videoProgress.style.width = '40%';
      }
    });
  }

  // Upload Assignment Mock Modal Trigger
  if (elements.workspaceUploadBtn) {
    elements.workspaceUploadBtn.addEventListener('click', () => {
      openAssignmentModal();
    });
  }

  // Modal Closes
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  if (elements.modalBackdrop) {
    elements.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === elements.modalBackdrop) closeModal();
    });
  }

  // Simulator Controls
  if (elements.simRoleLearner) {
    elements.simRoleLearner.addEventListener('click', () => {
      STATE.currentRole = 'learner';
      elements.simRoleLearner.classList.add('active');
      elements.simRoleEducator.classList.remove('active');
      
      // Update links in nav
      document.querySelector('[data-view="dashboard"]').textContent = 'My Learning';
      document.querySelector('[data-view="jobs"]').style.display = 'block';
      navigateTo('dashboard');
      updateHeaderAndSidebar();
    });
  }

  if (elements.simRoleEducator) {
    elements.simRoleEducator.addEventListener('click', () => {
      STATE.currentRole = 'educator';
      elements.simRoleEducator.classList.add('active');
      elements.simRoleLearner.classList.remove('active');
      
      // Update links in nav
      document.querySelector('[data-view="dashboard"]').textContent = 'Educator Portal';
      document.querySelector('[data-view="jobs"]').style.display = 'none';
      navigateTo('dashboard');
      updateHeaderAndSidebar();
    });
  }

  if (elements.simLevel1) {
    elements.simLevel1.addEventListener('click', () => setLevel(1));
  }
  if (elements.simLevel2) {
    elements.simLevel2.addEventListener('click', () => setLevel(2));
  }
  if (elements.simLevel3) {
    elements.simLevel3.addEventListener('click', () => setLevel(3));
  }
  if (elements.simAddXp) {
    elements.simAddXp.addEventListener('click', () => addXP(200));
  }
}

// State Modifiers
function setLevel(lvl) {
  STATE.currentLevel = lvl;
  if (lvl === 1) {
    STATE.xp = 150;
  } else if (lvl === 2) {
    STATE.xp = 550;
  } else if (lvl === 3) {
    STATE.xp = 1100;
  }
  
  elements.simLevel1.classList.toggle('active', lvl === 1);
  elements.simLevel2.classList.toggle('active', lvl === 2);
  elements.simLevel3.classList.toggle('active', lvl === 3);

  updateHeaderAndSidebar();
  renderJobs();
  showLevelUpToast(`Level Up Simulated!`, `You are now Level ${lvl}`);
}

function addXP(amount) {
  STATE.xp += amount;
  
  // Basic level-up logic thresholds
  // Level 1: 0 - 500 XP
  // Level 2: 501 - 1000 XP
  // Level 3: 1001+ XP
  let oldLvl = STATE.currentLevel;
  
  if (STATE.xp >= 1000) {
    STATE.currentLevel = 3;
  } else if (STATE.xp >= 500) {
    STATE.currentLevel = 2;
  } else {
    STATE.currentLevel = 1;
  }

  elements.simLevel1.classList.toggle('active', STATE.currentLevel === 1);
  elements.simLevel2.classList.toggle('active', STATE.currentLevel === 2);
  elements.simLevel3.classList.toggle('active', STATE.currentLevel === 3);

  updateHeaderAndSidebar();
  renderJobs();

  if (STATE.currentLevel > oldLvl) {
    showLevelUpToast(`Level Up!`, `Unlocked Level ${STATE.currentLevel} and brand matches!`);
  } else {
    showLevelUpToast(`+${amount} XP Awarded!`, `Keep going to unlock the job board!`);
  }
}

// Display Level Up Banner
function showLevelUpToast(title, subtitle) {
  elements.levelUpToast.innerHTML = `${title} <span>${subtitle}</span>`;
  elements.levelUpToast.classList.add('active');
  setTimeout(() => {
    elements.levelUpToast.classList.remove('active');
  }, 4000);
}

// UI Updating functions
function updateHeaderAndSidebar() {
  // Header Badges
  if (elements.headerAvatar) elements.headerAvatar.textContent = STATE.currentRole === 'learner' ? 'LP' : 'ED';
  if (elements.headerLevelBadge) {
    elements.headerLevelBadge.textContent = `LVL ${STATE.currentLevel}`;
  }

  // Sidebar profile updates
  if (elements.sidebarName) {
    elements.sidebarName.textContent = STATE.currentRole === 'learner' ? 'Liam Parker' : 'Dr. Alistair Finch';
  }

  if (elements.sidebarLevelName) {
    let title = "Learner Media Pro";
    if (STATE.currentRole === 'educator') title = "Head Media Professor";
    else if (STATE.currentLevel === 2) title = "Intermediate Creator";
    else if (STATE.currentLevel === 3) title = "Elite Professional (Matches Active)";
    elements.sidebarLevelName.textContent = title;
  }

  // XP progress bars
  if (STATE.currentRole === 'learner') {
    let xpPercent = (STATE.xp % 500) / 500 * 100;
    if (STATE.currentLevel === 3) xpPercent = 100; // Cap visual bar
    elements.sidebarXpBar.style.width = `${xpPercent}%`;
    elements.sidebarXpText.textContent = `${STATE.xp} / ${STATE.currentLevel * 500} XP`;
  } else {
    elements.sidebarXpBar.style.width = `100%`;
    elements.sidebarXpText.textContent = `Educator Mode Active`;
  }
}

// Render dynamic course list
function renderCourses() {
  if (!elements.coursesGrid) return;
  elements.coursesGrid.innerHTML = '';

  STATE.courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-thumbnail">
        <img src="${course.image}" alt="${course.title}">
        <span class="course-tag">${course.tag}</span>
      </div>
      <div class="course-body">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-footer">
          <div class="educator-info">
            <div class="educator-avatar">${course.educator.split(' ').map(n=>n[0]).join('')}</div>
            <span class="educator-name">Instructor: ${course.educator}</span>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="enterWorkspace('${course.id}')" style="padding: 0.45rem 1rem; font-size: 0.8rem; border-radius: 8px;">
            Open Class
          </button>
        </div>
      </div>
    `;
    elements.coursesGrid.appendChild(card);
  });
}

// Handle entering workspace view for specific course
window.enterWorkspace = function(courseId) {
  STATE.activeWorkspaceCourseId = courseId;
  navigateTo('workspace');
};

function setupWorkspaceCourse() {
  const course = STATE.courses.find(c => c.id === STATE.activeWorkspaceCourseId) || STATE.courses[0];
  if (!course) return;

  if (elements.workspaceTitle) elements.workspaceTitle.textContent = course.title;
  if (elements.workspaceDesc) elements.workspaceDesc.textContent = course.description;

  // Render course tasks checklist
  if (elements.workspaceTasksList) {
    elements.workspaceTasksList.innerHTML = '';
    course.tasks.forEach((task, index) => {
      const item = document.createElement('li');
      item.className = `task-item ${task.completed ? 'checked' : ''}`;
      item.innerHTML = `
        <div class="task-checkbox">
          <i class="fas fa-check"></i>
        </div>
        <div class="task-text">
          <h4>Milestone ${index + 1}: ${task.text}</h4>
          <p>Gain practical feedback from educator on completion.</p>
        </div>
      `;
      item.addEventListener('click', () => {
        task.completed = !task.completed;
        item.classList.toggle('checked', task.completed);
        checkAllTasksCompleted(course);
      });
      elements.workspaceTasksList.appendChild(item);
    });
  }
}

function checkAllTasksCompleted(course) {
  const allDone = course.tasks.every(t => t.completed);
  if (allDone) {
    showLevelUpToast("Project Complete!", "Submit your final artifact link for educator grading now!");
  }
}

// Render dynamic job board list
function renderJobs() {
  if (!elements.marketGrid) return;
  elements.marketGrid.innerHTML = '';

  // Render job listing cards
  STATE.jobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    // Check lock status
    const isLocked = STATE.currentLevel < job.levelReq;
    
    card.innerHTML = `
      <div class="job-header">
        <div class="brand-info">
          <div class="brand-logo" style="background: ${getBrandColor(job.brand)}; color: white;">${job.logo}</div>
          <div class="brand-details">
            <h4>${job.brand}</h4>
            <span>${job.deadline}</span>
          </div>
        </div>
        <div class="job-budget">${job.budget}</div>
      </div>
      <h3 class="job-title">${job.title}</h3>
      <div class="job-tags">
        ${job.tags.map(t => `<span class="job-tag">${t}</span>`).join('')}
      </div>
      <p class="job-desc">${job.desc}</p>
      <div class="job-footer">
        <span class="job-meta">Requires Level ${job.levelReq}</span>
        ${isLocked 
          ? `<button class="btn btn-secondary btn-sm" disabled style="opacity: 0.5; padding: 0.5rem 1rem; font-size: 0.8rem; cursor: not-allowed;"><i class="fas fa-lock"></i> Locked</button>`
          : `<button class="btn btn-primary btn-sm" onclick="openJobApplication('${job.id}')" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Apply Now</button>`
        }
      </div>
    `;
    elements.marketGrid.appendChild(card);
  });

  // Display lock overlay only on main level restriction
  // The system USP says "after learning professional reaches a certain level, they find matching brand/job"
  // Let's locks the marketplace visual if learner is Level 1, unlocks a bit at Level 2, and fully open at Level 3.
  if (STATE.currentLevel === 1) {
    elements.marketLockedOverlay.style.display = 'flex';
    elements.lockLevelIndicator.textContent = 'Level 2';
  } else {
    elements.marketLockedOverlay.style.display = 'none';
  }
}

function getBrandColor(brand) {
  switch(brand) {
    case 'Sony': return '#000000';
    case 'Red Bull': return '#1d2c5e';
    case 'Gymshark': return '#434343';
    case 'DJI': return '#0070e0';
    default: return '#555';
  }
}

// Render Educator grading queue submissions
function renderEducatorQueue() {
  if (!elements.gradingQueue) return;
  elements.gradingQueue.innerHTML = '';

  const activeSubmissions = STATE.submissions.filter(s => s.status === 'pending');
  
  if (activeSubmissions.length === 0) {
    elements.gradingQueue.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 0;">
        <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--color-accent); margin-bottom: 1rem;"></i>
        <h3>Queue Clean!</h3>
        <p>All student submissions have been graded.</p>
      </div>
    `;
    return;
  }

  activeSubmissions.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'grading-card';
    card.innerHTML = `
      <div class="grading-student">
        <div class="user-summary" style="padding:0; margin:0; border:none;">
          <div class="avatar-large" style="width:48px; height:48px; font-size:1.1rem; margin:0;">
            ${sub.studentName.split(' ').map(n=>n[0]).join('')}
          </div>
        </div>
        <div class="student-info">
          <h4>${sub.studentName}</h4>
          <p>Course: <strong>${sub.courseTitle}</strong></p>
          <p style="margin: 0.25rem 0;">"${sub.assignmentText}"</p>
          <a href="#" onclick="alert('Demo: Redirecting to submitted student project link: ${sub.link}'); return false;">
            <i class="fas fa-external-link-alt"></i> View Artifact Link
          </a>
        </div>
      </div>
      <div class="grading-actions">
        <button class="btn btn-secondary btn-sm" onclick="gradeStudent('${sub.id}', false)" style="padding: 0.45rem 0.85rem; font-size: 0.8rem;">Request Edit</button>
        <button class="btn btn-primary btn-sm" onclick="gradeStudent('${sub.id}', true)" style="padding: 0.45rem 0.85rem; font-size: 0.8rem; background: var(--color-accent); border-color: var(--color-accent);">Grade A+ (+${sub.xpReward} XP)</button>
      </div>
    `;
    elements.gradingQueue.appendChild(card);
  });
}

// Grade student submission
window.gradeStudent = function(subId, isApproved) {
  const subIndex = STATE.submissions.findIndex(s => s.id === subId);
  if (subIndex === -1) return;

  if (isApproved) {
    const sub = STATE.submissions[subIndex];
    sub.status = 'approved';
    showLevelUpToast("Grade Submitted!", `${sub.studentName} rewarded with +${sub.xpReward} XP!`);
    
    // Simulate updating learner XP if the role is currently learner
    if (STATE.currentRole === 'learner') {
      addXP(sub.xpReward);
    }
  } else {
    STATE.submissions[subIndex].status = 'rejected';
    showLevelUpToast("Edit Required", `Student feedback sent successfully.`);
  }

  renderEducatorQueue();
};

// Modal handlers
function closeModal() {
  elements.modalBackdrop.classList.remove('active');
}

function openAssignmentModal() {
  elements.modalTitle.textContent = "Submit Course Assignment";
  elements.modalFormContent.innerHTML = `
    <div class="form-group">
      <label for="submit-link">Project Link (Vimeo / YouTube / Google Drive)</label>
      <input type="url" id="submit-link" class="form-control" placeholder="https://vimeo.com/..." required>
    </div>
    <div class="form-group">
      <label for="submit-notes">Creator Notes & Context</label>
      <textarea id="submit-notes" class="form-control" placeholder="Explain your lighting choices, edit pacing, color selection, etc..." required></textarea>
    </div>
  `;
  elements.modalSubmitBtn.textContent = "Submit Work to Instructor";
  elements.modalSubmitBtn.onclick = handleAssignmentSubmit;
  elements.modalBackdrop.classList.add('active');
}

function handleAssignmentSubmit() {
  const linkVal = document.getElementById('submit-link').value;
  const notesVal = document.getElementById('submit-notes').value;

  if (!linkVal || !notesVal) {
    alert("Please fill in all details before submitting!");
    return;
  }

  const course = STATE.courses.find(c => c.id === STATE.activeWorkspaceCourseId) || STATE.courses[0];
  
  // Add to queue
  STATE.submissions.push({
    id: 's_' + Date.now(),
    studentName: 'Liam Parker (You)',
    courseTitle: course.title,
    assignmentText: notesVal,
    link: linkVal,
    status: 'pending',
    xpReward: course.xpReward
  });

  closeModal();
  showLevelUpToast("Assignment Submitted!", "Your educator has been notified to grade your project.");
  renderEducatorQueue();
}

window.openJobApplication = function(jobId) {
  const job = STATE.jobs.find(j => j.id === jobId);
  if (!job) return;

  elements.modalTitle.textContent = `Apply to ${job.brand}`;
  elements.modalFormContent.innerHTML = `
    <div style="background: hsla(222, 47%, 18%, 0.5); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid var(--border-light);">
      <h4 style="color: var(--color-secondary); margin-bottom: 0.25rem;">${job.title}</h4>
      <p style="font-size:0.8rem; margin:0;">Budget: <strong>${job.budget}</strong> | Brand: <strong>${job.brand}</strong></p>
    </div>
    <div class="form-group">
      <label for="app-pitch">Why are you the perfect fit? (Short pitch)</label>
      <textarea id="app-pitch" class="form-control" placeholder="Mention your style, previous projects, and availability..." required></textarea>
    </div>
    <div class="form-group">
      <label for="app-portfolio">Select Portfolio Highlight</label>
      <select id="app-portfolio" class="form-control">
        <option>Showcase Showreel 2026 (Unlocked)</option>
        <option>Short Commercial Spec Work (Unlocked)</option>
        <option>Color Grading Showcase (Unlocked)</option>
      </select>
    </div>
  `;
  elements.modalSubmitBtn.textContent = "Submit Pitch Proposal";
  elements.modalSubmitBtn.onclick = handleJobApplySubmit;
  elements.modalBackdrop.classList.add('active');
};

function handleJobApplySubmit() {
  const pitch = document.getElementById('app-pitch').value;
  if (!pitch) {
    alert("Please write a short pitch to the brand!");
    return;
  }

  closeModal();
  showLevelUpToast("Application Sent!", "The brand will review your verified learning rank and profile!");
}

// Start application
window.addEventListener('DOMContentLoaded', init);
