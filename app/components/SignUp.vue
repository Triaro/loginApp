<template>
  <Page class="container1">
 
    <ActionBar title="SignUp" class="action-bar" />
      <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/images/nsvue_logo.png" class="logo-container "/>

        <StackLayout class="container">
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_user.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="nameInput" hint="Full Name" class="form-input" />
          </FlexboxLayout>
         
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_user.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="usernameInput" hint="Username" class="form-input" />
          </FlexboxLayout>
           
    
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_user.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="emailinput" hint="Email" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_lock.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>

           <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/images/icon_lock.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="confirmPasswordInput" hint="Confirm Password" secure="true" class="form-input" />
          </FlexboxLayout>

          <Button text="Login" class="my-button" />

          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
            <Label horizontalAlignment="left" text="Already have an account? Login here" @tap="toLogin" />
            
          </FlexboxLayout>
        </StackLayout>

      </FlexboxLayout>
   
 
  </Page>
</template>


<script>
import Login from './Login';
export default {
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
    }
  },
  methods: {
         toLogin(){
           this.$navigateTo(Login)
        }
  }

}
</script>

<style lang="scss">
  
</style>

