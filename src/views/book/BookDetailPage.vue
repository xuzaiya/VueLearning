<template>
    <!-- <a-card :bordered="false">
      <a-divider style="margin-bottom: 32px"/>
      <detail-list>
        <img :src="book.avatar" style="width: 258px;height: 316px"/>
        <detail-list-item term="图书编号">{{book.bookid}}</detail-list-item>
        <detail-list-item term="图书名">{{book.bookname}}</detail-list-item>
        <detail-list-item term="类别/风格">{{book.bookstyle}}</detail-list-item>
        <detail-list-item term="作者">{{book.author}}</detail-list-item>
        <detail-list-item term="作品简介">{{book.description}}</detail-list-item>
        
      </detail-list>
    </a-card> -->
    <a-row style="padding:20px">
      <a-col :span="6">
        <a-card hoverable>
          <img alt="example" :src="book.avatar" style="height:320px;" slot="cover"/>
        </a-card>
      </a-col>
      <a-col :span="18">
        <a-card>
          <detail-list>
            <detail-list-item term="图书名">{{book.bookname}}</detail-list-item>
            <detail-list-item term="类别/风格">{{book.bookstyle}}</detail-list-item>
            <detail-list-item term="作者">{{book.author}}</detail-list-item>
          </detail-list>
          <detail-item>
            {{book.description}}
          </detail-item>
        </a-card>
      </a-col>
    </a-row>
    
</template>

<script>
  import DetailList from '@/components/tools/DetailList'
  const DetailListItem = DetailList.Item
  import {getBookById} from '../../api/book'

  export default {
    name: 'BookDetailPage',
    components: {
      DetailList,
      DetailListItem
    },
    data(){
      return{
        book:{bookid:1},
      }
    },
    mounted () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // 可以省略
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        getBookById(this.$route.params.id).then(res=> {
          console.log(res.data)
          //将传回的todo赋值给todo
          var data = res.result.data
          // data.avatar = "http://localhost:91/images/"+data.avatar
          this.book = data
        })
      }
    }
  }
</script>
