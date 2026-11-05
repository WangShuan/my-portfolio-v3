<template>
  <section class="personal-projects">
    <h2>個人專案 Personal Projects</h2>
    <p>一些有趣的實驗專案，邊玩邊學、邊做邊優化 🔧</p>
    <ul class="cards">
      <li class="cards-item" v-for="project in projects" :key="project.id">
        <img :src="project.img_url" />
        <div class="text-container">
          <div class="card-header">
            <time>{{ new Date(project.created_at).toDateString() }}</time>
            <ul>
              <li v-for="tag in project.tags" :key="tag">#{{ tag }}</li>
            </ul>
          </div>
          <div class="card-body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <a class="btn" :href="project.source" target="_blank">原始碼</a>
            <a class="btn" :href="project.view" target="_blank">線上觀看</a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const client = useSupabaseClient()

const { data: projects } = await useAsyncData('projects', async () => {
  const { data } = await client.from('projects').select('*').order('created_at', { ascending: false })

  return data
})
</script>

<style>
.personal-projects {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .cards {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .cards-item {
      display: flex;
      border-bottom: 1px solid var(--text-sub);
      padding-bottom: 30px;
      gap: 30px;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }

      img {
        width: 50%;
        height: auto;
        aspect-ratio: 2/1;
        object-fit: cover;
      }

      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        time {
          font-size: 14px;
          color: var(--text-sub);
        }

        ul {
          list-style: none;
          display: flex;
          gap: 4px;

          li {
            font-size: 12px;
          }
        }
      }

      .card-body {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .card-footer {
        display: flex;
        gap: 15px;

        a {
          border: 1px solid var(--primary);
        }

        a:last-child {
          background: var(--bg-section);
          color: var(--primary);
        }
      }
    }
  }
}

@media (max-width: 1279px) {
 .personal-projects .cards .cards-item .text-container {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .personal-projects .cards .cards-item {
    flex-direction: column;
  }

  .personal-projects .cards .cards-item img {
    width: 100%;
  }
}
</style>