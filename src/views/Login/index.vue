<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="item in menuTabs"
          :key="item.index"
          :class="{ current: item.isCurrent }"
          @click="menuOnClick(item)"
        >
          {{ item.title }}
        </li>
      </ul>
      <el-form :model="loginForm" :rules="rules">
        <el-form-item
          v-for="item in formItems"
          :key="item.index"
          :prop="item.attr"
          class="form-item"
        >
          <label class="form-item-label">{{ item.label }}</label>
          <el-input :type="item.type" v-model="loginForm[item.attr]"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="login-btn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateEmail, validatePwd } from "@/utils/validate";
export default {
  name: "login-page",
  data() {
    const validUsername = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Please input your E-mail"));
      } else if (!validateEmail(value)) {
        callback(new Error("Please input correct E-mail"));
      } else {
        callback();
      }
    };
    const validPwd = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Please input your password"));
      } else if (!validatePwd(value)) {
        callback(new Error("Please input correct password"));
      } else {
        callback();
      }
    };
    return {
      menuTabs: [
        {
          title: "Log in",
          isCurrent: true,
        },
        {
          title: "Sign up",
          isCurrent: false,
        },
      ],
      formItems: [
        {
          attr: "email",
          prop: "",
          label: "E-mail",
          type: "",
        },
        {
          attr: "pwd",
          prop: "",
          label: "Password",
          type: "password",
        },
        {
          attr: "validCode",
          prop: "",
          label: "Validation Code",
          type: "",
        },
      ],
      loginForm: {
        email: "",
        pwd: "",
        validCode: "",
      },
      rules: {
        email: [{ validator: validUsername, trigger: "blur" }],
        pwd: [{ validator: validPwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    menuOnClick(item) {
      this.menuTabs.forEach((elem) => {
        elem.isCurrent = false;
      });
      item.isCurrent = true;
    },
    submitForm() {
      console.log(this.loginForm);
    },
  },
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
  padding-top: 30px;
}
.login-wrap {
  width: 330px;
  margin: auto; // 居中
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: small-font-size;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background: rgba(0, 0, 0, 0.1);
  }
}
.form-item-label {
  display: block;
  margin-bottom: 3px;
  font-size: small-font-size;
  color: white;
}
.login-form {
  margin-top: 29px;
  .form-item {
    margin-bottom: 13px;
  }
  .item-btn {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>