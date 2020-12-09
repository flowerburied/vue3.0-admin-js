<template>
  <div class="account">
    <div class="from-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        @finish="handleFinish"
        v-bind="layout"
        :model="account_from"
        :rules="rules_from"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_from.username" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input v-model="account_from.password" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>确认密码</label>
          <a-input v-model="account_from.passwords" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input v-model="account_from.code" type="password" autocomplete="off"
            /></a-col>
            <a-col :span="10">
              <a-button type="primary" block>获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block> 登录 </a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-center">
        <a href="" class="color-white">忘记密码 </a>|
        <!-- <a href="" class="color-white">注册</a> -->
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// 导入验证方法
import { checkPhone } from "@/utils/verification";
// import { checkPhone as phone } from "@/utils/verification";
// import * as veri from "@/utils/verification";
import { reactive, toRefs } from "vue";
export default {
  setup(props) {
    const checkusername = async (rule, value, callback) => {
      //   console.log("regPhong", regPhong.test(value));
      if (!value) {
        return Promise.reject("请输入用户名"); //不存在情况
      } else if (!checkPhone(value)) {
        return Promise.reject("请输入11位数字的手机号"); //手机号错误情况
      } else {
        return Promise.resolve();
      }
      //   if (!Number.isInteger(value)) {
      //     return Promise.reject("Please input digits");
      //   } else {
      //     if (value < 18) {
      //       return Promise.reject("Age must be greater than 18");
      //     } else {
      //       return Promise.resolve();
      //     }
      //   }
    };

    const fromConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      account_from: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rules_from: {
        username: [{ validator: checkusername, trigger: "change" }],
      },
    });
    // 提交表单
    const handleFinish = () => {};

    const data = toRefs(fromConfig);
    return { ...data, handleFinish };
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
