<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>
   <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/images/nsvue_logo.png" class="logo-container "/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="goToHome">Home</Button>
      <Button class="btn btn-primary" @tap="goToSignUp">SignUP</Button>
      <Button class="btn btn-primary" @tap="goToLogin">Login</Button>
    </StackLayout>
   </FlexboxLayout>
  </Page>
</template>
<script>
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

export default {
    data () {
        return {
        };
    },
    methods: {
        goToHome() {
            this.$navigateTo(Home)
        },
        goToSignUp() {
            this.$navigateTo(SignUp)
        },
        goToLogin() {
            this.$navigateTo(Login)
        }
    }
}
</script>
<style scoped>
.page{
  background-color: aquamarine;
}
.btn{
  color: black;
  background-color: aliceblue;
}
</style>