<template>
  <div class="profile-section__img">
    <slot name="profile-img"></slot>
  </div>
  <slot name="msg-bubble"></slot>
  <div class="profile-section__wishlist">
    <slot name="user-title"></slot>
    <slot name="user-wishlist"></slot>
  </div>
</template>

<style>
.profile-section__img,
.profile-section__img img {
  max-height: 150px;
}
</style>
