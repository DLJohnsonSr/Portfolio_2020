const icons = [
  {
    url: "img/skill-icons/html5.svg",
    alt: "HTML5 Logo",
  },
  {
    url: "img/skill-icons/css3.svg",
    alt: "CSS3 Logo",
  },
  {
    url: "img/skill-icons/javascript.webp",
    alt: "JavaScript Logo",
  },
  {
    url: "img/skill-icons/react.webp",
    alt: "React Logo",
  },
  {
    url: "img/skill-icons/java.svg",
    alt: "Java Logo",
  },
  {
    url: "img/skill-icons/spring.webp",
    alt: "Java Spring Boot + Mavan Logo",
  },
  {
    url: "img/skill-icons/thymeleaf.webp",
    alt: "Thymeleaf Logo",
  },
  {
    url: "img/skill-icons/bootstrap.svg",
    alt: "Bootstrap Logo",
  },
];

const skills = new Vue({
  el: "#skills",
  data() {
    return {
      icons,
    };
  },
  template: `
    <div class="skill-icons">
      <div class="skill-icon" v-for="(icon, index) in icons" :key="index">
        <img class="img-skill-icon" v-bind:src="icon.url" v-bind:alt="icon.alt" />
      </div>
    </div>
  `,
});

skills.mount("#skills");
