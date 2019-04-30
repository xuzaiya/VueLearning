<template>
  <div>
    <a-card :bordered="false" title="图书列表">
      <a-list size="large">
        <a-list-item :key="index" v-for="(item, index) in bookList">
          <a-list-item-meta :description="item.bookstyle">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
            <router-link
              :to="{ name: 'BookDetailPage', params: { id: item.bookid}}"
              slot="title"
            >{{ item.bookname }}</router-link>
            <!--            <a-button slot="title" style="margin-left: 10px" type="dashed" @click="on_Click(item.bookid)">{{item.bookname}}</a-button>-->
          </a-list-item-meta>
          <a-list-item-meta :description="item.author"></a-list-item-meta>
          <div slot="actions">
            <a>
              <router-link :to="{name:'BookModifyPage',params:{id:item.bookid}}">编辑</router-link>
            </a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <!-- <a-menu-item><a>编辑</a></a-menu-item> -->
                <a-menu-item>
                  <a-popconfirm
                    title="确定删除"
                    @confirm="(confirm(item.bookid))"
                    okText="Yes"
                    cancelText="No"
                  >
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
              <a>
                更多
                <a-icon type="down"/>
              </a>
            </a-dropdown>
          </div>
        </a-list-item>
        <!-- 分页 -->
        <a-pagination
          style="margin-left: 500px;margin-top: 10px"
          :pageSize="pageSize"
          @change="onChange"
          :current="current"
          :total="total"
        />
      </a-list>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import { getBookList, getPagedBookList, deleteBookById } from '../../api/book'

export default {
  name: 'BookListPage',
  components: {
    HeadInfo
  },
  data() {
    return {
      bookList: [],
      current: 1,
      total: 4,
      pageSize: 3
    }
  },
  created() {
    // getBookList().then(res => {
    //   // console.log(eval(res))
    //   console.log(res.data)
    //   this.bookList = res.data
    // })
    //分页
    getPagedBookList(this.current, this.pageSize).then(res => {
      console.log(res)
      var data = res.result.data
      // for(var i=0;i<data.length;i++){
      //   data[i].avatar = "http://localhost:91/images/"+data[i].avatar
      // }
      this.bookList = data
      this.total = res.result.total
    })
  },
  methods: {
    onChange(current) {
      this.current = current
      getPagedBookList(this.current, this.pageSize).then(res => {
        // console.log(res)
        var data = res.result.data
        // for(var i=0;i<data.length;i++){
        //   data[i].avatar = "http://localhost:91/images/"+data[i].avatar
        // }
        this.bookList = data
        this.total = res.result.total
      })
    },
    // on_Click(bookid){
    //   this.$router.push({name:'BookDetailPage',params:{ id: bookid}})
    // },
    confirm(e) {
      // console.log(e)
      this.onDelete(e)
    },
    onDelete(bookid) {
      // console.log(bookid)
      deleteBookById(bookid).then(res => {
        if (res.result === 'success') {
          console.log(res.bookid)
          this.$message.success('删除成功')
        } else {
          this.$message.error('删除失败')
        }
      })
    }
  }
}
</script>

