<template>
  <div>
    <header class="header">
      <NuxtLink to="/" class="title">
        WangXuan(雅萱)
        <span>前端工程師(Vue.js)</span>
      </NuxtLink>
      <a class="btn" href="mailto:xuan97222@gmail.com">Contact</a>
    </header>
    <main>
      <section class="about">
        <h1 class="about-title">
          全職自由接案 Vue.js 前端工程師，已有 {{ experienceYears }}+ 年專業經歷 ✨<br>
          <br>
          專注於 Shopity / SHOPLINE 前台客製化、網站架設與開發<br>
          <br>
          與十年開發經驗的全端工程師夥伴，打造完整前/後台客製化網站 💻
        </h1>
      </section>

      <RecentProjects />

      <PersonalProjects />
    </main>
    <footer class="footer">
      <h2 class="footer-title">Let's Talk</h2>
      <a class="footer-email" href="mailto:xuan97222@gmail.com">xuan97222@gmail.com</a>
      <div class="footer-copy">
        <p>© 2026 <a href="mailto:xuan97222@gmail.com">WangXuan</a> All rights reserved.</p>
        <ul>
          <li><a class="link-light" href="https://github.com/WangShuan" target="_blank">GITHUB</a></li>
          <li><a class="link-light" href="https://hackmd.io/@WangShuan" target="_blank">BLOG</a></li>
          <li><a class="link-light" href="https://www.cakeresume.com/loveabo103103" target="_blank">RESUME</a></li>
          <li><a class="link-light" href="https://swap.work/@WangXuan" target="_blank">ABOUT</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
const experienceYears = new Date().getFullYear() - 2019;

useSeoMeta({
  title: "Wang Xuan(雅萱)｜前端工程師｜自由接案｜Shopify & SHOPLINE 客製化",
  description: "前端工程師 Wang Xuan(雅萱)，專精 Shopify / SHOPLINE 客製化及公司網站前、後台開發，與全端工程師夥伴合作提供完整網站解決方案，歡迎來信諮詢。",
  ogTitle: "Wang Xuan(雅萱)｜前端工程師｜自由接案｜Shopify & SHOPLINE 客製化",
  ogDescription: "前端工程師 Wang Xuan(雅萱)，專精 Shopify / SHOPLINE 客製化及公司網站前、後台開發，與全端工程師夥伴合作提供完整網站解決方案，歡迎來信諮詢。",
  ogImage: '/images/og-image.jpg',
  ogUrl: useRequestURL().href,
  twitterCard: 'summary_large_image',
  twitterTitle: "Wang Xuan(雅萱)｜前端工程師｜自由接案｜Shopify & SHOPLINE 客製化",
  twitterDescription: "前端工程師 Wang Xuan(雅萱)，專精 Shopify / SHOPLINE 客製化及公司網站前、後台開發，與全端工程師夥伴合作提供完整網站解決方案，歡迎來信諮詢。",
  twitterImage: '/images/og-image.jpg'
});
</script>