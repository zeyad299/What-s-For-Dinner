var contacts = [];
var editingId = "";
var photoData = "";

window.onload = function () {
  loadContacts();
  renderAll();
  setupEvents();
};

function loadContacts() {
  var saved = localStorage.getItem("contactHubData");
  if (saved) {
    contacts = JSON.parse(saved);
  } else {
    contacts = [];
  }
}

function saveContacts() {
  localStorage.setItem("contactHubData", JSON.stringify(contacts));
}

function makeId() {
  var now = new Date();
  return "contact_" + now.getTime();
}

function getInitials(name) {
  var words = name.split(" ");
  var initials = "";
  var i;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > 0 && initials.length < 2) {
      initials = initials + words[i].charAt(0).toUpperCase();
    }
  }
  if (initials === "") {
    initials = "?";
  }
  return initials;
}

var avatarColors = ["avatar-blue", "avatar-violet", "avatar-emerald", "avatar-amber", "avatar-rose", "avatar-cyan"];

function getAvatarColor(id) {
  var sum = 0;
  var i;
  for (i = 0; i < id.length; i++) {
    sum = sum + id.charCodeAt(i);
  }
  var index = sum % avatarColors.length;
  return avatarColors[index];
}

function isValidName(name) {
  var regex = /^[A-Za-z\u0600-\u06FF ]{2,50}$/;
  return regex.test(name.trim());
}

function isValidPhone(phone) {
  var regex = /^01[0125][0-9]{8}$/;
  return regex.test(phone.trim());
}

function isValidEmail(email) {
  if (email.trim() === "") {
    return true;
  }
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email.trim());
}

function renderAll() {
  renderStats();
  renderContacts();
  renderFavorites();
  renderEmergency();
}

function renderStats() {
  var total = contacts.length;
  var favCount = 0;
  var emgCount = 0;
  var i;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].favorite === true) {
      favCount = favCount + 1;
    }
    if (contacts[i].emergency === true) {
      emgCount = emgCount + 1;
    }
  }
  document.getElementById("totalCount").innerHTML = total;
  document.getElementById("favCount").innerHTML = favCount;
  document.getElementById("emgCount").innerHTML = emgCount;
  document.getElementById("contactsSubtitle").innerHTML = "Manage and organize your " + total + " contacts";
}

function buildAvatarHtml(c, sizeClass) {
  if (c.photo && c.photo !== "") {
    return '<img src="' + c.photo + '" class="avatar-circle ' + sizeClass + '">';
  }
  var colorClass = getAvatarColor(c.id);
  return '<div class="avatar-circle ' + sizeClass + ' ' + colorClass + '">' + getInitials(c.name) + '</div>';
}

function renderContacts() {
  var grid = document.getElementById("contactsGrid");
  var searchValue = document.getElementById("searchInput").value.toLowerCase();

  var filtered = [];
  var i;
  for (i = 0; i < contacts.length; i++) {
    var c = contacts[i];
    var nameMatch = c.name.toLowerCase().indexOf(searchValue) !== -1;
    var phoneMatch = c.phone.toLowerCase().indexOf(searchValue) !== -1;
    var emailMatch = (c.email || "").toLowerCase().indexOf(searchValue) !== -1;
    if (nameMatch || phoneMatch || emailMatch) {
      filtered.push(c);
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="empty-state">' +
      '<div class="empty-icon-box"><i class="fa-solid fa-address-book"></i></div>' +
      '<p class="empty-title">No contacts found</p>' +
      '<p class="empty-sub">Click "Add Contact" to get started</p></div>';
    return;
  }

  var html = "";
  for (i = 0; i < filtered.length; i++) {
    var c = filtered[i];
    var avatarHtml = buildAvatarHtml(c, "avatar-lg");

    var groupBadge = "";
    if (c.group && c.group !== "") {
      var groupLabel = c.group.charAt(0).toUpperCase() + c.group.slice(1);
      groupBadge = '<span class="badge badge-group">' + groupLabel + '</span>';
    }

    var emergencyBadge = "";
    if (c.emergency === true) {
      emergencyBadge = '<span class="badge badge-emergency"><i class="fa-solid fa-heart-pulse" style="margin-right:.25rem;"></i>Emergency</span>';
    }

    var starClass = "fa-regular fa-star";
    var starActive = "";
    if (c.favorite === true) {
      starClass = "fa-solid fa-star";
      starActive = "active";
    }

    var emailBtnClass = "icon-action mail";
    var emailHref = "mailto:" + c.email;
    if (!c.email || c.email === "") {
      emailBtnClass = "icon-action mail disabled";
      emailHref = "#";
    }

    html += '<div class="contact-card">';
    html += '<div class="card-top">';
    html += '<div class="card-left">';
    html += avatarHtml;
    html += '<div style="min-width:0;">';
    html += '<h3 class="card-name">' + c.name + '</h3>';
    html += '<p class="card-phone">' + c.phone + '</p>';
    html += '</div></div>';
    html += '<button class="favBtn fav-btn ' + starActive + '" data-id="' + c.id + '"><i class="' + starClass + '"></i></button>';
    html += '</div>';

    if (c.email) {
      html += '<p class="card-email"><i class="fa-solid fa-envelope" style="margin-right:.35rem;"></i>' + c.email + '</p>';
    }

    html += '<div class="card-badges">' + groupBadge + emergencyBadge + '</div>';

    html += '<div class="card-bottom">';
    html += '<div class="card-actions-left">';
    html += '<a href="tel:' + c.phone + '" class="icon-action call"><i class="fa-solid fa-phone"></i></a>';
    html += '<a href="' + emailHref + '" class="' + emailBtnClass + '"><i class="fa-solid fa-envelope"></i></a>';
    html += '</div>';
    html += '<div class="card-actions-right">';
    html += '<button class="editBtn icon-action edit" data-id="' + c.id + '"><i class="fa-solid fa-pen"></i></button>';
    html += '<button class="deleteBtn icon-action del" data-id="' + c.id + '"><i class="fa-solid fa-trash"></i></button>';
    html += '</div></div>';
    html += '</div>';
  }

  grid.innerHTML = html;
  attachCardEvents();
}

function renderFavorites() {
  var list = [];
  var i;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].favorite === true) {
      list.push(contacts[i]);
    }
  }
  var html = buildSidebarHtml(list, "No favorites yet");
  document.getElementById("favoritesList").innerHTML = html;
  document.getElementById("favoritesListMobile").innerHTML = html;
  attachSidebarEvents("favoritesList");
  attachSidebarEvents("favoritesListMobile");
}

function renderEmergency() {
  var list = [];
  var i;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].emergency === true) {
      list.push(contacts[i]);
    }
  }
  var html = buildSidebarHtml(list, "No emergency contacts");
  document.getElementById("emergencyList").innerHTML = html;
  document.getElementById("emergencyListMobile").innerHTML = html;
  attachSidebarEvents("emergencyList");
  attachSidebarEvents("emergencyListMobile");
}

function buildSidebarHtml(list, emptyText) {
  if (list.length === 0) {
    return '<div class="side-empty"><p>' + emptyText + '</p></div>';
  }
  var html = "";
  var i;
  for (i = 0; i < list.length; i++) {
    var c = list[i];
    var avatarHtml = buildAvatarHtml(c, "avatar-sm");
    html += '<div class="sidebarItem sidebar-item" data-id="' + c.id + '">';
    html += avatarHtml;
    html += '<div class="sidebar-item-info">';
    html += '<p class="sidebar-item-name">' + c.name + '</p>';
    html += '<p class="sidebar-item-phone">' + c.phone + '</p>';
    html += '</div>';
    html += '<a href="tel:' + c.phone + '" class="sidebar-item-call"><i class="fa-solid fa-phone"></i></a>';
    html += '</div>';
  }
  return html;
}

function attachCardEvents() {
  var editButtons = document.getElementsByClassName("editBtn");
  var i;
  for (i = 0; i < editButtons.length; i++) {
    editButtons[i].onclick = function () {
      openEditModal(this.getAttribute("data-id"));
    };
  }

  var deleteButtons = document.getElementsByClassName("deleteBtn");
  for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      confirmDelete(this.getAttribute("data-id"));
    };
  }

  var favButtons = document.getElementsByClassName("favBtn");
  for (i = 0; i < favButtons.length; i++) {
    favButtons[i].onclick = function () {
      toggleFavorite(this.getAttribute("data-id"));
    };
  }
}

function attachSidebarEvents(containerId) {
  var container = document.getElementById(containerId);
  var items = container.getElementsByClassName("sidebarItem");
  var i;
  for (i = 0; i < items.length; i++) {
    items[i].onclick = function (event) {
      if (event.target.closest("a")) {
        return;
      }
      openEditModal(this.getAttribute("data-id"));
    };
  }
}

function setupEvents() {
  document.getElementById("addContactBtn").onclick = function () {
    openAddModal();
  };
  document.getElementById("closeModalBtn").onclick = function () {
    closeModal();
  };
  document.getElementById("cancelModalBtn").onclick = function () {
    closeModal();
  };
  document.getElementById("modalBackdrop").onclick = function () {
    closeModal();
  };
  document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault();
    saveContact();
  };
  document.getElementById("searchInput").oninput = function () {
    renderContacts();
  };
  document.getElementById("avatarInput").onchange = function () {
    handlePhotoUpload(this);
  };
}

function openAddModal() {
  editingId = "";
  photoData = "";
  document.getElementById("modalTitle").innerHTML = "Add New Contact";
  document.getElementById("contactForm").reset();
  document.getElementById("contactId").value = "";
  clearErrors();
  var preview = document.getElementById("avatarPreview");
  preview.className = "avatar-circle avatar-xl avatar-blue";
  preview.innerHTML = "?";
  document.getElementById("contactModal").classList.add("open");
}

function openEditModal(id) {
  var c = findContactById(id);
  if (!c) {
    return;
  }
  editingId = id;
  photoData = c.photo || "";
  document.getElementById("modalTitle").innerHTML = "Edit Contact";
  document.getElementById("contactId").value = c.id;
  document.getElementById("contactName").value = c.name;
  document.getElementById("contactPhone").value = c.phone;
  document.getElementById("contactEmail").value = c.email || "";
  document.getElementById("contactAddress").value = c.address || "";
  document.getElementById("contactGroup").value = c.group || "";
  document.getElementById("contactNotes").value = c.notes || "";
  document.getElementById("contactFavorite").checked = c.favorite === true;
  document.getElementById("contactEmergency").checked = c.emergency === true;
  clearErrors();

  var preview = document.getElementById("avatarPreview");
  if (c.photo && c.photo !== "") {
    preview.className = "avatar-circle avatar-xl";
    preview.innerHTML = '<img src="' + c.photo + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
  } else {
    var colorClass = getAvatarColor(c.id);
    preview.className = "avatar-circle avatar-xl " + colorClass;
    preview.innerHTML = getInitials(c.name);
  }
  document.getElementById("contactModal").classList.add("open");
}

function closeModal() {
  document.getElementById("contactModal").classList.remove("open");
}

function handlePhotoUpload(input) {
  if (input.files.length === 0) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (event) {
    photoData = event.target.result;
    var preview = document.getElementById("avatarPreview");
    preview.className = "avatar-circle avatar-xl";
    preview.innerHTML = '<img src="' + photoData + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
  };
  reader.readAsDataURL(input.files[0]);
}

function clearErrors() {
  document.getElementById("contactNameError").classList.remove("show");
  document.getElementById("contactPhoneError").classList.remove("show");
  document.getElementById("contactEmailError").classList.remove("show");
  document.getElementById("contactName").classList.remove("error");
  document.getElementById("contactPhone").classList.remove("error");
  document.getElementById("contactEmail").classList.remove("error");
}

function findContactById(id) {
  var i;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].id === id) {
      return contacts[i];
    }
  }
  return null;
}

function findContactIndexById(id) {
  var i;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].id === id) {
      return i;
    }
  }
  return -1;
}

function saveContact() {
  clearErrors();

  var name = document.getElementById("contactName").value;
  var phone = document.getElementById("contactPhone").value;
  var email = document.getElementById("contactEmail").value;

  var valid = true;

  if (!isValidName(name)) {
    document.getElementById("contactNameError").classList.add("show");
    document.getElementById("contactName").classList.add("error");
    valid = false;
  }

  if (!isValidPhone(phone)) {
    document.getElementById("contactPhoneError").classList.add("show");
    document.getElementById("contactPhone").classList.add("error");
    valid = false;
  }

  if (!isValidEmail(email)) {
    document.getElementById("contactEmailError").classList.add("show");
    document.getElementById("contactEmail").classList.add("error");
    valid = false;
  }

  if (valid === false) {
    return;
  }

  var contactData = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    address: document.getElementById("contactAddress").value.trim(),
    group: document.getElementById("contactGroup").value,
    notes: document.getElementById("contactNotes").value.trim(),
    favorite: document.getElementById("contactFavorite").checked,
    emergency: document.getElementById("contactEmergency").checked,
    photo: photoData
  };

  if (editingId === "") {
    contactData.id = makeId();
    contacts.push(contactData);
    saveContacts();
    closeModal();
    renderAll();
    Swal.fire({
      icon: "success",
      title: "Contact added!",
      text: contactData.name + " was added to your contacts.",
      confirmButtonColor: "#7c3aed",
      timer: 2200,
      timerProgressBar: true
    });
  } else {
    var index = findContactIndexById(editingId);
    if (index !== -1) {
      contactData.id = editingId;
      contacts[index] = contactData;
      saveContacts();
      closeModal();
      renderAll();
      Swal.fire({
        icon: "success",
        title: "Contact updated!",
        text: contactData.name + "'s info has been saved.",
        confirmButtonColor: "#7c3aed",
        timer: 2200,
        timerProgressBar: true
      });
    }
  }
}

function confirmDelete(id) {
  var c = findContactById(id);
  if (!c) {
    return;
  }
  Swal.fire({
    icon: "warning",
    title: "Are you sure?",
    text: "Do you really want to delete " + c.name + "? This can't be undone.",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#e11d48",
    cancelButtonColor: "#6b7280",
    reverseButtons: true
  }).then(function (result) {
    if (result.isConfirmed) {
      deleteContact(id);
    }
  });
}

function deleteContact(id) {
  var index = findContactIndexById(id);
  if (index === -1) {
    return;
  }
  var name = contacts[index].name;
  contacts.splice(index, 1);
  saveContacts();
  renderAll();
  Swal.fire({
    icon: "success",
    title: "Deleted!",
    text: name + " has been removed.",
    confirmButtonColor: "#7c3aed",
    timer: 1800,
    timerProgressBar: true
  });
}

function toggleFavorite(id) {
  var index = findContactIndexById(id);
  if (index === -1) {
    return;
  }
  if (contacts[index].favorite === true) {
    contacts[index].favorite = false;
  } else {
    contacts[index].favorite = true;
  }
  saveContacts();
  renderAll();
}