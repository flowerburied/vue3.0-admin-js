<template>
  <div class="account">
    <div class="from-wrap">
      <a-form name="custom-validation" ref="ruleForm" v-bind="layout">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit"> 登录 </a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-center">
        <router-link  to="/forget">忘记密码</router-link>|
        
        <!-- <a href="" class="color-white">注册</a> -->
        <router-link  to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup(props) {
    const fromConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });
    const data = toRefs(fromConfig);
    return { ...data };
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
