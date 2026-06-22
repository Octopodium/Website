<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isModalVisible = ref<boolean>(false)
function toggleModal(visible: boolean) {
  isModalVisible.value = visible
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-load')
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden-load, .hidden-load-right')
  hiddenElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="container-full-wrap">
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="video-background">
        <video autoplay muted loop playsinline class="bg-video">
          <source src="/Images/GameplayBack.mp4" type="video/mp4">
        </video>
      </div>
      <div class="acessos-botoes">
        <img src="/Images/rangolithical_logo.png" alt="Rangolithical Logo" class="logo-jogo">
        
        <a href="https://youtu.be/15g_zgWj2jw?si=f18RZnPFha-zic5q" target="_blank" class="trailer">
          <i class="fa-brands fa-youtube fa-2x"></i>
          Trailer
        </a>
        
        <a @click="toggleModal(true)" class="wishlist">
          <i class="fa-brands fa-steam fa-2x"></i>
          Wishlist
        </a>
      </div>
    </div>

    <div class="divisao-pai"><div class="divisao"></div></div>

    <!-- About the Game Section -->
    <section class="about-the-game">
      <h1>About <h3 style="padding-bottom: 10px; display: inline-block;">the game</h3></h1>
      <div class="about-web">
        <p class="hidden-load">
          Rangolithical is a puzzle game where players will need to clear each and every room 
          of a magical food tower in order to obtain the enchanted SUPER LEGENDARY RECIPE. Control Finn, 
          with a fork hook, or Rita, with her giant pan, and solve a variety of puzzles through teamwork and coordination!
          <br><br>
          Collaboration is an essential tool in order to beat the trials and tribulations that await inside this 
          mysterious tower keep, where every piece of food has a mind of its own. Face fire spewing dragonfruit 
          turrets, onion beetles and many delicious monstrosities in this cooperative multiplayer experience for up to two players, either locally or online!
        </p>
        <div class="img-about-game-wrapper hidden-load-right">
          <img src="/Images/Full_art1.png" class="img-about-game" alt="Rangolithical Full Art">
        </div>
      </div>
    </section>

    <div class="divisao-pai"><div class="divisao"></div></div>

    <!-- Media Section -->
    <section class="media">
      <h1 style="padding-bottom: 30px;">Media</h1>
      <div class="galeria">
        <img src="/Images/screenshot-1.png" class="galeria-media-img hidden-load" alt="Screenshot 1">
        <img src="/Images/screenshot-2.png" class="galeria-media-img hidden-load" alt="Screenshot 2">
        <img src="/Images/screenshot-3.png" class="galeria-media-img hidden-load" alt="Screenshot 3">
        <img src="/Images/screenshot-4.png" class="galeria-media-img hidden-load" alt="Screenshot 4">
        <img src="/Images/character_proto_concept_exploration.png" class="galeria-media-img hidden-load" alt="Concept Exploration">
        <img src="/Images/intro_boards.png" class="galeria-media-img hidden-load" alt="Intro Boards">
      </div>
      <img src="/Images/IMG_9686.PNG" class="hidden-load" style="width: 500px; height: auto;" alt="Art 9686">
      <a href="https://impress.games/press-kit/octo-podium/rangolithical" target="_blank" class="presskit">Press kit</a>
    </section>

    <div class="divisao-pai"><div class="divisao"></div></div>

    <div v-if="isModalVisible" class="modal-overlay" @click.self="toggleModal(false)">
      <div class="modal-box">
        <button class="close-btn" @click="toggleModal(false)">X</button>
        <p class="modal-text">COMING SOON!</p>
      </div>
    </div>
  </div>
</template>