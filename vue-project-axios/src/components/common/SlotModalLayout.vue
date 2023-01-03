<template>
  <div class="modal-container">
    <header>
      <h1>
        <slot name="header"></slot>
      </h1>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SlotModalLayout",
};
</script>

<style scoped>
.modal-container {
  width: 500px;
  --modal-border: 30px;
}

.modal-container > header {
  height: 50px;
  background: aquamarine;
  border-top-left-radius: var(--modal-border);
  border-top-right-radius: var(--modal-border);
}

.modal-container > main {
}

.modal-container > footer {
  height: 40px;
  background: aquamarine;
  border-bottom-left-radius: var(--modal-border);
  border-bottom-right-radius: var(--modal-border);
}
</style>
