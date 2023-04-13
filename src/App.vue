<template>

  <header>
    <nav>
      <AppNav/>
    </nav>
  </header>

  <main>
    <section>
      <AppMainContent/>
    </section>
    <section>
      <AppMainProduct/>
    </section>
  </main>

  <footer>
    <section>
      <AppFooter/>
    </section>
    <section>
      <AppFooterSocial/>
    </section>
  </footer>

</template>

<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppMainProduct from './components/AppMainProduct.vue';
import AppFooter from './components/AppFooter.vue';
import AppFooterSocial from './components/AppFooterSocial.vue';

export default{
  components: {
    AppNav,
    AppMainContent,
    AppMainProduct,
    AppFooter,
    AppFooterSocial,
}
}
</script>

<style lang="scss" scoped></style>