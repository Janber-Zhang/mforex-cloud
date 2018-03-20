<template>
  <div class="basic_logo app-warp">
    <Card style="width:600px;margin-bottom: 10px;">
      <p slot="title">Logo设置</p>
      <div class="basic_logo-info">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1681391545,4187928589&fm=27&gp=0.jpg" alt="">
        <div class="basic_logo-info-edit">
          <Alert show-icon type="warning">要求图片格式为PNG格式，高64宽64。</Alert>
          <i-button icon="ios-cloud-upload-outline" @click="uploadImg('logo')" type="primary">上传图片</i-button>
        </div>
      </div>  
    </Card>
    <Card style="width:600px">
      <p slot="title">Icon设置</p>
      <div class="basic_logo-info">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918321103,763089997&fm=27&gp=0.jpg" alt="">
        <div class="basic_logo-info-edit">
          <Alert show-icon type="warning">必须为icon文件。</Alert>
          <i-button icon="ios-cloud-upload-outline" @click="uploadImg('icon')" type="primary">上传图片</i-button>
        </div>
      </div>
    </Card>
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
      data: {
        smtp_addr: 'smtp.exmail.qq.com',
        email_addr: 'info@andaobo.com',
        email_user: 'info@andaobo.com',
        email_pwd: 'A123456a',
        manager_email: 'info@andaobo.com',
        smtp_port: '25'
      },
      readonly: true
    }
  },
  methods:{
    switchModel(type){
      this.readonly = type;
    },
    uploadImg(type){
      let vm = this;
      util.uploadFile((res)=>{

      });
    }
  },
  components:{

  },
  computed:{

  }
}
</script>