<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="图书名称"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'bookname',
            {rules: [{ required: true, message: '请输入标题' }]}
          ]"
          name="name"
          :placeholder="book.bookname"
        />
      </a-form-item>
      <a-form-item
        label="图书风格/分类"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-textarea
          rows="4"
          :placeholder="book.bookstyle"
          v-decorator="[
            'bookstyle',
            {rules: [{ required: true,message:'请输入风格/分类'}]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="图书avatar"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          :placeholder="book.avatar"
          v-decorator="[
        'avatar',
        {rules: [{ required: true, message: '请输入图书的avatar' }]}
        ]"
        />
      </a-form-item>

      <a-form-item>
        <div class="clearfix">
          <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
            <a-button>
              <a-icon type="upload"/>Select File
            </a-button>
          </a-upload>
          <a-button
            type="primary"
            @click="handleUpload"
            :disabled="fileList.length === 0"
            :loading="uploading"
            style="margin-top: 16px"
          >{{uploading ? 'Uploading' : 'Start Upload' }}</a-button>
        </div>
      </a-form-item>

      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
        <a-popconfirm title="确定提交" @confirm="confirm" @cancel="cancel" okText="Yes" cancelText="No">
          <a-button htmlType="submit" type="primary">提交</a-button>
        </a-popconfirm>
        <!-- <a-button style="margin-left: 8px">保存</a-button> -->
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { updateBookById } from '../../api/book'
import { getBookById } from '../../api/book'
import reqwest from 'reqwest'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default {
  name: 'BookModifyPage',
  data() {
    return {
      description: '图书修改页',
      value: 1,
      // form
      form: this.$form.createForm(this),
      book: { bookid: 1 },
      fileList: [],
      uploading: false,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getBookById(this.$route.params.id).then(res => {
        var data = res.result.data
        this.book = data
      })
    },
    confirm(e) {
      // console.log(e)
      this.handleSubmit(e)
    },
    cancel(e) {
      // console.log(e)
      this.$message.warning('请重新输入')
    },
    // handler
    handleSubmit(e) {
      e.preventDefault()
      var bookid = this.$route.params.id
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
          updateBookById(bookid, values).then(res => {
            console.log('res::', res)
            console.log(Number(res.result.bookid) == bookid)
            if (Number(res.result.bookid) == bookid) {
              this.$message.success('修改成功')
              this.$router.push({ name: 'BookDetailPage', params: { id: bookid } }) // 修改成功后跳转到详情页
            } else {
              this.$message.error('修改失败')
            }
          })
        }
      })
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append('files[]', file);
      });
      this.uploading = true

      // You can use any AJAX library you like
      reqwest({
        url: '//jsonplaceholder.typicode.com/posts/',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = []
          this.uploading = false
          this.$message.success('upload successfully.');
        },
        error: () => {
          this.uploading = false
          this.$message.error('upload failed.');
        },
      });
    }
  }
}
</script>
