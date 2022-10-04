@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

$Soft-red: hsl(10, 79%, 65%);
$Cyan: hsl(186, 34%, 60%);
$Dark-brown: hsl(25, 47%, 15%);
$Medium-brown: hsl(28, 10%, 53%);
$Cream: hsl(27, 66%, 92%);
$Very-pale-orange: hsl(33, 100%, 98%);
$font: 'DM Sans', sans-serif;

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-size: 18px;
    background-color: $Cream;
    font-family: $font;
}

// main

.main-container{
 width: 344px;
 margin: 68px auto;
 height: 200px;
 @media (min-width: 600px) {
    width: 544px;
 }
}


.balance{
    background-color: $Soft-red;
    border-radius: 16px;
    height: 100px;
    padding: 24px 20px;
    display: flex;
    color: $Very-pale-orange;
    margin-bottom: 16px;
    justify-content: space-between;
  &__title{
font-size: 0.7em;
margin-bottom: 6px;
}
&__total{
    font-weight: 700;
    font-size: 1.4em;
}
&__logo{
    width: 60px;
}
@media(min-width: 600px){
    height: 126px;
&__title{
    font-size: 1em;
    margin-bottom: 12px;
}
&__total{
font-size: 1.8em;
}
&__logo{
    width: 75px;
}
}
}

.chart{
    background-color: $Very-pale-orange;
    padding: 28px 20px;
    height: 400px;
    border-radius: 16px;
    &__bars-container{
        display: flex;
        justify-content: space-around;
        height: 220px;
        align-items: flex-end;
        margin-bottom: 30px;
    }
    &__bar{
        background-color: $Soft-red;
        border-radius: 4px;
        height: 200px;
        width: 32px;
        position: relative;
        &--label{
            background-color: $Soft-red;
            text-align: center;
            width: 38px;
            font-size: 0.5em;
            color: $Very-pale-orange;
        border-radius: 4px;
        font-weight: 700;
        position: absolute;
        top: -24px;
        left: -4px;
        display: none;
        }
        &--day{
   position: absolute;
   bottom: -16px;
   font-size: 0.6em;
   width: 32px;
   text-align: center;
        }
        &:hover{
            cursor: pointer;
            filter: brightness(1.2);
        }
    }
}




.chart__title{
    font-family: $font;
    color: $Dark-brown;
    font-size: 1.25em;
    margin-bottom: 10px;
}

.chart__analitics{
    border-top: 2px solid $Cream;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    font-size: 0.7em;
}

.chart__total{
    margin-bottom: 8px;
}

.chart__total-value{
  color: $Dark-brown;
font-weight: 700;
font-size: 1.4em;
}

.chart__porcentage{
    color: $Dark-brown;
    font-weight: 700;
    text-align: right;
    margin-top: 18px;
}

.chart{
    color: $Medium-brown;
    @media (min-width: 600px){
        height: 512px;
        padding: 44px;
        &__bars-container{
            margin-bottom: 50px;
        }
        &__title{
            font-size: 2em;
        }
        &__bar{
            width: 50px;
            &--label{
                width: 54px;
                font-size: 0.7em;
                top: -32px;
                left: -2px;
            }
            &--day{
                width: 54px;
                bottom: -24px;
                font-size: 0.8em;
            }
        }
        &__analitics{
            padding-top: 32px;
            font-size: 0.9em;
        }
        &__total-value{
            font-size: 2.4em;
        }
        &__porcentage{
            margin-top: 30px;
        }
    }
}
