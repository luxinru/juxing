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
      <template v-if="type === 1">
        <span class="title"> 聚星风采 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            title="使命必达-用行动传递才是最好的导师"
            v-for="index in 5"
            :key="index"
            :name="index"
          >
            <img class="picture" src="" alt="" />
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 2">
        <span class="title"> 历史成果 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            title="使命必达-用行动传递才是最好的导师"
            v-for="index in 5"
            :key="index"
            :name="index"
          >
            <video class="picture" src=""></video>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 3">
        <span class="title"> 避坑指南 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            title="使命必达-用行动传递才是最好的导师"
            v-for="index in 5"
            :key="index"
            :name="index"
          >
            <img class="picture" src="" alt="" />
          </el-collapse-item>
        </el-collapse>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",

  data() {
    return {
      type: 1,
      articleId: "",
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
  }
}
</style>
