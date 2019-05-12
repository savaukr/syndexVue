<template>
	<div id="header">
            <div id="logo">
                    <a href="#"><img src="../../img/logo.png" alt=""></a>
            </div>
            <div id="headRight">
                <div id="dollar" class="headRight">
                    <nav class="navMenuHor">
                        <ul>
                            <li>
                                <a href="#"><img src="../../img/icon_dollar.png"><span>0.00</span></a>
                                <img src="../../img/figure7Blue.png" >
                                <ul class="level1">
                                    <li><a href="#">Menu1</a></li>
                                    <li><a href="#">Menu2</a>
                                        <ul>
                                            <li><a href="#">Menu2_1</a></li>
                                            <li><a href="#">Menu2_2</a></li>
                                            <li><a href="#">Menu2_3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Menu3</a>
                                        <ul>
                                            <li><a href="#">Menu3_1</a></li>
                                            <li><a href="#">Menu3_2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="lang" class="headRight">
                    <span>
                        <select>
                            <option value="rus">РУС</option>
                            <option value="eng">ENG</option>
                            <option value="uk">УКР</option>
                        </select>
                    </span>
                    <img  id = "fig" src="../../img/figure7Blue.png" alt="">
                </div>
                <div id="iconMiddle" class="headRight">
                    <a href="#"><img src="../../img/alarm.png"></a>
                    <a href="#"><span id="countAlarm">1</span></a>
                    <a href="#"><img src="../../img/figure10.png"></a>
                    <a href="#"><img src="../../img/figure11.png"></a>
                </div>
                <div id="account" class="headRight">
                    <nav class="navMenuHor">
                        <ul>
                            <li>
                                <a href="#"><img src="../../img/figure8.png" alt="">
                                <span id="accountName">Accountname <img src="../../img/figure7.png"></span></a>
                                <ul class="level1">
                                    <li><a href="#">Menu1</a></li>
                                    <li><a href="#">Menu2</a>
                                        <ul>
                                            <li><a href="#">Menu2_1</a></li>
                                            <li><a href="#">Menu2_2</a></li>
                                            <li><a href="#">Menu2_3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Menu3</a>
                                        <ul>
                                            <li><a href="#">Menu3_1</a></li>
                                            <li><a href="#">Menu3_2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
</template>

<script>
	export default {
		name: 'Header',
        methods: {
        }
	}
</script>

<style>
	#header, #basic {
	   width:100%;
	   display: flex;
	   box-sizing: border-box;
	}

	#logo {
	    display:block;
	   width:220px;
	   height: 75px;
	   padding: 0 7px;
	   line-height: 75px;
	   border-bottom: 1px solid #D8DEE3;
	   background-color: #F2F4F6;
	   box-sizing: border-box;
	   
	}
	#headRight {
	    flex:1;
	    box-sizing: border-box;
	} 
	#logo img {
	    width: 100%;
	    height: auto;
	    vertical-align: middle;
	}
	#headRight {
    height: 75px;
    background-color: #fff;
}

#dollar {
      font-size: 24px;
      color:#278FFF;
      float:left;
      padding-top: 20px;
      padding-left: 5px;
}
.headRight {
     padding-top: 25px;
     height: 55px;
}
#dollar span, #dollar span img {
    position: relative;
    top: -7px;
}

#account, #iconMiddle {
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid #D8DEE3;   
    float:right;
}
#iconMiddle a:nth-child(3){
    padding-right: 15px;
}
#account a {
    color: #000;
    font-size:16px;

}
#accountName {
    position: relative;
    top: -10px;
}
#countAlarm {
    color: #fff;
    position: relative;
    font-size: 10px;
    top:-20px;
    left:-19px;
    border-radius: 10px;
    padding: 2px 5px;
    background-color: #E2233C; 
}
#lang {
    font-size: 16px;
    color: #278FFF;
    padding-left: 10px;
    float: right;

}
#fig {
    position: relative;
    left: -20px;
    top: -4px;
}


select{
-moz-appearance: none;
-webkit-appearance: none;
border: none;
position: relative;
outline: none;
padding-right: 20px;
font-size: 16px;
color:#278FFF;;
font-family: "OpenSans-Semibold";
-webkit-user-select: none;
-moz-user-select: -moz-none;
-ms-user-select: none;
 user-select: none;
}

select:after{
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  background-image: url("../../img/figure7.png");
  position: absolute;
  right: 5px;
  top: 5px;
}

/* Меню випадаюче*/
.navMenuHor ul {
    padding: 0;
    margin:0;
    list-style: none;
    position: relative;
}
.navMenuHor ul li {
    /*margin: 0 -7px 0 0;*/
    display: inline-block;
    padding-left: 5px;
}
.navMenuHor a {
    display: inline-block;
    color:  #278FFF;
    font-size: 24px;
    text-decoration: none;
}
.navMenuHor span {
    padding: 0 7px;
}
.navMenuHor li > img {
    position: relative;
    top: -12px;
}
.navMenuHor :hover {
    color: #34D8FF;/**/
    z-index: 100;
}
.navMenuHor ul ul {
    border: 2px solid #D8DEE3;
    border-radius: 5px;
    margin-left: -6px;
    display:none;
    position: absolute;
    top:95%;
    left:40%;
    z-index: 100;
}
.level1 li{
    background-color:#E9ECEF;
}
.navMenuHor ul li:hover > ul {
    display: inherit;
}

.navMenuHor ul ul li {
    padding-left: 5px;
    min-width: 110px;
    float:none;
    display:list-item;
    position: relative;
}
.navMenuHor ul ul a {
    font-size:16px;
}
.navMenuHor ul ul ul { /*третій рівень*/
    position: absolute;
    top:0;
    left:100%;
}


@media screen and (max-width:790px) {
    #header {
        display: block;
    }
    #logo {
        width:100%;
        height: auto;
        text-align: center;

    }
    #logo img {
        width:50%;
    }
    #headRight {
        width:100%;
        border-bottom: 1px solid #D8DEE3;
    }
}

@media screen and (max-width:790px) {
	#logo {
	        display: block;
	    }

	#headRight {
	    width:100%;
	    padding: 0 8px;
	}
}
@media screen and (max-width:590px) {
    #headRight {
        flex-wrap: wrap;
        justify-content: space-between;       
    }
   #lang {
    position: absolute;
    left: 80%;
   }
   #dollar {
    position: absolute;
    top:20px;
    left: 3%;
   }
   #logo img{
    margin-left: 25px;
   }
    #dollar, #lang {
        padding-top: 10px;
    }
    #lang {
        background-color: #F2F4F6; 
        top:25px;
    }
    .headRight {
        height: 35px;
    }
    select {
        background-color: #F2F4F6;
    }
}
@media screen and (max-width:490px) {
    #iconHeadRight {
        flex-wrap: wrap;
    }
    #lang {
    left: 75%;
   }
   #logo img {
        width:30%;
        padding-left: 10px;
    }
}    
@media screen and (max-width:390px) {
    #logo img {
        position: relative;
        top: -20px;
    }
    #lang {
        left: 65%;
    }
    #iconMiddle img {
      margin: 5px 0;
    }
    #account {
        padding-left: 0;
    }
    #iconMiddle {
        padding-right: 0;
    } 
}
@media screen and (max-width:330px) {
    #iconMiddle, #account {
        border: none;
    }
    #account {
    	padding-right: 0;
    }
}
</style>