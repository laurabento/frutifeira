<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import "assets/variables.less";

* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

ul li {
  list-style: none;
}

body {
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  color: @darkGray;
}

input,
textarea,
select {
  font-family: "Quicksand", sans-serif;
}

button {
  font-family: "Quicksand", sans-serif;
}

input:focus,
select:focus {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all .3s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-45px);
  opacity: 10;
}

.slide-enter-active {
  transition: all .3s ease-in-out;
}

.slide-leave-active {
  transition: all .3s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(500px);
  opacity: 10;
}

.slide-up-enter-active {
  transition: all .3s ease-in-out;
}

.slide-up-leave-active {
  transition: all .3s ease-in-out;
}

.slide-up-enter, .slide-up-leave-to {
  transform: translateY(-500px);
  opacity: 10;
}

.display-none {
  display: none;
}
</style>
