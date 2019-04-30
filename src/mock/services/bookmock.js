import Mock from 'mockjs2'
import {builder} from '../util'

const booklist = () => {
    return builder([{
        'bookid': 1,
        'bookstyle': '文学',
        'bookname': '围城',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      {
        'bookid': 2,
        'bookstyle': '都市',
        'bookname': '西决',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      {
        'bookid': 3,
        'bookstyle': '都市',
        'bookname': '东霓',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      {
        'bookid': 4,
        'bookstyle': '都市',
        'bookname': '南音上',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      {
        'bookid': 5,
        'bookstyle': '都市',
        'bookname': '南音下',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      {
        'bookid': 6,
        'bookstyle': '文学',
        'bookname': '边城',
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      },
      ])
}

Mock.mock(/\/bookmock\/booklist/, 'post', booklist)