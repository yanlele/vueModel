import Mock from 'mockjs'

Mock.mock('/think2/public/index/index/login', 'post', {
  success: true,
  message: '登录成功',
  data: {
    name: 'yanle',
    age: 25,
    sex: '男',
    id: '2016214934'
  }
});

Mock.mock('/think2/public/index/index/register', 'post', {
  success: true,
  message: '登录成功',
  data: {
    name: 'yanle',
    age: 25,
    sex: '男',
    id: '2016214934'
  }
});

Mock.mock('/think2/public/index/index/userMessage', 'post', {
  success: true,
  message: '登录成功',
  data: {
    name: 'yanle',
    age: 25,
    sex: '男',
    id: '2016214934'
  }
});
