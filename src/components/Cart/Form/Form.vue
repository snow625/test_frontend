<template lang="">
  <div class="form">
    <el-form
      label-position="top"
      label-width="100px"
      style="max-width: 460px; min-width: 330px"
    >
      <el-form-item
        label="Name"
        
      >
        <el-input v-model="modelValue.name" />
      </el-form-item>
      <el-form-item
        label="Email"
        
      >
        <el-input v-model="modelValue.email" />
      </el-form-item>
      <el-form-item
        label="Phone"
        
      >
        <el-input v-model="modelValue.phone" />
      </el-form-item>
      <el-form-item
        label="Adress"
        
        
      >
        <el-input v-model="modelValue.ardress" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "formCart",
  emits: ["update:modelValue"],

  props: {
    modelValue: Object,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.form {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  overflow: auto;
  border: 2px solid var(--el-color-primary);
  border-radius: 4px;

  justify-content: center;
  margin-right: 10px;
}
</style>
