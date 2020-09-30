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
  .border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
    margin-bottom: 40;
    padding-bottom: 8;
  }

  .form-input {
    color: white;
    placeholder-color: white;
  }

  .icon-margin {
    margin-right: 10;
  }

  .my-button {
    background-color: #4BD5DC;
    color: white;
    font-weight: bold;
    border-radius: 25;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 20;
    margin-top: 10;
  }

  .auth-buttons {
    color: white;
    font-size: 14;
  }

  .full-height {
    height: 100%;
  }

  .logo-container {
    width: 150;
    margin-bottom: 60;
  }

  .container {
    margin-left: 34;
    margin-right: 34;
  }
  .container1 {
   background-color: aquamarine;
  }
</style>

