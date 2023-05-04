<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        新闻
        <br />
        资讯
      </div>

      <div class="tip2">你需要什么帮助？</div>

      <div class="btns">
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(1)"
        >
          聚星风采
        </el-button>
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(2)"
        >
          历史成果
        </el-button>
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(3)"
        >
          避坑指南
        </el-button>
      </div>
    </section>

    <section class="container">
      <span v-if="type === 1" class="title"> 聚星风采 </span>
      <span v-if="type === 2" class="title"> 历史成果 </span>
      <span v-if="type === 3" class="title"> 避坑指南 </span>
      <el-collapse v-model="articleId" accordion>
        <el-collapse-item
          title="中旅国际可行性分析"
          name="12"
          @click="toDetail(12)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="聚星团队最新管理制度"
          name="11"
          @click="toDetail(11)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="聚星团队”招兵买马“火热进行"
          name="10"
          @click="toDetail(10)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="关于聚星团队相关规定决策的通知"
          name="9"
          @click="toDetail(9)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="关于聚星团队日常工作内容及其他制度调整的相关通知"
          name="8"
          @click="toDetail(8)"
        >
        </el-collapse-item>
        <el-collapse-item title="聚星团队白皮书" name="7" @click="toDetail(7)">
        </el-collapse-item>
        <el-collapse-item
          title="聚星团队关于马士基航运项目投资研讨会"
          name="6"
          @click="toDetail(6)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="聚星团队在爱心公益事业的脚步从未停止"
          name="5"
          @click="toDetail(5)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="积极扩大有效投资！"
          name="1"
          @click="toDetail(1)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="跟着总书记学习二十大报告丨促进人与自然和谐共生"
          name="2"
          @click="toDetail(2)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="21条举措力挺民间投资，发改委将推出“绿灯”投资案例"
          name="3"
          @click="toDetail(3)"
        >
        </el-collapse-item>
        <el-collapse-item
          title="聚星团队探索碳中和特点及演变"
          name="4"
          @click="toDetail(4)"
        >
        </el-collapse-item>
      </el-collapse>
      <!-- <template v-if="type === 1">
        <span class="title"> 聚星风采 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 2">
        <span class="title"> 历史成果 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 3">
        <span class="title"> 避坑指南 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",

  data() {
    return {
      type: 1,
    };
  },

  methods: {
    onTyeChange(type) {
      this.articleId = "";
      this.type = type;
    },

    onArticleClick(index) {
      this.articleId = index;
    },

    toDetail(type) {
      this.$router.push({
        path: "/article-detail",
        query: {
          type,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page_root {
  .header {
    width: 100%;
    height: 637px;
    background-color: rgba(241, 242, 243, 1);
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip1 {
      font-size: 88px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #2c2b29;
      line-height: 96px;
      margin-top: 121px;
    }

    .tip2 {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #22211f;
      margin-top: 52px;
    }

    .btns {
      display: grid;
      grid-template-columns: repeat(3, 128px);
      grid-column-gap: 16px;
      margin-top: 71px;

      .btn {
        border-radius: 17px;
        overflow: hidden;
      }
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 114px 13.5% 134px;

    .title {
      width: 100%;
      font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #2c2b29;
      padding: 31px 2px;
    }

    .picture {
      width: 815px;
      height: 451px;
    }

    :deep(.el-collapse-item__header) {
      height: 86px;
      padding: 0 2px;

      &:hover {
        background-color: rgba(240, 246, 252, 1);
      }
    }

    :deep(.el-collapse-item__arrow) {
      display: none;
    }

    // :deep(.el-collapse-item .is-active) {
    //   background-color: rgba(240, 246, 252, 1);
    // }

    :deep(.el-collapse-item__content) {
      padding: 40px 37px;
      background-color: rgba(240, 246, 252, 1);
    }

    article {
      p {
        font-size: 26px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #22211f;
        line-height: 70px;
        text-indent: 2em;
      }
    }
  }
}
</style>
