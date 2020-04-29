<template>
  <div class="main-content">
    <img src="../assets/icon-letter-sent.png" alt="Письмо" class="letter-sent">
    <p class="info-text">
      Письмо с подтверждением почты выслано на указанный e-mail
    </p>
  </div>
</template>

<script>
export default {
  name: "MailConfirmationPending"
}
</script>

<style lang="scss" scoped>
  .main-content {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 13rem;
  }
  
  .letter-sent {
    width: 21.5rem;
    height: 22.6rem;
  }

  .info-text {
    max-width: 77rem;
    font-weight: 300;
    font-size: 3.6rem;
    line-height: 4.2rem;
    text-align: center;
  }
</style>