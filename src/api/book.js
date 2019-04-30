import {axios} from '../utils/request'

export function getBookList(){
  return axios({
    // url:'/bookmock/booklist',
    // url:'/book/getBookList',
    url:'/Book/GetAllBooks',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export function getBookById (parameter) {
  return axios({
    url:'/Book/BookList/'+parameter,
    method: 'get',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}
export function getPagedBookList (current,pageSize) {
  return axios({
    url:'/Book/PagedBookList/'+current+'/'+pageSize,
    method:'get',
    // url:'/book/getBookList',
    // method: 'get',
    headers:{
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}
export function updateBookById (bookid,book) {
  return axios({
    url:'/Book/UpdateBookById/'+bookid,
    method: 'post',
    data: book
  })
}
export function deleteBookById(bookid){
  return axios({
    url:'/Book/DeleteBookById/'+bookid,
    method:'delete',
  })
}