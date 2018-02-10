<template>
  <div class="home">
    <Row>
      <Col span="8">
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            MT4服务器情况
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4服务器地址</span><span class="value">182.16.85.211:7610</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4客户端登录地址</span><span class="value">MT-AD Server</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4管理员帐号</span><span class="value">3</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4管理员密码</span><span class="value">******</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">开户杠杆参数</span><span class="value">100|200|300|500</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4真实用户默认开户组</span><span class="value">IB202</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4真实用户开户帐号范围</span><span class="value">40360000-40390000</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4DEMO用户默认开户组</span><span class="value">1</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4DEMO用户初始入金数量</span><span class="value">3000</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">MT4DEMO用户开户帐号范围</span><span class="value">700000-800000</span></li>
            </ul>
        </Card>
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            网站设置
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">前台域名</span><span class="value">http://jjfly.pro:3000</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">网站名称</span><span class="value">mforex</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">联系电话</span><span class="value">02893932323</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">传真</span><span class="value">02893932323</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">地址</span><span class="value">mforex-02893932323</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">邮箱(只显示用)</span><span class="value">mforex-02893932323</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">主站点地址</span><span class="value">http://www.andaobo.com/</span></li>
          </ul>
        </Card>
      </Col>
      <Col span="8">
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            支付设置
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">币种</span><span class="value">USD</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金扣款方式</span><span class="value">出金申请审核后从MT4扣款</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金汇率计算方式</span><span class="value">非实时汇率</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金默认汇率</span><span class="value">7.00</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金汇率调整值</span><span class="value">0.00</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">入金汇率计算方式</span><span class="value">7.00</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">入金汇率调整值</span><span class="value">0.00</span></li>
          </ul>
        </Card>
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            邮件设置
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">邮件服务器地址</span><span class="value">smtp.exmail.qq.com</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">邮件服务器端口</span><span class="value">25</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">发件邮箱</span><span class="value">info@andaobo.com</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">发件账户</span><span class="value">info@andaobo.com</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">发件账户密码</span><span class="value">******</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">管理员邮箱</span><span class="value">info@andaobo.com</span></li>
          </ul>
        </Card>
      </Col>
      <Col span="8">
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            客户情况
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">申请审核客户</span><span class="value">1</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">已认证客户</span><span class="value">3240</span></li>
          </ul>
        </Card>
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            交易情况
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">买卖单总量</span><span class="value">40039</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">入金单总量</span><span class="value">2717</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金单总量</span><span class="value">24003</span></li>
          </ul>
        </Card>
        <Card style="margin-right:10px;">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            支付情况
          </p>
          <ul class="list-info">
            <li class="list-info-item" flex="main:left cross:center"><span class="title">入金支付总数</span><span class="value">919</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">有效入金支付总数</span><span class="value">148</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">出金申请总数</span><span class="value">301</span></li>
            <li class="list-info-item" flex="main:left cross:center"><span class="title">完成出金总数</span><span class="value">0</span></li>
          </ul>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  created(){

  },
  ready(){

  },
  data(){
    return {
      
    }
  },
  methods:{
    
  },
  components:{

  },
  computed:{

  }
}
</script>