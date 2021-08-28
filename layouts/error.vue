<template>
  <div class="py-10 font-gotham text-[14px] h-screen">
    <div class="main">
      <div class="content">
        <img class=" animate-bounceslow" src="/page_not_found.svg" alt="error" />
      </div>
      <div class="content">
        <h1 v-if="error.statusCode === 404">404</h1>
        <p >
          Sorry. the content you’re looking for doesn’t exist. Either it was
          removed, or you mistyped the link.
        </p>

        <div class="buttons">
          <button id="btn1" class="btn">
            <NuxtLink to="/">Go to Home Page</NuxtLink>
          </button>
          <button id="btn2" class="btn">
            <NuxtLink to="/about">Contact</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>
<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(2, auto);

  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 1rem;
}
.content {
  padding: 20px;
  margin: 10px;
  width: 30vw;
}
h1 {
  font-size: 56px;
  margin: 0;
}
.btn {
  padding: 10px 15px;
  border: none;
}
#btn1 {
  color: rgb(255, 255, 255);
  background: #000;
}
#btn2 {
  background: white;
  border: 1px solid black;
  margin-left: 20px;
}

.buttons {
  margin-top: 40px;
  display: flex;
}

img {
  /* position: relative; */
  transform: translateY(0px);
  transform: translatex(0px);
  /* animation: notfounda 2s ease-in-out 0s ; */
  /* animation: notfoundb 2s ease-in-out 0s ; */
  /* border: 2px solid black; */
  /* animation-name: abc;
animation-duration: 2s; */
  /* animation: abc 3s ease-in-out infinite; */
}

@keyframes abc {
  0% {
    /* border: 5px solid red; */
    position: relative;
    top: 20px;
  }
  25% {
    top: 0;
  }
  50% {
    right: 10px;
  }
  75% {
    left: 10px;
  }

  100% {
    right: 10px;
  }
}

@media (max-width: 600px) {
  .main {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
  img {
    height: 200px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  p {
    text-align: center;
  }
  h1 {
    text-align: center;
    font-size: 48px;
    margin: 10px;
  }
}
</style>
