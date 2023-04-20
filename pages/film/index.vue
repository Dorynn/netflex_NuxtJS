<template>
  <div id="filmIntrodutionPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" style="width: 420px; height: 630px">
          <img
            src="../../assets/images/spririted-away-poster.jpg"
            width="100%"
            height="auto"
            alt=""
          />
        </div>
        <div class="col-6 briefFilm">
          <h2 class="font-weight-bold">Spirited Away</h2>
          <div class="my-3">
            <span>Genres:</span>
            <b-badge pill variant="primary">Animation</b-badge>
            <b-badge pill variant="primary">Family</b-badge>
            <b-badge pill variant="primary">Fantasy</b-badge>
          </div>

          <p>Release date: 20/07/2001</p>
          <p>Runtime: 125 minutes</p>
          <p>
            A young girl, Chihiro, becomes trapped in a strange new world of
            spirits. When her parents undergo a mysterious transformation, she
            must call upon the courage she never knew she had to free her
            family.
          </p>
          <b-form-rating
            id="rating-inline"
            inline
            value="8.5"
            stars="10"
            size="lg"
            readonly
          ></b-form-rating>
          <p>
            &#40;8.5<font-awesome-icon
              :icon="['fas', 'star']"
              style="color: var(--star-second); font-size: 20px"
            />/14180 votes&#41;
          </p>
          <ButtonSuccess />
          <ButtonDanger />
        </div>
        <div class="col-3">
          <!-- <h3>Recommended</h3>
          <div class="film" style="height: 50px; display: flex">
            <img
              src="../../assets/images/spririted-away-poster.jpg"
              alt=""
              height="100%"
            />
            <div class="ml-3">
              <small class="m-0 font-weight-bold">Spirited Away</small>
              <br />
              <b-form-rating
                id="rating-inline"
                inline
                value="8.5"
                stars="10"
                readonly
              ></b-form-rating>
            </div>
          </div> -->
          <RecommendedList/>

        </div>
      </div>
    </div>

    <div class="container-fluid">
      <h1>Main Actor</h1>
      <hr />
      <div class="row actorList">
        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>

        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>
        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>
        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>
        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>
        <div class="actorCard col-2">
          <img src="../../assets/images/user.jpg" alt="" />
          <p class="m-0 text-center">Rumi Hiiragi</p>
          <strong>Chihiro Ogino / Sen (voice)</strong>
        </div>
      </div>
    </div>

    <FilmListStyle1 :filmtype="'Films Top'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonSuccess from "../../components/common/Button/ButtonSuccess";
import ButtonDanger from "../../components/common/Button/ButtonDanger";
import FilmListStyle1 from "../../components/FilmList/FilmListStyle1";
import RecommendedList from "../../components/FilmList/RecommendedList"
export default {
  components: {
    ButtonDanger,
    ButtonSuccess,
    FilmListStyle1,
    RecommendedList
  },
  computed: {
    ...mapGetters(["films"]),
  },
};
</script>

<style lang="scss" scoped>
#filmIntrodutionPage {
  margin-top: 80px;

  .container-fluid {
    width: 90%;
  }
  .badge {
    width: 80px;
    height: 24px;
    padding: 6px 10px;
    text-align: left;
  }

  .b-rating {
    border: none;
    background-color: transparent;
    color: var(--star-primary);
    padding: 0;
    height: fit-content;
  }

  .buttonSuccess {
    margin-right: 26px;
  }

  .actorList {
    img {
      width: 100%;
      height: 200px;
      border-radius: 15px;
      margin-bottom: 20px;
    }
  }
}
</style>
