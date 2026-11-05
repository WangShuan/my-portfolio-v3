<template>
  <ul class="recent-projects">
    <li class="projects-title">
      <h2>近期案例 Recent Projects</h2>
      <p>左右滾動以查看更多，圖片也可以上下滾動唷 👀</p>
    </li>
    <li class="project" :style="`--color: ${project.color}`" v-for="project in recentProjects" :key="project.id">
      <span class="project-subtitle">{{ project.date }} | {{ project.subtitle }}</span>
      <div class="project-image">
        <img :src="project.image_url" :alt="project.title" />
      </div>
      <a class="project-title" :href="project.url" target="_blank">
        {{ project.title }} <i>→</i>
      </a>
    </li>
  </ul>
</template>

<script setup>
const { data } = await useFetch("/api/recent-projects")

const recentProjects = computed(() => {
  return data.value.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<style>
.recent-projects {
  list-style: none;
  background: var(--bg-section);
  width: 100vw;
  padding: 30px calc(50vw - 600px);
  display: flex;
  gap: 60px;
  overflow: scroll;
  align-items: center;

  .projects-title {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    flex-shrink: 0;
    gap: 12px;
  }

  .project-image {
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
    overflow: scroll;
    position: relative;
    border: 1px solid var(--color);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .project-title {
    font-size: 20px;
    font-weight: bold;
  }

    .project-subtitle {
      font-size: 14px;
      color: var(--text-sub);
      font-weight: 300;
      margin-left: auto;
    }

  .project-details {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;

    ul {
      list-style: disc;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;

      li {
        font-size: 14px;
      }
    }

    li {
      font-size: 14px;
    }
  }

  .project-link {
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: bold;
    transition: all .3s;
    font-size: 12px;
    color: var(--primary);

    &:hover {
      gap: 12px;
      transition: all .3s;
    }

    i {
      display: block;
      font-style: normal;
    }
  }
}

@media (max-width: 1279px) {
  .recent-projects {
    padding: 60px 30px;
    gap: 40px;
  }

  .recent-projects .project {
    width: 360px;
  }

  .recent-projects .projects-title h2 {
    font-size: 20px;
  }

  .recent-projects .projects-title p {
    font-size: 13px;
  }
}
</style>