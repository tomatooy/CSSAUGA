import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  coverUrl: String,
  wechatUrl: String,
  title: String,
  header: String,
  bannerShow: Boolean,
  contentShow: Boolean,
},{
  timestamps: true // This option enables the timestamps feature
})

const Post = mongoose.model("Post", PostSchema)
export default Post

/*

{
 "coverUrl" : "https://cdn.discordapp.com/attachments/940402118953668642/1141551062403256440/image.png",
 "wechatUrl": "https://mp.weixin.qq.com/s/Yeih6Lvxs0OOFFRHtEJwrw",
 "title" : "CSSA1/28春晚|购票渠道|活动详情",
 "createdAt" : "2023-01-24",
 "header":" 听说：先到场的观众会将有特别的小惊喜！期待与你们的见面！！",
 "bannerShow":false
 "contentShow"true
}
*/
