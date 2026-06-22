<script setup lang="ts">
import { ref } from 'vue'

const base = import.meta.env.BASE_URL
const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

const isModalVisible = ref<boolean>(false)
function toggleModal(visible: boolean) {
  isModalVisible.value = visible
}
</script>

<template>
  <div id="app-container">
    <div id="top" style="top: 0; width: 0; height: 0; left: 0;"></div>
    
    <header>
      <nav>
        <router-link to="/" class="logo-container header-logo">
          <img :src="base + 'Images/Rectangle1.png'" class="fundo-logo" alt="Fundo Logo">
          <img :src="base + 'Images/octopodium_red_alt.png'" class="topo-logo" alt="Topo Logo">
        </router-link>
        <div class="options">
          <router-link to="/">Rangolithical</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <button type="button" class="hamburger-button" @click="toggleMobileMenu" aria-label="Open menu">
          <img :src="base + 'Images/hamMenu.png'" alt="Menu" />
        </button>
        <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
          <button type="button" class="close-menu" @click="closeMobileMenu" aria-label="Close menu">×</button>
          <router-link to="/" @click="closeMobileMenu">Rangolithical</router-link>
          <router-link to="/about" @click="closeMobileMenu">About Us</router-link>
          <router-link to="/contact" @click="closeMobileMenu">Contact</router-link>
        </div>
      </nav>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer>
      <div class="logo-footer">
        <router-link to="/" class="logo-container footer-logo">
          <img :src="base + 'Images/Rectangle1.png'" class="fundo-logo" alt="Fundo Logo">
          <img :src="base + 'Images/octopodium_red_alt.png'" class="topo-logo" alt="Topo Logo">
        </router-link>
      </div>
      <div class="botoes-footer">
        <a @click="toggleModal(true)" target="_blank">
          <i class="fa-brands fa-steam fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/@Octo-PodiumStudio" target="_blank">
          <i class="fa-brands fa-youtube fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/octopodiumstudio/" target="_blank">
          <i class="fa-brands fa-instagram fa-2x"></i>
        </a>
        <a href="https://bsky.app/profile/octopodiumstudio.bsky.social" target="_blank">
          <i class="fa-brands fa-bluesky fa-2x"></i>
        </a>
      </div>
      <span>&copy; Octo-Podium Studio 2026</span>
    </footer>
  </div>
  <div v-if="isModalVisible" class="modal-overlay" @click.self="toggleModal(false)">
      <div class="modal-box">
        <button class="close-btn" @click="toggleModal(false)">X</button>
        <p class="modal-text">COMING SOON!</p>
      </div>
    </div>
</template>