<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="../assets/img/icon.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: 'DashBoard' }">Dashboard</router-link></li>
        <li><router-link class="link" :to="{ name: 'Ranking' }">Ranking</router-link></li>
        <li><router-link class="link" :to="{ name: 'schoolCompare' }">Compare</router-link></li>
        <li><router-link class="link" :to="{ name: 'filter' }">Filter</router-link></li>
      </ul>

      <!--mobile bar icon problem -->
      <div class="icon">
        <font-awesome-icon @click="toggleMobileNav" v-show="mobile" class="fas fa-bars"
          :class="{ 'icon-active': mobileNav }" />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link class="link" :to="{ name: 'DashBoard' }">Dashboard</router-link></li>
          <li><router-link class="link" :to="{ name: 'Ranking' }">Ranking</router-link></li>
          <li><router-link class="link" :to="{ name: 'schoolCompare' }">Compare</router-link></li>
          <li><router-link class="link" :to="{ name: 'filter' }">Filter</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigationBar',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  /*
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
    }
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    method: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    },*/
}
</script>

<style lang="scss" scoped>
header {
  background-color: #001f3f; //ff5f20
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #003366;

  nav {
    height: 70px;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      //max-width: 1140px;
      max-width: 1450px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 30px;
      margin-left: 20px;
    }

    .link {
      font-size: 20px;
      transition: 0.5s ease all;
      padding-bottom: 1px solid transparent;

      &:hover {
        color: aquamarine;
        //border-color: aqua;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 60px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex;
      padding-top: 15px;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      color: #003366;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-Nav {
  background-color: #ffffc5;
  box-shadow:
    0 4px 6px -1px #000,
    0 2px 4px -1px #000;

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow:
          0 4px 6px -1px #000,
          0 2px 4px -1px #000;
      }
    }
  }
}
</style>
