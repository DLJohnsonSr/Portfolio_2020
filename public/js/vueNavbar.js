const navbar = new Vue({
  el: "#navbar",
  data() {
    return { isMenuToggle: false };
  },
  methods: {
    toggleNavbar() {
      this.isMenuToggle = !this.isMenuToggle;
    },
  },
  template: `
<nav role="navigation" class="nav">
    <div @click="toggleNavbar" class="nav-menu-icon">
        <div class="nav-hash nav-hash-2" :class="{ 'nav-hash-b': isMenuToggle }" active></div>
        <div class="nav-hash nav-hash-1" :class="{ 'nav-hash-a': isMenuToggle }"></div>
        <div class="nav-hash nav-hash-3" :class="{ 'nav-hash-c': isMenuToggle }"></div>
    </div>
    <div class="nav-brand">
        <img src="../assets/logo.png" alt="Brand Image" class="nav-img-brand" />
    </div>
    <div @click="toggleNavbar" class="nav-list" :class="{ 'nav-list-display': isMenuToggle }">
        <a href="#section-profile" class="nav-link">Home</a>
        <a href="#section-training" class="nav-link">Training</a>
        <a href="#section-contact" class="nav-link">Contact</a>
        <a href="/" class="nav-link">Blog</a>
        <a href="/" class="nav-link">Resources</a>
    </div>
</nav>`,
});
navbar.mount("#navbar");
