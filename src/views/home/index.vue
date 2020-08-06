<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <CustomText class="a1" tag="p">Merhaba dünya</CustomText>
      <CustomText class="a2" tag="p" size="small">Merhaba dünya</CustomText>
      <CustomText class="a3" tag="p" size="xsmall">Merhaba dünya</CustomText>
      <CustomText tag="p" size="xxsmall">Merhaba dünya</CustomText>
      <IconHome width="60" height="60" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
    </div>

    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
    </div>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconHome from '../../icons/home.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
