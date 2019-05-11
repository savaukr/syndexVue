<template>
  <div id="container">
    <Header></Header>
    <div id="basic">
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import LeftContainer from './components/LeftContainer.vue';
import RightContainer from './components/RightContainer.vue';

export default {
  name: 'app',
  components: {
    Header,
    LeftContainer,
    RightContainer
  }
}
</script>

<style>
@font-face {
    font-family: "OpenSan-Regular";  
    src: url("../fonts/OpenSans-Regular.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal;
}

@font-face {
    font-family: "OpenSans-Semibold";  
    src: url("../fonts/OpenSans-Semibold.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal;
}

html {
    height: 100%;
}

body {
    background-color: #D8DEE3;
    height: 100%;
    width: 100%;
    font-family: "OpenSans-Semibold";
}
* {
    margin: 0;
}
a,
a:link,
a:visited,
a:hover,
a:active {
    text-decoration: none;
    
}
#container {
    width:100%;
    height: 100%;
}
#basic {
   width:100%;
   display: flex;
   box-sizing: border-box;
   height: 100%;
}
@media screen and (min-width:1400px) {
  #container {
    width: 1350px;
    margin-right: auto;
    margin-left: auto;
  }
}
@media screen and (max-width:690px) {
  #basic {
          display:block;
  }
}
</style>
