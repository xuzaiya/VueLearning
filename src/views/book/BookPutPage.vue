<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="图书名称"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'bookname',
            {rules: [{ required: true, message: '请输入图书名' }]}
          ]"
          placeholder="输入一个图书名称" />
      </a-form-item>
      <!-- <a-form-item
        label="起止日期"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-range-picker
          name="buildTime"
          style="width: 100%"
          v-decorator="[
            'buildTime',
            {rules: [{ required: true, message: '请选择起止日期' }]}
          ]" />
      </a-form-item> -->
      <!-- <a-form-item
        label="图书风格/分类"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="请输入风格/分类"
          v-decorator="[
            'bookstyle',
            {rules: [{ required: true, message: '请输入风格/分类' }]}
          ]" />
      </a-form-item> -->
      <a-form-item
        label="图书风格/类型"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-select
          placeholder="请选择风格/类型"
          v-decorator="[
            'bookstyle',
            {rules: [{ required: true, message: '请选择风格/类型'}]}
          ]" >
          <a-select-option value="都市">都市</a-select-option>
          <a-select-option value="科幻">科幻</a-select-option>
          <a-select-option value="名著">名著</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item
        label="图书封面"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          placeholder="请输入封面号"
          v-decorator="[
            'avatar',
            {rules: [{ required: true, message: '请描述本书封面' }]}
          ]" />
      </a-form-item>
      
      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: center"
      >
        <a-button htmlType="submit" type="primary">添加</a-button>
        <a-modal
          title="提示"
          :visible="visible"
          @ok="handleOk"
          :confirmLoading="confirmLoading"
          @cancel="handleCancel"
        >
          <p>恭喜，添加成功，是否再添加一本？</p>
        </a-modal>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      value: 1,
      // form
      form: this.$form.createForm(this),
      visible: false,
      confirmLoading: false,
      bookid:1,
    }
  },
  methods: {
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
          this.bookid = 2
          this.visible = true
        }
      })
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.form = this.$form.createForm(this);
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
      this.$router.push({name:'BookDetailPage',params:{ id: this.bookid}})
    },
  }
}
</script>
