<template>
  <Page class="container1">
       <ActionBar title="Login" class="action-bar" />
    
      <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/images/nsvue_logo.png" class="logo-container "/>

        <StackLayout class="container">
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_user.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="usernameInput" hint="Username" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_lock.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>

          <Button text="Login" @tap="onButtonTap" class="my-button" />

          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">            
            <Label horizontalAlignment="left" text="Create Account" @tap="toSignUp" />
            <Label horizontalAlignment="right" text="Forgot Password" />
          </FlexboxLayout>
        </StackLayout>

      </FlexboxLayout>
   
 
  </Page>
</template>

<script>
import SignUp from './SignUp';
export default {
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
    }
  },
  methods: {
         toSignUp(){
           this.$navigateTo(SignUp)
        }
  }

}
</script>

<style lang="scss">


</style>

